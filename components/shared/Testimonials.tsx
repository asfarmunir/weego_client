"use client";
import React from "react";
import Image from "next/image";
import TestimonialCard from "./TestimonialCard";
import localFont from "next/font/local";
import { motion } from "framer-motion";

const recoleta = localFont({ src: "../../app/recoleta.ttf" });

const Testimonials = () => {
  return (
    <motion.div
      id="about"
      initial={{
        opacity: 0,
      }}
      viewport={{
        amount: 0.05,
        once: true,
      }}
      whileInView={{
        opacity: 1,
        transition: {
          duration: 0.9,
          delay: 0.1,
          ease: "easeInOut",
        },
      }}
      className={`flex flex-col w-full relative px-4  items-center gap-3 2xl:gap-5 max-w-5xl 2xl:max-w-7xl  my-[30px] md:my-[50px]`}
    >
      <div className="space-y-3 w-full">
        <p className="text-center text-base md:text-lg font-normal">
          Testimonials
        </p>
        <div className="flex md:space-x-4 w-full justify-center items-center whitespace-nowrap">
          <Image
            src={"/images/leafl.svg"}
            width={10}
            height={10}
            alt="leaf"
            className="w-[40px] h-[70px] md:w-[55px] md:h-[84px] dark:invert block"
          />

          <h1
            className={`text-[27px] md:text-[40px] lg:text-[46px]  ${recoleta.className}    text-center `}
          >
            Hear it from our <span className="grad_text ">customers</span>
          </h1>
          <Image
            src={"/images/leafr.svg"}
            width={10}
            height={10}
            alt="leaf"
            className="w-[40px] h-[70px] md:w-[55px] md:h-[84px] dark:invert block"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        <div className="flex flex-col space-y-10">
          <TestimonialCard
            logo={"/images/recruitu.svg"}
            userImage={"/images/client1.svg"}
            profileImage={"/images/avatar.png"}
            name={"Mark Steven"}
            delayDuration={0.1}
            role={"Customer"}
            review="<b>WeeGo</b> is my go-to app for ride bookings. The drivers are always punctual, and the customer service is excellent."
          />
          <TestimonialCard
            logo={"/images/lightdash.svg"}
            profileImage={"/images/avatar.png"}
            name={"Mark Steven"}
            delayDuration={0.2}
            role={"Customer"}
            review="<b>WeeGo</b> is my go-to app for ride bookings. The drivers are always punctual, and the customer service is excellent."
          />
        </div>
        <div className="flex flex-col space-y-10">
          <TestimonialCard
            logo={"/images/lightdash.svg"}
            profileImage={"/images/avatar.png"}
            name={"Mark Steven"}
            delayDuration={0.6}
            role={"Customer"}
            review="<b>WeeGo</b> is my go-to app for ride bookings. The drivers are always punctual, and the customer service is excellent."
          />
          <TestimonialCard
            logo={"/images/growtha.svg"}
            userImage={"/images/client2.svg"}
            profileImage={"/images/avatar.png"}
            name={"Mark Steven"}
            delayDuration={0.1}
            role={"Customer"}
            review="<b>WeeGo</b> is my go-to app for ride bookings. The drivers are always punctual, and the customer service is excellent."
          />
        </div>
        <div className="flex flex-col space-y-10">
          <TestimonialCard
            logo={"/images/genex.svg"}
            profileImage={"/images/avatar.png"}
            name={"Mark Steven"}
            delayDuration={0.35}
            role={"Customer"}
            review="<b>WeeGo</b> is my go-to app for ride bookings. The drivers are always punctual, and the customer service is excellent."
          />
          <TestimonialCard
            logo={"/images/recruitu.svg"}
            userImage="/images/client3.svg"
            profileImage={"/images/avatar.png"}
            name="Mark Steven"
            delayDuration={0.4}
            role="Customer"
            review="<b>WeeGo</b> is my go-to app for ride bookings. The drivers are always punctual, and the customer service is excellent."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Testimonials;
