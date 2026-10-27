import type { Metadata } from 'next';
import { DM_Sans, Playfair_Display } from 'next/font/google';
import './globals.css';
const sans = DM_Sans({ subsets: ['latin'], variable: '--font-sans', display: 'swap' });
const display = Playfair_Display({ subsets: ['latin'], variable: '--font-display', display: 'swap' });
export const metadata: Metadata = {
  title: 'The Great Rotale | Stay. Savour. Feel at Home.',
  description: 'Discover comfortable accommodation, complimentary Wi-Fi, laundry services and signature Kisinia and Ijumaa Biriani at The Great Rotale.',
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${sans.variable} ${display.variable}`}>{children}</body></html>;
}
