"use client"

import { useState } from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Image from "next/image"

const faqs = [
  {
    question: "Who Do You Work With?",
    answer: "We primarily work with SaaS companies, tech startups, and digital-first businesses who value design as a strategic investment. Our clients range from funded startups to established companies looking to elevate their design."
  },
  {
    question: "What's Your Design Process Like?",
    answer: "Our process starts with deep research into your business, users, and competition. We then move through strategy, wireframing, visual design, prototyping, and testing. We maintain transparent communication throughout with regular updates and feedback sessions."
  },
  {
    question: "How Long Does a Typical Project Take?",
    answer: "Timelines vary by project scope. A landing page typically takes 2 weeks, a comprehensive website 3-4 weeks, and app designs 4-6 weeks. Our MVP package is guaranteed to deliver in 2 weeks. We're transparent about timelines from the beginning."
  },
  {
    question: "Do You Offer Refunds?",
    answer: "For our Landing Page and Product Design services, we offer a satisfaction guarantee. If you're not happy with the initial concepts, we'll refund your deposit. For our MVP package, we guarantee delivery in 2 weeks or you get a full refund."
  },
  {
    question: "When Can You Start?",
    answer: "We typically can start new projects within 1-2 weeks of signing. For urgent projects, we sometimes have fast-track availability with a rush fee. The best way to find out is to book an intro call with us."
  },
  {
    question: "How Do We Communicate?",
    answer: "We use Slack for daily communication, Notion for project management, and schedule regular video calls for important discussions and presentations. You'll have direct access to your design team throughout the project."
  },
  {
    question: "Do You Offer On-Going Support?",
    answer: "Yes, many of our clients stay with us long-term. After the initial project, we offer flexible monthly retainers that include ongoing design work, updates, and optimizations based on user feedback and performance data."
  }
]

export function FaqSection() {
  return (
    <section className="w-full py-20 md:py-24 relative" id="faq">
      <div className="relative z-10">
        <div className="flex flex-col items-center text-center">
          <div className="flex flex-col items-center space-y-4">
            <p className="text-sm uppercase tracking-wider text-primary/80 font-medium">FAQs</p>
            <h2 className="text-3xl md:text-4xl font-manrope font-semibold tracking-tight">
              Have Questions? We Have Answers
            </h2>
          </div>
          
          <div className="w-full mt-16">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border border-border/20 bg-card/10 rounded-lg px-6 py-2"
                >
                  <AccordionTrigger className="text-left font-manrope font-semibold hover:text-primary hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pt-2 pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  )
}