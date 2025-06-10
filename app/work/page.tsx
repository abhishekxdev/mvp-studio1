"use client"

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, ExternalLink } from 'lucide-react'

const workItems = [
    {
        id: 1,
        image: "/images/Nurodeep1.mov",
        title: "NuroDeep - AI Powered Dashboard",
        description: "A comprehensive AI-powered analytics dashboard that helps businesses make data-driven decisions with real-time insights and predictive analytics.",
        category: "AI • Dashboard",
       
    },
    {
        id: 2,
        image: "/images/VorkelAI Snap.png",
        title: "VorkelAI - AI-Powered Platform",
        description: "An intelligent automation platform that streamlines business processes using advanced AI algorithms and machine learning capabilities.",
        category: "AI • Automation",
       
    },
    {
        id: 3,
        image: "/images/Phantom.png",
        title: "Phantom - Task Organizer Dashboard",
        description: "A sleek task management system that helps teams organize, prioritize, and track their work with intuitive interfaces and powerful collaboration tools.",
        category: "Productivity • Dashboard",
        
    },
    {
        id: 4,
        image: "/images/Horizon.png",
        title: "Horizon - AI Conversation Agent",
        description: "Horizon – AI Conversation Agent is an autonomous AI that doesn’t just chat — it joins calls, understands conversations in real-time, and gets things done. Built for modern teams and customer-facing operations, Horizon acts like a smart teammate that listens, responds, and takes action across meetings, support calls, and internal processes.",
        category: "AI Agent • Enterprise",
        
    },
    {
        id: 5,
        image: "/images/crm.png",
        title: "CRM - Customer Relationship Management",
        description: "A comprehensive CRM solution that helps businesses manage customer relationships, track sales pipelines, and automate marketing campaigns.",
        category: "CRM • Sales",
      
    },
    {
        id: 6,
        image: "/images/don.png",
        title: "NebulaFlow - Automation Platform",
        description: "NebulaFlow is an advanced AI automation platform designed to streamline complex workflows, eliminate repetitive tasks, and accelerate business operations. With a no-code interface and powerful AI-driven logic, NebulaFlow enables teams to build, deploy, and manage intelligent automations across departments—from customer support and marketing to operations and development.",
        category: "SaaS • AI",
       
    },
    {
        id: 7,
        image: "/images/emailai.png",
        title: "EmailAI - AI-Powered Email Assistant",
        description: "An intelligent email management system that uses AI to categorize, prioritize, and suggest responses for improved productivity.",
        category: "AI • Communication",
      
    },
    {
        id: 8,
        image: "/images/outreach.png",
        title: "Outreach - Marketing Automation Platform",
        description: "A comprehensive marketing automation platform that helps businesses create, manage, and optimize their outreach campaigns across multiple channels.",
        category: "Marketing • Automation",
        
    }
]

export default function WorkPage() {
    return (
        <main className="min-h-screen bg-black text-white">
            <div className="pt-32 pb-20">
                {/* Header */}
                <div className="mb-12">
                    <Link 
                        href="/" 
                        className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors mb-8 font-helvetica"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to Home
                    </Link>
                    
                    <h1 className="text-4xl md:text-6xl font-helvetica font-normal mb-6 text-left">
                        Our Work
                    </h1>
                    <p className="text-xl text-white/80 font-helvetica text-left max-w-3xl">
                        Explore our portfolio of successful MVPs and digital products that have helped founders validate ideas, secure funding, and scale their businesses.
                    </p>
                </div>

                {/* Work Items - Single Column Layout */}
                <div className="space-y-12">
                    {workItems.map((item) => (
                        <WorkCard key={item.id} item={item} />
                    ))}
                </div>

                {/* CTA Section */}
                <div className="mt-20 text-center">
                    <h2 className="text-3xl md:text-4xl font-helvetica font-normal mb-6 text-white">
                        Ready to Build Your MVP?
                    </h2>
                    <p className="text-xl text-white/80 font-helvetica mb-8 max-w-2xl mx-auto">
                        Let's discuss your project and create something amazing together.
                    </p>
                    <a
                        href="https://calendly.com/vishnoiabhishek29/30min"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8 py-4 rounded-full border border-white/10 bg-gradient-to-r from-black/80 via-gray-900/80 to-black/80 backdrop-blur-sm shadow-[inset_0_1px_3px_rgba(255,255,255,0.1),_0_4px_10px_rgba(0,0,0,0.3)] transition-all duration-300 hover:from-black/90 hover:via-gray-900/90 hover:to-black/90 active:scale-[0.98] inline-flex items-center"
                    >
                        <span className="text-center font-helvetica font-normal text-[18px] tracking-[-0.02em] text-white">
                            Start Your Project
                        </span>
                    </a>
                </div>
            </div>
        </main>
    )
}

interface WorkCardProps {
    item: typeof workItems[0]
}

function WorkCard({ item }: WorkCardProps) {
    return (
        <div className="group relative overflow-hidden rounded-xl border border-white/20 bg-black hover:bg-black/80 transition-all duration-300 backdrop-blur-sm">
            <div className="flex flex-col lg:flex-row">
                {/* Image Section - Wider for better visibility */}
                <div className="relative w-full lg:w-2/3 h-80 lg:h-96 overflow-hidden rounded-l-xl">
                    {item.image.endsWith('.mov') ? (
                        <video
                            src={item.image}
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                            style={{ objectPosition: 'center center' }}
                        />
                    ) : (
                        <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            className="object-contain transition-transform duration-300 group-hover:scale-105"
                        />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                {/* Content Section */}
                <div className="w-full lg:w-1/3 p-8 flex flex-col justify-center">
                    <div className="mb-4">
                        <span className="text-sm text-white/60 font-helvetica">{item.category}</span>
                    </div>
                    
                    <h3 className="text-2xl lg:text-3xl font-helvetica font-normal mb-4 text-white group-hover:text-white transition-colors">
                        {item.title}
                    </h3>
                    
                    <p className="text-white/80 font-helvetica mb-6 leading-relaxed">
                        {item.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                        {item.technologies.map((tech, index) => (
                            <span
                                key={index}
                                className="px-3 py-1 text-xs rounded-full bg-white/10 border border-white/20 text-white font-helvetica"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
