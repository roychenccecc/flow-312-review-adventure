import { Sparkles } from 'lucide-react';
import type { CSSProperties } from 'react';

import type { PersonProfile } from '@/src/types/content';

const portraitSheetUrl = `${import.meta.env.BASE_URL}assets/scholars/scholar-sheet.png`;

interface ScholarPortraitProps {
  person: PersonProfile;
  className?: string;
  compact?: boolean;
}

export function ScholarPortrait({ person, className = '', compact = false }: ScholarPortraitProps) {
  if (typeof person.portraitIndex !== 'number') {
    const initials = person.canonicalNameEn
      .split(/\s+/)
      .map((part) => part[0])
      .slice(0, 2)
      .join('');

    return (
      <div
        className={`scholar-sigil ${compact ? 'is-compact' : ''} ${className}`}
        style={{ '--scholar-accent': person.accent } as CSSProperties}
        role="img"
        aria-label={`${person.canonicalNameZh}，${person.canonicalNameEn}`}
      >
        <span>{initials}</span>
        <Sparkles aria-hidden="true" />
      </div>
    );
  }

  const column = person.portraitIndex % 3;
  const row = Math.floor(person.portraitIndex / 3);
  const x = column === 0 ? '0%' : column === 1 ? '50%' : '100%';
  const y = row === 0 ? '0%' : '100%';

  return (
    <div
      className={`scholar-portrait ${compact ? 'is-compact' : ''} ${className}`}
      style={
        {
          '--scholar-accent': person.accent,
          '--portrait-x': x,
          '--portrait-y': y,
          '--portrait-sheet': `url('${portraitSheetUrl}')`,
        } as CSSProperties
      }
      role="img"
      aria-label={`${person.canonicalNameZh}，${person.canonicalNameEn} 的原创幻想化学者映像`}
    >
      <div className="scholar-portrait-image" />
      <div className="scholar-portrait-glint" aria-hidden="true" />
    </div>
  );
}
