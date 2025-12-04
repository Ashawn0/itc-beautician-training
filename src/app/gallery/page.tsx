import { getDictionary } from '@/lib/i18n'
import Image from 'next/image'
import ParallaxSection from '@/components/ParallaxSection'
import AnimatedSection from '@/components/AnimatedSection'
import TextOverlay from '@/components/TextOverlay'
import { getBackgroundImage } from '@/utils/backgroundImages'
import { getAllGalleryImages, getAllVideos, oldImages } from '@/utils/imageAssets'

export default async function GalleryPage() {
    const dict = await getDictionary('en')
    const galleryImages = getAllGalleryImages()
    const videos = getAllVideos()

    return (
        <div className="min-h-screen">
            {/* Header with Parallax */}
            <ParallaxSection
                imageSrc={getBackgroundImage('gallery')}
                overlayOpacity={0.6}
                overlayColor="dark"
                minHeight="400px"
                className="flex items-center justify-center"
            >
                <div className="container mx-auto px-4 text-center">
                    <AnimatedSection animation="fadeUp">
                        <TextOverlay variant="none" textColor="light">
                            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
                                {dict.gallery.heading}
                            </h1>
                            <p className="text-xl max-w-3xl mx-auto leading-relaxed">
                                {dict.gallery.intro}
                            </p>
                        </TextOverlay>
                    </AnimatedSection>
                </div>
            </ParallaxSection>

            <div className="section-padding bg-cream space-y-24">
                {/* General Gallery */}
                <section className="max-w-7xl mx-auto">
                    <AnimatedSection animation="fadeUp" className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-neutral-900 mb-4">Training & Events</h2>
                        <div className="divider" />
                    </AnimatedSection>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {galleryImages.general.map((img, index) => (
                            <AnimatedSection key={index} animation="scaleIn" delay={index * 100}>
                                <div className="relative h-80 rounded-2xl overflow-hidden shadow-medium hover-lift group">
                                    <Image
                                        src={img}
                                        alt="Training session"
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                        <span className="text-white font-bold text-xl">
                                            Student Training
                                        </span>
                                    </div>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </section>

                {/* Makeup Gallery */}
                <section className="max-w-7xl mx-auto">
                    <AnimatedSection animation="fadeUp" className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-neutral-900 mb-4">Makeup & Beauty Work</h2>
                        <div className="divider" />
                    </AnimatedSection>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                        {galleryImages.makeup.slice(0, 16).map((img, index) => (
                            <AnimatedSection key={index} animation="scaleIn" delay={index * 50} threshold={0.05}>
                                <div className="relative aspect-square rounded-2xl overflow-hidden shadow-soft hover-lift group">
                                    <Image
                                        src={img}
                                        alt="Makeup artistry"
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </section>

                {/* Hair Styling Gallery */}
                {galleryImages.hair.length > 0 && (
                    <section className="max-w-7xl mx-auto">
                        <AnimatedSection animation="fadeUp" className="text-center mb-12">
                            <h2 className="text-4xl font-bold text-neutral-900 mb-4">Hair Styling & Saree Draping</h2>
                            <div className="divider" />
                        </AnimatedSection>
                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                            {galleryImages.hair.map((img, index) => (
                                <AnimatedSection key={index} animation="scaleIn" delay={index * 50} threshold={0.05}>
                                    <div className="relative aspect-square rounded-2xl overflow-hidden shadow-soft hover-lift group">
                                        <Image
                                            src={img}
                                            alt="Hair styling"
                                            fill
                                            className="object-cover"
                                        />
                                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
                                    </div>
                                </AnimatedSection>
                            ))}
                        </div>
                    </section>
                )}

                {/* Traditional Styling Gallery */}
                {galleryImages.traditional.length > 0 && (
                    <section className="max-w-7xl mx-auto">
                        <AnimatedSection animation="fadeUp" className="text-center mb-12">
                            <h2 className="text-4xl font-bold text-neutral-900 mb-4">Traditional Nepali Styling</h2>
                            <div className="divider" />
                        </AnimatedSection>
                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-8">
                            {galleryImages.traditional.map((img, index) => (
                                <AnimatedSection key={index} animation="scaleIn" delay={index * 100} threshold={0.05}>
                                    <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-medium hover-lift group">
                                        <Image
                                            src={img}
                                            alt="Traditional styling"
                                            fill
                                            className="object-cover"
                                        />
                                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
                                    </div>
                                </AnimatedSection>
                            ))}
                        </div>
                    </section>
                )}

                {/* Training Videos */}
                {videos.length > 0 && (
                    <section className="max-w-7xl mx-auto">
                        <AnimatedSection animation="fadeUp" className="text-center mb-12">
                            <h2 className="text-4xl font-bold text-neutral-900 mb-4">Training Videos</h2>
                            <div className="divider" />
                        </AnimatedSection>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {videos.slice(0, 6).map((video, index) => (
                                <AnimatedSection key={index} animation="scaleIn" delay={index * 100} threshold={0.05}>
                                    <div className="relative aspect-video rounded-2xl overflow-hidden shadow-medium hover-lift bg-neutral-900">
                                        <video
                                            src={video}
                                            className="w-full h-full object-cover"
                                            controls
                                            preload="metadata"
                                        >
                                            Your browser does not support the video tag.
                                        </video>
                                    </div>
                                </AnimatedSection>
                            ))}
                        </div>
                    </section>
                )}
            </div>
        </div>
    )
}
