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

    const overlayClass = overlayColor === 'dark' ? 'gradient-overlay-dark' : 'gradient-overlay-light'

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

            {/* Overlay */}
            <div
                className={`absolute inset-0 ${overlayClass}`}
                style={{ opacity: overlayOpacity }}
            />

            {/* Content */}
            <div className="relative z-10">
                {children}
            </div>
        </div>
    )
}
