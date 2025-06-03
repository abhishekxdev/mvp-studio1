"use client"

import { CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import Image from 'next/image'

export function PricingSection() {
  return (
    <section className="w-full py-20 md:py-24 relative" id="pricing">
      <div className="container px-4 md:px-6 mx-auto max-w-6xl relative z-10">
        <div className="flex flex-col items-center">
          <div className="flex flex-col items-center space-y-4 max-w-3xl mx-auto text-center">
            <p className="text-sm uppercase tracking-wider text-primary/80 font-medium">PRICING</p>
            <h2 className="text-3xl md:text-4xl font-manrope font-semibold tracking-tight">
              Transparent Pricing Without Surprises
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-16 w-full">
            <PricingCard 
              title="Landing Page"
              price={1000}
              description="A conversion-focused landing page crafted to match your brand and drive real results."
              features={[
                'Tailored UI/UX design',
                'Unlimited revisions',
                'Copywriting done for you',
                'Delivered in 2 weeks',
                'Progress updates every 48hrs',
                'Smooth motion & animations',
                'Developed with Next.js'
              ]}
            />
            
            <PricingCard 
              title="MVP Package"
              price={1600}
              description="A done-for-you MVP built in 2 weeks — with modern tech, seamless integrations, and founder-level attention to detail."
              features={[
                'MVP ready in 2 weeks',
                'Webapp with modern, scalable tech',
                'Seamless integrations: payments, auth & more',
                '30 days free maintenance post-launch',
                'Founder-led, personalized development',
                'Transparent process with regular updates'
              ]}
            />
            
            <PricingCard 
              highlight={true}
              title="Growth Retainer Plan"
              price={2500}
              description="Ongoing MVP design & development support to help you iterate faster, ship smarter, and grow with confidence."
              features={[
                'Continuous design & dev support',
                'Rapid feature iterations',
                'Priority bug fixes & updates',
                'Weekly strategy calls',
                'Dedicated PM & developer',
                'Optimized for user feedback & growth',
                'Cancel anytime'
              ]}
              badge="Most Popular"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

interface PricingCardProps {
  title: string
  price: number
  priceSuffix?: string
  description: string
  features: string[]
  highlight?: boolean
  badge?: string
}

function PricingCard({
  title,
  price,
  priceSuffix = '',
  description,
  features,
  highlight = false,
  badge
}: PricingCardProps) {
  return (
    <div className={`relative flex flex-col rounded-xl border ${highlight ? 'border-primary/30 bg-primary/5' : 'border-border/20 bg-card/10'} p-8 md:p-10 transition-all duration-300 hover:border-primary/20 hover:bg-card/20`}>
      {badge && (
        <Badge className="absolute -top-3 right-8 bg-primary">{badge}</Badge>
      )}
      
      <div className="mb-8 text-left">
        <h3 className="text-2xl font-manrope font-semibold">{title}</h3>
        <div className="mt-3 flex items-baseline">
          <span className="text-4xl md:text-5xl font-manrope font-semibold">${price}</span>
          {priceSuffix && <span className="ml-2 text-muted-foreground">{priceSuffix}</span>}
        </div>
        <p className="mt-4 text-lg text-muted-foreground">{description}</p>
      </div>
      
      <ul className="space-y-4 mb-10">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start">
            <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mr-4 mt-0.5" />
            <span className="text-base">{feature}</span>
          </li>
        ))}
      </ul>
      
      <div className="mt-auto">
        <a
          href="https://calendly.com/vishnoiabhishek29/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full inline-flex items-center justify-center px-6 py-3 rounded-full border border-indigo-500/20 bg-[radial-gradient(35%_63%_at_50%_50%,_#6366f1_0%,_#4338ca_100%)] shadow-[inset_0_1px_3px_rgba(255,255,255,0.3),_0_4px_10px_rgba(99,102,241,0.3)] transition-all duration-300 hover:brightness-110 active:scale-[0.98]"
        >
          <span className="font-bold text-[16px] tracking-[-0.02em] text-white font-[Manrope,sans-serif]">
            Book a Call
          </span>
        </a>
      </div>
    </div>
  )
}