"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface HeroProps {
    heading: string;
    subheading: string;
    viewCoursesText: string;
    contactUsText: string;
    backgroundImage: string;
}

export default function Hero({
    heading,
    subheading,
    viewCoursesText,
    contactUsText,
    backgroundImage,
}: HeroProps) {
    const [offset, setOffset] = useState(0);
    const [isMobile, setIsMobile] = useState(false);
    const heroRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        if (isMobile) return;

        let animationFrameId: number;
        let ticking = false;

        const updateParallax = () => {
            const scrollY = window.scrollY;
            if (heroRef.current && scrollY > heroRef.current.offsetHeight) {
                ticking = false;
                return;
            }
            setOffset(scrollY * 0.4);
            ticking = false;
        };

        const onScroll = () => {
            if (!ticking) {
                animationFrameId = requestAnimationFrame(updateParallax);
                ticking = true;
            }
        };

        window.addEventListener("scroll", onScroll);
        return () => {
            window.removeEventListener("scroll", onScroll);
            cancelAnimationFrame(animationFrameId);
        };
    }, [isMobile]);

    return (
        <section
            ref={heroRef}
            className="relative h-screen min-h-[700px] w-full overflow-hidden flex items-center justify-center"
        >
            {/* 1. Background Layer with Parallax */}
            <div
                className="absolute inset-0 z-0 will-change-transform"
                style={{
                    transform: isMobile ? 'none' : `translate3d(0, ${offset}px, 0)`,
                    height: '120%'
                }}
            >
                <Image
                    src={backgroundImage}
                    alt="Beauty Academy Training"
                    fill
                    className="object-cover object-center"
                    priority
                    quality={95}
                />

                {/* Strong Gradient Overlays for Text Readability */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/40 to-black/75" />
                {/* Additional center vignette for text area */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.4)_70%)]" />
            </div>

            {/* 2. Content Layer - Clean, Centered, No Box */}
            <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center pt-20">

                {/* Brand Logo - Clean & Readable */}
                <div className="mb-10 opacity-0 animate-fade-in delay-200">
                    <Image
                        src="/logos/clean2_LogoModernGradient.png"
                        alt="ITC Logo"
                        width={140}
                        height={140}
                        className="h-28 w-auto drop-shadow-xl"
                    />
                </div>

                {/* Headline - Elegant Serif with Warm Glow */}
                <h1
                    className="
                        font-playfair 
                        text-5xl md:text-7xl lg:text-8xl 
                        font-medium 
                        text-white 
                        mb-8 
                        leading-tight
                        tracking-tight 
                        opacity-0 
                        animate-fade-up delay-300
                        max-w-5xl
                    "
                    style={{
                        textShadow: '0 2px 12px rgba(0,0,0,0.7), 0 4px 24px rgba(0,0,0,0.5), 0 0 40px rgba(236,72,153,0.15)'
                    }}
                >
                    {heading}
                </h1>

                {/* Subheadline - Modern Sans with Strong Shadow */}
                <p
                    className="
                        font-inter 
                        text-lg md:text-xl 
                        text-white 
                        mb-12 
                        max-w-2xl 
                        mx-auto 
                        leading-relaxed 
                        font-light
                        opacity-0 
                        animate-fade-up delay-500
                    "
                    style={{
                        textShadow: '0 2px 12px rgba(0,0,0,0.8), 0 4px 24px rgba(0,0,0,0.6), 0 0 30px rgba(0,0,0,0.4)'
                    }}
                >
                    {subheading}
                </p>

                {/* CTAs - Clean Pills */}
                <div className="
                    flex flex-col sm:flex-row 
                    gap-6 
                    justify-center 
                    items-center
                    opacity-0 
                    animate-fade-up delay-700
                ">
                    <Link
                        href="/courses"
                        className="
                            rounded-full 
                            bg-rose-600 
                            text-white 
                            px-10 py-4 
                            text-base 
                            font-medium 
                            tracking-wide
                            transition-all 
                            duration-300 
                            hover:bg-rose-700 
                            hover:scale-[1.02] 
                            shadow-lg
                        "
                    >
                        {viewCoursesText}
                    </Link>

                    <Link
                        href="/contact"
                        className="
                            rounded-full 
                            bg-transparent
                            border border-white/70
                            text-white 
                            px-10 py-4 
                            text-base 
                            font-medium 
                            tracking-wide
                            transition-all 
                            duration-300 
                            hover:bg-white 
                            hover:text-neutral-900
                            hover:scale-[1.02]
                            backdrop-blur-sm
                        "
                    >
                        {contactUsText}
                    </Link>
                </div>
            </div>

            {/* Minimal Scroll Indicator */}
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce opacity-60 hidden md:block">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7" />
                </svg>
            </div>
        </section>
    );
}
