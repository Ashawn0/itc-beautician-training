'use client'

import { ReactNode } from 'react'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

type AnimationType = 'fadeUp' | 'fadeLeft' | 'fadeRight' | 'fadeIn' | 'scaleIn'

interface AnimatedSectionProps {
    children: ReactNode
    animation?: AnimationType
    delay?: number
    className?: string
    threshold?: number
}

export default function AnimatedSection({
    children,
    animation = 'fadeUp',
    delay = 0,
    className = '',
    threshold = 0.1,
}: AnimatedSectionProps) {
    const { elementRef, isVisible } = useScrollAnimation({ threshold, triggerOnce: true })

    const animationClass = `animate-${animation.replace(/([A-Z])/g, '-$1').toLowerCase()}`
    const delayClass = delay > 0 ? `delay-${delay}` : ''

    return (
        <div
            ref={elementRef}
            className={`${className} ${isVisible ? `${animationClass} ${delayClass}` : 'opacity-0'}`}
        >
            {children}
        </div>
    )
}
