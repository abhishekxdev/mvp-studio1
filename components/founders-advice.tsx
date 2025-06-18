"use client"

import { motion } from 'framer-motion'
import { ArrowUpRight, Lightbulb, Users, Zap, Rocket } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

export function FoundersAdvice() {
  return (
    <section className="w-full py-20 md:py-24 relative" id="founders-advice">
      <div className="container px-4 md:px-6 mx-auto max-w-6xl relative z-10">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <div className="flex flex-col items-center space-y-4">
            <p className="text-sm uppercase tracking-wider text-primary/80 font-medium">FOUNDERS ADVICE</p>
            <h2 className="text-3xl md:text-4xl font-manrope font-semibold tracking-tight">
              Expert Insights for Startup Success
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16 w-full">
            <AdviceCard 
              icon={<Lightbulb />}
              title="Start with a Clear Vision"
              description="Define your product's core value proposition and target audience before writing a single line of code."
            />
            
            <AdviceCard 
              icon={<Users />}
              title="Focus on User Feedback"
              description="Build a feedback loop early. Your first users will tell you exactly what to build next."
            />
            
            <AdviceCard 
              icon={<Zap />}
              title="Launch Fast, Iterate Faster"
              description="Don't wait for perfection. Get your MVP out there and improve based on real usage data."
            />
            
            <AdviceCard 
              icon={<Rocket />}
              title="Measure What Matters"
              description="Track key metrics from day one. Focus on growth, engagement, and retention."
            />
          </div>
        </div>
      </div>
    </section>
  )
}

interface AdviceCardProps {
  icon: React.ReactNode
  title: string
  description: string
}

function AdviceCard({ icon, title, description }: AdviceCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-xl border border-border/20 bg-card/10 p-6 hover:bg-card/30 transition-all duration-300">
      <div className="flex flex-col h-full">
        <div className="mb-4 p-2 w-12 h-12 rounded-lg bg-background/60 border border-border/30 flex items-center justify-center text-primary">
          {icon}
        </div>
        
        <h3 className="text-xl font-manrope font-semibold mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  )
} 