import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import SessionWrapper from '../../components/session-warpper';
import './style/application.scss';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Gradien - Color Palette Generator',
  description:
    'Generate a unique color palette tailored just for you with our intuitive color palette generator. Simply input an image and let our algorithm create a personalized palette to match your style and personality',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SessionWrapper>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </SessionWrapper>
  );
}
