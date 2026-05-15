import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import Navbar from "../components/Navbar";
import contact from "../assets/contact.jpg"
import Footer from "../components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { sendMessage } from "../features/contactSlice";
import toast from "react-hot-toast";
import FadeUp from "../components/common/FadeUp";

const Contact = () => {
  const dispatch = useDispatch()
  const { loading, error } = useSelector((state) => state.contact)
  const { register, handleSubmit, reset, formState: { errors } } = useForm()
  const onSubmit = (data) => {
    if (!data.terms) {
      return
    }
    dispatch(sendMessage(data))
    reset()
    toast.success("Message sent successfully ✅");
  }
  return (
    <>
      <Navbar />



      <section id="contact" className="py-10 md:py-16">
        <div className="container mx-auto px-4">
          <FadeUp>
            {/* Heading */}
            <div className="mb-8">
              <div className="tag flex items-center gap-2 mb-1">
                <div className="w-[15px] h-[15px] rounded-full flex justify-center items-center border">
                  <div className="w-[7.5px] h-[7.5px] rounded-full bg-black"></div>
                </div>
                <p className="leading-none text-sm md:text-base">CONNECT WITH US</p>
              </div>
              <h2 className="text-3xl md:text-4xl font-semibold">Contact us</h2>
            </div>
          </FadeUp>
          <FadeUp>
            {/* Banner image */}
            <div>
              <img src={contact} alt="" className="rounded-xl w-full" />
            </div>
          </FadeUp>
          <FadeUp>
            {/* Content */}
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-[60px] mt-10 md:mt-12">

              {/* Left info */}
              <div className="w-full lg:max-w-[560px]">
                <h3 className="text-2xl md:text-3xl font-semibold">Send a message</h3>

                <p className="mt-4 mb-8 md:mb-12 text-sm md:text-base">
                  We're here to help you with all your real estate needs. Whether you're looking to buy, sell, or invest, our team is ready to assist you.
                </p>

                <div className="flex items-start gap-4 mb-6">
                  <div className="w-[40px] md:w-[45px] h-[40px] md:h-[45px] rounded-full border flex justify-center items-center shrink-0 text-base md:text-lg">
                    <i className="fa-solid fa-location-dot"></i>
                  </div>
                  <div>
                    <p className="text-base md:text-lg">Office Address</p>
                    <p className="mt-1 text-sm md:text-base">
                      4517 Washington Ave. Manchester, Kentucky 39495
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-[40px] md:w-[45px] h-[40px] md:h-[45px] rounded-full border flex justify-center items-center shrink-0 text-base md:text-lg">
                    <i className="fa-solid fa-envelope"></i>
                  </div>
                  <div>
                    <p className="text-base md:text-lg">Write email</p>
                    <p className="mt-1 text-sm md:text-base">info@example.com</p>
                  </div>
                </div>
              </div>

              {/* Form */}
              <div className="w-full lg:max-w-[670px]">
                <form onSubmit={handleSubmit(onSubmit)}>

                  {/* Names */}
                  <div className="flex flex-col sm:flex-row gap-6 mb-8 md:mb-10">
                    <div className="w-full">
                      <input
                        type="text"
                        placeholder="First name*"
                        {...register("firstName", { required: "First name is required" })}
                        className="border-b border-black focus:border-blue-500 pb-3 md:pb-4 w-full outline-none placeholder:text-black"
                      />
                      {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName.message}</p>}
                    </div>
                    <div className="w-full">
                      <input
                        type="text"
                        placeholder="Last name*"
                        {...register("lastName", { required: "Last name is required" })}
                        className="border-b border-black focus:border-blue-500 pb-3 md:pb-4 w-full outline-none placeholder:text-black"
                      />
                      {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName.message}</p>}
                    </div>
                  </div>

                  {/* Contact */}
                  <div className="flex flex-col sm:flex-row gap-6 mb-8 md:mb-10">
                    <div className="w-full">
                      <input
                        type="email"
                        placeholder="Email address*"
                        {...register("email", { required: "Email is required", pattern: { value: /^\S+@\S+$/i, message: "Invalid email", }, })}
                        className="border-b border-black focus:border-blue-500 pb-3 md:pb-4 w-full outline-none placeholder:text-black"
                      />
                      {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                    </div>
                    <div className="w-full">
                      <input
                        type="number"
                        placeholder="Phone number*"
                        {...register("phone", { required: "Phone is required", minLength: { value: 10, message: "Minimum 10 digits" }, })}
                        className="border-b border-black focus:border-blue-500 pb-3 md:pb-4 w-full outline-none placeholder:text-black"
                      />
                      {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
                    </div>
                  </div>

                  {/* Message */}
                  <div className="mb-8 md:mb-10">
                    <textarea
                      placeholder="Write your message here*"
                      {...register("message", { required: "Message is required" })}
                      className="h-[100px] border-b border-black focus:border-blue-500 pb-3 md:pb-4 w-full outline-none resize-none placeholder:text-black"
                    />
                    {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
                  </div>

                  {/* Terms */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
                    <label className="flex items-start text-sm md:text-base">
                      <input type="checkbox" {...register("terms", { required: true })} className="mr-2 mt-1" />
                      <span>I hereby agree to the Terms & Conditions of Realtyr.</span>
                    </label>

                    <button
                      type="submit"
                      className="py-2 px-6 border border-black rounded-lg hover:bg-black hover:text-white transition duration-300 ease-in-out"
                    >
                      Submit
                    </button>
                  </div>
                  {/* Errors */}
                  {error && <p className="text-red-500 mt-4">{error}</p>}
                </form>
              </div>

            </div>
          </FadeUp>

        </div>
      </section>

      <Footer />

    </>
  )
}

export default Contact