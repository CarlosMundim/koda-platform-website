import { Inter, Noto_Sans_JP, Space_Grotesk } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-noto-sans-jp',
  display: 'swap',
});

export const metadata = {
  title: 'KODA Platform - AI that remembers | 記憶するAI',
  description: 'KODA Platform - Manufacturing AI solutions for Japanese SMEs. Powered by the KODA Trinity: SCE (Solunai Continuity Engine), 47 Dimensions, and TSE (Technical Skills Engine). 中小製造業向けAIソリューション。',
  keywords: ['KODA', 'AI', 'manufacturing', 'SME', 'Japan', '製造業', 'DX', 'デジタルトランスフォーメーション'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className={`${inter.variable} ${spaceGrotesk.variable} ${notoSansJP.variable}`} suppressHydrationWarning>
      <body className="antialiased">{children}</body>
    </html>
  );
}
