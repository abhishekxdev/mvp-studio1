"use client"

import { useState, useEffect, useRef } from 'react'

interface CountUpProps {
  start?: number
  end: number
  duration?: number
  decimals?: number
}

export default function CountUp({
  start = 0,
  end,
  duration = 2,
  decimals = 0,
}: CountUpProps) {
  const [value, setValue] = useState(start)
  const countRef = useRef<HTMLSpanElement>(null)
  const countedRef = useRef(false)
  
  useEffect(() => {
    let observer: IntersectionObserver
    let timeoutId: NodeJS.Timeout
    
    if (countRef.current && !countedRef.current) {
      observer = new IntersectionObserver(
        (entries) => {
          const [entry] = entries
          if (entry.isIntersecting) {
            const startTime = performance.now()
            
            const updateCount = () => {
              const now = performance.now()
              const elapsed = now - startTime
              const progress = Math.min(elapsed / (duration * 1000), 1)
              
              const currentValue = progress * (end - start) + start
              setValue(currentValue)
              
              if (progress < 1) {
                timeoutId = setTimeout(updateCount, 16)
              } else {
                countedRef.current = true
              }
            }
            
            updateCount()
          }
        },
        { threshold: 0.1 }
      )
      
      observer.observe(countRef.current)
    }
    
    return () => {
      if (observer && countRef.current) {
        observer.unobserve(countRef.current)
      }
      clearTimeout(timeoutId)
    }
  }, [start, end, duration])
  
  return <span ref={countRef}>{value.toFixed(decimals)}</span>
}