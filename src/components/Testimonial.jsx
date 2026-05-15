import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import testimonial01 from "../assets/testimonial-01.jpg";
import testimonial02 from "../assets/testimonial-02.jpg";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import FadeUp from "./common/FadeUp";

const testimonials = [
  {
    image: testimonial01,
    name: "Albert Flores",
    location: "New York, US",
    text: `As a real estate investor, I’m always on the lookout for
    reliable platforms that offer comprehensive market data.
    Realtyr exceeded my expectations with its tools and insights.
    I’ve successfully closed multiple deals through Realtyr.`,
  },
  {
    image: testimonial02,
    name: "Sophia Martinez",
    location: "California, US",
    text: `Realtyr made finding the perfect property incredibly easy.
    The user interface is smooth and the listings are detailed.
    I highly recommend this platform to anyone serious about investing.`,
  },
];

const Testimonial = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      slidesPerView={1}
      spaceBetween={24}
      loop
      navigation
      pagination={{ clickable: true }}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      className="w-full"
    >
      {testimonials.map((item, index) => (
        <SwiperSlide key={index}>
          <FadeUp>
            <div className="w-full">
              <div className="mx-auto bg-white rounded-xl border p-6 sm:p-8 lg:p-10">
                <div className="flex flex-col md:flex-row gap-6 lg:gap-10 items-center">

                  {/* Image */}
                  <div className="flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-[170px] h-[200px] sm:w-[250px] sm:h-[350px] md:w-[350px] md:h-[450px] rounded-lg object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className="text-center md:text-left">
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed mb-4 sm:mb-6">
                      “{item.text}”
                    </p>

                    <p className="text-base sm:text-lg font-semibold">
                      {item.name}
                    </p>
                    <p className="text-xs sm:text-sm text-gray-600">
                      {item.location}
                    </p>
                  </div>

                </div>
              </div>
            </div>
          </FadeUp>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Testimonial;