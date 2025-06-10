"use client"

import React from "react"
import { motion, HTMLMotionProps, Variants } from "framer-motion"
import { cn } from "@/lib/utils"

interface AnimatedGroupProps extends Omit<HTMLMotionProps<"div">, "variants"> {
    children: React.ReactNode
    variants?: {
        container?: Variants
        item?: Variants
    }
}

export function AnimatedGroup({
    children,
    variants,
    className,
    ...props
}: AnimatedGroupProps) {
    return (
        <motion.div
            className={cn("", className)}
            initial="hidden"
            animate="visible"
            variants={variants?.container}
            {...props}
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