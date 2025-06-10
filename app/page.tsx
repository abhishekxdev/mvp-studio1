"use client"

import { useEffect } from 'react'
import { HeroSection } from '@/components/hero-section'
import { WhyUsSection } from '@/components/why-us-section'
import { StatsSection } from '@/components/stats-section'
import { ServicesSection } from '@/components/services-section'
import { TestimonialsSection } from '@/components/testimonials-section'
import { PricingSection } from '@/components/pricing-section'
import { FaqSection } from '@/components/faq-section'

export default function Home() {
  useEffect(() => {
    // Add scroll reveal animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in')
          }
        })
      },
      { threshold: 0.1 }
    )

    document.querySelectorAll('.reveal').forEach((el) => {
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <main className="flex min-h-screen flex-col items-center">
      <HeroSection />
      <WhyUsSection />
      <StatsSection />
      <ServicesSection />
      <TestimonialsSection />
      <PricingSection />
      <FaqSection />
    </main>
  )
}