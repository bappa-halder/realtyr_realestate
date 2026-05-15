import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FadeUp from "../components/common/FadeUp";

const Privacy = () => {
    return (
        <>
            <Navbar />
            <section className="py-8 sm:py-10 md:py-14 lg:py-16">
                <div className="container mx-auto px-4">
                    <FadeUp>
                        <div className="mb-6 sm:mb-8 md:mb-10">
                            <p className="text-xs sm:text-sm text-gray-500 mb-2">
                                Effective Date: March 2026
                            </p>

                            <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight">
                                Privacy Policy
                            </h1>

                            <p className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-600 leading-relaxed">
                                Realtyr is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you use our website.
                            </p>
                        </div>
                    </FadeUp>
                    <FadeUp>
                        <div className="space-y-6 sm:space-y-8">

                            <div>
                                <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
                                    1. Information We Collect
                                </h2>
                                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                                    We may collect personal information such as your name, email address, phone number, and property preferences when you interact with our website or fill out forms.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
                                    2. How We Use Your Information
                                </h2>
                                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                                    Your information is used to provide better services, respond to inquiries, improve user experience, and send relevant updates regarding properties or offers.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
                                    3. Sharing of Information
                                </h2>
                                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                                    We do not sell or rent your personal information. However, we may share data with trusted partners or service providers to improve our services.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
                                    4. Cookies & Tracking
                                </h2>
                                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                                    Our website may use cookies to enhance user experience, analyze traffic, and personalize content. You can disable cookies through your browser settings.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
                                    5. Data Security
                                </h2>
                                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                                    We implement appropriate security measures to protect your personal data. However, no method of transmission over the internet is completely secure.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
                                    6. Third-Party Links
                                </h2>
                                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                                    Our platform may include links to third-party websites. We are not responsible for their privacy practices or content.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
                                    7. Your Rights
                                </h2>
                                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                                    You have the right to access, update, or delete your personal data. You may contact us at any time regarding your data.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
                                    8. Changes to This Policy
                                </h2>
                                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                                    We may update this Privacy Policy from time to time. Continued use of our website means you accept the updated policy.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
                                    9. Contact Us
                                </h2>
                                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                                    If you have any questions, contact us at{" "}
                                    <span className="font-medium text-black">
                                        info@example.com
                                    </span>
                                </p>
                            </div>

                        </div>
                    </FadeUp>

                </div>
            </section>
            <Footer />
        </>
    )
}

export default Privacy