import React from "react";
import Image from "next/image";

interface BentoItem {
    title: string;
    description: string;
    icon?: React.ReactNode;
    image?: string;
    className?: string;
}

interface AboutBentoProps {
    mission: BentoItem;
    vision: BentoItem;
    stats?: { label: string; value: string }[];
}

export default function AboutBento({ mission, vision, stats }: AboutBentoProps) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* Mission Tile */}
            <div className={`${stats && stats.length > 0 ? 'md:col-span-2' : 'md:col-span-3'} glass-light p-8 rounded-3xl hover:scale-[1.02] transition-all duration-300 ease-out relative overflow-hidden group`}>
                <div className="relative z-10">
                    <div className="w-16 h-16 gradient-rose rounded-full flex items-center justify-center mb-6 shadow-glow-rose">
                        {mission.icon}
                    </div>
                    <h3 className="text-3xl font-bold text-neutral-900 mb-4">{mission.title}</h3>
                    <p className="text-neutral-700 leading-relaxed text-lg max-w-xl">
                        {mission.description}
                    </p>
                </div>
                <div className="absolute top-0 right-0 w-64 h-64 bg-rose-100 rounded-full blur-3xl -z-0 opacity-50 group-hover:opacity-70 transition-opacity duration-500" />
            </div>

            {/* Stats Tile - Vertical (Optional) */}
            {stats && stats.length > 0 && (
                <div className="glass-dark p-8 rounded-3xl hover:scale-[1.02] transition-all duration-300 ease-out text-white flex flex-col justify-center relative overflow-hidden">
                    <div className="relative z-10 space-y-8">
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="text-4xl font-bold font-playfair mb-2 text-gold-400">
                                    {stat.value}
                                </div>
                                <div className="text-sm uppercase tracking-wider opacity-80">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 to-neutral-800 -z-10" />
                </div>
            )}

            {/* Vision Tile - Image Background */}
            <div className="md:col-span-3 glass-light p-8 rounded-3xl hover:scale-[1.02] transition-all duration-300 ease-out relative overflow-hidden min-h-[300px] flex items-center">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/uploads/PHOTO-2025-12-03-19-48-52.jpg"
                        alt="Vision Background"
                        fill
                        className="object-cover opacity-20"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent" />
                </div>
                <div className="relative z-10 max-w-2xl">
                    <div className="w-16 h-16 gradient-gold rounded-full flex items-center justify-center mb-6 shadow-glow-gold">
                        {vision.icon}
                    </div>
                    <h3 className="text-3xl font-bold text-neutral-900 mb-4">{vision.title}</h3>
                    <p className="text-neutral-700 leading-relaxed text-lg">
                        {vision.description}
                    </p>
                </div>
            </div>
        </div>
    );
}
