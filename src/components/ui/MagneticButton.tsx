"use client";

import React, { useRef, useState } from "react";

interface MagneticButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    className?: string;
    variant?: "primary" | "secondary";
}

export default function MagneticButton({
    children,
    className = "",
    variant = "primary",
    ...props
}: MagneticButtonProps) {
    const btnRef = useRef<HTMLButtonElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (!btnRef.current) return;

        const { left, top, width, height } = btnRef.current.getBoundingClientRect();
        const x = e.clientX - (left + width / 2);
        const y = e.clientY - (top + height / 2);

        setPosition({ x: x * 0.2, y: y * 0.2 });
    };

    const handleMouseLeave = () => {
        setPosition({ x: 0, y: 0 });
    };

    const baseStyles =
        "relative px-8 py-3 rounded-full font-semibold transition-all duration-300 ease-out hover:scale-105 active:scale-95";
    const variants = {
        primary: "bg-rose-600 text-white shadow-glow-rose hover:bg-rose-700",
        secondary: "bg-white text-rose-600 border border-rose-200 hover:border-rose-600",
    };

    return (
        <button
            ref={btnRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
            className={`${baseStyles} ${variants[variant]} ${className}`}
            {...props}
        >
            <span className="relative z-10">{children}</span>
        </button>
    );
}
