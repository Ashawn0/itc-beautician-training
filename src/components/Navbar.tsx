"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useScrollShrink } from "@/hooks/useScrollAnimation";

type NavDict = {
    home: string;
    about: string;
    courses: string;
    trainer: string;
    gallery: string;
    contact: string;
};

export default function Navbar({ nav }: { nav: NavDict }) {
    const [isOpen, setIsOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const pathname = usePathname();
    const isScrolled = useScrollShrink();

    useEffect(() => {
        setTimeout(() => setIsVisible(true), 100);
    }, []);

    const navItems = [
        { name: nav.home, href: "/" },
        { name: nav.about, href: "/about" },
        { name: nav.courses, href: "/courses" },
        { name: nav.trainer, href: "/trainer" },
        { name: nav.gallery, href: "/gallery" },
        { name: nav.contact, href: "/contact" },
    ];

    return (
        <>
            <header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 flex justify-center ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
                    } ${isScrolled ? "py-4" : "py-6"}`}
            >
                <nav
                    className={`
                        relative flex items-center justify-between 
                        transition-all duration-500 ease-out
                        ${isScrolled
                            ? "w-[90%] max-w-6xl bg-white/90 backdrop-blur-md shadow-lg rounded-full px-6 py-3 border border-white/20"
                            : "w-full max-w-7xl px-8 py-4 bg-transparent"
                        }
                    `}
                >
                    {/* Logo */}
                    <Link href="/" className="flex-shrink-0 relative z-10">
                        <Image
                            src="/logos/clean2_LogoFull.png"
                            alt="ITC Beautician Training"
                            width={isScrolled ? 120 : 140}
                            height={isScrolled ? 45 : 50}
                            className={`h-auto w-auto transition-all duration-300 ${!isScrolled && "brightness-0 invert"}`}
                            priority
                        />
                    </Link>

                    {/* Desktop Navigation - Centered */}
                    <div className="hidden lg:flex items-center space-x-8 absolute left-1/2 -translate-x-1/2">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`
                                    text-sm font-medium tracking-wide transition-colors duration-300
                                    ${pathname === item.href
                                        ? "text-rose-600 font-semibold"
                                        : isScrolled
                                            ? "text-neutral-600 hover:text-rose-600"
                                            : "text-white/90 hover:text-white"
                                    }
                                `}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>

                    {/* CTA Button & Mobile Toggle */}
                    <div className="flex items-center gap-4">
                        <Link
                            href="/contact"
                            className={`
                                hidden lg:inline-flex items-center justify-center
                                rounded-full font-medium transition-all duration-300
                                ${isScrolled
                                    ? "bg-rose-600 text-white hover:bg-rose-700 px-6 py-2.5 text-sm shadow-md"
                                    : "bg-white text-neutral-900 hover:bg-neutral-100 px-7 py-3 text-sm shadow-lg"
                                }
                            `}
                        >
                            Enroll Now
                        </Link>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className={`
                                lg:hidden p-2 rounded-full transition-colors
                                ${isScrolled ? "text-neutral-800 hover:bg-neutral-100" : "text-white hover:bg-white/20"}
                            `}
                            aria-label="Toggle menu"
                        >
                            <div className="w-6 h-5 relative flex flex-col justify-between">
                                <span className={`w-full h-0.5 bg-current rounded-full transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
                                <span className={`w-full h-0.5 bg-current rounded-full transition-all duration-300 ${isOpen ? "opacity-0" : ""}`} />
                                <span className={`w-full h-0.5 bg-current rounded-full transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2.5" : ""}`} />
                            </div>
                        </button>
                    </div>
                </nav>
            </header>

            {/* Mobile Slide-in Menu */}
            <div
                className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                    }`}
            >
                <div
                    className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-500"
                    onClick={() => setIsOpen(false)}
                />
                <div
                    className={`absolute right-0 top-0 bottom-0 w-[85vw] max-w-sm bg-white shadow-2xl transform transition-transform duration-500 cubic-bezier(0.22, 1, 0.36, 1) ${isOpen ? "translate-x-0" : "translate-x-full"
                        }`}
                >
                    <div className="flex flex-col h-full">
                        <div className="p-6 flex justify-between items-center border-b border-neutral-100">
                            <Image
                                src="/logos/clean2_LogoFull.png"
                                alt="ITC Beautician Training"
                                width={120}
                                height={40}
                                className="h-auto"
                            />
                            <button
                                onClick={() => setIsOpen(false)}
                                className="p-2 rounded-full hover:bg-neutral-100 transition-colors text-neutral-500"
                            >
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        <nav className="flex-1 overflow-y-auto p-6 space-y-2">
                            {navItems.map((item, idx) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    onClick={() => setIsOpen(false)}
                                    className={`block px-5 py-4 rounded-xl text-lg font-medium transition-all duration-300 ${pathname === item.href
                                            ? "text-rose-600 bg-rose-50"
                                            : "text-neutral-600 hover:text-rose-600 hover:bg-neutral-50"
                                        }`}
                                    style={{ transitionDelay: `${idx * 50}ms` }}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </nav>

                        <div className="p-6 border-t border-neutral-100 bg-neutral-50">
                            <Link
                                href="/contact"
                                onClick={() => setIsOpen(false)}
                                className="block w-full py-4 bg-rose-600 text-white text-center rounded-full font-bold text-lg shadow-lg hover:bg-rose-700 transition-all transform hover:-translate-y-1"
                            >
                                Enroll Now
                            </Link>
                            <p className="text-center text-neutral-400 text-sm mt-4">
                                © 2025 ITC Beautician Training
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
