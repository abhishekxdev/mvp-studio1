"use client"

import { useEffect, useRef } from 'react'
import { Badge } from '@/components/ui/badge'
import CountUp from '@/components/count-up'

export function StatsSection() {
  return (
    <section className="w-full py-20 md:py-24 relative">
      <div className="relative z-10">
        <div className="flex flex-col items-start">
          <div className="flex flex-col items-start space-y-4">
            <p className="text-sm uppercase tracking-wider text-white/80 font-helvetica font-normal">Founder's ADVICE</p>
            <h2 className="text-3xl md:text-4xl font-helvetica font-normal tracking-tight text-left text-white">
              Expert Insights for Startup Success
            </h2>
          </div>
          
          <div className="mt-16 w-full">
            <div className="p-8 md:p-12 rounded-xl border border-white/20 bg-white/5 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
              <div className="relative">
                <div className="absolute top-0 left-0 opacity-20">
                  <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                  </svg>
                </div>
                <blockquote className="text-xl md:text-2xl text-white font-helvetica italic mb-6 text-left relative z-10">
                  "I've collaborated with over 15 startup founders and one thing is clear — most skip the validation step. They go all-in on building, only to realize later that no one needs the product. Validate before you build. Always."
                </blockquote>
                <div className="flex flex-col items-start">
                  <p className="font-helvetica font-normal text-lg text-left text-white/80">— MVP Studio Founder</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

interface StatCardProps {
  value: number
  label: string
  prefix?: string
  suffix?: string
}

function StatCard({ value, label, prefix = '', suffix = '' }: StatCardProps) {
  return (
    <div className="p-6 rounded-xl border border-white/20 bg-white/5 flex flex-col items-start text-left backdrop-blur-sm">
      <h3 className="text-4xl md:text-5xl font-helvetica font-normal mb-2 flex items-center text-white">
        <span className="text-primary/90">{prefix}</span>
        <CountUp end={value} duration={2.5} />
        <span className="text-primary/90">{suffix}</span>
      </h3>
      <p className="text-white/80 font-helvetica">{label}</p>
    </div>
  )
}