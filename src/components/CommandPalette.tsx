"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface CommandItem {
    id: string;
    title: string;
    href: string;
    category: "Page" | "Course" | "Action";
}

const items: CommandItem[] = [
    { id: "home", title: "Home", href: "/", category: "Page" },
    { id: "about", title: "About Us", href: "/about", category: "Page" },
    { id: "courses", title: "All Courses", href: "/courses", category: "Page" },
    { id: "trainer", title: "Our Trainer", href: "/trainer", category: "Page" },
    { id: "gallery", title: "Gallery", href: "/gallery", category: "Page" },
    { id: "contact", title: "Contact Us", href: "/contact", category: "Page" },
    { id: "basic", title: "Basic Beautician Course", href: "/courses", category: "Course" },
    { id: "diploma", title: "Diploma in Beautician", href: "/courses", category: "Course" },
    { id: "makeup", title: "Professional Makeup", href: "/courses", category: "Course" },
    { id: "hair", title: "Hair Cutting & Styling", href: "/courses", category: "Course" },
    { id: "enroll", title: "Enroll Now", href: "/contact", category: "Action" },
];

export default function CommandPalette() {
    const [isOpen, setIsOpen] = useState(false);
    const [query, setQuery] = useState("");
    const router = useRouter();

    useEffect(() => {
        const onKeydown = (e: KeyboardEvent) => {
            if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault();
                setIsOpen((open) => !open);
            }
        };
        window.addEventListener("keydown", onKeydown);
        return () => window.removeEventListener("keydown", onKeydown);
    }, []);

    const filteredItems = items.filter((item) =>
        item.title.toLowerCase().includes(query.toLowerCase())
    );

    const handleSelect = (href: string) => {
        setIsOpen(false);
        router.push(href);
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[1000] flex items-start justify-center pt-[20vh] px-4">
            <div
                className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
                onClick={() => setIsOpen(false)}
            />
            <div className="relative w-full max-w-xl glass-dark rounded-2xl shadow-2xl overflow-hidden animate-scale-in">
                <div className="flex items-center border-b border-white/10 px-4">
                    <svg
                        className="w-5 h-5 text-white/50 mr-3"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                    </svg>
                    <input
                        className="w-full bg-transparent py-4 text-lg text-white placeholder-white/50 focus:outline-none"
                        placeholder="Search pages, courses, or actions..."
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        autoFocus
                    />
                    <div className="text-xs text-white/40 border border-white/20 rounded px-2 py-1">
                        ESC
                    </div>
                </div>
                <div className="max-h-[60vh] overflow-y-auto py-2">
                    {filteredItems.length === 0 ? (
                        <div className="px-4 py-8 text-center text-white/50">
                            No results found.
                        </div>
                    ) : (
                        <>
                            {["Page", "Course", "Action"].map((category) => {
                                const categoryItems = filteredItems.filter(
                                    (item) => item.category === category
                                );
                                if (categoryItems.length === 0) return null;
                                return (
                                    <div key={category}>
                                        <div className="px-4 py-2 text-xs font-semibold text-white/40 uppercase tracking-wider">
                                            {category}
                                        </div>
                                        {categoryItems.map((item) => (
                                            <button
                                                key={item.id}
                                                onClick={() => handleSelect(item.href)}
                                                className="w-full text-left px-4 py-3 flex items-center justify-between text-white/90 hover:bg-white/10 transition-colors group"
                                            >
                                                <span>{item.title}</span>
                                                {category === "Action" && (
                                                    <svg
                                                        className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-rose-400"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth={2}
                                                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                                                        />
                                                    </svg>
                                                )}
                                            </button>
                                        ))}
                                    </div>
                                );
                            })}
                        </>
                    )}
                </div>
                <div className="px-4 py-3 border-t border-white/10 bg-white/5 text-xs text-white/40 flex justify-between">
                    <span>
                        Use <kbd className="font-sans">↑</kbd> <kbd className="font-sans">↓</kbd> to navigate
                    </span>
                    <span>
                        <kbd className="font-sans">↵</kbd> to select
                    </span>
                </div>
            </div>
        </div>
    );
}
