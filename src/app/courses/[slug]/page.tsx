import { getDictionary } from '@/lib/i18n'
import Link from 'next/link'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
    const dict = await getDictionary('en')
    return dict.courses.map((course) => ({
        slug: course.id,
    }))
}

export default async function CourseDetails({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const dict = await getDictionary('en')
    const course = dict.courses.find((c) => c.id === slug)

    if (!course) {
        notFound()
    }

    return (
        <div className="bg-white min-h-screen pb-20">
            {/* Header */}
            <div className="bg-brand-pink-light/30 py-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <Link href="/courses" className="text-brand-pink-dark hover:text-pink-700 font-medium mb-4 inline-block">
                            &larr; Back to Courses
                        </Link>
                        <h1 className="text-4xl font-bold text-gray-900 mb-4">{course.title}</h1>
                        <div className="inline-block bg-brand-gold text-white px-4 py-1 rounded-full font-semibold">
                            {course.duration}
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-12">
                <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-12">

                        {/* Overview */}
                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Overview</h2>
                            <p className="text-gray-700 text-lg leading-relaxed">
                                {course.overview}
                            </p>
                        </section>

                        {/* Skills Learned */}
                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">What You Will Learn</h2>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {course.skillsLearned.map((skill, index) => (
                                    <li key={index} className="flex items-start">
                                        <svg className="w-6 h-6 text-brand-pink-dark mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span className="text-gray-700">{skill}</span>
                                    </li>
                                ))}
                            </ul>
                        </section>

                        {/* Who Should Join */}
                        {course.whoShouldJoin && (
                            <section>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">Who Should Join</h2>
                                <p className="text-gray-700">{course.whoShouldJoin}</p>
                            </section>
                        )}

                        {/* Certification */}
                        {course.certification && (
                            <section className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                                <h2 className="text-xl font-bold text-gray-900 mb-2">Certification</h2>
                                <p className="text-gray-700">{course.certification}</p>
                            </section>
                        )}
                    </div>

                    {/* Sidebar CTA */}
                    <div className="lg:col-span-1">
                        <div className="bg-white shadow-lg rounded-2xl p-8 border border-gray-100 sticky top-24">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Interested in this course?</h3>
                            <p className="text-gray-600 mb-6">
                                Enquire now to get more details about fees, start dates, and admission.
                            </p>
                            <Link
                                href={`/contact?course=${encodeURIComponent(course.title)}`}
                                className="block w-full bg-brand-pink-dark text-white text-center py-3 rounded-full font-bold hover:bg-pink-600 transition-colors shadow-md"
                            >
                                Enquire Now
                            </Link>
                            <div className="mt-6 pt-6 border-t border-gray-100 text-center">
                                <p className="text-sm text-gray-500 mb-2">Have questions?</p>
                                <p className="font-semibold text-gray-900">Call us at 98XXXXXXXX</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
