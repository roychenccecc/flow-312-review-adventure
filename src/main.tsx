import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import '@/app/globals.css';
import { FlowApp } from '@/src/components/flow-app';

const root = document.getElementById('root');
if (!root) throw new Error('Missing Flow application root');

createRoot(root).render(
  <StrictMode>
    <FlowApp />
  </StrictMode>,
);
