"use client"

import React, { useState, useEffect } from 'react'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'

interface AnimatedBadgeProps {
  children: React.ReactNode
  className?: string
}

export function AnimatedBadge({ children, className }: AnimatedBadgeProps) {
  const [animate, setAnimate] = useState(false)
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      setAnimate(true)
    }, 100)
    
    return () => clearTimeout(timeout)
  }, [])
  
  return (
    <Badge 
      className={cn(
        "bg-primary/10 text-primary-foreground border-primary/20 transition-all duration-700 transform",
        animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2",
        className
      )}
    >
      <span className="mr-1.5 h-2 w-2 rounded-full bg-green-500 inline-block animate-pulse" />
      {children}
    </Badge>
  )
}