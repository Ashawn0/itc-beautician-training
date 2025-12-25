import Link from 'next/link'
import Image from 'next/image'

type CommonDict = {
    brandName: string
    brandShortName: string
}

type NavDict = {
    home: string
    about: string
    courses: string
    contact: string
}

type ContactDict = {
    details: {
        phone: string
        email: string
        address: string
    }
}

export default function Footer({
    common,
    nav,
    contact,
}: {
    common: CommonDict
    nav: NavDict
    contact: ContactDict
}) {
    return (
        <footer className="bg-neutral-900 text-white pt-20 pb-10 relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-rose-500 via-gold-400 to-rose-500" />
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-rose-900/20 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gold-900/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Info */}
                    <div className="lg:col-span-1">
                        <div className="mb-6">
                            <Image
                                src="/logos/clean2_LogoFull.png"
                                alt={common.brandName}
                                width={220}
                                height={90}
                                className="h-auto brightness-0 invert opacity-90"
                            />
                        </div>
                        <p className="text-neutral-400 text-sm leading-relaxed font-inter font-light">
                            Elevating beauty standards through professional training and excellence. Join us to shape your future in the beauty industry.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-playfair text-xl font-bold text-white mb-6">Explore</h3>
                        <ul className="space-y-4">
                            {[
                                { href: '/', label: nav.home },
                                { href: '/about', label: nav.about },
                                { href: '/courses', label: nav.courses },
                                { href: '/contact', label: nav.contact },
                            ].map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-neutral-400 hover:text-rose-400 transition-colors duration-300 flex items-center group"
                                    >
                                        <span className="w-0 group-hover:w-2 h-[1px] bg-rose-400 mr-0 group-hover:mr-2 transition-all duration-300" />
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="font-playfair text-xl font-bold text-white mb-6">Contact</h3>
                        <ul className="space-y-4 text-sm text-neutral-400 font-inter font-light">
                            <li className="flex items-start">
                                <svg className="w-5 h-5 mr-3 text-rose-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <span>{contact.details.address}</span>
                            </li>
                            <li className="flex items-center">
                                <svg className="w-5 h-5 mr-3 text-rose-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                <span>{contact.details.phone}</span>
                            </li>
                            <li className="flex items-center">
                                <svg className="w-5 h-5 mr-3 text-rose-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <span>{contact.details.email}</span>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter (Placeholder) */}
                    <div>
                        <h3 className="font-playfair text-xl font-bold text-white mb-6">Stay Updated</h3>
                        <p className="text-neutral-400 text-sm mb-4 font-light">Subscribe to get the latest beauty tips and course updates.</p>
                        <form className="flex flex-col space-y-3">
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-rose-500 transition-colors"
                            />
                            <button className="bg-rose-600 text-white text-sm font-semibold py-3 rounded-lg hover:bg-rose-700 transition-colors shadow-glow-rose">
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-neutral-500 font-light">
                    <p>&copy; {new Date().getFullYear()} {common.brandName}. All rights reserved.</p>
                    <div className="mt-4 md:mt-0 flex items-center space-x-6">
                        <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
                        <span className="text-neutral-600">|</span>
                        <span className="text-neutral-600">
                            Powered by <Link href="https://github.com/Ashawn0" target="_blank" className="text-neutral-500 hover:text-rose-400 transition-colors">Ashawn</Link>
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    )
}

