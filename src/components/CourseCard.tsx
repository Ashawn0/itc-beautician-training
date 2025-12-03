import Link from 'next/link'

type Course = {
    id?: string
    title: string
    duration: string
    description?: string
    overview?: string
}

export default function CourseCard({ course, featured = false }: { course: Course; featured?: boolean }) {
    // If it's a featured course from home page, it might not have an ID in the JSON structure I defined for featuredCourses
    // But I should probably link it to the main course page or a specific slug.
    // In my JSON, featuredCourses items don't have IDs, but they match titles of full courses.
    // For MVP, I'll link to /courses if no ID, or /courses/[id] if ID exists.

    // Actually, I should probably map featured courses to their IDs or just use the title to find the ID.
    // For now, let's assume we pass an ID or just link to /courses.

    const linkHref = course.id ? `/courses/${course.id}` : '/courses'

    return (
        <div className={`bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden border border-gray-100 flex flex-col h-full ${featured ? 'border-brand-pink-light' : ''}`}>
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
