"use client"

import { Lightbulb, Users, Zap, Rocket } from 'lucide-react'
import Image from 'next/image'

export function WhyUsSection() {
  return (
    <section className="w-full py-20 md:py-24 relative" id="why-us">
      <div className="relative z-10">
        <div className="flex flex-col items-start">
          <div className="flex flex-col items-start space-y-4">
            <p className="text-sm uppercase tracking-wider text-white/80 font-helvetica font-normal">WHY MVP STUDIO</p>
            <h2 className="text-3xl md:text-4xl font-helvetica font-normal tracking-tight text-left text-white">
            High-Impact MVPs for Founders Who Move Fast
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-16 w-full">
            <FeatureCard 
              icon={<Lightbulb className="h-8 w-8 text-white" />}
              title="Built for Speed & Scale"
              description="Your MVP is developed using modern, scalable tech—ready to grow with your users and business."
            />
            
            <FeatureCard 
              icon={<Users className="h-8 w-8 text-white" />}
              title="One Project. One Focus."
              description="We don't juggle clients. Your MVP gets our full attention, every step of the way."
            />
            
            <FeatureCard 
              icon={<Zap className="h-8 w-8 text-white" />}
              title="Clarity-First MVP Design"
              description="We turn complex ideas into simple, engaging interfaces that users actually enjoy using."
            />
            
            <FeatureCard 
              icon={<Rocket className="h-8 w-8 text-white" />}
              title="Built for Real-World Results"
              description="We don't just build MVPs — we build traction. Funding, users, and growth start with the right product foundation."
            />
          </div>
        </div>
      </div>
    </section>
  )
}

interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="p-6 rounded-xl border border-white/20 bg-black hover:bg-black/80 transition-all duration-300 group backdrop-blur-sm">
      <div className="mb-4 p-3 w-14 h-14 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center">
        {icon}
      </div>
      <h3 className="text-xl font-helvetica font-normal mb-3 group-hover:text-white transition-colors text-left text-white">{title}</h3>
      <p className="text-white/80 font-helvetica text-left">{description}</p>
    </div>
  )
}