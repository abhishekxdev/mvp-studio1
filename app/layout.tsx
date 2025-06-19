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
  title: 'MVP Studio - We build MVPs that founders love',
  description: 'From idea to impact. We build high-quality MVPs that help founders validate ideas, secure funding, and scale their businesses. Expert development team specializing in rapid MVP creation.',
  keywords: ['MVP development', 'startup development', 'product development', 'founders', 'MVP Studio', 'rapid prototyping', 'startup MVP'],
  authors: [{ name: 'MVP Studio' }],
  creator: 'MVP Studio',
  publisher: 'MVP Studio',
  metadataBase: new URL('https://mvpstudio.in'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://mvpstudio.in',
    siteName: 'MVP Studio',
    title: 'MVP Studio - We build MVPs that founders love',
    description: 'From idea to impact. We build high-quality MVPs that help founders validate ideas, secure funding, and scale their businesses.',
    images: [
      {
        url: 'https://mvpstudio.in/images/opengraph.jpeg',
        width: 1200,
        height: 630,
        alt: 'MVP Studio - We build MVPs that founders love',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@mvpstudio',
    creator: '@mvpstudio',
    title: 'MVP Studio - We build MVPs that founders love',
    description: 'From idea to impact. We build high-quality MVPs that help founders validate ideas, secure funding, and scale their businesses.',
    images: [
      {
        url: 'https://mvpstudio.in/images/opengraph.jpeg',
        alt: 'MVP Studio - We build MVPs that founders love',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code', // Replace with actual verification code
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-black text-white min-h-screen`} style={{
        backgroundImage: 'url(/images/wallop.jpeg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}>
        <div className="max-w-5xl mx-auto px-4 md:px-6">
          <Navbar />
          {children}
          <FooterSection />
        </div>
      </body>
    </html>
  );
}