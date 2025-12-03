import { getDictionary } from '@/lib/i18n'
import Image from 'next/image'
import ParallaxSection from '@/components/ParallaxSection'
import AnimatedSection from '@/components/AnimatedSection'
import { getGalleryImages } from '@/utils/imageUtils'
import { getBackgroundImage } from '@/utils/backgroundImages'

export default async function GalleryPage() {
    const dict = await getDictionary('en')

    const generalImages = [
        { src: '/images/groupphoto_profandstudent.jpg', alt: 'Group Photo' },
        { src: '/images/profandstudentmain.jpg', alt: 'Training Session' },
        { src: '/images/photo1.jpg', alt: 'Trainer Demo' },
    ]

    const makeupImages = getGalleryImages('makeup')
    const nailsImages = getGalleryImages('nails')
    const hairImages = getGalleryImages('hair')

    const makeupVideos = Array.from({ length: 3 }, (_, i) => ({
        src: `/images/gallery/videos/demo-makeup-${String(i + 1).padStart(2, '0')}.mp4`,
        alt: `Makeup Demonstration ${i + 1}`,
    }))

    const nailsVideos = Array.from({ length: 10 }, (_, i) => ({
        src: `/images/gallery/videos/demo-nails-${String(i).padStart(2, '0')}.mp4`,
        alt: `Nail Art Demonstration ${i}`,
    }))

    return (
        <div className="min-h-screen">
            {/* Header with Parallax */}
            <ParallaxSection
                imageSrc={getBackgroundImage('gallery')}
                overlayOpacity={0.7}
                overlayColor="light"
                minHeight="400px"
                className="flex items-center justify-center"
            >
                <div className="container mx-auto px-4 text-center">
                    <AnimatedSection animation="fadeUp">
                        <h1 className="text-5xl lg:text-6xl font-bold text-neutral-900 mb-6">
                            {dict.gallery.heading}
                        </h1>
                        <p className="text-xl text-neutral-700 max-w-3xl mx-auto leading-relaxed">
                            {dict.gallery.intro}
                        </p>
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
                        {generalImages.map((img, index) => (
                            <AnimatedSection key={index} animation="scaleIn" delay={index * 100}>
                                <div className="relative h-80 rounded-2xl overflow-hidden shadow-medium hover-lift group">
                                    <Image
                                        src={img.src}
                                        alt={img.alt}
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                        <span className="text-white font-bold text-xl">
                                            {img.alt}
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
                        {makeupImages.slice(0, 12).map((img, index) => (
                            <AnimatedSection key={index} animation="scaleIn" delay={index * 50} threshold={0.05}>
                                <div className="relative aspect-square rounded-2xl overflow-hidden shadow-soft hover-lift group">
                                    <Image
                                        src={img.src}
                                        alt={img.alt}
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
                {hairImages.length > 0 && (
                    <section className="max-w-7xl mx-auto">
                        <AnimatedSection animation="fadeUp" className="text-center mb-12">
                            <h2 className="text-4xl font-bold text-neutral-900 mb-4">Hair Styling & Cutting</h2>
                            <div className="divider" />
                        </AnimatedSection>
                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                            {hairImages.map((img, index) => (
                                <AnimatedSection key={index} animation="scaleIn" delay={index * 50} threshold={0.05}>
                                    <div className="relative aspect-square rounded-2xl overflow-hidden shadow-soft hover-lift group">
                                        <Image
                                            src={img.src}
                                            alt={img.alt}
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

                {/* Nail Art Gallery */}
                <section className="max-w-7xl mx-auto">
                    <AnimatedSection animation="fadeUp" className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-neutral-900 mb-4">Nail Art Designs</h2>
                        <div className="divider" />
                    </AnimatedSection>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                        {nailsImages.map((img, index) => (
                            <AnimatedSection key={index} animation="scaleIn" delay={index * 50} threshold={0.05}>
                                <div className="relative aspect-square rounded-2xl overflow-hidden shadow-soft hover-lift group">
                                    <Image
                                        src={img.src}
                                        alt={img.alt}
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </section>

                {/* Video Sections */}
                <section className="max-w-7xl mx-auto">
                    <AnimatedSection animation="fadeUp" className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-neutral-900 mb-4">Training Videos</h2>
                        <div className="divider" />
                    </AnimatedSection>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[...makeupVideos, ...nailsVideos.slice(0, 3)].map((video, index) => (
                            <AnimatedSection key={index} animation="scaleIn" delay={index * 100} threshold={0.05}>
                                <div className="relative aspect-video rounded-2xl overflow-hidden shadow-medium hover-lift">
                                    <video
                                        src={video.src}
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
            </div>
        </div>
    )
}
