import { getDictionary } from '@/lib/i18n'
import Image from 'next/image'
import { getGalleryImages } from '@/utils/imageUtils'

export default async function GalleryPage() {
    const dict = await getDictionary('en')

    // General gallery images
    const generalImages = [
        { src: '/images/groupphoto_profandstudent.jpg', alt: 'Group Photo' },
        { src: '/images/profandstudentmain.jpg', alt: 'Training Session' },
        { src: '/images/photo1.jpg', alt: 'Trainer Demo' },
    ]

    // Images from asset map
    const makeupImages = getGalleryImages('makeup')
    const nailsImages = getGalleryImages('nails')
    const hairImages = getGalleryImages('hair')

    // Videos
    const makeupVideos = Array.from({ length: 3 }, (_, i) => ({
        src: `/images/gallery/videos/demo-makeup-${String(i + 1).padStart(2, '0')}.mp4`,
        alt: `Makeup Demonstration ${i + 1}`,
    }))

    const nailsVideos = Array.from({ length: 10 }, (_, i) => ({
        src: `/images/gallery/videos/demo-nails-${String(i).padStart(2, '0')}.mp4`,
        alt: `Nail Art Demonstration ${i}`,
    }))

    return (
        <div className="bg-white min-h-screen pb-20">
            {/* Header */}
            <div className="bg-brand-pink-light/30 py-16 text-center">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">{dict.gallery.heading}</h1>
                <p className="text-gray-600 max-w-2xl mx-auto px-4">
                    {dict.gallery.intro}
                </p>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-12 space-y-16">
                {/* General Gallery */}
                <section>
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Training & Events</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {generalImages.map((img, index) => (
                            <div key={index} className="relative aspect-square rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow group">
                                <Image
                                    src={img.src}
                                    alt={img.alt}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-end p-4">
                                    <span className="text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
                                        {img.alt}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Makeup Gallery */}
                <section>
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Makeup & Beauty Work</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {makeupImages.map((img, index) => (
                            <div key={index} className="relative aspect-square rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow group">
                                <Image
                                    src={img.src}
                                    alt={img.alt}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-end p-4">
                                    <span className="text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
                                        {img.alt}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Nail Art Gallery */}
                <section>
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Nail Art Designs</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {nailsImages.map((img, index) => (
                            <div key={index} className="relative aspect-square rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow group">
                                <Image
                                    src={img.src}
                                    alt={img.alt}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-end p-4">
                                    <span className="text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
                                        {img.alt}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Hair Styling Gallery */}
                {hairImages.length > 0 && (
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Hair Styling & Cutting</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {hairImages.map((img, index) => (
                                <div key={index} className="relative aspect-square rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow group">
                                    <Image
                                        src={img.src}
                                        alt={img.alt}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-end p-4">
                                        <span className="text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
                                            {img.alt}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {/* Video Section - Makeup */}
                <section>
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Makeup Training Videos</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {makeupVideos.map((video, index) => (
                            <div key={index} className="relative aspect-video rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow group">
                                <video
                                    src={video.src}
                                    className="w-full h-full object-cover"
                                    controls
                                    preload="metadata"
                                >
                                    Your browser does not support the video tag.
                                </video>
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 pointer-events-none"></div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Video Section - Nail Art */}
                <section>
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Nail Art Training Videos</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {nailsVideos.map((video, index) => (
                            <div key={index} className="relative aspect-video rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow group">
                                <video
                                    src={video.src}
                                    className="w-full h-full object-cover"
                                    controls
                                    preload="metadata"
                                >
                                    Your browser does not support the video tag.
                                </video>
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 pointer-events-none"></div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    )
}
