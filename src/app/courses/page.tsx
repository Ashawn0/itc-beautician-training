import { getDictionary } from '@/lib/i18n'
import CourseCard from '@/components/CourseCard'

export default async function CoursesPage() {
    const dict = await getDictionary('en')

    return (
        <div className="bg-gray-50 min-h-screen pb-20">
            {/* Header */}
            <div className="bg-brand-pink-light/30 py-16 text-center">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">{dict.coursesPage.heading}</h1>
                <p className="text-gray-600 max-w-2xl mx-auto px-4">
                    {dict.coursesPage.intro}
                </p>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {dict.courses.map((course, index) => (
                        <CourseCard key={index} course={course} />
                    ))}
                </div>
            </div>
        </div>
    )
}
