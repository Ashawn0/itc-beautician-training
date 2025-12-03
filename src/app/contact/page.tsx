import { getDictionary } from '@/lib/i18n'
import ContactForm from '@/components/ContactForm'

export default async function ContactPage({ searchParams }: { searchParams: Promise<{ course?: string }> }) {
    const dict = await getDictionary('en')
    const { course } = await searchParams

    const courseList = dict.courses.map(c => c.title)

    return (
        <div className="bg-gray-50 min-h-screen pb-20">
            {/* Header */}
            <div className="bg-brand-pink-light/30 py-16 text-center">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">{dict.contact.heading}</h1>
                <p className="text-gray-600 max-w-2xl mx-auto px-4">
                    {dict.contact.intro}
                </p>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Details */}
                    <div>
                        <div className="bg-white rounded-2xl shadow-sm p-8 border border-gray-100 mb-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>

                            <div className="space-y-6">
                                <div className="flex items-start">
                                    <div className="w-10 h-10 bg-brand-pink-light rounded-full flex items-center justify-center text-brand-pink-dark mr-4 flex-shrink-0">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900">Address</h3>
                                        <p className="text-gray-600">{dict.contact.details.address}</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="w-10 h-10 bg-brand-pink-light rounded-full flex items-center justify-center text-brand-pink-dark mr-4 flex-shrink-0">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900">Phone</h3>
                                        <p className="text-gray-600">{dict.contact.details.phone}</p>
                                        <p className="text-gray-600">{dict.contact.details.whatsapp} (WhatsApp)</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="w-10 h-10 bg-brand-pink-light rounded-full flex items-center justify-center text-brand-pink-dark mr-4 flex-shrink-0">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900">Email</h3>
                                        <p className="text-gray-600">{dict.contact.details.email}</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="w-10 h-10 bg-brand-pink-light rounded-full flex items-center justify-center text-brand-pink-dark mr-4 flex-shrink-0">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900">Opening Hours</h3>
                                        <p className="text-gray-600">{dict.contact.details.hours}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Map Placeholder */}
                        <div className="bg-gray-200 rounded-2xl h-64 w-full flex items-center justify-center text-gray-500">
                            Map Placeholder (Embed Google Map here)
                        </div>
                    </div>

                    {/* Form */}
                    <div>
                        <ContactForm
                            formDict={dict.contact.form}
                            courseList={courseList}
                            initialCourse={course}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
