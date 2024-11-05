"use client";
import { motion, useScroll, useTransform, useSpring, useInView, MotionStyle } from "framer-motion";
import { useRef, useEffect, useState } from "react";

interface ParallaxSectionProps {
    children: React.ReactNode;
    speed?: number;
    className?: string;
    direction?: "up" | "down" | "left" | "right";
    offset?: ["start end" | "end start" | string, "start end" | "end start" | string];
    springConfig?: {
        stiffness?: number;
        damping?: number;
        mass?: number;
    };
    delay?: number;
    fadeIn?: boolean;
    scale?: boolean;
    rotate?: boolean;
    mouseParallax?: boolean;
}

export const ParallaxSection = ({
    children,
    speed = 0.5,
    className = "",
    direction = "up",
    // offset = ["start end", "end start"],
    springConfig = {
        stiffness: 100,
        damping: 30,
        mass: 1
    },
    delay = 0,
    fadeIn = false,
    scale = false,
    rotate = false,
    mouseParallax = false,
}: ParallaxSectionProps) => {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: false, margin: "-20%" });
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const { scrollYProgress } = useScroll({
        target: ref,
        // offset
    });

    // Smooth scroll progress
    const smoothProgress = useSpring(scrollYProgress, springConfig);

    // Define transforms at the component level
    const distance = 100 * speed;

    // Create all possible transform values
    const transformUp = useTransform(smoothProgress, [0, 1], [distance, -distance]);
    const transformDown = useTransform(smoothProgress, [0, 1], [-distance, distance]);
    const transformLeft = useTransform(smoothProgress, [0, 1], [distance, -distance]);
    const transformRight = useTransform(smoothProgress, [0, 1], [-distance, distance]);

    // Additional animation properties
    const scaleValue = useTransform(smoothProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
    const rotateValue = useTransform(smoothProgress, [0, 1], [0, 360]);
    const opacityValue = useTransform(smoothProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

    // Mouse parallax effect
    useEffect(() => {
        if (!mouseParallax) return;

        const handleMouseMove = (event: MouseEvent) => {
            const { clientX, clientY } = event;
            const windowWidth = window.innerWidth;
            const windowHeight = window.innerHeight;

            setMousePosition({
                x: (clientX - windowWidth / 2) / windowWidth,
                y: (clientY - windowHeight / 2) / windowHeight,
            });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [mouseParallax]);

    // Get the appropriate transform based on direction
    const getDirectionalTransform = () => {
        switch (direction) {
            case "up":
                return { y: transformUp };
            case "down":
                return { y: transformDown };
            case "left":
                return { x: transformLeft };
            case "right":
                return { x: transformRight };
            default:
                return { y: transformUp };
        }
    };

    // Combine all animation properties
    const animationStyle: MotionStyle = {
        ...getDirectionalTransform(),
        ...(scale && { scale: scaleValue }),
        ...(rotate && { rotate: rotateValue }),
        ...(fadeIn && { opacity: opacityValue }),
        ...(mouseParallax && {
            x: mousePosition.x * 50,
            y: mousePosition.y * 50,
        })
    };

    return (
        <div
            ref={ref}
            className={`relative overflow-hidden ${className}`}
        >
            <motion.div
                style={animationStyle}
                initial={fadeIn ? { opacity: 0 } : undefined}
                animate={
                    isInView
                        ? { opacity: 1, y: 0, x: 0 }
                        : { opacity: fadeIn ? 0 : 1 }
                }
                transition={{
                    delay,
                    type: "spring",
                    ...springConfig
                }}
            >
                {children}
            </motion.div>
        </div>
    );
};