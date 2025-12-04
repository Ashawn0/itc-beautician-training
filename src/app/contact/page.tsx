import { getDictionary } from '@/lib/i18n'
import ContactForm from '@/components/ContactForm'
import ParallaxSection from '@/components/ParallaxSection'
import AnimatedSection from '@/components/AnimatedSection'
import { getBackgroundImage } from '@/utils/backgroundImages'

import { courses } from '@/data/courses'

export default async function ContactPage({ searchParams }: { searchParams: Promise<{ course?: string }> }) {
    const dict = await getDictionary('en')
    const { course } = await searchParams
    const courseList = courses.map(c => c.title)

    return (
        <div className="min-h-screen">
            {/* Header with Parallax */}
            <ParallaxSection
                imageSrc={getBackgroundImage('contact')}
                overlayOpacity={0.75}
                overlayColor="light"
                minHeight="400px"
                className="flex items-center justify-center"
            >
                <div className="container mx-auto px-4 text-center">
                    <AnimatedSection animation="fadeUp">
                        <h1 className="text-5xl lg:text-6xl font-bold text-neutral-900 mb-6">
                            {dict.contact.heading}
                        </h1>
                        <p className="text-xl text-neutral-700 max-w-3xl mx-auto leading-relaxed">
                            {dict.contact.intro}
                        </p>
                    </AnimatedSection>
                </div>
            </ParallaxSection>

            <div className="section-padding bg-cream">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Contact Details */}
                    <div className="space-y-8">
                        <AnimatedSection animation="fadeRight">
                            <div className="bg-white rounded-3xl shadow-soft p-10">
                                <h2 className="text-3xl font-bold text-neutral-900 mb-8">Get in Touch</h2>

                                <div className="space-y-8">
                                    <div className="flex items-start gap-5">
                                        <div className="w-14 h-14 gradient-rose rounded-full flex items-center justify-center flex-shrink-0">
                                            <svg className="w-6 h-6 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-lg text-neutral-900 mb-1">Address</h3>
                                            <p className="text-neutral-600 leading-relaxed">{dict.contact.details.address}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-5">
                                        <div className="w-14 h-14 gradient-rose rounded-full flex items-center justify-center flex-shrink-0">
                                            <svg className="w-6 h-6 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-lg text-neutral-900 mb-1">Phone</h3>
                                            <p className="text-neutral-600">{dict.contact.details.phone}</p>
                                            <p className="text-neutral-600">{dict.contact.details.whatsapp} (WhatsApp)</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-5">
                                        <div className="w-14 h-14 gradient-rose rounded-full flex items-center justify-center flex-shrink-0">
                                            <svg className="w-6 h-6 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-lg text-neutral-900 mb-1">Email</h3>
                                            <p className="text-neutral-600">{dict.contact.details.email}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-5">
                                        <div className="w-14 h-14 gradient-rose rounded-full flex items-center justify-center flex-shrink-0">
                                            <svg className="w-6 h-6 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-lg text-neutral-900 mb-1">Opening Hours</h3>
                                            <p className="text-neutral-600">{dict.contact.details.hours}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </AnimatedSection>

                        {/* Map Placeholder */}
                        <AnimatedSection animation="fadeRight" delay={200}>
                            <div className="bg-neutral-200 rounded-3xl h-80 w-full flex items-center justify-center text-neutral-500 shadow-medium">
                                <div className="text-center p-6">
                                    <svg className="w-16 h-16 mx-auto mb-4 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    <p className="font-medium">Google Map</p>
                                    <p className="text-sm">(Embed your location here)</p>
                                </div>
                            </div>
                        </AnimatedSection>
                    </div>

                    {/* Form */}
                    <AnimatedSection animation="fadeLeft">
                        <ContactForm
                            formDict={dict.contact.form}
                            courseList={courseList}
                            initialCourse={course}
                        />
                    </AnimatedSection>
                </div>
            </div>
        </div>
    )
}
