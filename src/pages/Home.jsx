import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import video from "../assets/home_video.mp4"
import advanceImg from "../assets/advance-property-search.jpg"
import marketing from "../assets/marketing.jpg"
import homeIcon from "../assets/home-icon.svg"
import chart from "../assets/market-insight-icon.svg"
import about from "../assets/about.jpg"
import Navbar from "../components/Navbar";
import Testimonial from "../components/Testimonial";
import Footer from "../components/Footer";
import LatestPropertyCard from "../components/LatestPropertyCard";

const Home = () => {
    const videoRef = useRef(null);
    const [playVideo, setPlayVideo] = useState(false)
    const handleVideo = () => {
        const video = videoRef.current
        if (playVideo) {
            video.pause()
            setPlayVideo(false)
        }
        else {
            video.play()
            setPlayVideo(true)
        }
    }
    const videoEnd = () => {
        const video = videoRef.current
        video.currentTime = 0
        video.load()
        setPlayVideo(false)
    }


    return (
        <>
            <Navbar />

            <section id="hero" className="py-10 md:py-16">
                <div className="container mx-auto px-4">

                    <div className="flex flex-col md:flex-row md:justify-between gap-6">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold max-w-[560px]">
                            Realtyr connects you to best real estate opportunities
                        </h1>

                        <p className="font-semibold max-w-[300px] md:text-right leading-[1.5]">
                            LET US HELP YOU FIND THE PERFECT PROPERTY FOR YOUR GOALS.
                        </p>
                    </div>

                    <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6 mt-8 md:mt-10">
                        <Link
                            to="/properties"
                            className="px-5 py-3 rounded-lg border border-black bg-black text-white w-fit hover:bg-white hover:text-black transition duration-300 ease-in-out"
                        >
                            Explore Our Properties
                        </Link>

                        <p className="max-w-[520px]">
                            Realtyr connects you with exclusive real estate opportunities, offering a seamless way to explore, and invest in properties that match your goals.
                        </p>
                    </div>

                    <div className="mt-10 md:mt-[60px] relative">
                        <video
                            ref={videoRef}
                            onEnded={videoEnd}
                            className="w-full lg:max-h-[500px] md:max-h-[400px] rounded-lg object-cover"
                        >
                            <source src={video} type="video/mp4" />
                        </video>
                        <button onClick={handleVideo} className="w-[60px] h-[60px] rounded-full text-4xl text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black/30 backdrop-blur-md">
                            {
                                playVideo ? (
                                    <i class="fa-solid fa-pause"></i>
                                ) : (
                                    <i class="fa-solid fa-play"></i>
                                )
                            }
                        </button>
                    </div>

                </div>
            </section>





            <section id="about" className="py-10 md:py-16">
                <div className="container mx-auto px-4">

                    <div className="flex flex-col lg:flex-row lg:justify-between gap-10">

                        <div className="w-full flex flex-col justify-between lg:max-w-[600px] md:max-w-full gap-8">
                            <h2 className="text-3xl md:text-4xl font-semibold">About us</h2>

                            <div className="flex gap-5 items-start flex-col sm:flex-row">
                                <div className="max-w-[120px] sm:max-w-[145px] shrink-0">
                                    <img src={advanceImg} alt="" className="rounded-lg w-full" />
                                </div>

                                <div>
                                    <div className="max-w-[30px]">
                                        <img src={homeIcon} alt="" />
                                    </div>
                                    <h4 className="text-xl md:text-2xl my-2">
                                        Advanced Property Search
                                    </h4>
                                    <p className="text-sm md:text-base">
                                        Easily find properties based on location, price, size, and amenities with our intuitive search filters.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-5 items-start flex-col-reverse sm:flex-row">
                                <div>
                                    <div className="max-w-[30px]">
                                        <img src={chart} alt="" />
                                    </div>
                                    <h4 className="text-xl md:text-2xl my-2">
                                        Real-Time Market Insights
                                    </h4>
                                    <p className="text-sm md:text-base">
                                        Easily find properties based on location, price, size, and amenities with our intuitive search filters.
                                    </p>
                                </div>

                                <div className="max-w-[120px] sm:max-w-[145px] shrink-0">
                                    <img src={marketing} alt="" className="rounded-lg w-full" />
                                </div>
                            </div>
                        </div>

                        <div className="max-w-full lg:max-w-[535px]">
                            <img src={about} alt="" className="rounded-lg w-full lg:max-h-full md:max-h-[400px] sm:max-h-[300px] max-h-[250px]" />
                        </div>
                    </div>

                    <div className="max-w-full lg:max-w-[535px] lg:ms-auto flex flex-col items-center sm:items-start sm:flex-row gap-6 mt-8">
                        <div className="text-center sm:text-left">
                            <p className="text-3xl md:text-5xl mb-1 md:mb-2">95%</p>
                            <p className="text-sm md:text-base">Customer Satisfaction</p>
                        </div>

                        <div className="text-center sm:text-left">
                            <p className="text-3xl md:text-5xl mb-1 md:mb-2">50+</p>
                            <p className="text-sm md:text-base">Real Estate Partners</p>
                        </div>

                        <div className="text-center sm:text-left">
                            <p className="text-3xl md:text-5xl mb-1 md:mb-2">20+</p>
                            <p className="text-sm md:text-base">Years of Experience</p>
                        </div>
                    </div>

                </div>
            </section>



            <section id="explore">
                <div className="container mx-auto px-4">
                    <LatestPropertyCard />
                    <div className="mt-12 text-right">
                        <Link to="/properties" className="inline-block px-5 py-3 rounded-lg border border-black bg-black text-white hover:bg-white hover:text-black transition duration-300 ease-in-out">View All Properties</Link>
                    </div>
                </div>
            </section>



            <Testimonial />

            <Footer />

        </>
    )
}

export default Home
