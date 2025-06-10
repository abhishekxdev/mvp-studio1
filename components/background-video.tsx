"use client"

import { useEffect, useRef } from 'react'

export function BackgroundVideo() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    // Ensure video plays
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log("Video autoplay failed:", error)
      })
    }
  }, [])

  return (
    <div className="fixed inset-0 -z-10 h-full w-full overflow-hidden bg-black">
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute h-full w-full object-cover"
        key="dotdot-animation"
      >
        <source src="/dotdot.mp4" type="video/mp4" />
      </video>
    </div>
  )
} 