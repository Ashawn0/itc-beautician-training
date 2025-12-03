import { getDictionary } from '@/lib/i18n'

export default async function AboutPage() {
    const dict = await getDictionary('en')

    return (
        <div className="bg-white min-h-screen pb-20">
            {/* Header */}
            <div className="bg-brand-pink-light/30 py-16 text-center">
                <h1 className="text-4xl font-bold text-gray-900">{dict.about.heading}</h1>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-12">
                {/* Intro */}
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <p className="text-lg text-gray-600 leading-relaxed">
                        {dict.about.introduction}
                    </p>
                </div>

                {/* Mission & Vision */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
                    <div className="bg-gray-50 p-8 rounded-2xl shadow-sm border border-gray-100">
                        <h2 className="text-2xl font-bold text-brand-pink-dark mb-4">{dict.about.mission.title}</h2>
                        <p className="text-gray-700">{dict.about.mission.description}</p>
                    </div>
                    <div className="bg-gray-50 p-8 rounded-2xl shadow-sm border border-gray-100">
                        <h2 className="text-2xl font-bold text-brand-gold-dark mb-4">{dict.about.vision.title}</h2>
                        <p className="text-gray-700">{dict.about.vision.description}</p>
                    </div>
                </div>

                {/* Teaching Approach */}
                <div className="mb-20">
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">{dict.about.teachingApproach.title}</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {dict.about.teachingApproach.points.map((point, index) => (
                            <div key={index} className="flex items-center p-4 bg-white shadow-sm rounded-lg border border-gray-100">
                                <div className="w-10 h-10 bg-brand-pink-light rounded-full flex items-center justify-center text-brand-pink-dark mr-4 flex-shrink-0">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <span className="text-gray-800 font-medium">{point}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Why Students Choose Us */}
                <div>
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">{dict.about.whyStudentsChooseUs.title}</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {dict.about.whyStudentsChooseUs.points.map((point, index) => (
                            <div key={index} className="flex items-center p-4 bg-white shadow-sm rounded-lg border border-gray-100">
                                <div className="w-10 h-10 bg-brand-gold-light rounded-full flex items-center justify-center text-brand-gold-dark mr-4 flex-shrink-0">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                    </svg>
                                </div>
                                <span className="text-gray-800 font-medium">{point}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
