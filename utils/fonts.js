import { Noto_Sans_TC, Roboto } from 'next/font/google';

export const notoTC = Noto_Sans_TC({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-noto-tc',
});

export const roboto = Roboto({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
});