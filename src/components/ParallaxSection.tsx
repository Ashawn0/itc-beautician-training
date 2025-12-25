'use client'

import { ReactNode } from 'react'
import Image from 'next/image'
import { useParallax } from '@/hooks/useScrollAnimation'

interface ParallaxSectionProps {
    children: ReactNode
    imageSrc: string
    overlayOpacity?: number
    overlayColor?: 'dark' | 'light'
    className?: string
    minHeight?: string
}

export default function ParallaxSection({
    children,
    imageSrc,
    overlayOpacity = 0.5,
    overlayColor = 'dark',
    className = '',
    minHeight = '600px',
}: ParallaxSectionProps) {
    const { elementRef, offset } = useParallax()

    // Use gradient overlays for better text readability
    const overlayStyle = overlayColor === 'dark'
        ? 'bg-gradient-to-b from-black/70 via-black/50 to-black/70'
        : 'bg-gradient-to-b from-white/80 via-white/60 to-white/80'

    return (
        <div
            ref={elementRef}
            className={`parallax-container relative ${className}`}
            style={{ minHeight }}
        >
            {/* Parallax Background */}
            <div className="parallax-bg">
                <Image
                    src={imageSrc}
                    alt="Background"
                    fill
                    className="object-cover"
                    style={{ transform: `translateY(${offset * 0.3}px)` }}
                    priority
                />
            </div>

            {/* Gradient Overlay for Text Readability */}
            <div
                className={`absolute inset-0 ${overlayStyle}`}
                style={{ opacity: overlayOpacity }}
            />

            {/* Content */}
            <div className="relative z-10">
                {children}
            </div>
        </div>
    )
}

