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
  },
  {
    id: 5,
    
    role: 'Horizon',
    quote: 'We had nothing but an idea. In just a few weeks, we had a fully functional MVP that looked like a real product. Their work gave us the confidence to start pitching and testing immediately.'
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
      <div className="container px-4 md:px-6 mx-auto max-w-6xl relative z-10">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <div className="flex flex-col items-center space-y-4">
            <p className="text-sm uppercase tracking-wider text-primary/80 font-medium">TESTIMONIALS</p>
            <h2 className="text-3xl md:text-4xl font-manrope font-semibold tracking-tight">
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
                  <Quote className="w-16 h-16" />
                </div>
                
                <div className="p-8 md:p-12 bg-card/10 rounded-xl border border-border/20">
                  <div className="relative">
                    <p className="text-xl md:text-2xl text-muted-foreground italic mb-8">
                      {testimonials[activeIndex].quote}
                    </p>
                    
                    <div className="flex flex-col items-center">
                      <p className="font-semibold text-lg">{testimonials[activeIndex].name}</p>
                      <p className="text-sm text-muted-foreground">{testimonials[activeIndex].role}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center mt-8 gap-4">
              <Button 
                variant="outline" 
                size="icon" 
                className="rounded-full h-10 w-10"
                onClick={handlePrev}
              >
                <ChevronLeft className="h-5 w-5" />
                <span className="sr-only">Previous</span>
              </Button>
              <Button 
                variant="outline" 
                size="icon" 
                className="rounded-full h-10 w-10"
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