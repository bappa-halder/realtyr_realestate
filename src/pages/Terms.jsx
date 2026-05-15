import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FadeUp from "../components/common/FadeUp";

const Terms = () => {
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
                                Terms & Conditions
                            </h1>

                            <p className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-600 leading-relaxed">
                                Welcome to Realtyr. By accessing or using our website, you agree to comply
                                with and be bound by the following terms and conditions.
                            </p>
                        </div>
                    </FadeUp>
                    <FadeUp>
                        <div className="space-y-6 sm:space-y-8">

                            <div>
                                <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
                                    1. Use of Website
                                </h2>
                                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                                    This website is intended for users looking to buy, sell, or rent
                                    properties. You agree to use the platform only for lawful purposes.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
                                    2. Property Listings
                                </h2>
                                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                                    Realtyr does not guarantee the accuracy of listings. Users should verify
                                    all property details independently before making decisions.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
                                    3. User Responsibilities
                                </h2>
                                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                                    You must provide accurate information while using our services. Any
                                    misuse or fraudulent activity may lead to account suspension.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
                                    4. Privacy Policy
                                </h2>
                                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                                    We respect your privacy and handle your data according to our privacy
                                    policy.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
                                    5. Third-Party Services
                                </h2>
                                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                                    Our platform may include links to third-party websites. We are not
                                    responsible for their content or policies.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
                                    6. Limitation of Liability
                                </h2>
                                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                                    Realtyr is not liable for any damages arising from the use of this
                                    website or its services.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
                                    7. Changes to Terms
                                </h2>
                                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                                    We may update these terms at any time. Continued use of the site means
                                    you accept the updated terms.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
                                    8. Contact Us
                                </h2>
                                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                                    For any questions, contact us at{" "}
                                    <span className="font-medium text-black">
                                        info@realtyr.com
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

export default Terms