import Image from 'next/image'
import Link from 'next/link'
import { getDictionary } from '@/lib/i18n'
import { courses } from '@/data/courses'
import CourseCard from '@/components/CourseCard'
import ParallaxSection from '@/components/ParallaxSection'
import AnimatedSection from '@/components/AnimatedSection'
import TextOverlay from '@/components/TextOverlay'
import { getBackgroundImage } from '@/utils/backgroundImages'
import { oldImages } from '@/utils/imageAssets'

export default async function Home() {
  const dict = await getDictionary('en')

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section with Parallax */}
      <ParallaxSection
        imageSrc={oldImages.hero.main}
        overlayOpacity={0.3}
        overlayColor="dark"
        minHeight="100vh"
        className="flex items-center justify-center"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection animation="fadeLeft" className="text-center lg:text-left">
              <TextOverlay variant="none" textColor="light">
                <h1 className="text-5xl lg:text-6xl xl:text-7xl font-extrabold mb-6 leading-tight">
                  {dict.home.hero.heading}
                </h1>
                <p className="text-xl lg:text-2xl mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                  {dict.home.hero.subheading}
                </p>
              </TextOverlay>
              <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
                <Link
                  href="/courses"
                  className="btn-primary text-lg px-10 py-4"
                >
                  {dict.common.viewCourses}
                </Link>
                <Link
                  href="/contact"
                  className="btn-secondary text-lg px-10 py-4 bg-white/90 hover:bg-white border-white"
                >
                  {dict.common.contactUs}
                </Link>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fadeRight" delay={200} className="hidden lg:block">
              <div className="relative h-[500px] xl:h-[600px] rounded-3xl overflow-hidden shadow-large transform transition-transform duration-500 hover:scale-105">
                <Image
                  src={oldImages.hero.students}
                  alt="ITC Beautician Training"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-rose-600/20 to-transparent" />
              </div>
            </AnimatedSection>
          </div>
        </div>

        {/* Background Logo Overlay */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-[0.03] pointer-events-none animate-pulse-slow">
          <Image
            src="/logos/clean2_LogoModernGradient.png"
            alt="Background Logo"
            fill
            className="object-contain"
          />
        </div>
      </ParallaxSection>

      {/* Why Choose Us */}
      <section className="section-padding bg-cream">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fadeUp" className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-4">
              {dict.home.whyChooseUs.title}
            </h2>
            <div className="divider" />
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {dict.home.whyChooseUs.points.map((point, index) => (
              <AnimatedSection
                key={index}
                animation="fadeUp"
                delay={index * 100 + 200}
              >
                <div className="bg-white p-10 rounded-2xl shadow-soft hover-lift text-center h-full">
                  <div className="w-20 h-20 gradient-rose rounded-full flex items-center justify-center mx-auto mb-6 text-3xl font-bold text-rose-600 shadow-medium">
                    {index + 1}
                  </div>
                  <h3 className="text-2xl font-bold text-neutral-900 mb-4">{point.title}</h3>
                  <p className="text-neutral-600 leading-relaxed">{point.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fadeUp" className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-4">
              {dict.home.featuredCourses.title}
            </h2>
            <div className="divider" />
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {courses.slice(0, 4).map((course, index) => (
              <AnimatedSection
                key={course.id}
                animation="fadeUp"
                delay={index * 100}
              >
                <CourseCard course={course} featured />
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection animation="fadeUp" delay={400} className="text-center mt-16">
            <Link
              href="/courses"
              className="inline-flex items-center gap-3 text-rose-600 font-bold text-lg hover:text-rose-700 transition-colors group"
            >
              <span>View All Courses</span>
              <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Trainer Highlight with Parallax */}
      <ParallaxSection
        imageSrc={getBackgroundImage('trainer')}
        overlayOpacity={0.85}
        overlayColor="light"
        minHeight="700px"
        className="flex items-center"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <AnimatedSection animation="fadeRight" className="lg:w-1/2">
              <div className="relative h-[450px] w-full lg:h-[550px] rounded-3xl overflow-hidden shadow-large">
                <Image
                  src="/images/uploads/PHOTO-2025-12-03-19-48-52.jpg"
                  alt="Durga Aryal"
                  fill
                  className="object-cover"
                />
                <div className="absolute -bottom-8 -right-8 w-56 h-56 gradient-gold rounded-full -z-10 opacity-40 blur-2xl" />
                <div className="absolute -top-8 -left-8 w-56 h-56 gradient-rose rounded-full -z-10 opacity-40 blur-2xl" />
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fadeLeft" className="lg:w-1/2">
              <TextOverlay
                variant="none"
                textColor="dark"
                className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-lg"
              >
                <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                  {dict.home.trainerHighlight.title}
                </h2>
                <p className="text-xl mb-10 leading-relaxed">
                  {dict.home.trainerHighlight.description}
                </p>
                <Link
                  href="/trainer"
                  className="inline-flex items-center gap-3 bg-gold-500 text-white px-10 py-4 rounded-full font-bold text-lg shadow-glow-gold hover:bg-gold-600 transition-all duration-300 hover:scale-105"
                >
                  <span>Meet Our Trainer</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </TextOverlay>
            </AnimatedSection>
          </div>
        </div>
      </ParallaxSection>

      {/* CTA with Gradient */}
      <section className="section-padding gradient-rose text-center relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-rose-300/30 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold-300/30 rounded-full blur-3xl -z-10" />

        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection animation="scaleIn">
            <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-10 max-w-3xl mx-auto leading-tight">
              {dict.home.cta.text}
            </h2>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-rose-600 text-white px-12 py-5 rounded-full font-bold text-xl shadow-large hover:bg-rose-700 hover:shadow-glow-rose transition-all duration-300 hover:scale-105"
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
