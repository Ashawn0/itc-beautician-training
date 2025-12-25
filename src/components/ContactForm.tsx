'use client'

import { useState } from 'react'
import MagneticButton from "@/components/ui/MagneticButton";

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
            <div className="bg-white border border-rose-100 rounded-[2rem] p-12 text-center shadow-lg animate-fade-up">
                <div className="w-24 h-24 bg-rose-50 text-rose-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner">
                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                </div>
                <h3 className="font-playfair text-4xl font-bold text-neutral-900 mb-4">Thank You!</h3>
                <p className="font-inter text-neutral-600 text-lg mb-8 font-light">{formDict.success}</p>
                <button
                    onClick={() => setSubmitted(false)}
                    className="text-rose-600 font-semibold hover:text-rose-700 underline underline-offset-4 transition-colors"
                >
                    Send another message
                </button>
            </div>
        )
    }

    const inputClasses = "peer w-full px-0 py-4 border-b border-neutral-300 bg-transparent focus:border-rose-500 outline-none transition-all placeholder-transparent text-neutral-900 font-inter text-lg";
    const labelClasses = "absolute left-0 -top-3.5 text-sm text-neutral-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-neutral-400 peer-placeholder-shown:top-4 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-rose-600 cursor-text font-inter";

    return (
        <form onSubmit={handleSubmit} className="bg-white shadow-xl rounded-[2.5rem] p-10 md:p-14 border border-neutral-100 relative overflow-hidden">
            {/* Decorative background blur */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-rose-50 rounded-bl-full -mr-16 -mt-16 opacity-50 pointer-events-none" />

            <h2 className="font-playfair text-4xl font-bold text-neutral-900 mb-10 relative z-10">{formDict.heading}</h2>

            <div className="space-y-10 relative z-10">
                <div className="relative group">
                    <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        placeholder="Name"
                        value={formData.name}
                        onChange={handleChange}
                        className={inputClasses}
                    />
                    <label htmlFor="name" className={labelClasses}>
                        {formDict.fields.name} <span className="text-rose-500">*</span>
                    </label>
                </div>

                <div className="relative group">
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        placeholder="Phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={inputClasses}
                    />
                    <label htmlFor="phone" className={labelClasses}>
                        {formDict.fields.phone} <span className="text-rose-500">*</span>
                    </label>
                </div>

                <div className="relative group">
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        className={inputClasses}
                    />
                    <label htmlFor="email" className={labelClasses}>
                        {formDict.fields.email}
                    </label>
                </div>

                <div className="relative group">
                    <select
                        id="course"
                        name="course"
                        value={formData.course}
                        onChange={handleChange}
                        className={`${inputClasses} pt-5 pb-3 appearance-none cursor-pointer`}
                    >
                        <option value="" disabled className="text-neutral-400">Select a course...</option>
                        {courseList.map((course) => (
                            <option key={course} value={course} className="text-neutral-900 py-2">
                                {course}
                            </option>
                        ))}
                    </select>
                    <label htmlFor="course" className="absolute left-0 -top-3.5 text-sm text-rose-600 font-medium">
                        {formDict.fields.course}
                    </label>
                    <div className="absolute right-0 top-6 pointer-events-none text-neutral-400">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </div>
                </div>

                <div className="relative group">
                    <textarea
                        id="message"
                        name="message"
                        rows={4}
                        placeholder="Message"
                        value={formData.message}
                        onChange={handleChange}
                        className={`${inputClasses} resize-none`}
                    ></textarea>
                    <label htmlFor="message" className={labelClasses}>
                        {formDict.fields.message}
                    </label>
                </div>

                <div className="pt-4">
                    <MagneticButton
                        type="submit"
                        className="w-full py-5 text-lg font-semibold tracking-wide shadow-lg hover:shadow-glow-rose"
                    >
                        {formDict.fields.submit}
                    </MagneticButton>
                </div>
            </div>
        </form>
    )
}

