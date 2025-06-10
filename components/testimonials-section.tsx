"use client"

import { useRef, useState } from 'react'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    role: 'Vorkel AI',
    quote: 'Working with this team was a game-changer for our startup. The designs not only looked incredible but directly contributed to our conversion rates increasing by 43%. Worth every penny.'
  },
  {
    id: 2,
    role: 'XAuto',
    quote: 'We had nothing but an idea. In just a few weeks, we had a fully functional MVP that looked like a real product. Their work gave us the confidence to start pitching and testing immediately.'
  },
  {
    id: 3,
    role: 'Gamify',
    quote: 'They turned our rough notes and scattered ideas into a usable MVP we could actually demo. It was the first time we saw our product come to life — and it exceeded expectations.'
  },
  {
    id: 4,
    role: 'Phantom',
    quote: 'Working with them felt like adding a full-stack product team to our startup. Fast communication, thoughtful feedback, and real ownership of the product vision.'
  }
]

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  
  const handlePrev = () => {
    setActiveIndex(prev => prev === 0 ? testimonials.length - 1 : prev - 1)
  }
  
  const handleNext = () => {
    setActiveIndex(prev => (prev + 1) % testimonials.length)
  }
  
  return (
    <section className="w-full py-20 md:py-24 relative">
      <div className="relative z-10">
        <div className="flex flex-col items-start">
          <div className="flex flex-col items-start space-y-4">
            <p className="text-sm uppercase tracking-wider text-white/80 font-helvetica font-normal">TESTIMONIALS</p>
            <h2 className="text-3xl md:text-4xl font-helvetica font-normal tracking-tight text-left text-white">
              Hear It Straight from Our Clients
            </h2>
          </div>
          
          <div className="relative mt-16 w-full">
            <div 
              ref={containerRef} 
              className="overflow-hidden rounded-xl"
            >
              <div className="relative">
                {/* Large quote icon background */}
                <div className="absolute top-6 left-8 opacity-10">
                  <Quote className="w-16 h-16 text-white" />
                </div>
                
                <div className="p-8 md:p-12 bg-white/5 rounded-xl border border-white/20 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
                  <div className="relative">
                    <p className="text-xl md:text-2xl text-white font-helvetica italic mb-8 text-left">
                      {testimonials[activeIndex].quote}
                    </p>
                    
                    <div className="flex flex-col items-start">
                      <p className="font-helvetica font-normal text-lg text-left text-white">{testimonials[activeIndex].role}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-start mt-8 gap-4">
              <Button 
                variant="outline" 
                size="icon" 
                className="rounded-full h-10 w-10 border-white/20 bg-white/5 hover:bg-white/10 text-white"
                onClick={handlePrev}
              >
                <ChevronLeft className="h-5 w-5" />
                <span className="sr-only">Previous</span>
              </Button>
              <Button 
                variant="outline" 
                size="icon" 
                className="rounded-full h-10 w-10 border-white/20 bg-white/5 hover:bg-white/10 text-white"
                onClick={handleNext}
              >
                <ChevronRight className="h-5 w-5" />
                <span className="sr-only">Next</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}