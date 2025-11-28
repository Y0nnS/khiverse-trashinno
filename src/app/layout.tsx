// import { usePathname } from 'next/navigation';
// import { SessionProvider } from 'next-auth/react';
import type { Metadata } from 'next';
import { ThemeProvider } from 'next-themes';
import { Poppins } from 'next/font/google';
import { Toaster } from 'react-hot-toast';
import Footer from '../components/layout/footer';
import Navbar from '../components/layout/navbar';
import '../styles/globals.css';
import Providers from './providers';

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
  // const pathname = usePathname();
  // const isDashboardRoute = pathname?.startsWith('/admin');

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={poppins.className}>
        {/* <SessionProvider> */}
          {/* {!isDashboardRoute && <NavbarDefault />} */}
          <ThemeProvider attribute="class" defaultTheme="light">
            <Navbar />
            <Providers>{children}</Providers>
            <Footer />
            <Toaster position="top-center" />
          {/* {!isDashboardRoute && <Footer />} */}
          </ThemeProvider>
        {/* </SessionProvider> */}
      </body>
    </html>
  );
}
