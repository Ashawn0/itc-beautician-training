import Link from 'next/link'
import Image from 'next/image'
import { Course } from '@/types'
import { getCourseImage } from '@/utils/imageUtils'

export default function CourseCard({ course, featured = false }: { course: Course; featured?: boolean }) {
    const linkHref = course.id ? `/courses/${course.id}` : '/courses'
    const imageSrc = getCourseImage(course)

    return (
        <div className={`bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden border border-gray-100 flex flex-col h-full group ${featured ? 'border-brand-pink-light' : ''}`}>
            {/* Course Image */}
            <div className="relative w-full h-48 overflow-hidden">
                <Image
                    src={imageSrc}
                    alt={course.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
            </div>

            <div className="p-6 flex-grow">
                <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-gray-900 line-clamp-2">{course.title}</h3>
                    <span className="inline-block bg-brand-pink-light text-brand-pink-dark text-xs px-2 py-1 rounded-full font-semibold whitespace-nowrap ml-2">
                        {course.duration}
                    </span>
                </div>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {course.description || course.overview}
                </p>
            </div>
            <div className="px-6 pb-6 mt-auto">
                <Link
                    href={linkHref}
                    className="inline-block w-full text-center bg-white border border-brand-pink text-brand-pink-dark hover:bg-brand-pink hover:text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300"
                >
                    View Details
                </Link>
            </div>
        </div>
    )
}
