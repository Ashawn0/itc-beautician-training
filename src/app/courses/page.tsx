import { getDictionary } from '@/lib/i18n'
import CourseCard from '@/components/CourseCard'
import ParallaxSection from '@/components/ParallaxSection'
import AnimatedSection from '@/components/AnimatedSection'
import { getBackgroundImage } from '@/utils/backgroundImages'

export default async function CoursesPage() {
    const dict = await getDictionary('en')

    return (
        <div className="min-h-screen">
            {/* Header with Parallax */}
            <ParallaxSection
                imageSrc={getBackgroundImage('courses')}
                overlayOpacity={0.7}
                overlayColor="light"
                minHeight="400px"
                className="flex items-center justify-center"
            >
                <div className="container mx-auto px-4 text-center">
                    <AnimatedSection animation="fadeUp">
                        <h1 className="text-5xl lg:text-6xl font-bold text-neutral-900 mb-6">
                            {dict.coursesPage.heading}
                        </h1>
                        <p className="text-xl text-neutral-700 max-w-3xl mx-auto leading-relaxed">
                            {dict.coursesPage.intro}
                        </p>
                    </AnimatedSection>
                </div>
            </ParallaxSection>

            {/* Courses Grid */}
            <section className="section-padding bg-cream">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {dict.courses.map((course, index) => (
                            <AnimatedSection
                                key={index}
                                animation="fadeUp"
                                delay={index * 50}
                                threshold={0.05}
                            >
                                <CourseCard course={course} />
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
