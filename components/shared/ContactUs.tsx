import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Mulish } from "next/font/google";
import localFont from "next/font/local";

const recoleta = localFont({ src: "../../app/recoleta.ttf" });

const mulish = Mulish({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-mulish",
});

const ContactUs = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      viewport={{
        once: true,
      }}
      whileInView={{
        opacity: 1,
        transition: {
          duration: 0.9,
          ease: "easeInOut",
        },
      }}
      id="contact"
      className="flex  w-full items-center px-4 justify-center bg-gradient-to-b from-yellow-200/30 dark:from-[#33328029] to-[#E541ED08]   gap-8 2xl:gap-16 py-16 md:px-8  mt-[20px] md:mt-[30px]"
    >
      <motion.div
        initial={{
          x: -100,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
          transition: {
            duration: 0.9,
            ease: "easeInOut",
          },
        }}
        viewport={{
          once: true,
        }}
        className="hidden md:block"
      >
        <Image
          src="/images/contact_hero.svg"
          width={300}
          height={300}
          className=" w-full h-full  mt-16 2xl:mt-20 max-w-xl"
          alt=" hero"
        />
      </motion.div>
      <motion.div
        initial={{
          x: 100,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
          transition: {
            duration: 0.9,
            ease: "easeInOut",
          },
        }}
        viewport={{
          once: true,
        }}
        className="max-w-xl"
      >
        <form
          action=""
          className=" bg-white dark:bg-slate-900 dark:shadow-inner dark:shadow-gray-800 p-8   rounded-xl  flex flex-col gap-2"
        >
          <h2
            className={`text-2xl 2xl:text-4xl ${recoleta.className} font-black mb-2`}
          >
            Lets Get Connected
          </h2>
          <p className="text-sm 2xl:text-base font-thin text-slate-800 dark:text-slate-300 tracking-wide leading-loose  ">
            We are here to help and answer any question you might have. We look
            forward to hearing from you
          </p>
          <div className="flex flex-col gap-1 mt-3">
            <label htmlFor="" className=" 2xl:text-lg">
              Name
            </label>
            <input
              placeholder="enter your fullname..."
              type="text"
              required
              className=" w-full border-2 p-2 border-[#D9D9D9] dark:border-slate-800 dark:bg-slate-800 px-4 rounded-lg"
            />
          </div>
          <div className="flex flex-col gap-1 mt-2">
            <label htmlFor="" className=" 2xl:text-lg">
              Subject
            </label>
            <input
              placeholder="enter your subject..."
              type="text"
              required
              className=" w-full border-2 p-2 border-[#D9D9D9] dark:border-slate-800 dark:bg-slate-800 px-4 rounded-lg"
            />
          </div>
          <div className="flex flex-col gap-1 mt-2">
            <label htmlFor="" className=" 2xl:text-lg">
              Email
            </label>
            <input
              placeholder="enter your email..."
              type="text"
              required
              className=" w-full border-2 p-2 border-[#D9D9D9] dark:border-slate-800 dark:bg-slate-800 px-4 rounded-lg"
            />
          </div>
          <div className="flex flex-col gap-1 mt-2">
            <label htmlFor="" className=" 2xl:text-lg">
              Message
            </label>
            <textarea
              placeholder="enter message..."
              required
              className=" w-full h-24 border-2 p-2 border-[#D9D9D9] dark:border-slate-800 dark:bg-slate-800 px-4 rounded-lg"
            />
          </div>
          <button
            type="submit"
            className=" bg-yellow-500 p-3.5 w-full rounded-[20px] mt-4 text-lg text-white"
          >
            Submit{" "}
          </button>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default ContactUs;
