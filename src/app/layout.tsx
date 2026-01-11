import type { Metadata } from 'next';
import { Outfit, Poppins, Public_Sans } from 'next/font/google';
import { StoreProvider } from '@/app/providers/StoreProvider';
import '@/shared/styles/globals.scss';
import { Header } from '@/widgets/header/ui/header';
import { Footer } from '@/widgets/footer/ui/footer/Footer';

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['600', '700'],
  display: 'swap',
});

const inter = Poppins({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: ['600', '700'],
  display: 'swap',
});

const outfit = Outfit({
  variable: '--font-outfit',
  subsets: ['latin'],
  weight: ['600'],
  display: 'swap',
});

const publicSans = Public_Sans({
  variable: '--font-public-sans',
  subsets: ['latin'],
  weight: ['600'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Discover And Create NFTs',
  description: 'Discover, Create and sell NFTs On Our NFT Marketplace With Over Thousands Of NFTs And Get a $20 bonus.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${poppins.variable} ${inter.variable}`}>
        <StoreProvider>
          <div className='wrapper'>
            <Header />
            {children}
            <Footer />
          </div>
        </StoreProvider>
      </body>
    </html>
  );
}
