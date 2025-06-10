"use client"

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { TextEffect } from '@/components/motion-primitives/text-effect'
import { AnimatedGroup } from '@/components/motion-primitives/animated-group'
import { AnimatedBadge } from '@/components/ui/badge-animated'

const transitionVariants = {
    item: {
        hidden: {
            opacity: 0,
            filter: 'blur(12px)',
            y: 12,
        },
        visible: {
            opacity: 1,
            filter: 'blur(0px)',
            y: 0,
            transition: {
                type: 'spring',
                bounce: 0.3,
                duration: 1.5,
            },
        },
    },
}

const workItems = [
    {
        id: 1,
        image: "/images/Nurodeep1.mov",
        title: "NuroDeep - AI Powered Dashboard",
        description: "UI/UX Design • Development"
    },
    {
        id: 2,
        image: "/images/VorkelAI Snap.png",
        title: "VorkelAI - AI-Powered Platform",
        description: "UI/UX Design • Development"
    },
    {
        id: 3,
        image: "/images/Phantom.png",
        title: "Phantom - Task Organizer Dashboard",
        description: "Design • Development"
    },
    {
        id: 4,
        image: "/images/Horizon.png",
        title: "Horizon - Modern Dashboard",
        description: "UI/UX Design • Development"
    },
    {
        id: 5,
        image: "/images/crm.png",
        title: "CRM - Customer Relationship Management",
        description: "UI/UX Design • Development"
    },
    {
        id: 6,
        image: "/images/don.png",
        title: "Don - Donation Management Platform",
        description: "UI/UX Design • Development"
    },
    {
        id: 7,
        image: "/images/emailai.png",
        title: "EmailAI - AI-Powered Email Assistant",
        description: "AI • Development"
    },
    {
        id: 8,
        image: "/images/outreach.png",
        title: "Outreach - Marketing Automation Platform",
        description: "UI/UX Design • Development"
    }
]

export function HeroSection() {
    const [currentWork, setCurrentWork] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentWork((prev) => {
                const next = (prev + 1) % workItems.length
                console.log('Switching to work:', next, workItems[next].title)
                return next
            })
        }, 2000)

        return () => clearInterval(interval)
    }, [])

    return (
        <main className="overflow-hidden">
            <section>
                <div className="relative pt-32 md:pt-44">
                    <div className="relative z-10">
                        <div className="flex flex-col items-start">
                            <AnimatedBadge className="mb-4 text-white">15+ MVPs Delivered</AnimatedBadge>
                            <TextEffect
                                as="h1"
                                className="text-5xl md:text-7xl lg:text-8xl font-helvetica font-normal tracking-tight mb-6 text-left"
                                preset="fade-in-blur"
                                per="line"
                            >
                                Start Smart with MVPs that{" "}
                                <span className="bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent">
                                    Dominate
                                </span>
                                {" "}&{" "}
                                <span className="bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent">
                                    Scale
                                </span>
                            </TextEffect>
                           

                            <AnimatedGroup
                                variants={{
                                    container: {
                                        visible: {
                                            transition: {
                                                staggerChildren: 0.05,
                                                delayChildren: 0.75,
                                            },
                                        },
                                    },
                                    ...transitionVariants,
                                }}
                                className="mt-12 flex flex-col items-start justify-start gap-4 md:flex-row">
                                <a
                                    href="https://calendly.com/vishnoiabhishek29/30min"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-6 py-3 rounded-full border border-white/10 bg-gradient-to-r from-black/80 via-gray-900/80 to-black/80 backdrop-blur-sm shadow-[inset_0_1px_3px_rgba(255,255,255,0.1),_0_4px_10px_rgba(0,0,0,0.3)] transition-all duration-300 hover:from-black/90 hover:via-gray-900/90 hover:to-black/90 active:scale-[0.98] inline-flex items-center"
                                >
                                    <span className="text-center font-helvetica font-normal text-[16px] tracking-[-0.02em] text-white">
                                        Book An Intro Call
                                    </span>
                                </a>
                                
                                <Link
                                    href="/work"
                                    className="px-6 py-3 rounded-full border border-white/10 bg-gradient-to-r from-black/80 via-gray-900/80 to-black/80 backdrop-blur-sm shadow-[inset_0_1px_3px_rgba(255,255,255,0.1),_0_4px_10px_rgba(0,0,0,0.3)] transition-all duration-300 hover:from-black/90 hover:via-gray-900/90 hover:to-black/90 active:scale-[0.98] inline-flex items-center"
                                >
                                    <span className="text-center font-helvetica font-normal text-[16px] tracking-[-0.02em] text-white">
                                        View Our Work
                                    </span>
                                </Link>
                            </AnimatedGroup>
                        </div>
                    </div>

                    <AnimatedGroup
                        variants={{
                            container: {
                                visible: {
                                    transition: {
                                        staggerChildren: 0.05,
                                        delayChildren: 0.75,
                                    },
                                },
                            },
                            ...transitionVariants,
                        }}>
                        <div className="relative mt-8 overflow-hidden sm:mt-12 md:mt-20">
                            <div className="inset-shadow-2xs ring-background dark:inset-shadow-white/20 bg-background relative overflow-hidden rounded-2xl border p-4 shadow-lg shadow-zinc-950/15 ring-1">
                                <div className="relative w-full" style={{ aspectRatio: '16/9' }}>
                                    {workItems[currentWork].image.endsWith('.mov') ? (
                                        <div className="absolute inset-0">
                                            <video
                                                key={workItems[currentWork].image}
                                                src={workItems[currentWork].image}
                                                autoPlay
                                                loop
                                                muted
                                                playsInline
                                                className="w-full h-full object-contain rounded-lg"
                                                onError={(e) => {
                                                    console.error('Error loading video:', workItems[currentWork].image)
                                                }}
                                            />
                                        </div>
                                    ) : (
                                        <Image
                                            key={workItems[currentWork].image}
                                            src={workItems[currentWork].image}
                                            alt={workItems[currentWork].title}
                                            fill
                                            className="object-contain rounded-lg"
                                            onError={(e) => {
                                                console.error('Error loading image:', workItems[currentWork].image)
                                            }}
                                            onLoad={() => {
                                                console.log('Image loaded:', workItems[currentWork].image)
                                            }}
                                        />
                                    )}
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60">
                                    <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                                        <h3 className="text-lg md:text-xl font-helvetica font-normal text-white mb-1 md:mb-2">{workItems[currentWork].title}</h3>
                                        <p className="text-sm md:text-base font-helvetica text-gray-300">{workItems[currentWork].description}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-center items-center space-x-2 mt-4 md:mt-6">
                                {workItems.map((_, index) => (
                                    <div
                                        key={index}
                                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                            index === currentWork ? 'bg-white scale-125' : 'bg-white/30'
                                        }`}
                                    />
                                ))}
                            </div>
                        </div>
                    </AnimatedGroup>
                </div>
            </section>
        </main>
    )
}