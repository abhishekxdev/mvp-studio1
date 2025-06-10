"use client"

import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Instagram, Linkedin, ArrowUpRight } from 'lucide-react'

export function FooterSection() {
  return (
    <footer className="w-full py-12 md:py-20 relative">
      <div className="container px-4 md:px-6 mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-16 reveal">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 relative">
                <Image
                  src="/images/logomvp.png"
                  alt="MVP Studio Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="font-manrope font-semibold text-xl">MVP Studio</span>
            </div>
            
            <p className="text-muted-foreground mb-6 max-w-md">
            Your next product deserves better than templates. Let's build it right.
            </p>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="font-manrope font-semibold text-lg mb-4">Contact</h3>
            <div className="space-y-3 text-muted-foreground">
              <p>support@mvpstudio.in</p>
              <p></p>
              <a
                href="https://calendly.com/vishnoiabhishek29/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full border border-indigo-500/20 bg-[radial-gradient(35%_63%_at_50%_50%,_#6366f1_0%,_#4338ca_100%)] shadow-[inset_0_1px_3px_rgba(255,255,255,0.3),_0_4px_10px_rgba(99,102,241,0.3)] transition-all duration-300 hover:brightness-110 active:scale-[0.98] inline-flex items-center"
              >
                <span className="text-center font-bold text-[16px] tracking-[-0.02em] text-white font-[Manrope,sans-serif]">
                  Book a Call
                </span>
              </a>
            </div>
          </div>

          <div className="md:col-span-1 flex justify-end items-start">
            <div className="relative w-68 h-68 -mt-20">
              <img
                src="/images/callbook.png"
                alt="Call Booking"
                className="object-contain w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

function Calendar(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
      <line x1="16" x2="16" y1="2" y2="6" />
      <line x1="8" x2="8" y1="2" y2="6" />
      <line x1="3" x2="21" y1="10" y2="10" />
      <path d="M8 14h.01" />
      <path d="M12 14h.01" />
      <path d="M16 14h.01" />
      <path d="M8 18h.01" />
      <path d="M12 18h.01" />
      <path d="M16 18h.01" />
    </svg>
  )
}