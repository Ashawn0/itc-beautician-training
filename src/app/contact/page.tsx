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
        <div className="min-h-screen bg-neutral-50">
            {/* Header with Parallax */}
            <ParallaxSection
                imageSrc={getBackgroundImage('contact')}
                overlayOpacity={0.75}
                overlayColor="dark"
                minHeight="500px"
                className="flex items-center justify-center"
            >
                <div className="container mx-auto px-4 text-center">
                    <AnimatedSection animation="fadeUp">
                        <div className="inline-block px-12 py-10 rounded-[3rem] bg-black/30 backdrop-blur-md border border-white/20">
                            <h1
                                className="font-playfair text-5xl lg:text-7xl font-bold mb-6 text-white"
                                style={{ textShadow: '0 2px 10px rgba(0,0,0,0.6), 0 4px 20px rgba(0,0,0,0.4)' }}
                            >
                                {dict.contact.heading}
                            </h1>
                            <p
                                className="font-inter text-xl text-white max-w-2xl mx-auto leading-relaxed font-light"
                                style={{ textShadow: '0 2px 12px rgba(0,0,0,0.8), 0 4px 24px rgba(0,0,0,0.6)' }}
                            >
                                {dict.contact.intro}
                            </p>
                        </div>
                    </AnimatedSection>
                </div>
            </ParallaxSection>

            <div className="section-padding relative">
                {/* Background Elements */}
                <div className="absolute top-0 left-0 w-full h-full bg-[url('/noise.png')] opacity-[0.03] pointer-events-none" />
                <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-rose-100/50 rounded-full blur-[100px] -z-10" />
                <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-gold-100/50 rounded-full blur-[100px] -z-10" />

                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
                    {/* Contact Details */}
                    <div className="space-y-10">
                        <AnimatedSection animation="fadeRight">
                            <div className="bg-white rounded-[2.5rem] shadow-xl p-10 md:p-12 border border-neutral-100 relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-40 h-40 bg-rose-50 rounded-bl-full -mr-10 -mt-10 transition-transform duration-500 group-hover:scale-110" />

                                <h2 className="font-playfair text-4xl font-bold text-neutral-900 mb-10 relative z-10">Get in Touch</h2>

                                <div className="space-y-10 relative z-10">
                                    <div className="flex items-start gap-6 group/item">
                                        <div className="w-16 h-16 bg-rose-50 rounded-2xl flex items-center justify-center flex-shrink-0 transition-colors duration-300 group-hover/item:bg-rose-600 shadow-sm">
                                            <svg className="w-7 h-7 text-rose-600 group-hover/item:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="font-playfair font-bold text-xl text-neutral-900 mb-2">Address</h3>
                                            <p className="font-inter text-neutral-600 leading-relaxed font-light">{dict.contact.details.address}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-6 group/item">
                                        <div className="w-16 h-16 bg-rose-50 rounded-2xl flex items-center justify-center flex-shrink-0 transition-colors duration-300 group-hover/item:bg-rose-600 shadow-sm">
                                            <svg className="w-7 h-7 text-rose-600 group-hover/item:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="font-playfair font-bold text-xl text-neutral-900 mb-2">Phone</h3>
                                            <p className="font-inter text-neutral-600 font-light">{dict.contact.details.phone}</p>
                                            <p className="font-inter text-neutral-600 font-light">{dict.contact.details.whatsapp} (WhatsApp)</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-6 group/item">
                                        <div className="w-16 h-16 bg-rose-50 rounded-2xl flex items-center justify-center flex-shrink-0 transition-colors duration-300 group-hover/item:bg-rose-600 shadow-sm">
                                            <svg className="w-7 h-7 text-rose-600 group-hover/item:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="font-playfair font-bold text-xl text-neutral-900 mb-2">Email</h3>
                                            <p className="font-inter text-neutral-600 font-light">{dict.contact.details.email}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-6 group/item">
                                        <div className="w-16 h-16 bg-rose-50 rounded-2xl flex items-center justify-center flex-shrink-0 transition-colors duration-300 group-hover/item:bg-rose-600 shadow-sm">
                                            <svg className="w-7 h-7 text-rose-600 group-hover/item:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="font-playfair font-bold text-xl text-neutral-900 mb-2">Opening Hours</h3>
                                            <p className="font-inter text-neutral-600 font-light">{dict.contact.details.hours}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </AnimatedSection>

                        {/* Map Placeholder */}
                        <AnimatedSection animation="fadeRight" delay={200}>
                            <div className="bg-neutral-100 rounded-[2.5rem] h-80 w-full flex items-center justify-center text-neutral-400 shadow-inner border border-neutral-200 overflow-hidden relative group">
                                <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.05]" />
                                <div className="text-center p-6 relative z-10 transition-transform duration-500 group-hover:scale-105">
                                    <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-md text-rose-300">
                                        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <p className="font-playfair font-bold text-xl text-neutral-500 mb-2">Google Map Integration</p>
                                    <p className="font-inter text-sm text-neutral-400 font-light">(Embed your location here)</p>
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

