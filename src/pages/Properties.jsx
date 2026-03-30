import React from "react";
import Navbar from "../components/Navbar";
import LatestPropertyCard from "../components/LatestPropertyCard";
import Testimonial from "../components/Testimonial";
import Footer from "../components/Footer";

const Properties = () => {
    return (
        <>
            <Navbar />
            <section id="property" className="py-10 md:py-16">
                <div className="container mx-auto px-4">
                    <LatestPropertyCard />
                </div>
            </section>
            <Testimonial />
            <Footer />
        </>
    )
}

export default Properties