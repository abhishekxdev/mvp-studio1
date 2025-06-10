"use client"

import React from "react"
import { motion, HTMLMotionProps } from "framer-motion"
import { cn } from "@/lib/utils"

interface AnimatedGroupProps {
    children: React.ReactNode
    className?: string
    variants?: {
        container?: any
        item?: any
    }
}

export function AnimatedGroup({
    children,
    className,
    variants,
}: AnimatedGroupProps) {
    return (
        <motion.div
            className={className}
            variants={variants?.container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
        >
            {React.Children.map(children, (child) => {
                if (!React.isValidElement(child)) return child

                return React.cloneElement(
                    child as React.ReactElement<HTMLMotionProps<any>>,
                    {
                        variants: variants?.item,
                    }
                )
            })}
        </motion.div>
    )
} 