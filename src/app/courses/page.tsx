import { getDictionary } from '@/lib/i18n'
import CourseCard from '@/components/CourseCard'
import ParallaxSection from '@/components/ParallaxSection'
import AnimatedSection from '@/components/AnimatedSection'
import { getBackgroundImage } from '@/utils/backgroundImages'
import { courses } from '@/data/courses'

export default async function CoursesPage() {
    const dict = await getDictionary('en')

    return (
        <div className="min-h-screen bg-neutral-50">
            {/* Header with Parallax */}
            <ParallaxSection
                imageSrc={getBackgroundImage('courses')}
                overlayOpacity={0.75}
                overlayColor="dark"
                minHeight="500px"
                className="flex items-center justify-center"
            >
                <div className="container mx-auto px-4 text-center">
                    <AnimatedSection animation="fadeUp">
                        <div className="inline-block p-10 md:p-16 rounded-[3rem] bg-black/30 backdrop-blur-md border border-white/20 max-w-4xl mx-auto">
                            <h1
                                className="font-playfair text-5xl lg:text-7xl font-bold mb-6 text-white"
                                style={{ textShadow: '0 2px 10px rgba(0,0,0,0.6), 0 4px 20px rgba(0,0,0,0.4)' }}
                            >
                                {dict.coursesPage.heading}
                            </h1>
                            <p
                                className="font-inter text-xl text-white max-w-2xl mx-auto leading-relaxed font-light"
                                style={{ textShadow: '0 2px 12px rgba(0,0,0,0.8), 0 4px 24px rgba(0,0,0,0.6)' }}
                            >
                                {dict.coursesPage.intro}
                            </p>
                        </div>
                    </AnimatedSection>
                </div>
            </ParallaxSection>

            {/* Courses Grid */}
            <section className="py-24 bg-neutral-50 relative">
                {/* Decorative Background */}
                <div className="absolute top-0 left-0 w-full h-full bg-[url('/noise.png')] opacity-[0.03] pointer-events-none" />

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 lg:gap-10">
                        {courses.map((course, index) => (
                            <AnimatedSection
                                key={course.id}
                                animation="fadeUp"
                                delay={index * 100}
                                threshold={0.1}
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

