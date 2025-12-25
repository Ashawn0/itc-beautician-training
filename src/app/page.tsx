import Image from 'next/image'
import Link from 'next/link'
import { getDictionary } from '@/lib/i18n'
import { courses } from '@/data/courses'
import CourseCard from '@/components/CourseCard'
import ParallaxSection from '@/components/ParallaxSection'
import AnimatedSection from '@/components/AnimatedSection'
import { getBackgroundImage } from '@/utils/backgroundImages'
import { oldImages } from '@/utils/imageAssets'
import Hero from '@/components/Hero'
import Marquee from '@/components/Marquee'

export default async function Home() {
  const dict = await getDictionary('en')

  return (
    <div className="flex flex-col min-h-screen bg-neutral-50">
      {/* Hero Section with GPU Parallax */}
      <Hero
        heading={dict.home.hero.heading}
        subheading={dict.home.hero.subheading}
        viewCoursesText={dict.common.viewCourses}
        contactUsText={dict.common.contactUs}
        backgroundImage={oldImages.hero.main}
      />

      <Marquee
        items={[
          "Professional Training",
          "Expert Instructors",
          "Modern Equipment",
          "Job Placement",
          "Internationally Recognized",
          "Hands-on Practice",
        ]}
        speed="slow"
        className="bg-white border-b border-neutral-100 py-6"
      />

      {/* Why Choose Us */}
      <section className="section-padding relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/noise.png')] opacity-[0.03] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-rose-50/50 rounded-full blur-[120px] -z-10" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection animation="fadeUp" className="text-center mb-20">
            <h2 className="font-playfair text-4xl lg:text-6xl font-bold text-neutral-900 mb-6">
              {dict.home.whyChooseUs.title}
            </h2>
            <div className="divider mx-auto" />
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {dict.home.whyChooseUs.points.map((point, index) => (
              <AnimatedSection
                key={index}
                animation="fadeUp"
                delay={index * 100 + 200}
              >
                <div className="bg-white p-10 rounded-[2.5rem] shadow-soft hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 h-full border border-neutral-50 group">
                  <div className="w-20 h-20 bg-rose-50 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:bg-rose-600 transition-colors duration-500">
                    <span className="font-playfair text-3xl font-bold text-rose-600 group-hover:text-white transition-colors duration-500">
                      {index + 1}
                    </span>
                  </div>
                  <h3 className="font-playfair text-2xl font-bold text-neutral-900 mb-4">{point.title}</h3>
                  <p className="font-inter text-neutral-600 leading-relaxed font-light">{point.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="section-padding bg-white relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fadeUp" className="text-center mb-20">
            <h2 className="font-playfair text-4xl lg:text-6xl font-bold text-neutral-900 mb-6">
              {dict.home.featuredCourses.title}
            </h2>
            <div className="divider mx-auto" />
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {courses.slice(0, 4).map((course, index) => (
              <AnimatedSection
                key={course.id}
                animation="fadeUp"
                delay={index * 100}
              >
                <CourseCard course={course} featured={index === 0} />
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection animation="fadeUp" delay={400} className="text-center mt-20">
            <Link
              href="/courses"
              className="inline-flex items-center gap-3 text-rose-600 font-bold text-lg hover:text-rose-700 transition-colors group tracking-wide uppercase"
            >
              <span className="border-b-2 border-rose-200 group-hover:border-rose-600 transition-colors">View All Courses</span>
              <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Trainer Highlight with Parallax */}
      <ParallaxSection
        imageSrc={getBackgroundImage('trainer')}
        overlayOpacity={0.9}
        overlayColor="light"
        minHeight="800px"
        className="flex items-center"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <AnimatedSection animation="fadeRight" className="lg:w-1/2">
              <div className="relative group">
                <div className="relative h-[500px] w-full lg:h-[600px] rounded-[3rem] overflow-hidden shadow-2xl transform transition-transform duration-700 group-hover:scale-[1.02]">
                  <Image
                    src="/images/uploads/PHOTO-2025-12-03-19-48-52.jpg"
                    alt="Durga Aryal"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
                {/* Decorative Frame */}
                <div className="absolute -inset-4 border-2 border-rose-200/50 rounded-[3.5rem] -z-10 scale-95 group-hover:scale-100 transition-transform duration-700" />
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fadeLeft" className="lg:w-1/2">
              <div className="glass-premium p-10 md:p-14 rounded-[3rem] backdrop-blur-xl bg-white/80 border border-white/40 shadow-xl">
                <h2 className="font-playfair text-4xl lg:text-6xl font-bold mb-8 text-neutral-900 leading-tight">
                  {dict.home.trainerHighlight.title}
                </h2>
                <p className="font-inter text-xl mb-12 leading-relaxed text-neutral-600 font-light">
                  {dict.home.trainerHighlight.description}
                </p>
                <Link
                  href="/trainer"
                  className="
                    group
                    inline-flex items-center gap-4 
                    bg-neutral-900 text-white 
                    px-10 py-5 
                    rounded-full 
                    font-semibold text-lg 
                    shadow-lg 
                    hover:bg-neutral-800 
                    transition-all duration-300 
                    hover:scale-[1.02]
                  "
                >
                  <span>Meet Our Trainer</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </ParallaxSection>

      {/* CTA with Proper Contrast */}
      <section className="py-32 bg-neutral-900 relative overflow-hidden">
        {/* Subtle decorative elements - not overpowering */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-rose-600/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-rose-600/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10 text-center">
          <AnimatedSection animation="scaleIn">
            {/* Text with warm glow for better integration */}
            <h2
              className="font-playfair text-4xl lg:text-6xl font-bold text-white mb-12 max-w-4xl mx-auto leading-tight"
              style={{
                textShadow: '0 2px 12px rgba(0,0,0,0.7), 0 4px 24px rgba(0,0,0,0.5), 0 0 40px rgba(225,29,72,0.12)'
              }}
            >
              {dict.home.cta.text}
            </h2>
            <Link
              href="/contact"
              className="
                inline-flex items-center gap-3 
                bg-rose-600 text-white 
                px-12 py-5 
                rounded-full 
                font-bold text-xl 
                shadow-lg
                hover:bg-rose-700 
                transition-all duration-300 
                hover:scale-105
              "
            >
              <span>{dict.common.enquireNow}</span>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}

