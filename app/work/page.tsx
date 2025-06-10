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
        technologies: ["React", "Node.js", "AI/ML", "PostgreSQL"]
    },
    {
        id: 2,
        image: "/images/VorkelAI Snap.png",
        title: "VorkelAI - AI-Powered Platform",
        description: "An intelligent automation platform that streamlines business processes using advanced AI algorithms and machine learning capabilities.",
        category: "AI • Automation",
        technologies: ["Next.js", "Python", "TensorFlow", "MongoDB"]
    },
    {
        id: 3,
        image: "/images/Phantom.png",
        title: "Phantom - Task Organizer Dashboard",
        description: "A sleek task management system that helps teams organize, prioritize, and track their work with intuitive interfaces and powerful collaboration tools.",
        category: "Productivity • Dashboard",
        technologies: ["React", "Express", "MySQL", "Socket.io"]
    },
    {
        id: 4,
        image: "/images/Horizon.png",
        title: "Horizon - Modern Dashboard",
        description: "A modern analytics dashboard with beautiful visualizations and real-time data processing for enterprise-level business intelligence.",
        category: "Analytics • Enterprise",
        technologies: ["Vue.js", "Laravel", "Redis", "Chart.js"]
    },
    {
        id: 5,
        image: "/images/crm.png",
        title: "CRM - Customer Relationship Management",
        description: "A comprehensive CRM solution that helps businesses manage customer relationships, track sales pipelines, and automate marketing campaigns.",
        category: "CRM • Sales",
        technologies: ["Angular", "Django", "PostgreSQL", "Stripe"]
    },
    {
        id: 6,
        image: "/images/don.png",
        title: "Don - Donation Management Platform",
        description: "A secure donation platform that enables non-profits to manage fundraising campaigns, track donations, and engage with supporters effectively.",
        category: "Non-Profit • Payments",
        technologies: ["React", "Node.js", "Stripe", "MongoDB"]
    },
    {
        id: 7,
        image: "/images/emailai.png",
        title: "EmailAI - AI-Powered Email Assistant",
        description: "An intelligent email management system that uses AI to categorize, prioritize, and suggest responses for improved productivity.",
        category: "AI • Communication",
        technologies: ["Python", "OpenAI", "FastAPI", "Redis"]
    },
    {
        id: 8,
        image: "/images/outreach.png",
        title: "Outreach - Marketing Automation Platform",
        description: "A comprehensive marketing automation platform that helps businesses create, manage, and optimize their outreach campaigns across multiple channels.",
        category: "Marketing • Automation",
        technologies: ["React", "Node.js", "AWS", "SendGrid"]
    }
]

export default function WorkPage() {
    const [selectedCategory, setSelectedCategory] = useState('All')
    
    const categories = ['All', 'AI', 'Dashboard', 'Automation', 'CRM', 'Marketing']
    
    const filteredWork = selectedCategory === 'All' 
        ? workItems 
        : workItems.filter(item => item.category.includes(selectedCategory))

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

                {/* Category Filter */}
                <div className="mb-12">
                    <div className="flex flex-wrap gap-3">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-6 py-2 rounded-full border transition-all duration-300 font-helvetica ${
                                    selectedCategory === category
                                        ? 'border-white bg-white text-black'
                                        : 'border-white/20 bg-black hover:bg-white/10 text-white'
                                }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Work Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredWork.map((item) => (
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
            <div className="relative w-full h-64 overflow-hidden">
                {item.image.endsWith('.mov') ? (
                    <video
                        src={item.image}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                ) : (
                    <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            
            <div className="p-6">
                <div className="mb-3">
                    <span className="text-sm text-white/60 font-helvetica">{item.category}</span>
                </div>
                
                <h3 className="text-xl font-helvetica font-normal mb-3 text-white group-hover:text-white transition-colors">
                    {item.title}
                </h3>
                
                <p className="text-white/80 font-helvetica mb-4 text-sm leading-relaxed">
                    {item.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                    {item.technologies.map((tech, index) => (
                        <span
                            key={index}
                            className="px-3 py-1 text-xs rounded-full bg-white/10 border border-white/20 text-white font-helvetica"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
                
                <div className="flex items-center justify-between">
                    <button className="text-white/80 hover:text-white transition-colors font-helvetica text-sm">
                        View Details
                    </button>
                    <ExternalLink className="w-4 h-4 text-white/60 group-hover:text-white transition-colors" />
                </div>
            </div>
        </div>
    )
}