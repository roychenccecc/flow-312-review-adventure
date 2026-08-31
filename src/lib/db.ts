'use client';

import { createDefaultSave, migrateSave } from './save';
import type { FlowSave } from '@/src/types/save';

const DB_NAME = 'flow-local-v1';
const DB_VERSION = 1;
const STORE_NAME = 'state';
const SAVE_KEY = 'primary';

function openDatabase(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);

    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME);
      }
    };

    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error ?? new Error('无法打开本地存档。'));
  });
}

export async function loadSave(): Promise<FlowSave> {
  const db = await openDatabase();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE_NAME, 'readonly');
    const request = tx.objectStore(STORE_NAME).get(SAVE_KEY);
    request.onsuccess = () => {
      const value = request.result as FlowSave | undefined;
      resolve(value ? migrateSave(value) : createDefaultSave());
    };
    request.onerror = () => reject(request.error ?? new Error('读取本地存档失败。'));
    tx.oncomplete = () => db.close();
  });
}

export async function persistSave(save: FlowSave): Promise<void> {
  const db = await openDatabase();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE_NAME, 'readwrite');
    tx.objectStore(STORE_NAME).put(save, SAVE_KEY);
    tx.oncomplete = () => {
      db.close();
      resolve();
    };
    tx.onerror = () => {
      db.close();
      reject(tx.error ?? new Error('保存本地进度失败。'));
    };
  });
}

export async function replaceSave(save: FlowSave): Promise<void> {
  await persistSave(migrateSave(save));
}
