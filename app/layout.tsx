import type { Metadata, Viewport } from 'next';
import './globals.css';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
const publicPath = (path: string) => `${basePath}${path}`;

export const metadata: Metadata = {
  title: {
    default: 'Flow｜312 心理学单机复习冒险',
    template: '%s｜Flow 312',
  },
  description: '在心理档案馆中调查人物、理论、实验与方法，完成一场离线的 312 强化复习冒险。',
  applicationName: 'Flow 312',
  manifest: publicPath('/manifest.webmanifest'),
  icons: {
    icon: [
      { url: publicPath('/assets/icons/icon-192.png'), sizes: '192x192', type: 'image/png' },
      { url: publicPath('/assets/icons/icon-512.png'), sizes: '512x512', type: 'image/png' },
    ],
    apple: [{ url: publicPath('/assets/icons/icon-192.png'), sizes: '192x192', type: 'image/png' }],
  },
  appleWebApp: {
    capable: true,
    title: 'Flow 312',
    statusBarStyle: 'black-translucent',
  },
  openGraph: {
    type: 'website',
    locale: 'zh_CN',
    title: 'Flow｜312 心理学单机复习冒险',
    description: '沿着理论演进与实验设计线索，破解《错位的学者档案》。',
    images: [{ url: publicPath('/og.png'), width: 1731, height: 909, alt: 'Flow 312 心理学单机复习冒险' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Flow｜312 心理学单机复习冒险',
    description: '一款中英双语、离线优先的心理学强化复习冒险。',
    images: [publicPath('/og.png')],
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#081728',
  colorScheme: 'dark',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
