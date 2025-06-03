"use client"

import { useEffect, useRef } from 'react'
import { Badge } from '@/components/ui/badge'
import CountUp from '@/components/count-up'

export function StatsSection() {
  return (
    <section className="w-full py-20 md:py-24 relative">
      <div className="container px-4 md:px-6 mx-auto max-w-6xl relative z-10">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <div className="flex flex-col items-center space-y-4">
            <p className="text-sm uppercase tracking-wider text-primary/80 font-medium">Founder's ADVICE</p>
            <h2 className="text-3xl md:text-4xl font-manrope font-semibold tracking-tight">
             " I've collaborated with over 15 startup founders and one thing is clear — most skip the validation step.
They go all-in on building, only to realize later that no one needs the product.
Validate before you build. Always."
            </h2>
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
    <div className="p-6 rounded-xl border border-border/20 bg-card/10 flex flex-col items-center text-center">
      <h3 className="text-4xl md:text-5xl font-manrope font-semibold mb-2 flex items-center">
        <span className="text-primary/90">{prefix}</span>
        <CountUp end={value} duration={2.5} />
        <span className="text-primary/90">{suffix}</span>
      </h3>
      <p className="text-muted-foreground">{label}</p>
    </div>
  )
}