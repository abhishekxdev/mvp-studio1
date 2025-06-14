"use client"

import { motion } from 'framer-motion'
import { ArrowUpRight, Code, Layout, SmartphoneNfc, Palette } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import Image from 'next/image'

export function ServicesSection() {
  return (
    <section className="w-full py-20 md:py-24 relative" id="services">
      <div className="relative z-10">
        <div className="flex flex-col items-start">
          <div className="flex flex-col items-start space-y-4">
            <p className="text-sm uppercase tracking-wider text-white/80 font-helvetica font-normal">SERVICES</p>
            <h2 className="text-3xl md:text-4xl font-helvetica font-normal tracking-tight text-left text-white">
              Experts in Websites, Product, & Branding
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16 w-full">
            <ServiceCard 
              icon={<Layout className="h-8 w-8 text-white" />}
              title="MVP Development"
              description="Lean MVPs built fast with killer design, smooth UX, and real user value."
              tags={['AI', 'SaaS', 'Automations']}
            />
            
            <ServiceCard 
              icon={<SmartphoneNfc className="h-8 w-8 text-white" />}
              title="Mobile Apps"
              description="Beautiful, user-friendly apps that people enjoy using—and keep coming back for."
              tags={['iOS', 'Android', 'Cross-Platform']}
            />
            
            <ServiceCard 
              icon={<Code className="h-8 w-8 text-white" />}
              title="Revamp Your Website"
              description="Transform your old website into a high-converting, modern experience."
              tags={['UI/UX', 'Prototyping', 'SEO']}
            />
            
            <ServiceCard 
              icon={<Palette className="h-8 w-8 text-white" />}
              title="Landing Page Design"
              description="High-impact landing pages built to grab attention and drive action."
              tags={['Design', 'Next.js', 'Branding']}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

interface ServiceCardProps {
  icon: React.ReactNode
  title: string
  description: string
  tags: string[]
}

function ServiceCard({ icon, title, description, tags }: ServiceCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-xl border border-white/20 bg-black p-6 hover:bg-black/80 transition-all duration-300 backdrop-blur-sm">
      <div className="flex flex-col h-full">
        <div className="mb-4 p-3 w-14 h-14 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center">
          {icon}
        </div>
        
        <h3 className="text-xl font-helvetica font-normal mb-2 group-hover:text-white transition-colors text-left text-white">
          {title}
        </h3>
        
        <p className="text-white/80 font-helvetica mb-6 text-left">{description}</p>
        
        <div className="mt-auto">
          <div className="flex flex-wrap gap-2 mb-6">
            {tags.map((tag, index) => (
              <Badge key={index} variant="outline" className="bg-white/10 border-white/20 text-white font-helvetica">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
        
        <div className="absolute top-0 right-0 w-24 h-24 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
          <div className="w-full h-full bg-white rotate-45 transform origin-bottom-left"></div>
        </div>
      </div>
    </div>
  )
}