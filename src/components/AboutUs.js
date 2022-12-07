import React from "react";
import Navbar from "./Navbar";
import image from "../components/images/try.jpeg"

export default function AboutUs() {
    return (
        <>
        <Navbar />
            <section class="bg-white px-20 py-20 lg:py-[120px] overflow-hidden relative z-10">
                <div class="container">
                    <div class="flex flex-wrap lg:justify-between -mx-4">
                        <div class="w-full lg:w-1/2 xl:w-6/12 px-4">
                            <div class="max-w-[570px] mb-12 lg:mb-0">
                                <span class="block mb-4 text-base text-2xl text-primary font-semibold">
                                    About Skolis
                                </span><hr />
                                <p
                                    class="
                  text-dark
                  mb-6
                  text-[20px]
                  sm:text-[36px]
                  lg:text-[20px]
                  xl:text-[20px]
                  "
                                >
                                    Skolis is an online platform which helps parents, guardians, and students to easily
                                    locate the best schools in their proximities.
                                </p>
                              <button className="bg-sky-700 p-5 text-stone-100">
                                  Contact Us
                              </button>

                            </div>
                        </div>
                        <div class="w-full lg:w-1/2 xl:w-5/12 px-4">
                            <div class="bg-white relative rounded-lg p-6 sm:p-12 shadow-lg">
                               Try Skolis today and experience the best as it relates to schools' information, ratings and 
                               performances in national exams (WASSCE).
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>  
    )
}