import { getDictionary } from '@/lib/i18n'
import Image from 'next/image'
import ParallaxSection from '@/components/ParallaxSection'
import AnimatedSection from '@/components/AnimatedSection'
import TextOverlay from '@/components/TextOverlay'
import { getBackgroundImage } from '@/utils/backgroundImages'

export default async function AboutPage() {
    const dict = await getDictionary('en')

    return (
        <div className="min-h-screen">
            {/* Header with Parallax */}
            <ParallaxSection
                imageSrc={getBackgroundImage('about')}
                overlayOpacity={0.5}
                overlayColor="dark"
                minHeight="400px"
                className="flex items-center justify-center"
            >
                <div className="container mx-auto px-4 text-center">
                    <AnimatedSection animation="fadeUp">
                        <TextOverlay variant="none" textColor="light">
                            <h1 className="text-5xl lg:text-6xl font-bold">
                                {dict.about.heading}
                            </h1>
                        </TextOverlay>
                    </AnimatedSection>
                </div>
            </ParallaxSection>

            <div className="section-padding bg-cream">
                {/* Intro */}
                <AnimatedSection animation="fadeUp" className="max-w-4xl mx-auto text-center mb-24">
                    <p className="text-2xl text-neutral-700 leading-relaxed">
                        {dict.about.introduction}
                    </p>
                </AnimatedSection>

                {/* Mission & Vision */}
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
                    <AnimatedSection animation="fadeLeft">
                        <div className="bg-white p-12 rounded-3xl shadow-soft hover-lift h-full">
                            <div className="w-16 h-16 gradient-rose rounded-full flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h2 className="text-3xl font-bold text-rose-600 mb-4">{dict.about.mission.title}</h2>
                            <p className="text-neutral-700 leading-relaxed text-lg">{dict.about.mission.description}</p>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection animation="fadeRight" delay={200}>
                        <div className="bg-white p-12 rounded-3xl shadow-soft hover-lift h-full">
                            <div className="w-16 h-16 gradient-gold rounded-full flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-gold-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                </svg>
                            </div>
                            <h2 className="text-3xl font-bold text-gold-600 mb-4">{dict.about.vision.title}</h2>
                            <p className="text-neutral-700 leading-relaxed text-lg">{dict.about.vision.description}</p>
                        </div>
                    </AnimatedSection>
                </div>

                {/* Teaching Approach */}
                <div className="max-w-6xl mx-auto mb-24">
                    <AnimatedSection animation="fadeUp" className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-neutral-900 mb-4">
                            {dict.about.teachingApproach.title}
                        </h2>
                        <div className="divider" />
                    </AnimatedSection>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {dict.about.teachingApproach.points.map((point, index) => (
                            <AnimatedSection key={index} animation="scaleIn" delay={index * 100}>
                                <div className="flex items-center p-6 bg-white shadow-soft rounded-2xl hover-lift">
                                    <div className="w-12 h-12 gradient-rose rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                                        <svg className="w-6 h-6 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <span className="text-neutral-800 font-semibold">{point}</span>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>

                {/* Why Students Choose Us */}
                <div className="max-w-6xl mx-auto mb-24">
                    <AnimatedSection animation="fadeUp" className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-neutral-900 mb-4">
                            {dict.about.whyStudentsChooseUs.title}
                        </h2>
                        <div className="divider" />
                    </AnimatedSection>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {dict.about.whyStudentsChooseUs.points.map((point, index) => (
                            <AnimatedSection key={index} animation="scaleIn" delay={index * 100}>
                                <div className="flex items-center p-6 bg-white shadow-soft rounded-2xl hover-lift">
                                    <div className="w-12 h-12 gradient-gold rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                                        <svg className="w-6 h-6 text-gold-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                        </svg>
                                    </div>
                                    <span className="text-neutral-800 font-semibold">{point}</span>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>

                {/* Classroom Moments */}
                <div className="max-w-6xl mx-auto">
                    <AnimatedSection animation="fadeUp" className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-neutral-900 mb-4">Classroom Moments</h2>
                        <div className="divider" />
                    </AnimatedSection>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {[
                            '/images/uploads/FaceArt_MakeUp (6).jpg',
                            '/images/uploads/Sarri_DressUp_Styling (6).jpg',
                            '/images/uploads/FaceArt_MakeUp (4).jpg',
                            '/images/uploads/GroupPhotoWithPastStudent (6).jpg'
                        ].map((imgSrc, index) => (
                            <AnimatedSection key={index} animation="scaleIn" delay={index * 100}>
                                <div className="relative aspect-square rounded-2xl overflow-hidden shadow-medium hover-lift">
                                    <Image
                                        src={imgSrc}
                                        alt="Classroom training"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
