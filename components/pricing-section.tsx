"use client"

import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { cn } from '@/lib/utils'

const plans = [
  {
    name: 'MVP Standard Plan',
    description: 'Perfect for validating your idea quickly',
    price: '$1,999',
    features: [
      'Core features only',
      'Basic UI/UX design',
      '2 Weeks development',
      'Basic testing',
      'Deployment support',
      '1 month of support',
    ],
    highlighted: false,
  },
  {
    name: 'MVP Growth Retainer Plan',
    description: 'Ideal for growing businesses',
    price: '$2,999',
    features: [
      'All MVP features',
      'Advanced UI/UX design',
      'Continuous development',
      'Comprehensive testing',
      'Performance optimization',
      '3 months of support',
      'Analytics integration',
      'Basic SEO setup',
    ],
    highlighted: true,
  },
  {
    name: 'Enterprise',
    description: 'For large-scale applications',
    price: '$9,999',
    features: [
      'All Standard features',
      'Premium UI/UX design',
      '2 months development',
      'Enterprise-grade security',
      'Advanced analytics',
      '6 months of support',
      'Full SEO optimization',
      'Custom integrations',
      'Scalability features',
    ],
    highlighted: false,
  },
]

export function PricingSection() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto">
        <div className="text-left">
          <h2 className="text-base font-helvetica font-normal leading-7 text-primary">Pricing</h2>
          <p className="mt-2 text-4xl font-helvetica font-normal tracking-tight sm:text-5xl text-left">
            Choose the right plan for your needs
          </p>
        </div>
        <p className="mt-6 text-lg leading-8 text-muted-foreground font-helvetica text-left">
          We offer flexible pricing plans to help you get started with your project. All plans include a free consultation.
        </p>
        <div className="isolate mt-16 grid max-w-md grid-cols-1 gap-y-12 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-12">
          {plans.map((plan, planIdx) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: planIdx * 0.1 }}
              className={cn(
                'flex flex-col justify-between rounded-3xl p-8 ring-1 ring-gray-200 xl:p-10',
                plan.highlighted
                  ? 'relative bg-gray-900 text-white shadow-xl'
                  : 'bg-white text-gray-900'
              )}
            >
              {plan.highlighted && (
                <div className="absolute -top-5 left-0 right-0 mx-auto w-32 rounded-full bg-gradient-to-r from-primary to-primary/80 px-3 py-2 text-sm font-helvetica font-normal leading-6 text-white">
                  Most popular
                </div>
              )}
              <div>
                <div className="flex items-center justify-between gap-x-4">
                  <h3
                    className={cn(
                      'text-lg font-helvetica font-normal leading-8',
                      plan.highlighted ? 'text-white' : 'text-gray-900'
                    )}
                  >
                    {plan.name}
                  </h3>
                </div>
                <p className="mt-4 text-sm leading-6 text-muted-foreground font-helvetica">{plan.description}</p>
                <p className="mt-6 flex items-baseline gap-x-1">
                  <span className="text-4xl font-helvetica font-normal tracking-tight">{plan.price}</span>
                  <span className="text-sm font-helvetica font-normal leading-6">/project</span>
                </p>
                <ul role="list" className="mt-8 space-y-3 text-sm leading-6">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <Check
                        className={cn(
                          'h-6 w-5 flex-none',
                          plan.highlighted ? 'text-primary' : 'text-primary'
                        )}
                        aria-hidden="true"
                      />
                      <span className="font-helvetica">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <a
                href="https://calendly.com/vishnoiabhishek29/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 block rounded-full px-6 py-3 text-center text-sm font-helvetica font-normal leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 bg-gradient-to-r from-black/80 via-gray-900/80 to-black/80 backdrop-blur-sm shadow-[inset_0_1px_3px_rgba(255,255,255,0.1),_0_4px_10px_rgba(0,0,0,0.3)] transition-all duration-300 hover:from-black/90 hover:via-gray-900/90 hover:to-black/90 active:scale-[0.98] text-white border border-white/10"
              >
                Book a Call
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}