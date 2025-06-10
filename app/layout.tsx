import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { BackgroundVideo } from '@/components/background-video';
import { cn } from "@/lib/utils"
import { Navbar } from "@/components/navbar"
import { FooterSection } from '@/components/footer-section'

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'MVP Studio',
  description: 'We build MVPs that founders love',
  openGraph: {
    title: 'MVP Studio',
    description: 'We build MVPs that founders love',
    images: [
      {
        url: '/images/open.png',
        width: 1200,
        height: 630,
        alt: 'MVP Studio - We build MVPs that founders love',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MVP Studio',
    description: 'We build MVPs that founders love',
    images: ['/images/open.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-black text-white min-h-screen`}>
        <div className="max-w-5xl mx-auto px-4 md:px-6">
          <Navbar />
          {children}
          <FooterSection />
        </div>
      </body>
    </html>
  );
}