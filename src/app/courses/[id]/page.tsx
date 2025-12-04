import { courses } from '@/data/courses'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import ParallaxSection from '@/components/ParallaxSection'
import AnimatedSection from '@/components/AnimatedSection'

export async function generateStaticParams() {
    return courses.map((course) => ({
        id: course.id,
    }))
}

export default async function CourseDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params
    const course = courses.find((c) => c.id === id)

    if (!course) {
        notFound()
    }

    return (
        <div className="min-h-screen bg-cream">
            {/* Hero Section */}
            <div className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
                <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]" />
                <div className="relative z-10 container mx-auto px-4 text-center text-white">
                    <AnimatedSection animation="fadeUp">
                        <span className="inline-block px-4 py-2 rounded-full bg-rose-500/20 backdrop-blur-md border border-rose-500/30 text-rose-200 font-semibold mb-6">
                            {course.duration}
                        </span>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                            {course.title}
                        </h1>
                        <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
                            {course.description}
                        </p>
                    </AnimatedSection>
                </div>
            </div>

            <div className="container mx-auto px-4 py-16 lg:py-24">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-16">
                        {/* What You Will Learn */}
                        <AnimatedSection animation="fadeUp" delay={100}>
                            <h2 className="text-3xl font-bold text-neutral-900 mb-8 flex items-center">
                                <span className="w-2 h-8 bg-rose-500 rounded-full mr-4"></span>
                                What You Will Learn
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {course.whatYouWillLearn.map((item, index) => (
                                    <div key={index} className="flex items-start p-4 bg-white rounded-xl shadow-sm border border-neutral-100 hover:border-rose-200 transition-colors">
                                        <svg className="w-6 h-6 text-rose-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span className="text-neutral-700 font-medium">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </AnimatedSection>

                        {/* Curriculum */}
                        <AnimatedSection animation="fadeUp" delay={200}>
                            <h2 className="text-3xl font-bold text-neutral-900 mb-8 flex items-center">
                                <span className="w-2 h-8 bg-rose-500 rounded-full mr-4"></span>
                                Course Curriculum
                            </h2>
                            <div className="bg-white rounded-2xl shadow-soft p-8 border border-neutral-100">
                                <ul className="space-y-4">
                                    {course.curriculum.map((module, index) => (
                                        <li key={index} className="flex items-center text-neutral-700 border-b border-neutral-50 last:border-0 pb-4 last:pb-0">
                                            <span className="w-8 h-8 rounded-full bg-rose-50 text-rose-600 flex items-center justify-center font-bold text-sm mr-4 flex-shrink-0">
                                                {index + 1}
                                            </span>
                                            <span className="text-lg">{module}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </AnimatedSection>
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-1 space-y-8">
                        {/* Why This Course */}
                        <AnimatedSection animation="fadeLeft" delay={300}>
                            <div className="bg-neutral-900 text-white rounded-2xl p-8 shadow-xl relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-rose-500/20 rounded-full blur-3xl -mr-16 -mt-16"></div>
                                <h3 className="text-xl font-bold mb-4 text-rose-300">Why This Course?</h3>
                                <p className="text-gray-300 leading-relaxed mb-6">
                                    {course.whyThisCourse}
                                </p>
                                <div className="border-t border-white/10 pt-6">
                                    <h4 className="text-sm font-bold text-rose-300 uppercase tracking-wider mb-2">Career Scope</h4>
                                    <p className="text-white font-medium">
                                        {course.careerScope}
                                    </p>
                                </div>
                            </div>
                        </AnimatedSection>

                        {/* CTA Card */}
                        <AnimatedSection animation="fadeLeft" delay={400}>
                            <div className="bg-white rounded-2xl p-8 shadow-soft border border-neutral-100 text-center sticky top-24">
                                <h3 className="text-2xl font-bold text-neutral-900 mb-2">Ready to Start?</h3>
                                <p className="text-neutral-600 mb-8">Enroll now and kickstart your beauty career.</p>
                                <Link href="/contact" className="block w-full bg-rose-600 text-white font-bold py-4 rounded-xl hover:bg-rose-700 transition-colors shadow-lg shadow-rose-500/30 mb-4">
                                    Enroll Now
                                </Link>
                                <p className="text-xs text-neutral-400">
                                    Limited seats available for next batch
                                </p>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </div>
        </div>
    )
}
