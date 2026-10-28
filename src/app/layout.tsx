import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
const sans = localFont({ src: '../../public/fonts/dm-sans-latin.woff2', weight: '100 1000', variable: '--font-sans', display: 'swap', fallback: ['Arial'] });
const display = localFont({ src: '../../public/fonts/playfair-display-latin.woff2', weight: '400 900', variable: '--font-display', display: 'swap', fallback: ['Georgia'] });
export const metadata: Metadata = {
  title: 'THE GREAT ROTALE | Your Stay, Your Taste, Your Comfort.',
  description: 'Discover comfortable accommodation, complimentary Wi-Fi, laundry services and signature Kisinia and Ijumaa Biriani at The Great Rotale.',
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${sans.variable} ${display.variable}`}>{children}</body></html>;
}
