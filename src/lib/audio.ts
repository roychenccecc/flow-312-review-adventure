'use client';

let audioContext: AudioContext | null = null;
let ambientNodes: AudioNode[] = [];
let ambientRunning = false;

function context(): AudioContext | null {
  if (typeof window === 'undefined') return null;
  audioContext ??= new AudioContext();
  return audioContext;
}

export function playTone(kind: 'open' | 'correct' | 'wrong' | 'unlock'): void {
  const ctx = context();
  if (!ctx) return;
  if (ctx.state === 'suspended') void ctx.resume();

  const now = ctx.currentTime;
  const oscillator = ctx.createOscillator();
  const gain = ctx.createGain();
  const frequencies = {
    open: [392, 523],
    correct: [523, 659],
    wrong: [220, 185],
    unlock: [392, 523, 659],
  }[kind];

  oscillator.type = kind === 'wrong' ? 'triangle' : 'sine';
  oscillator.frequency.setValueAtTime(frequencies[0], now);
  frequencies.slice(1).forEach((frequency, index) => {
    oscillator.frequency.exponentialRampToValueAtTime(
      frequency,
      now + (index + 1) * 0.11,
    );
  });
  gain.gain.setValueAtTime(0.0001, now);
  gain.gain.exponentialRampToValueAtTime(0.075, now + 0.02);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.42);
  oscillator.connect(gain);
  gain.connect(ctx.destination);
  oscillator.start(now);
  oscillator.stop(now + 0.45);
}

export function setAmbientEnabled(enabled: boolean): void {
  if (typeof window === 'undefined') return;
  if (!enabled) {
    ambientNodes.forEach((node) => {
      try {
        if ('stop' in node && typeof node.stop === 'function') node.stop();
        node.disconnect();
      } catch {
        // A disconnected Web Audio node is already silent.
      }
    });
    ambientNodes = [];
    ambientRunning = false;
    return;
  }

  if (ambientRunning) return;
  const ctx = context();
  if (!ctx) return;
  void ctx.resume();

  const master = ctx.createGain();
  const filter = ctx.createBiquadFilter();
  const low = ctx.createOscillator();
  const high = ctx.createOscillator();
  const lfo = ctx.createOscillator();
  const lfoGain = ctx.createGain();

  low.type = 'sine';
  high.type = 'sine';
  lfo.type = 'sine';
  low.frequency.value = 98;
  high.frequency.value = 146.83;
  lfo.frequency.value = 0.075;
  filter.type = 'lowpass';
  filter.frequency.value = 720;
  lfoGain.gain.value = 0.006;
  master.gain.value = 0.018;

  low.connect(filter);
  high.connect(filter);
  filter.connect(master);
  lfo.connect(lfoGain);
  lfoGain.connect(master.gain);
  master.connect(ctx.destination);
  low.start();
  high.start();
  lfo.start();

  ambientNodes = [low, high, lfo, lfoGain, filter, master];
  ambientRunning = true;
}
