import { getDictionary } from '@/lib/i18n'
import Image from 'next/image'

export default async function TrainerPage() {
    const dict = await getDictionary('en')
    const { trainer } = dict

    return (
        <div className="bg-white min-h-screen pb-20">
            {/* Header */}
            <div className="bg-brand-gold-light/20 py-16 text-center">
                <h1 className="text-4xl font-bold text-gray-900 mb-2">{trainer.title}</h1>
                <p className="text-xl text-brand-gold-dark font-medium">{trainer.name}</p>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-12">
                <div className="max-w-5xl mx-auto">
                    <div className="flex flex-col md:flex-row gap-12 items-start">
                        {/* Image */}
                        <div className="w-full md:w-1/3 relative">
                            <div className="aspect-[3/4] relative rounded-2xl overflow-hidden shadow-xl">
                                <Image
                                    src="/images/photo1.jpg"
                                    alt={trainer.name}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-brand-pink/20 rounded-full -z-10"></div>
                        </div>

                        {/* Content */}
                        <div className="w-full md:w-2/3">
                            <h2 className="text-3xl font-bold text-gray-900 mb-2">{trainer.name}</h2>
                            <p className="text-brand-pink-dark font-semibold mb-6">{trainer.subtitle}</p>

                            <div className="prose prose-lg text-gray-600 mb-8">
                                {trainer.bio.map((paragraph, index) => (
                                    <p key={index} className="mb-4">{paragraph}</p>
                                ))}
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-4">{trainer.expertise.title}</h3>
                                    <ul className="space-y-2">
                                        {trainer.expertise.items.map((item, index) => (
                                            <li key={index} className="flex items-center text-gray-700">
                                                <span className="w-2 h-2 bg-brand-gold rounded-full mr-3"></span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 italic text-gray-700">
                                    <h3 className="text-lg font-bold text-gray-900 mb-4 not-italic">{trainer.philosophy.title}</h3>
                                    {trainer.philosophy.quote}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
