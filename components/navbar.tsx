"use client"

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 mt-4">
      <div className="max-w-5xl mx-auto bg-background/80 backdrop-blur-md border border-border/20 rounded-full">
        <div className="px-4 md:px-6 flex items-center justify-between py-3">
          <Link href="/" className="flex items-center space-x-4">
            <div className="w-12 h-12 relative">
              <Image
                src="/images/logomvp.png"
                alt="MVP Studio Logo"
                fill
                className="object-contain"
              />
            </div>
            <span className="font-helvetica font-normal text-xl">MVP Studio</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4 ml-auto">
            <a
              href="/#pricing"
              className="px-6 py-3 rounded-full border border-white/10 bg-gradient-to-r from-black/80 via-gray-900/80 to-black/80 backdrop-blur-sm shadow-[inset_0_1px_3px_rgba(255,255,255,0.1),_0_4px_10px_rgba(0,0,0,0.3)] transition-all duration-300 hover:from-black/90 hover:via-gray-900/90 hover:to-black/90 active:scale-[0.98] inline-flex items-center"
            >
              <span className="text-center font-helvetica font-normal text-[16px] tracking-[-0.02em] text-white">
                Plans
              </span>
            </a>
            
            <Link
              href="/work"
              className="px-6 py-3 rounded-full border border-white/10 bg-gradient-to-r from-black/80 via-gray-900/80 to-black/80 backdrop-blur-sm shadow-[inset_0_1px_3px_rgba(255,255,255,0.1),_0_4px_10px_rgba(0,0,0,0.3)] transition-all duration-300 hover:from-black/90 hover:via-gray-900/90 hover:to-black/90 active:scale-[0.98] inline-flex items-center"
            >
              <span className="text-center font-helvetica font-normal text-[16px] tracking-[-0.02em] text-white">
                View Work
              </span>
            </Link>
            
            <a
              href="https://calendly.com/vishnoiabhishek29/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full border border-white/10 bg-gradient-to-r from-black/80 via-gray-900/80 to-black/80 backdrop-blur-sm shadow-[inset_0_1px_3px_rgba(255,255,255,0.1),_0_4px_10px_rgba(0,0,0,0.3)] transition-all duration-300 hover:from-black/90 hover:via-gray-900/90 hover:to-black/90 active:scale-[0.98] inline-flex items-center"
            >
              <span className="text-center font-helvetica font-normal text-[16px] tracking-[-0.02em] text-white">
                Let's Build Your Idea
              </span>
            </a>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? 
              <X className="h-6 w-6" /> : 
              <Menu className="h-6 w-6" />
            }
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-background/95 backdrop-blur-md border border-border/10 rounded-2xl absolute w-full mt-2">
            <nav className="px-4 py-6 flex flex-col space-y-4">
              <a
                href="/#pricing"
                className="px-6 py-3 rounded-full border border-white/10 bg-gradient-to-r from-black/80 via-gray-900/80 to-black/80 backdrop-blur-sm shadow-[inset_0_1px_3px_rgba(255,255,255,0.1),_0_4px_10px_rgba(0,0,0,0.3)] transition-all duration-300 hover:from-black/90 hover:via-gray-900/90 hover:to-black/90 active:scale-[0.98] w-full flex items-center justify-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="text-center font-helvetica font-normal text-[16px] tracking-[-0.02em] text-white">
                  Plans
                </span>
              </a>
              
              <Link
                href="/work"
                className="px-6 py-3 rounded-full border border-white/10 bg-gradient-to-r from-black/80 via-gray-900/80 to-black/80 backdrop-blur-sm shadow-[inset_0_1px_3px_rgba(255,255,255,0.1),_0_4px_10px_rgba(0,0,0,0.3)] transition-all duration-300 hover:from-black/90 hover:via-gray-900/90 hover:to-black/90 active:scale-[0.98] w-full flex items-center justify-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="text-center font-helvetica font-normal text-[16px] tracking-[-0.02em] text-white">
                  View Work
                </span>
              </Link>
              
              <a
                href="https://calendly.com/vishnoiabhishek29/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full border border-white/10 bg-gradient-to-r from-black/80 via-gray-900/80 to-black/80 backdrop-blur-sm shadow-[inset_0_1px_3px_rgba(255,255,255,0.1),_0_4px_10px_rgba(0,0,0,0.3)] transition-all duration-300 hover:from-black/90 hover:via-gray-900/90 hover:to-black/90 active:scale-[0.98] w-full flex items-center justify-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="text-center font-helvetica font-normal text-[16px] tracking-[-0.02em] text-white">
                  Let's Build Your Idea
                </span>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}