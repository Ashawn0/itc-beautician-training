import { getDictionary } from '@/lib/i18n'
import Image from 'next/image'
import ParallaxSection from '@/components/ParallaxSection'
import AnimatedSection from '@/components/AnimatedSection'
import { getBackgroundImage } from '@/utils/backgroundImages'
import { getAllGalleryImages, getAllVideos } from '@/utils/imageAssets'

export default async function GalleryPage() {
    const dict = await getDictionary('en')
    const galleryImages = getAllGalleryImages()
    const videos = getAllVideos()

    return (
        <div className="min-h-screen bg-neutral-50">
            {/* Header with Parallax */}
            <ParallaxSection
                imageSrc={getBackgroundImage('gallery')}
                overlayOpacity={0.7}
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
                                {dict.gallery.heading}
                            </h1>
                            <p
                                className="font-inter text-xl text-white max-w-2xl mx-auto leading-relaxed font-light"
                                style={{ textShadow: '0 2px 12px rgba(0,0,0,0.8), 0 4px 24px rgba(0,0,0,0.6)' }}
                            >
                                {dict.gallery.intro}
                            </p>
                        </div>
                    </AnimatedSection>
                </div>
            </ParallaxSection>

            <div className="section-padding space-y-32">
                {/* General Gallery - Masonry-ish Grid */}
                <section className="max-w-7xl mx-auto px-4">
                    <AnimatedSection animation="fadeUp" className="text-center mb-16">
                        <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">Training & Events</h2>
                        <div className="divider" />
                    </AnimatedSection>

                    <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
                        {galleryImages.general.map((img, index) => (
                            <AnimatedSection key={index} animation="scaleIn" delay={index * 50} className="break-inside-avoid">
                                <div className="relative rounded-2xl overflow-hidden shadow-soft hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group">
                                    <Image
                                        src={img}
                                        alt="Training session"
                                        width={600}
                                        height={800}
                                        className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                                        <span className="text-white font-playfair font-bold text-xl translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                            Student Training
                                        </span>
                                    </div>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </section>

                {/* Makeup Gallery - Square Grid */}
                <section className="max-w-7xl mx-auto px-4 bg-white rounded-[3rem] p-8 md:p-16 shadow-soft">
                    <AnimatedSection animation="fadeUp" className="text-center mb-16">
                        <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">Makeup Artistry</h2>
                        <div className="divider" />
                    </AnimatedSection>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                        {galleryImages.makeup.slice(0, 16).map((img, index) => (
                            <AnimatedSection key={index} animation="scaleIn" delay={index * 30} threshold={0.05}>
                                <div className="relative aspect-square rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:scale-[1.02] group cursor-pointer">
                                    <Image
                                        src={img}
                                        alt="Makeup artistry"
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-rose-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </section>

                {/* Hair Styling Gallery */}
                {galleryImages.hair.length > 0 && (
                    <section className="max-w-7xl mx-auto px-4">
                        <AnimatedSection animation="fadeUp" className="text-center mb-16">
                            <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">Hair Styling</h2>
                            <div className="divider" />
                        </AnimatedSection>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                            {galleryImages.hair.map((img, index) => (
                                <AnimatedSection key={index} animation="scaleIn" delay={index * 50} threshold={0.05}>
                                    <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-soft hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group">
                                        <Image
                                            src={img}
                                            alt="Hair styling"
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    </div>
                                </AnimatedSection>
                            ))}
                        </div>
                    </section>
                )}

                {/* Traditional Styling Gallery */}
                {galleryImages.traditional.length > 0 && (
                    <section className="max-w-7xl mx-auto px-4 bg-rose-50 rounded-[3rem] p-8 md:p-16">
                        <AnimatedSection animation="fadeUp" className="text-center mb-16">
                            <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">Traditional Styling</h2>
                            <div className="divider" />
                        </AnimatedSection>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {galleryImages.traditional.map((img, index) => (
                                <AnimatedSection key={index} animation="scaleIn" delay={index * 100} threshold={0.05}>
                                    <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-medium hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group">
                                        <Image
                                            src={img}
                                            alt="Traditional styling"
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300" />
                                    </div>
                                </AnimatedSection>
                            ))}
                        </div>
                    </section>
                )}

                {/* Training Videos */}
                {videos.length > 0 && (
                    <section className="max-w-7xl mx-auto px-4">
                        <AnimatedSection animation="fadeUp" className="text-center mb-16">
                            <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">Training Videos</h2>
                            <div className="divider" />
                        </AnimatedSection>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {videos.slice(0, 6).map((video, index) => (
                                <AnimatedSection key={index} animation="scaleIn" delay={index * 100} threshold={0.05}>
                                    <div className="relative aspect-video rounded-2xl overflow-hidden shadow-medium hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-neutral-900 group">
                                        <video
                                            src={video}
                                            className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
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

