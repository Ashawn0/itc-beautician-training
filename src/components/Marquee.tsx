"use client";

import React from "react";

interface MarqueeProps {
    items: string[];
    direction?: "left" | "right";
    speed?: "fast" | "normal" | "slow";
    className?: string;
}

export default function Marquee({
    items,
    direction = "left",
    speed = "normal",
    className = "",
}: MarqueeProps) {
    const duration = {
        fast: "20s",
        normal: "40s",
        slow: "60s",
    }[speed];

    return (
        <div className={`relative flex overflow-hidden ${className}`}>
            <div
                className="flex min-w-full shrink-0 gap-8 py-4 animate-marquee"
                style={{
                    animationDuration: duration,
                    animationDirection: direction === "right" ? "reverse" : "normal",
                }}
            >
                {items.map((item, index) => (
                    <span
                        key={index}
                        className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-gold-400 opacity-50 whitespace-nowrap"
                    >
                        {item}
                    </span>
                ))}
            </div>
            <div
                className="flex min-w-full shrink-0 gap-8 py-4 animate-marquee"
                aria-hidden="true"
                style={{
                    animationDuration: duration,
                    animationDirection: direction === "right" ? "reverse" : "normal",
                }}
            >
                {items.map((item, index) => (
                    <span
                        key={index}
                        className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-gold-400 opacity-50 whitespace-nowrap"
                    >
                        {item}
                    </span>
                ))}
            </div>
        </div>
    );
}
