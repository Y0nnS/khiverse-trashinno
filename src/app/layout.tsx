import type { Metadata } from 'next';
import { ThemeProvider } from 'next-themes';
import { Poppins } from 'next/font/google';
import Footer from '../components/layout/footer';
import Navbar from '../components/layout/navbar';
import '../styles/globals.css';

export const metadata: Metadata = {
  title: 'Trashinno',
  icons: {
    icon: '/icon.png',
  },
};

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {


  return (
    <html lang="en" suppressHydrationWarning>
      <body className={poppins.className}>
          <ThemeProvider attribute="class" defaultTheme="light">
            <Navbar />
            {children}
            <Footer />
          </ThemeProvider>
      </body>
    </html>
  );
}
