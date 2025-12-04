import { getDictionary } from '@/lib/i18n'
import Image from 'next/image'
import ParallaxSection from '@/components/ParallaxSection'
import AnimatedSection from '@/components/AnimatedSection'
import TextOverlay from '@/components/TextOverlay'
import { getBackgroundImage } from '@/utils/backgroundImages'

export default async function TrainerPage() {
    const dict = await getDictionary('en')
    const { trainer } = dict

    return (
        <div className="min-h-screen">
            {/* Header with Parallax */}
            <ParallaxSection
                imageSrc={getBackgroundImage('trainer')}
                overlayOpacity={0.5}
                overlayColor="dark"
                minHeight="450px"
                className="flex items-center justify-center"
            >
                <div className="container mx-auto px-4 text-center">
                    <AnimatedSection animation="fadeUp">
                        <TextOverlay variant="none" textColor="light">
                            <h1 className="text-5xl lg:text-6xl font-bold mb-4">
                                {trainer.title}
                            </h1>
                            <p className="text-3xl text-gold-400 font-semibold">{trainer.name}</p>
                        </TextOverlay>
                    </AnimatedSection>
                </div>
            </ParallaxSection>

            <div className="section-padding bg-cream">
                <div className="max-w-6xl mx-auto">
                    <div className="flex flex-col lg:flex-row gap-16 items-start mb-24">
                        {/* Image */}
                        <AnimatedSection animation="fadeRight" className="w-full lg:w-2/5">
                            <div className="relative">
                                <div className="aspect-[3/4] relative rounded-3xl overflow-hidden shadow-large">
                                    <Image
                                        src="/images/uploads/PHOTO-2025-12-03-19-48-52.jpg"
                                        alt={trainer.name}
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                </div>
                                <div className="absolute -bottom-10 -right-10 w-40 h-40 gradient-rose rounded-full -z-10 opacity-40 blur-2xl" />
                                <div className="absolute -top-10 -left-10 w-40 h-40 gradient-gold rounded-full -z-10 opacity-40 blur-2xl" />
                            </div>
                        </AnimatedSection>

                        {/* Content */}
                        <AnimatedSection animation="fadeLeft" className="w-full lg:w-3/5">
                            <h2 className="text-4xl font-bold text-neutral-900 mb-3">{trainer.name}</h2>
                            <p className="text-rose-600 font-bold text-xl mb-8">{trainer.subtitle}</p>

                            <div className="prose text-neutral-700 text-lg leading-relaxed space-y-4 mb-10">
                                {trainer.bio.map((paragraph, index) => (
                                    <p key={index}>{paragraph}</p>
                                ))}
                            </div>

                            {/* Expertise & Philosophy Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="bg-white p-8 rounded-2xl shadow-soft">
                                    <h3 className="text-2xl font-bold text-neutral-900 mb-6">{trainer.expertise.title}</h3>
                                    <ul className="space-y-3">
                                        {trainer.expertise.items.map((item, index) => (
                                            <li key={index} className="flex items-center text-neutral-700">
                                                <span className="w-3 h-3 bg-gold-500 rounded-full mr-4 flex-shrink-0" />
                                                <span className="font-medium">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="bg-white p-8 rounded-2xl shadow-soft border-l-4 border-rose-500">
                                    <h3 className="text-2xl font-bold text-neutral-900 mb-6">{trainer.philosophy.title}</h3>
                                    <p className="italic text-neutral-700 text-lg leading-relaxed">
                                        "{trainer.philosophy.quote}"
                                    </p>
                                </div>
                            </div>
                        </AnimatedSection>
                    </div>

                    {/* Training Sessions Gallery */}
                    <div>
                        <AnimatedSection animation="fadeUp" className="text-center mb-16">
                            <h2 className="text-4xl font-bold text-neutral-900 mb-4">Training Sessions with Durga</h2>
                            <div className="divider" />
                        </AnimatedSection>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            {[
                                '/images/uploads/GroupPhotoWithPastStudent (1).jpg',
                                '/images/uploads/GroupPhotoWithPastStudent (2).jpg',
                                '/images/uploads/GroupPhotoWithPastStudent (3).jpg',
                                '/images/uploads/GroupPhotoWithPastStudent (4).jpg'
                            ].map((imgSrc, index) => (
                                <AnimatedSection key={index} animation="scaleIn" delay={index * 100}>
                                    <div className="relative aspect-square rounded-2xl overflow-hidden shadow-medium hover-lift">
                                        <Image
                                            src={imgSrc}
                                            alt="Training session"
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
        </div>
    )
}
