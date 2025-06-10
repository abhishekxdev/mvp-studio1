"use client"

import { motion, HTMLMotionProps, Variants } from "framer-motion"
import { cn } from "@/lib/utils"

interface TextEffectProps extends Omit<HTMLMotionProps<"div">, "variants"> {
    children: React.ReactNode
    preset?: "fade-in-blur" | "fade-in"
    speedSegment?: number
    delay?: number
    per?: "line" | "word" | "character"
    as?: keyof JSX.IntrinsicElements
}

export function TextEffect({
    children,
    preset = "fade-in",
    speedSegment = 0.3,
    delay = 0,
    per = "word",
    as = "div",
    className,
    ...props
}: TextEffectProps) {
    const Component = motion[as as keyof typeof motion]

    const variants: Variants = {
        "fade-in-blur": {
            hidden: {
                opacity: 0,
                filter: "blur(12px)",
                y: 12,
            },
            visible: {
                opacity: 1,
                filter: "blur(0px)",
                y: 0,
                transition: {
                    type: "spring",
                    bounce: 0.3,
                    duration: 1.5,
                },
            },
        },
        "fade-in": {
            hidden: {
                opacity: 0,
                y: 20,
            },
            visible: {
                opacity: 1,
                y: 0,
                transition: {
                    type: "spring",
                    bounce: 0.3,
                    duration: 2,
                },
            },
        },
    }

    const splitText = (text: string) => {
        if (per === "line") {
            return text.split("\n")
        }
        if (per === "word") {
            return text.split(" ")
        }
        return text.split("")
    }

    const renderText = () => {
        if (typeof children !== "string") {
            return children
        }

        return splitText(children).map((word, index) => (
            <motion.span
                key={index}
                initial="hidden"
                animate="visible"
                variants={variants[preset]}
                transition={{
                    delay: delay + index * speedSegment,
                }}
                className="inline-block"
            >
                {word}
                {per === "word" && " "}
            </motion.span>
        ))
    }

    return (
        <Component
            className={cn("", className)}
            initial="hidden"
            animate="visible"
            variants={variants[preset]}
            transition={{
                delay,
            }}
            {...props}
        >
            {renderText()}
        </Component>
    )
} 