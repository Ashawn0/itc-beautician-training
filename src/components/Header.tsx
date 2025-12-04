'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useScrollShrink } from '@/hooks/useScrollAnimation'

type NavDict = {
    home: string
    about: string
    courses: string
    trainer: string
    gallery: string
    contact: string
}

export default function Header({ nav }: { nav: NavDict }) {
    const [isOpen, setIsOpen] = useState(false)
    const [isVisible, setIsVisible] = useState(false)
    const pathname = usePathname()
    const isScrolled = useScrollShrink()

    useEffect(() => {
        // Fade in animation on mount
        setTimeout(() => setIsVisible(true), 100)
    }, [])

    const navItems = [
        { name: nav.home, href: '/' },
        { name: nav.about, href: '/about' },
        { name: nav.courses, href: '/courses' },
        { name: nav.trainer, href: '/trainer' },
        { name: nav.gallery, href: '/gallery' },
        { name: nav.contact, href: '/contact' },
    ]

    return (
        <>
            {/* Desktop Floating Nav */}
            <header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
                    }`}
            >
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-6">
                    <nav
                        className={`glass rounded-full shadow-medium mx-auto transition-all duration-300 ${isScrolled ? 'max-w-5xl py-3' : 'max-w-6xl py-4'
                            }`}
                    >
                        <div className="flex justify-between items-center px-6">
                            {/* Logo */}
                            <Link href="/" className="flex-shrink-0 transition-transform duration-300 hover:scale-105">
                                <Image
                                    src="/logos/clean2_LogoFull.png"
                                    alt="ITC Beautician Training"
                                    width={isScrolled ? 120 : 140}
                                    height={isScrolled ? 40 : 45}
                                    className="h-auto transition-all duration-300"
                                />
                            </Link>

                            {/* Desktop Navigation */}
                            <div className="hidden lg:flex items-center space-x-1">
                                {navItems.map((item) => (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${pathname === item.href
                                            ? 'text-rose-600 bg-rose-50'
                                            : 'text-neutral-700 hover:text-rose-600 hover:bg-rose-50/50'
                                            }`}
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </div>

                            {/* CTA Button */}
                            <Link
                                href="/contact"
                                className="hidden lg:inline-flex items-center px-6 py-2.5 bg-rose-600 text-white rounded-full font-semibold transition-all duration-300 hover:bg-rose-700 shadow-glow-rose hover:shadow-glow-rose hover:scale-105"
                            >
                                Enroll Now
                            </Link>

                            {/* Mobile Menu Button */}
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="lg:hidden p-2 rounded-full hover:bg-rose-50 transition-colors"
                                aria-label="Toggle menu"
                            >
                                <svg
                                    className="w-6 h-6 text-neutral-700"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    {isOpen ? (
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    ) : (
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    )}
                                </svg>
                            </button>
                        </div>
                    </nav>
                </div>
            </header>

            {/* Mobile Slide-in Menu */}
            <div
                className={`fixed inset-0 z-40 lg:hidden transition-opacity duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                    }`}
            >
                {/* Backdrop */}
                <div
                    className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                    onClick={() => setIsOpen(false)}
                />

                {/* Menu Panel */}
                <div
                    className={`absolute right-0 top-0 bottom-0 w-80 max-w-[85vw] glass-dark transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'
                        }`}
                >
                    {/* Close Button */}
                    <button
                        onClick={() => setIsOpen(false)}
                        className="absolute top-6 right-6 p-2 rounded-full hover:bg-white/10 transition-colors"
                    >
                        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>

                    {/* Logo */}
                    <div className="p-8 border-b border-white/10">
                        <Image
                            src="/logos/clean2_LogoVertical.png"
                            alt="ITC Beautician Training"
                            width={160}
                            height={160}
                            className="h-auto mx-auto"
                        />
                    </div>

                    {/* Menu Items */}
                    <nav className="p-6 space-y-2">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                onClick={() => setIsOpen(false)}
                                className={`block px-4 py-3 rounded-xl font-medium transition-all duration-300 ${pathname === item.href
                                    ? 'text-white bg-rose-600'
                                    : 'text-white/90 hover:text-white hover:bg-white/10'
                                    }`}
                            >
                                {item.name}
                            </Link>
                        ))}

                        {/* Mobile CTA */}
                        <Link
                            href="/contact"
                            onClick={() => setIsOpen(false)}
                            className="block mt-6 px-6 py-3 bg-rose-600 text-white text-center rounded-full font-semibold transition-all duration-300 hover:bg-rose-700 shadow-glow-rose"
                        >
                            Enroll Now
                        </Link>
                    </nav>
                </div>
            </div>
        </>
    )
}
