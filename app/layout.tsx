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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} text-white min-h-screen`} style={{ backgroundColor: '#111111' }}>
        <div className="max-w-5xl mx-auto px-4 md:px-6">
          <Navbar />
          {children}
          <FooterSection />
        </div>
      </body>
    </html>
  );
}