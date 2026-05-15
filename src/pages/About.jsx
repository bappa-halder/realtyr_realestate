import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import about_first from "../assets/about-first.jpg"
import about_second from "../assets/about-second.jpg"
import tick from "../assets/tick-icon.svg"
import commercial from "../assets/service-icon-01.svg"
import home from "../assets/service-icon-02.svg"
import relocation from "../assets/service-icon-03.svg"
import service from "../assets/service-image.jpg"
const About = () => {
    return (
        <>
            <Navbar />

            <section id="about-us" className="py-10 md:py-16">
                <div className="container mx-auto px-4">
                    <FadeUp>
                        {/* Heading */}
                        <div className="mb-8">
                            <div className="tag flex items-center gap-2 mb-1">
                                <div className="w-[15px] h-[15px] rounded-full flex justify-center items-center border">
                                    <div className="w-[7.5px] h-[7.5px] rounded-full bg-black"></div>
                                </div>
                                <p className="leading-none text-sm md:text-base">Who We Are</p>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-semibold">About us</h2>
                        </div>

                        {/* Main content */}
                        <div className="flex flex-col lg:flex-row gap-10 lg:gap-[70px]">

                            {/* Images */}
                            <div className="relative w-full lg:w-1/2 h-[420px] sm:h-[480px]">
                                <div className="max-w-[260px] sm:max-w-[372px] absolute bottom-0 left-0">
                                    <img src={about_first} alt="" className="rounded-xl w-full" />
                                </div>

                                <div className="max-w-[240px] sm:max-w-[310px] max-h-[370px] border-2 border-white rounded-xl absolute top-0 right-0">
                                    <img src={about_second} alt="" className="rounded-xl w-full h-full object-cover" />
                                </div>
                            </div>

                            {/* Text content */}
                            <div className="w-full lg:w-1/2 py-2 md:py-4">
                                <h6 className="mb-4 text-base md:text-lg font-normal">Our Story</h6>

                                <h3 className="text-2xl md:text-3xl font-semibold leading-snug">
                                    At Realtyr, we are passionate about revolutionizing the real estate experience.
                                </h3>

                                <p className="mt-4 md:mt-6 mb-8 md:mb-10 text-sm md:text-base">
                                    Founded on the principles of transparency, innovation, and customer-centric service, our platform is designed to connect buyers, sellers, and investors with the best property opportunities in the market.
                                </p>

                                <div className="flex flex-col sm:flex-row sm:items-start gap-8 sm:gap-16 mb-10 md:mb-12">

                                    {/* Stats */}
                                    <div>
                                        <p className="text-3xl md:text-5xl font-normal mb-2">50+</p>
                                        <p className="text-sm md:text-base">Real Estate Partners</p>
                                    </div>

                                    {/* List */}
                                    <ul>
                                        <li className="flex items-center mb-4 text-sm md:text-base">
                                            <img src={tick} alt="" className="w-[17px] mr-3" />
                                            <span>Comprehensive Property Listings</span>
                                        </li>
                                        <li className="flex items-center mb-4 text-sm md:text-base">
                                            <img src={tick} alt="" className="w-[17px] mr-3" />
                                            <span>Advanced Search Tools</span>
                                        </li>
                                        <li className="flex items-center text-sm md:text-base">
                                            <img src={tick} alt="" className="w-[17px] mr-3" />
                                            <span>Transparent Bidding Platform</span>
                                        </li>
                                    </ul>
                                </div>

                                <Link to="/contact" className="md:text-lg sm:text-base text-sm border border-black rounded py-2 px-5 text-sm md:text-base hover:bg-black hover:text-white transition duration-300 ease-in-out">
                                    Get Started
                                </Link>
                            </div>
                        </div>
                    </FadeUp>

                </div>
            </section>






            <section id="service" className="py-10 md:py-16">
                <div className="container mx-auto px-4">
                    <FadeUp>
                        {/* Heading */}
                        <div className="mb-8">
                            <div className="tag flex items-center gap-2 mb-1">
                                <div className="w-[15px] h-[15px] rounded-full flex justify-center items-center border">
                                    <div className="w-[7.5px] h-[7.5px] rounded-full bg-black"></div>
                                </div>
                                <p className="leading-none text-sm md:text-base">WHAT WE DO</p>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-semibold">Our Services</h2>
                        </div>

                        {/* Content */}
                        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-[80px]">

                            {/* Services list */}
                            <div className="w-full lg:max-w-[670px]">

                                <div className="flex items-start gap-6 md:gap-8 mb-8 md:mb-10">
                                    <div className="w-[40px] md:w-[50px] h-[40px] md:h-[50px] shrink-0">
                                        <img src={commercial} alt="" className="w-full h-full object-contain" />
                                    </div>
                                    <div>
                                        <h4 className="mb-1 text-lg md:text-xl font-semibold">
                                            Commercial Real Estate
                                        </h4>
                                        <p className="text-sm md:text-base">
                                            Discover lucrative opportunities in commercial real estate, from office spaces to retail buildings and industrial properties.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-6 md:gap-8 mb-8 md:mb-10">
                                    <div className="w-[40px] md:w-[50px] h-[40px] md:h-[50px] shrink-0">
                                        <img src={home} alt="" className="w-full h-full object-contain" />
                                    </div>
                                    <div>
                                        <h4 className="mb-1 text-lg md:text-xl font-semibold">
                                            Home Inspections
                                        </h4>
                                        <p className="text-sm md:text-base">
                                            Ensure your property is in top condition with a thorough home inspection, identifying potential issues before closing the deal.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-6 md:gap-8">
                                    <div className="w-[40px] md:w-[50px] h-[40px] md:h-[50px] shrink-0">
                                        <img src={relocation} alt="" className="w-full h-full object-contain" />
                                    </div>
                                    <div>
                                        <h4 className="mb-1 text-lg md:text-xl font-semibold">
                                            Relocation Services
                                        </h4>
                                        <p className="text-sm md:text-base">
                                            Seamlessly transition to your new home with our comprehensive services, designed to handle every detail of your move.
                                        </p>
                                    </div>
                                </div>

                            </div>

                            {/* Image */}
                            <div className="w-full max-w-full lg:max-w-[545px]">
                                <img src={service} alt="" className="rounded-xl w-full" />
                            </div>

                        </div>
                    </FadeUp>

                </div>
            </section>

            <Footer />

        </>
    )
}

export default About