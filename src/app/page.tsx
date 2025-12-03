import Image from 'next/image'
import Link from 'next/link'
import { getDictionary } from '@/lib/i18n'
import CourseCard from '@/components/CourseCard'

export default async function Home() {
  const dict = await getDictionary('en')

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-brand-pink-light/30 py-20 lg:py-32 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                {dict.home.hero.heading}
              </h1>
              <p className="text-lg lg:text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
                {dict.home.hero.subheading}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  href="/courses"
                  className="bg-brand-pink-dark text-white px-8 py-3 rounded-full font-semibold hover:bg-pink-600 transition-colors shadow-lg hover:shadow-xl"
                >
                  {dict.common.viewCourses}
                </Link>
                <Link
                  href="/contact"
                  className="bg-white text-brand-pink-dark border-2 border-brand-pink-dark px-8 py-3 rounded-full font-semibold hover:bg-brand-pink-light transition-colors"
                >
                  {dict.common.contactUs}
                </Link>
              </div>
            </div>
            <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <Image
                src="/images/profandstudentmain.jpg"
                alt="ITC Beautician Training"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-brand-gold-light/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-brand-pink/20 rounded-full blur-3xl"></div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{dict.home.whyChooseUs.title}</h2>
            <div className="w-24 h-1 bg-brand-gold mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {dict.home.whyChooseUs.points.map((point, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow text-center group">
                <div className="w-16 h-16 bg-brand-pink-light text-brand-pink-dark rounded-full flex items-center justify-center mx-auto mb-6 text-2xl group-hover:scale-110 transition-transform">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{point.title}</h3>
                <p className="text-gray-600">{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{dict.home.featuredCourses.title}</h2>
            <div className="w-24 h-1 bg-brand-gold mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {dict.home.featuredCourses.courses.map((course, index) => (
              <CourseCard key={index} course={course} featured />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/courses"
              className="inline-flex items-center text-brand-pink-dark font-semibold hover:text-pink-700"
            >
              View All Courses
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Trainer Highlight */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 relative">
              <div className="relative h-[400px] w-full lg:h-[500px] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/photo1.jpg"
                  alt="Durga Aryal"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-brand-gold/10 rounded-full -z-10"></div>
              <div className="absolute -top-6 -left-6 w-48 h-48 bg-brand-pink/10 rounded-full -z-10"></div>
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">{dict.home.trainerHighlight.title}</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                {dict.home.trainerHighlight.description}
              </p>
              <Link
                href="/trainer"
                className="bg-brand-gold text-white px-8 py-3 rounded-full font-semibold hover:bg-yellow-600 transition-colors shadow-md"
              >
                Meet Our Trainer
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-brand-pink-dark text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold mb-8 max-w-3xl mx-auto">
            {dict.home.cta.text}
          </h2>
          <Link
            href="/contact"
            className="bg-white text-brand-pink-dark px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg"
          >
            {dict.common.enquireNow}
          </Link>
        </div>
      </section>
    </div>
  )
}
