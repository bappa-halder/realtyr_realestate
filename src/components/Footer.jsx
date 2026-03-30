import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo-white.svg"
import footer from "../assets/footer.jpg"

const Footer = () => {
    return (
        <>

            <footer id="footer" className="relative pt-10 md:pt-16">

                <div className="container mx-auto px-4">
                    <div className="relative">
                        <img src={footer} alt="Footer Banner" className="w-full h-auto object-cover rounded-xl min-h-[330px]" />
                        <div className="absolute w-full inset-0 bg-black/60 flex flex-col items-center justify-center px-4 py-16 md:py-24 text-center rounded-xl">
                            <div className="max-w-[750px] text-white">
                                <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold">Find your dream home today!</h2>
                                <p className="mt-2 mb-6 md:mb-10 text-sm md:text-base leading-relaxed">
                                    We make it easy for you to find the perfect property that meets your needs. With thousands of listings across diverse property types, your dream home is just a few clicks away.
                                </p>
                                <Link
                                    to="/contact"
                                    className="inline-block py-2 px-6 border border-white rounded-lg hover:bg-white hover:text-black transition duration-300 ease-in-out"
                                >
                                    Join Now
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="text-white pt-16 md:pt-32 pb-12 px-4 md:px-6 lg:px-0">
                    <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row md:justify-between gap-10">

                        {/* Logo + Description */}
                        <div className="md:w-1/3">
                            <div className="max-w-[150px]">
                                <img src={logo} alt="Realtyr Logo" className="w-full h-auto" />
                            </div>
                            <p className="mt-5 text-sm md:text-base leading-relaxed">
                                Let’s help you find the perfect property or get top value for the one you own.
                            </p>
                        </div>

                        {/* Pages */}
                        <div className="md:w-1/5">
                            <h5 className="text-xl md:text-2xl mb-4 font-semibold">Pages</h5>
                            <ul className="space-y-2 text-sm md:text-base">
                                <li><Link to="/" className="hover:text-gray-300">Home</Link></li>
                                <li><Link to="/about" className="hover:text-gray-300">About</Link></li>
                                <li><Link to="/properties" className="hover:text-gray-300">Properties</Link></li>
                                <li><Link to="/privacy" className="hover:text-gray-300">Privacy Policy</Link></li>
                                <li><Link to="/terms" className="hover:text-gray-300">Terms & Conditions</Link></li>
                            </ul>
                        </div>

                        {/* Contact */}
                        <div className="md:w-1/3 space-y-4">
                            <h5 className="text-xl md:text-2xl mb-2 font-semibold">Contact</h5>

                            {/* Address */}
                            <div className="flex items-start gap-3">
                                <div className="w-9 h-9 rounded-full border border-white flex justify-center items-center shrink-0 text-sm">
                                    <i className="fa-solid fa-location-dot"></i>
                                </div>
                                <div className="text-sm md:text-base">
                                    <p className="font-medium">Office Address</p>
                                    <p>4517 Washington Ave. Manchester, Kentucky 39495</p>
                                </div>
                            </div>

                            {/* Email */}
                            <div className="flex items-start gap-3">
                                <div className="w-9 h-9 rounded-full border border-white flex justify-center items-center shrink-0 text-sm">
                                    <i className="fa-solid fa-envelope"></i>
                                </div>
                                <div className="text-sm md:text-base">
                                    <p className="font-medium">Write Email</p>
                                    <p>info@example.com</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="bg-black border-t border-gray-700 py-6 px-4 md:px-6 lg:px-0">
                    <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">

                        <p className="text-sm md:text-base text-white">
                            © 2026 <Link to="/" className="hover:text-gray-300">Realtyr</Link> All rights reserved.
                        </p>

                        <div className="flex gap-3">
                            <Link to="https://www.facebook.com" target="_blank" className="w-9 h-9 flex justify-center items-center text-white border border-white rounded-full hover:bg-white hover:text-black transition"><i className="fa-brands fa-facebook-f"></i></Link>
                            <Link to="https://www.instagram.com/" target="_blank" className="w-9 h-9 flex justify-center items-center text-white border border-white rounded-full hover:bg-white hover:text-black transition"><i className="fa-brands fa-instagram"></i></Link>
                            <Link to="https://x.com/" target="_blank" className="w-9 h-9 flex justify-center items-center text-white border border-white rounded-full hover:bg-white hover:text-black transition"><i className="fa-brands fa-x-twitter"></i></Link>
                            <Link to="https://in.linkedin.com/" target="_blank" className="w-9 h-9 flex justify-center items-center text-white border border-white rounded-full hover:bg-white hover:text-black transition"><i className="fa-brands fa-linkedin-in"></i></Link>
                        </div>

                    </div>
                </div>

            </footer>






        </>
    )
}

export default Footer