'use client'

import { useState } from 'react'

type FormDict = {
    heading: string
    intro: string
    fields: {
        name: string
        phone: string
        email: string
        course: string
        message: string
        submit: string
    }
    success: string
}

export default function ContactForm({ formDict, courseList, initialCourse }: { formDict: FormDict; courseList: string[]; initialCourse?: string }) {
    const [submitted, setSubmitted] = useState(false)
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        course: initialCourse || '',
        message: '',
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Here you would typically send data to an API
        console.log('Form submitted:', formData)
        setSubmitted(true)
    }

    if (submitted) {
        return (
            <div className="bg-white border-2 border-green-500 rounded-3xl p-12 text-center shadow-soft">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                </div>
                <h3 className="text-3xl font-bold text-neutral-900 mb-3">Thank You!</h3>
                <p className="text-neutral-700 text-lg mb-6">{formDict.success}</p>
                <button
                    onClick={() => setSubmitted(false)}
                    className="text-green-600 font-semibold hover:text-green-700 underline"
                >
                    Send another message
                </button>
            </div>
        )
    }

    return (
        <form onSubmit={handleSubmit} className="bg-white shadow-soft rounded-3xl p-10">
            <h2 className="text-3xl font-bold text-neutral-900 mb-8">{formDict.heading}</h2>

            <div className="space-y-6">
                <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-neutral-700 mb-2">
                        {formDict.fields.name} <span className="text-rose-600">*</span>
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-5 py-3 border-2 border-neutral-200 rounded-2xl focus:ring-2 focus:ring-rose-500 focus:border-transparent outline-none transition-all"
                    />
                </div>

                <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-neutral-700 mb-2">
                        {formDict.fields.phone} <span className="text-rose-600">*</span>
                    </label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-5 py-3 border-2 border-neutral-200 rounded-2xl focus:ring-2 focus:ring-rose-500 focus:border-transparent outline-none transition-all"
                    />
                </div>

                <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-neutral-700 mb-2">
                        {formDict.fields.email}
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-5 py-3 border-2 border-neutral-200 rounded-2xl focus:ring-2 focus:ring-rose-500 focus:border-transparent outline-none transition-all"
                    />
                </div>

                <div>
                    <label htmlFor="course" className="block text-sm font-semibold text-neutral-700 mb-2">
                        {formDict.fields.course}
                    </label>
                    <select
                        id="course"
                        name="course"
                        value={formData.course}
                        onChange={handleChange}
                        className="w-full px-5 py-3 border-2 border-neutral-200 rounded-2xl focus:ring-2 focus:ring-rose-500 focus:border-transparent outline-none transition-all bg-white"
                    >
                        <option value="">Select a course...</option>
                        {courseList.map((course) => (
                            <option key={course} value={course}>
                                {course}
                            </option>
                        ))}
                    </select>
                </div>

                <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-neutral-700 mb-2">
                        {formDict.fields.message}
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-5 py-3 border-2 border-neutral-200 rounded-2xl focus:ring-2 focus:ring-rose-500 focus:border-transparent outline-none transition-all resize-none"
                    ></textarea>
                </div>

                <button
                    type="submit"
                    className="w-full bg-rose-600 text-white font-bold py-4 rounded-full hover:bg-rose-700 transition-all shadow-medium hover:shadow-glow-rose hover:scale-[1.02]"
                >
                    {formDict.fields.submit}
                </button>
            </div>
        </form>
    )
}
