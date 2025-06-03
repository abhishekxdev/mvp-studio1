"use client"

import { useEffect, useRef, useState } from 'react'
import { Button } from '@/components/ui/button'
import { ArrowRight, ArrowLeft } from 'lucide-react'
import { AnimatedBadge } from '@/components/ui/badge-animated'
import Image from 'next/image'

// Sample work data - you can replace with your actual work items
const workItems = [
  {
    id: 1,
    image: "/images/Nurodeep1.mov",
    title: "NuroDeep - AI Powered Dashboard",
    description: "UI/UX Design • Development"
  },
  {
    id: 2,
    image: "/images/VorkelAI Snap.png",
    title: "VorkelAI - AI-Powered Platform",
    description: "UI/UX Design • Development"
  },
  {
    id: 3,
    image: "/images/xauto.png",
    title: "XAuto - Social Media Automotive Platform",
    description: "Development"
  },
  {
    id: 5,
    image: "/images/gamify.jpg",
    title: "Gamify - Game Progresss Tracker",
    description: "App • Development"
  },
  {
    id: 5,
    image: "/images/phantom1.png",
    title: "Phantom - Task Organizer Dashboard",
    description: "Design • Development"
  },
  {
    id: 4,
    image: "/images/Horizon.png",
    title: "Horizon - Modern Dashboard",
    description: "UI/UX Design • Development"
  }
]

const clientLogos = [
  '/images/client1.png',
  '/images/client2.png',
  '/images/client3.png',
  '/images/client4.png',
  '/images/client5.png',
  '/images/client6.png',
  '/images/client7.png',
  '/images/client8.png',
]

export function HeroSection() {
  const [currentWork, setCurrentWork] = useState(0)

  const nextWork = () => {
    setCurrentWork((prev) => (prev + 1) % workItems.length)
  }

  const prevWork = () => {
    setCurrentWork((prev) => (prev - 1 + workItems.length) % workItems.length)
  }

  return (
    <section className="w-full pt-36 pb-20 md:pt-40 md:pb-24 overflow-hidden relative z-10">
      <div className="container px-4 md:px-6 mx-auto max-w-6xl relative z-10">
        {/* Hero content */}
        <div className="flex flex-col items-center text-center space-y-8 md:space-y-10 max-w-3xl mx-auto">
          <AnimatedBadge className="px-4 py-2 text-xs font-medium tracking-wider text-white bg-white/10 backdrop-blur-sm">
            SLOTS AVAILABLE 
          </AnimatedBadge>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-manrope font-semibold tracking-tight text-white">
            Start Smart With MVPs that{" "}
            <span className="inline-block bg-gradient-to-r from-indigo-400 via-blue-400 to-indigo-500 text-transparent bg-clip-text animate-gradient">
              Dominate
            </span>{" "}
            &{" "}
            <span className="inline-block bg-gradient-to-r from-indigo-400 via-blue-400 to-indigo-500 text-transparent bg-clip-text animate-gradient">
              Scale
            </span>
          </h1>

          <p className="text-lg text-gray-200 max-w-2xl mx-auto">
          Launch with confidence — we develop MVPs across Web, Mobile, and AI to help you validate before scaling.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center w-full">
            <a
              href="https://calendly.com/vishnoiabhishek29/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full border border-indigo-500/20 bg-[radial-gradient(35%_63%_at_50%_50%,_#6366f1_0%,_#4338ca_100%)] shadow-[inset_0_1px_3px_rgba(255,255,255,0.3),_0_4px_10px_rgba(99,102,241,0.3)] transition-all duration-300 hover:brightness-110 active:scale-[0.98] inline-flex items-center justify-center"
            >
              <span className="text-center font-bold text-[16px] tracking-[-0.02em] text-white font-[Manrope,sans-serif]">
                Book an Intro Call
              </span>
            </a>
            
          </div>
        </div>

        {/* Client logos section */}
        <div className="mt-16 md:mt-20 max-w-4xl mx-auto">
          <h3 className="text-xs uppercase tracking-wider text-center font-medium mb-8 text-gray-400">
            Trusted by 15+ Startup Founders and Entrepreneurs
          </h3>

          <div className="relative overflow-hidden">
            <div className="flex animate-scroll">
              <div className="flex items-center space-x-6">
                {Array.from({ length: 12 }).map((_, i) => (
                  <div key={i} className="flex-shrink-0 h-8 w-24 relative">
                    <Image
                      src={clientLogos[i % clientLogos.length]}
                      alt={`Client Logo ${i + 1}`}
                      fill
                      className="object-contain"
                    />
                  </div>
                ))}
              </div>
              <div className="flex items-center space-x-6">
                {Array.from({ length: 12 }).map((_, i) => (
                  <div key={`clone-${i}`} className="flex-shrink-0 h-8 w-24 relative">
                    <Image
                      src={clientLogos[i % clientLogos.length]}
                      alt={`Client Logo ${i + 1}`}
                      fill
                      className="object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Work showcase section */}
        <div id="work" className="mt-16 md:mt-24">
          <div className="max-w-4xl mx-auto">
            <div className="relative rounded-xl border border-white/10 overflow-hidden group">
              <div className="relative w-full aspect-[16/9]">
                {workItems[currentWork].image.endsWith('.mov') ? (
                  <video
                    src={workItems[currentWork].image}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="object-contain w-full h-full"
                  />
                ) : (
                  <Image
                    src={workItems[currentWork].image}
                    alt={workItems[currentWork].title}
                    fill
                    className="object-contain"
                  />
                )}
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{workItems[currentWork].title}</h3>
                  <p className="text-gray-300">{workItems[currentWork].description}</p>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center items-center space-x-4 mt-6">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full border-white/20 text-white hover:bg-white/10"
                onClick={prevWork}
              >
                <ArrowLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full border-white/20 text-white hover:bg-white/10"
                onClick={nextWork}
              >
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}