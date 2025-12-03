'use client'

import { useEffect, useState, useRef } from 'react'

interface UseScrollAnimationOptions {
    threshold?: number
    rootMargin?: string
    triggerOnce?: boolean
}

export function useScrollAnimation(
    options: UseScrollAnimationOptions = {}
) {
    const { threshold = 0.1, rootMargin = '0px', triggerOnce = true } = options
    const [isVisible, setIsVisible] = useState(false)
    const elementRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const element = elementRef.current
        if (!element) return

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true)
                        if (triggerOnce) {
                            observer.unobserve(entry.target)
                        }
                    } else if (!triggerOnce) {
                        setIsVisible(false)
                    }
                })
            },
            {
                threshold,
                rootMargin,
            }
        )

        observer.observe(element)

        return () => {
            if (element) {
                observer.unobserve(element)
            }
        }
    }, [threshold, rootMargin, triggerOnce])

    return { elementRef, isVisible }
}

export function useParallax() {
    const [offset, setOffset] = useState(0)
    const elementRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handleScroll = () => {
            if (!elementRef.current) return

            const rect = elementRef.current.getBoundingClientRect()
            const scrollPercent = (window.innerHeight - rect.top) / (window.innerHeight + rect.height)
            const parallaxOffset = scrollPercent * 100

            setOffset(parallaxOffset)
        }

        window.addEventListener('scroll', handleScroll, { passive: true })
        handleScroll() // Initial calculation

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return { elementRef, offset }
}

export function useScrollShrink() {
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }

        window.addEventListener('scroll', handleScroll, { passive: true })
        handleScroll() // Initial check

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return isScrolled
}
