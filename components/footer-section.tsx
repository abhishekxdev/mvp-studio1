"use client"

import Link from 'next/link'
import Image from 'next/image'

export function FooterSection() {
  return (
    <footer className="w-full py-20 md:py-32 relative">
      <div className="relative z-10">
        {/* Main Content */}
        <div className="mb-16">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-helvetica font-normal mb-12 text-left text-white leading-tight">
            Let's Build Something<br />
            People Remember
          </h1>
          
          <div className="flex flex-col md:flex-row gap-4 items-start">
            <a
              href="https://calendly.com/vishnoiabhishek29/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full bg-white text-black font-helvetica font-normal text-lg transition-all duration-300 hover:bg-gray-100 active:scale-[0.98] inline-flex items-center"
            >
              Book an Intro Call
            </a>
            
            <Link
              href="/work"
              className="px-8 py-4 rounded-full border border-white/20 bg-transparent text-white font-helvetica font-normal text-lg transition-all duration-300 hover:bg-white/10 active:scale-[0.98] inline-flex items-center gap-2"
            >
              View Work
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
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