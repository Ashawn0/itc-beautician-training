import Link from 'next/link'
import Image from 'next/image'
import { Course } from '@/types'
import { getCourseImage } from '@/utils/imageUtils'

export default function CourseCard({ course, featured = false }: { course: Course; featured?: boolean }) {
    const linkHref = course.id ? `/courses/${course.id}` : '/courses'
    const imageSrc = getCourseImage(course)

    return (
        <div className={`bg-white rounded-2xl shadow-soft hover-lift overflow-hidden border ${featured ? 'border-rose-200' : 'border-neutral-100'} flex flex-col h-full group`}>
            {/* Course Image */}
            <div className="relative w-full h-56 overflow-hidden">
                <Image
                    src={imageSrc}
                    alt={course.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Duration Badge */}
                <div className="absolute top-4 right-4">
                    <span className="inline-block glass px-3 py-1.5 rounded-full text-sm font-semibold text-neutral-800 shadow-medium">
                        {course.duration}
                    </span>
                </div>
            </div>

            <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-2xl font-bold text-neutral-900 mb-3 line-clamp-2 group-hover:text-rose-600 transition-colors duration-300">
                    {course.title}
                </h3>
                <p className="text-neutral-600 text-sm leading-relaxed mb-6 line-clamp-3 flex-grow">
                    {course.description || course.overview}
                </p>

                <Link
                    href={linkHref}
                    className="inline-flex items-center justify-center w-full bg-white border-2 border-rose-500 text-rose-600 hover:bg-rose-600 hover:text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 group-hover:shadow-glow-rose"
                >
                    <span>View Details</span>
                    <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </Link>
            </div>
        </div>
    )
}
