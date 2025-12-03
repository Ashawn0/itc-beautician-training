import { getDictionary } from '@/lib/i18n'
import Image from 'next/image'

export default async function GalleryPage() {
    const dict = await getDictionary('en')

    // Placeholder images mixed with real ones
    const images = [
        { src: '/images/groupphoto_profandstudent.jpg', alt: 'Group Photo' },
        { src: '/images/profandstudentmain.jpg', alt: 'Training Session' },
        { src: '/images/photo1.jpg', alt: 'Trainer Demo' },
        // Placeholders for now as requested
        { src: 'https://placehold.co/600x400/FCE7F3/FF69B4?text=Classroom+Setup', alt: 'Classroom Setup' },
        { src: 'https://placehold.co/600x400/FCE7F3/FF69B4?text=Hair+Styling', alt: 'Hair Styling Practice' },
        { src: 'https://placehold.co/600x400/FCE7F3/FF69B4?text=Makeup+Practice', alt: 'Makeup Practice' },
        { src: 'https://placehold.co/600x400/FCE7F3/FF69B4?text=Nail+Art', alt: 'Nail Art' },
        { src: 'https://placehold.co/600x400/FCE7F3/FF69B4?text=Mehandi', alt: 'Mehandi Practice' },
        { src: 'https://placehold.co/600x400/FCE7F3/FF69B4?text=Certificates', alt: 'Certification' },
    ]

    return (
        <div className="bg-white min-h-screen pb-20">
            {/* Header */}
            <div className="bg-brand-pink-light/30 py-16 text-center">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">{dict.gallery.heading}</h1>
                <p className="text-gray-600 max-w-2xl mx-auto px-4">
                    {dict.gallery.intro}
                </p>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {images.map((img, index) => (
                        <div key={index} className="relative aspect-square rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow group">
                            <Image
                                src={img.src}
                                alt={img.alt}
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-500"
                                unoptimized={img.src.startsWith('http')} // For external placeholders
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-end p-4">
                                <span className="text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
                                    {img.alt}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
