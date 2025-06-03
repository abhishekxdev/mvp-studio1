import './globals.css';
import type { Metadata } from 'next';
import { Inter, Manrope } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { BackgroundVideo } from '@/components/background-video';
import { cn } from "@/lib/utils"
import { Navbar } from "@/components/navbar"

import Image from "next/image"

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const manrope = Manrope({ 
  subsets: ['latin'], 
  variable: '--font-manrope',
  weight: ['500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'MVP Studio - MVPs That Drives Results',
  description: 'Your next product deserves better than templates. Lets build it right.',
  metadataBase: new URL('https://mvpstudio.in'),
  openGraph: {
    title: 'MVP Studio - MVPs That Drives Results',
    description: 'Your next product deserves better than templates. Lets build it right.',
    url: 'https://mvpstudio.in',
    siteName: 'MVP Studio',
    images: [
      {
        url: '/opengraph.png',
        width: 1200,
        height: 630,
        alt: 'MVP Studio Preview',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MVP Studio - Design That Drives Results',
    description: 'We design and develop high-converting websites and apps that help startups launch faster and scale smarter.',
    images: ['/opengraph.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={cn(inter.variable, manrope.variable, "font-sans text-foreground relative min-h-screen")}>
        <div className="fixed inset-0 z-0">
          <Image
            src="/images/utility.png"
            alt="Background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <BackgroundVideo />
          <div className="relative z-10">
            <Navbar />
            <main className="flex-1">
              {children}
            </main>
        
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}