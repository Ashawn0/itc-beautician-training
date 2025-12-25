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
        <div className="min-h-screen bg-neutral-50">
            {/* Header with Parallax */}
            <ParallaxSection
                imageSrc={getBackgroundImage('trainer')}
                overlayOpacity={0.7}
                overlayColor="dark"
                minHeight="500px"
                className="flex items-center justify-center"
            >
                <div className="container mx-auto px-4 text-center">
                    <AnimatedSection animation="fadeUp">
                        <div className="inline-block px-12 py-10 rounded-[3rem] bg-black/30 backdrop-blur-md border border-white/20">
                            <h1
                                className="font-playfair text-5xl lg:text-7xl font-bold mb-4 text-white"
                                style={{ textShadow: '0 2px 10px rgba(0,0,0,0.6), 0 4px 20px rgba(0,0,0,0.4)' }}
                            >
                                {trainer.title}
                            </h1>
                            <p
                                className="font-inter text-2xl text-white font-light tracking-widest uppercase"
                                style={{ textShadow: '0 2px 12px rgba(0,0,0,0.8), 0 4px 24px rgba(0,0,0,0.6)' }}
                            >
                                {trainer.name}
                            </p>
                        </div>
                    </AnimatedSection>
                </div>
            </ParallaxSection>

            <div className="section-padding">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col lg:flex-row gap-20 items-center mb-32">
                        {/* Image - Magazine Style */}
                        <AnimatedSection animation="fadeRight" className="w-full lg:w-1/2">
                            <div className="relative group">
                                <div className="aspect-[3/4] relative rounded-[2rem] overflow-hidden shadow-2xl transform transition-transform duration-700 group-hover:scale-[1.02]">
                                    <Image
                                        src="/images/uploads/PHOTO-2025-12-03-19-48-52.jpg"
                                        alt={trainer.name}
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-rose-900/40 to-transparent opacity-60" />
                                </div>
                                {/* Decorative Elements */}
                                <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-rose-100 rounded-full -z-10 blur-3xl opacity-60" />
                                <div className="absolute -top-12 -left-12 w-64 h-64 bg-gold-100 rounded-full -z-10 blur-3xl opacity-60" />

                                <div className="absolute bottom-8 left-8 right-8 glass-light p-6 rounded-2xl backdrop-blur-md border border-white/40">
                                    <p className="font-playfair text-2xl text-rose-900 italic text-center">
                                        "Transforming passion into professional excellence."
                                    </p>
                                </div>
                            </div>
                        </AnimatedSection>

                        {/* Content */}
                        <AnimatedSection animation="fadeLeft" className="w-full lg:w-1/2">
                            <div className="relative">
                                <h2 className="font-playfair text-5xl lg:text-6xl font-bold text-neutral-900 mb-4 leading-tight">
                                    Meet <span className="text-rose-600">{trainer.name}</span>
                                </h2>
                                <p className="font-inter text-xl text-neutral-500 font-medium tracking-wide uppercase mb-10 border-l-4 border-gold-400 pl-4">
                                    {trainer.subtitle}
                                </p>

                                <div className="prose prose-lg text-neutral-600 leading-relaxed space-y-6 mb-12 font-light">
                                    {trainer.bio.map((paragraph, index) => (
                                        <p key={index} className="first-letter:text-5xl first-letter:font-playfair first-letter:text-rose-500 first-letter:float-left first-letter:mr-3">
                                            {paragraph}
                                        </p>
                                    ))}
                                </div>

                                {/* Signature (Visual placeholder) */}
                                <div className="font-playfair text-4xl text-neutral-400 italic opacity-60">
                                    {trainer.name}
                                </div>
                            </div>
                        </AnimatedSection>
                    </div>

                    {/* Expertise & Philosophy - Split Cards */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-32">
                        <AnimatedSection animation="fadeUp" delay={200}>
                            <div className="bg-white p-10 rounded-[2rem] shadow-soft hover:shadow-large transition-shadow duration-500 h-full border border-neutral-100 relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-rose-50 rounded-bl-full -mr-10 -mt-10 transition-transform duration-500 group-hover:scale-150" />
                                <h3 className="font-playfair text-3xl font-bold text-neutral-900 mb-8 relative z-10">
                                    {trainer.expertise.title}
                                </h3>
                                <ul className="space-y-4 relative z-10">
                                    {trainer.expertise.items.map((item, index) => (
                                        <li key={index} className="flex items-center text-neutral-700 group/item">
                                            <span className="w-2 h-2 bg-rose-400 rounded-full mr-4 transition-all duration-300 group-hover/item:w-4 group-hover/item:bg-rose-600" />
                                            <span className="font-medium text-lg">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </AnimatedSection>

                        <AnimatedSection animation="fadeUp" delay={400}>
                            <div className="bg-neutral-900 p-10 rounded-[2rem] shadow-2xl h-full relative overflow-hidden text-white flex flex-col justify-center">
                                <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay" />
                                <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-rose-600 rounded-full blur-[80px] opacity-20" />

                                <h3 className="font-playfair text-3xl font-bold text-gold-400 mb-8 relative z-10">
                                    {trainer.philosophy.title}
                                </h3>
                                <blockquote className="relative z-10">
                                    <p className="font-playfair italic text-2xl lg:text-3xl leading-relaxed text-white/90">
                                        "{trainer.philosophy.quote}"
                                    </p>
                                </blockquote>
                            </div>
                        </AnimatedSection>
                    </div>

                    {/* Training Sessions Gallery */}
                    <div>
                        <AnimatedSection animation="fadeUp" className="text-center mb-16">
                            <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">
                                Training Sessions
                            </h2>
                            <div className="divider" />
                        </AnimatedSection>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-8">
                            {[
                                '/images/uploads/GroupPhotoWithPastStudent (1).jpg',
                                '/images/uploads/GroupPhotoWithPastStudent (2).jpg',
                                '/images/uploads/GroupPhotoWithPastStudent (3).jpg',
                                '/images/uploads/GroupPhotoWithPastStudent (4).jpg'
                            ].map((imgSrc, index) => (
                                <AnimatedSection key={index} animation="scaleIn" delay={index * 100}>
                                    <div className="relative aspect-square rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group">
                                        <Image
                                            src={imgSrc}
                                            alt="Training session"
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
        </div>
    )
}

