"use client";
import Image from "next/image";
import localFont from "next/font/local";
import Testimonials from "@/components/shared/Testimonials";
const recoleta = localFont({ src: "./recoleta.ttf" });
import HeroBentoGrid from "@/components/shared/HeroBentoGrid";
import { motion } from "framer-motion";
import { containerVariants, fadeInVariants } from "@/lib/animations";
import Hero from "@/components/shared/Hero";
import AppsOnDemand from "@/components/shared/AppsOnDemand";
import Specialization from "@/components/shared/Specialization";
import Services from "@/components/shared/Services";
import Projects from "@/components/shared/Projects";
import ContactUs from "@/components/shared/ContactUs";

export default function Home() {
  return (
    <main className="flex min-h-screen  flex-col items-center pt-36  overflow-x-hidden 2xl:pt-40">
      {/* Hero Section */}
      <Hero />
      {/* Apps on demand */}
      {/* <AppsOnDemand /> */}
      {/* Specialization */}
      {/* <Specialization /> */}
      {/* Services */}
      {/* <Services /> */}
      {/* Projects */}
      {/* <Projects /> */}
      {/* Testimonials */}
      {/* <Testimonials /> */}
      {/* Contact Us */}
      {/* <ContactUs /> */}
      {/* footer  */}
      {/* <footer className=" w-full bg-[#161C2D] py-16 px-4 md:px-[70px] pt-[70px] 2xl:pt-[90px]">
        <div className="flex flex-col md:flex-row gap-8 items-start px-3 md:px-0  md:items-center justify-between pb-16 border-b border-gray-600">
          <div className="flex flex-col items-center md:items-start max-w-md gap-3">
            <h2 className=" text-2xl text-center md:text-start md:text-xl 2xl:text-3xl text-white font-semibold">
              Ready to launch your next project?
            </h2>
            <p className=" text-gray-400 text-center md:text-start my-2 md:my-0 leading-loose md:leading-6 tracking-wide">
              With lots of unique blocks, you can easily build a page without
              coding. Build your next landing page.
            </p>
          </div>
          <button className=" bg-[#7165FF] mx-auto md:mx-0 text-white py-5 px-6 rounded-[20px] 2xl:text-lg">
            Get Started with Splenify
          </button>
        </div>
        <div className="flex items-center flex-col-reverse gap-8 md:flex-row justify-between px-3 md:px-0 pt-9 md:pt-16">
          <div className="flex flex-col items-center md:items-start pt-8 md:pt-0  max-w-xs gap-3">
            <h2 className=" text-3xl md:text-xl 2xl:text-3xl text-white font-semibold">
              Splenify
            </h2>
            <p className=" text-gray-400 my-3 md:my-0 leading-loose text-center md:text-start md:leading-6 tracking-wide text-sm">
              With lots of unique blocks, you can easily build a page without
              coding. Build your next landing page.
            </p>
            <div className="flex gap-6 mt-4 mb-8">
              <Image
                src="/icons/fb.svg"
                alt="Splenify"
                width={20}
                height={20}
              />
              <Image
                src="/icons/insta.svg"
                alt="Splenify"
                width={20}
                height={20}
              />
              <Image
                src="/icons/linkedin.svg"
                alt="Splenify"
                width={20}
                height={20}
              />
            </div>
            <p className=" text-lg font-thin text-gray-400">
              Copyright © Splenify
            </p>
          </div>
          <ul className=" space-y-4 md:space-y-3 text-center md:text-start">
            <li className=" text-sm 2xl:text-base text-gray-200 hover:cursor-pointer">
              Home
            </li>
            <li className=" text-sm 2xl:text-base text-gray-200 hover:cursor-pointer">
              About
            </li>
            <li className=" text-sm 2xl:text-base text-gray-200 hover:cursor-pointer">
              Services
            </li>
            <li className=" text-sm 2xl:text-base text-gray-200 hover:cursor-pointer">
              Portfolio
            </li>
            <li className=" text-sm 2xl:text-base text-gray-200 hover:cursor-pointer">
              Contact
            </li>
          </ul>
        </div>
      </footer> */}
    </main>
  );
}
