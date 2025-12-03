import Link from 'next/link'

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
        <footer className="bg-gray-900 text-white pt-12 pb-8">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Brand Info */}
                    <div>
                        <h3 className="text-xl font-bold text-brand-gold mb-4">
                            {common.brandShortName}
                        </h3>
                        <p className="text-gray-400 text-sm">
                            {common.brandName}
                        </p>
                        <p className="text-gray-400 text-sm mt-4">
                            Professional beauty training for your career.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/" className="text-gray-400 hover:text-brand-pink">
                                    {nav.home}
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className="text-gray-400 hover:text-brand-pink">
                                    {nav.about}
                                </Link>
                            </li>
                            <li>
                                <Link href="/courses" className="text-gray-400 hover:text-brand-pink">
                                    {nav.courses}
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-gray-400 hover:text-brand-pink">
                                    {nav.contact}
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li>{contact.details.address}</li>
                            <li>{contact.details.phone}</li>
                            <li>{contact.details.email}</li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-500">
                    &copy; {new Date().getFullYear()} {common.brandName}. All rights reserved.
                </div>
            </div>
        </footer>
    )
}
