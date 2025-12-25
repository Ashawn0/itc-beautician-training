import { getDictionary } from '@/lib/i18n'
import Image from 'next/image'
import ParallaxSection from '@/components/ParallaxSection'
import AnimatedSection from '@/components/AnimatedSection'
import { getBackgroundImage } from '@/utils/backgroundImages'
import AboutBento from '@/components/AboutBento'

export default async function AboutPage() {
    const dict = await getDictionary('en')

    return (
        <div className="min-h-screen bg-neutral-50">
            {/* Header with Parallax */}
            <ParallaxSection
                imageSrc={getBackgroundImage('about')}
                overlayOpacity={0.75}
                overlayColor="dark"
                minHeight="500px"
                className="flex items-center justify-center"
            >
                <div className="container mx-auto px-4 text-center">
                    <AnimatedSection animation="fadeUp">
                        <div className="inline-block px-12 py-10 rounded-[3rem] bg-black/30 backdrop-blur-md border border-white/20">
                            <h1
                                className="font-playfair text-5xl lg:text-7xl font-bold text-white"
                                style={{ textShadow: '0 2px 10px rgba(0,0,0,0.6), 0 4px 20px rgba(0,0,0,0.4)' }}
                            >
                                {dict.about.heading}
                            </h1>
                        </div>
                    </AnimatedSection>
                </div>
            </ParallaxSection>

            <div className="section-padding relative">
                {/* Background Elements */}
                <div className="absolute top-0 left-0 w-full h-full bg-[url('/noise.png')] opacity-[0.03] pointer-events-none" />

                {/* Intro */}
                <AnimatedSection animation="fadeUp" className="max-w-4xl mx-auto text-center mb-24 relative z-10">
                    <p className="font-playfair text-2xl md:text-3xl text-neutral-700 leading-relaxed font-medium">
                        {dict.about.introduction}
                    </p>
                    <div className="w-24 h-1 bg-rose-500 mx-auto mt-10 rounded-full" />
                </AnimatedSection>

                {/* Bento Grid Mission & Vision */}
                <div className="mb-32 relative z-10">
                    <AboutBento
                        mission={{
                            title: dict.about.mission.title,
                            description: dict.about.mission.description,
                            icon: (
                                <svg className="w-8 h-8 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            ),
                        }}
                        vision={{
                            title: dict.about.vision.title,
                            description: dict.about.vision.description,
                            icon: (
                                <svg className="w-8 h-8 text-gold-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                </svg>
                            ),
                        }}
                    />
                </div>

                {/* Teaching Approach */}
                <div className="max-w-7xl mx-auto mb-32 relative z-10">
                    <AnimatedSection animation="fadeUp" className="text-center mb-16">
                        <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">
                            {dict.about.teachingApproach.title}
                        </h2>
                        <div className="divider mx-auto" />
                    </AnimatedSection>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {dict.about.teachingApproach.points.map((point, index) => (
                            <AnimatedSection key={index} animation="scaleIn" delay={index * 100}>
                                <div className="flex items-center p-8 bg-white shadow-soft rounded-[2rem] hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-neutral-50 group">
                                    <div className="w-16 h-16 bg-rose-50 rounded-2xl flex items-center justify-center mr-6 flex-shrink-0 group-hover:bg-rose-600 transition-colors duration-300">
                                        <svg className="w-8 h-8 text-rose-600 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <span className="font-playfair text-xl text-neutral-800 font-bold">{point}</span>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>

                {/* Why Students Choose Us */}
                <div className="max-w-7xl mx-auto mb-32 relative z-10">
                    <AnimatedSection animation="fadeUp" className="text-center mb-16">
                        <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">
                            {dict.about.whyStudentsChooseUs.title}
                        </h2>
                        <div className="divider mx-auto" />
                    </AnimatedSection>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {dict.about.whyStudentsChooseUs.points.map((point, index) => (
                            <AnimatedSection key={index} animation="scaleIn" delay={index * 100}>
                                <div className="flex items-center p-8 bg-white shadow-soft rounded-[2rem] hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-neutral-50 group">
                                    <div className="w-16 h-16 bg-gold-50 rounded-2xl flex items-center justify-center mr-6 flex-shrink-0 group-hover:bg-gold-500 transition-colors duration-300">
                                        <svg className="w-8 h-8 text-gold-600 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                        </svg>
                                    </div>
                                    <span className="font-playfair text-xl text-neutral-800 font-bold">{point}</span>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>

                {/* Classroom Moments */}
                <div className="max-w-7xl mx-auto relative z-10">
                    <AnimatedSection animation="fadeUp" className="text-center mb-16">
                        <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">Classroom Moments</h2>
                        <div className="divider mx-auto" />
                    </AnimatedSection>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
                        {[
                            '/images/uploads/FaceArt_MakeUp (6).jpg',
                            '/images/uploads/Sarri_DressUp_Styling (6).jpg',
                            '/images/uploads/FaceArt_MakeUp (4).jpg',
                            '/images/uploads/GroupPhotoWithPastStudent (6).jpg'
                        ].map((imgSrc, index) => (
                            <AnimatedSection key={index} animation="scaleIn" delay={index * 100}>
                                <div className="relative aspect-square rounded-[2rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group">
                                    <Image
                                        src={imgSrc}
                                        alt="Classroom training"
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-rose-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

