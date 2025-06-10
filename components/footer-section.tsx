"use client"

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

export function FooterSection() {
  const pathname = usePathname()
  const isWorkPage = pathname === '/work'

  return (
    <footer className="w-full py-20 md:py-32 relative">
      <div className="relative z-10">
        {/* Main Content */}
        <div className="mb-16">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-helvetica font-normal mb-12 text-left text-white leading-tight">
           Let's Create What Users Can't Forget<br />
          
          </h1>
          
          <div className="flex flex-col md:flex-row gap-4 items-start">
            <a
              href="https://calendly.com/vishnoiabhishek29/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full border border-white/10 bg-gradient-to-r from-black/80 via-gray-900/80 to-black/80 backdrop-blur-sm shadow-[inset_0_1px_3px_rgba(255,255,255,0.1),_0_4px_10px_rgba(0,0,0,0.3)] transition-all duration-300 hover:from-black/90 hover:via-gray-900/90 hover:to-black/90 active:scale-[0.98] inline-flex items-center"
            >
              <span className="text-center font-helvetica font-normal text-[16px] tracking-[-0.02em] text-white">
                Book an Intro Call
              </span>
            </a>
            
            {!isWorkPage && (
              <Link
                href="/work"
                className="px-6 py-3 rounded-full border border-white/10 bg-gradient-to-r from-black/80 via-gray-900/80 to-black/80 backdrop-blur-sm shadow-[inset_0_1px_3px_rgba(255,255,255,0.1),_0_4px_10px_rgba(0,0,0,0.3)] transition-all duration-300 hover:from-black/90 hover:via-gray-900/90 hover:to-black/90 active:scale-[0.98] inline-flex items-center gap-2"
              >
                <span className="text-center font-helvetica font-normal text-[16px] tracking-[-0.02em] text-white">
                  View Work
                </span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            )}
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end pt-16 border-t border-white/10">
          <div className="mb-4 md:mb-0">
            <p className="text-white/60 font-helvetica font-normal">
              © MVP Studio 2025
            </p>
          </div>
          
          <div className="text-right">
            <p className="text-white/60 font-helvetica font-normal">
              support@mvpstudio.in
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}