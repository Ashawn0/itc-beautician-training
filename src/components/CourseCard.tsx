import Link from 'next/link'
import Image from 'next/image'
import { Course } from '@/types'

export default function CourseCard({ course, featured = false }: { course: Course; featured?: boolean }) {
    const linkHref = `/courses/${course.id}`

    return (
        <div className={`
            group 
            relative 
            flex flex-col 
            h-full 
            bg-white 
            rounded-[2rem] 
            overflow-hidden 
            transition-all 
            duration-500 
            hover:-translate-y-2
            ${featured ? 'shadow-glow-rose ring-1 ring-rose-100' : 'shadow-soft hover:shadow-large'}
        `}>
            {/* Image Container */}
            <div className="relative w-full aspect-[4/3] overflow-hidden">
                <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 transition-opacity duration-300" />

                {/* Duration Badge - Floating */}
                <div className="absolute top-4 left-4">
                    <span className="
                        inline-flex items-center 
                        glass-light 
                        px-4 py-1.5 
                        rounded-full 
                        text-xs font-semibold 
                        tracking-wide 
                        text-neutral-900 
                        backdrop-blur-md
                    ">
                        {course.duration}
                    </span>
                </div>
            </div>

            {/* Content */}
            <div className="flex flex-col flex-grow p-8 relative">
                <h3 className="
                    font-playfair 
                    text-2xl 
                    font-bold 
                    text-neutral-900 
                    mb-3 
                    leading-tight 
                    group-hover:text-rose-600 
                    transition-colors 
                    duration-300
                ">
                    {course.title}
                </h3>

                <p className="
                    font-inter 
                    text-neutral-600 
                    text-sm 
                    leading-relaxed 
                    mb-8 
                    line-clamp-3 
                    flex-grow
                ">
                    {course.description}
                </p>

                {/* Action Area */}
                <div className="mt-auto flex items-center justify-between">
                    <Link
                        href={linkHref}
                        className="
                            inline-flex items-center 
                            text-sm font-bold 
                            text-rose-600 
                            tracking-wide 
                            uppercase 
                            group/link
                        "
                    >
                        <span className="border-b-2 border-transparent group-hover/link:border-rose-600 transition-all duration-300">
                            View Details
                        </span>
                        <svg
                            className="w-4 h-4 ml-2 transform transition-transform duration-300 group-hover/link:translate-x-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </Link>
                </div>
            </div>
        </div>
    )
}

