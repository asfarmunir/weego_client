import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import localFont from "next/font/local";
import { containerVariants, fadeInVariants } from "@/lib/animations";
const recoleta = localFont({ src: "../../app/recoleta.ttf" });

const Specialization = () => {
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
      className="flex flex-col w-full  items-center gap-5  my-[20px] md:my-[30px]"
    >
      <h2 className=" text-base   2xl:xl tracking-wide ">
        What do we specialize in?
      </h2>
      <h1
        className={` text-2xl px-3.5 relative md:text-3xl 2xl:text-5xl tracking-wide text-center mb-5 md:mb-16 ${recoleta.className}`}
      >
        Our partners hire us to{" "}
        <span className=" text-[#7165FF] ">design & develop</span> their…
        <Image
          src="/images/line_vector2.svg"
          alt="Splenify"
          width={380}
          height={380}
          className="  dark:invert hidden md:block  w-[270px] 2xl:w-[380px] absolute right-16 2xl:right-36 -bottom- -rotate-4 "
        />
      </h1>
      <div className="grid grid-cols-1 max-w-5xl 2xl:max-w-7xl lg:grid-cols-2 gap-8 px-8 md:px-12 2xl:px-0  p-2 w-full">
        <motion.div
          initial={{
            opacity: 0,
            x: -200,
          }}
          viewport={{ once: true, amount: 0.5 }}
          whileInView={{
            x: 0,
            opacity: 1,

            transition: {
              duration: 0.8,
              ease: "easeOut",
            },
          }}
          className="flex flex-col md:flex-row w-full  overflow-hidden  rounded-2xl "
        >
          <div className=" py-10 md:py-0 w-full md:w-[50%] bg-[#F3F3F9] dark:bg-slate-900  flex flex-col items-start justify-center">
            <h2 className=" text-2xl text-start md:text-lg 2xl:text-2xl font-semibold mb-2 px-8">
              Mobile & Web Apps
            </h2>
            <p className=" md:max-w-[15.5rem] 2xl:max-w-[20rem] px-8 text-sm md:text-xs 2xl:text-sm text-start ">
              We’ll research your product and start building.
            </p>
          </div>
          <div className=" w-full md:w-[50%] bg-[#F3F3F9] dark:bg-slate-900 ">
            <Image
              src="/images/portfolio1.jpg"
              alt="Splenify"
              width={225}
              className=" w-full h-full "
              height={123}
            />
          </div>
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
            x: 200,
          }}
          viewport={{ once: true, amount: 0.5 }}
          whileInView={{
            x: 0,
            opacity: 1,

            transition: {
              duration: 0.8,
              ease: "easeInOut",
            },
          }}
          className="flex flex-col md:flex-row w-full  overflow-hidden  rounded-2xl "
        >
          <div className=" py-10 md:py-0 w-full md:w-[50%] bg-[#F3F3F9] dark:bg-slate-900  flex flex-col items-start justify-center">
            <h2 className=" text-start text-2xl md:text-lg 2xl:text-2xl px-8 font-semibold mb-2">
              Website
            </h2>
            <p className=" md:max-w-[15.5rem] 2xl:max-w-[20rem] px-8 text-sm md:text-xs 2xl:text-sm text-start ">
              We’ll research your product and start building.
            </p>
          </div>
          <div className=" w-full md:w-[50%] bg-[#F3F3F9] dark:bg-slate-900 ">
            <Image
              src="/images/portfolio2.jpg"
              alt="Splenify"
              width={225}
              className=" w-full h-full "
              height={123}
            />
          </div>
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
            x: -200,
          }}
          viewport={{ once: true, amount: 0.5 }}
          whileInView={{
            x: 0,
            opacity: 1,

            transition: {
              duration: 0.8,
              ease: "easeOut",
            },
          }}
          className="flex flex-col md:flex-row w-full  overflow-hidden  rounded-2xl "
        >
          <div className=" py-10 md:py-0 w-full md:w-[50%] bg-[#F3F3F9] dark:bg-slate-900  flex flex-col items-start justify-center">
            <h2 className=" text-2xl md:text-lg 2xl:text-2xl font-semibold mb-2 px-8">
              Mobile & Web Apps
            </h2>
            <p className=" md:max-w-[15.5rem] 2xl:max-w-[20rem] px-8 text-sm md:text-xs 2xl:text-sm text-start ">
              We’ll research your product and start building.
            </p>
          </div>
          <div className=" w-full md:w-[50%] bg-[#F3F3F9] dark:bg-slate-900 ">
            <Image
              src="/images/portfolio1.jpg"
              alt="Splenify"
              width={225}
              className=" w-full h-full "
              height={123}
            />
          </div>
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
            x: 200,
          }}
          viewport={{ once: true, amount: 0.5 }}
          whileInView={{
            x: 0,
            opacity: 1,

            transition: {
              duration: 0.8,
              ease: "easeInOut",
            },
          }}
          className="flex flex-col md:flex-row w-full  overflow-hidden  rounded-2xl "
        >
          <div className=" py-10 md:py-0 w-full md:w-[50%] bg-[#F3F3F9] dark:bg-slate-900  flex flex-col items-start justify-center">
            <h2 className=" text-2xl md:text-lg 2xl:text-2xl font-semibold mb-2 px-8">
              Website
            </h2>
            <p className=" md:max-w-[15.5rem] 2xl:max-w-[20rem] px-8 text-sm md:text-xs 2xl:text-sm text-start ">
              We’ll research your product and start building.
            </p>
          </div>
          <div className=" w-full md:w-[50%] bg-[#F3F3F9] dark:bg-slate-900 ">
            <Image
              src="/images/portfolio2.jpg"
              alt="Splenify"
              width={225}
              className=" w-full h-full "
              height={123}
            />
          </div>
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
            x: -200,
          }}
          viewport={{ once: true, amount: 0.5 }}
          whileInView={{
            x: 0,
            opacity: 1,

            transition: {
              duration: 0.8,
              ease: "easeOut",
            },
          }}
          className="flex flex-col md:flex-row w-full  overflow-hidden  rounded-2xl "
        >
          <div className=" py-10 md:py-0 w-full md:w-[50%] bg-[#F3F3F9] dark:bg-slate-900  flex flex-col items-start justify-center">
            <h2 className=" text-2xl md:text-lg 2xl:text-2xl font-semibold mb-2 px-8">
              Mobile & Web Apps
            </h2>
            <p className=" md:max-w-[15.5rem] 2xl:max-w-[20rem] px-8 text-sm md:text-xs 2xl:text-sm text-start ">
              We’ll research your product and start building.
            </p>
          </div>
          <div className=" w-full md:w-[50%] bg-[#F3F3F9] dark:bg-slate-900 ">
            <Image
              src="/images/portfolio1.jpg"
              alt="Splenify"
              width={225}
              className=" w-full h-full "
              height={123}
            />
          </div>
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
            x: 200,
          }}
          viewport={{ once: true, amount: 0.5 }}
          whileInView={{
            x: 0,
            opacity: 1,

            transition: {
              duration: 0.8,
              ease: "easeInOut",
            },
          }}
          className="flex flex-col md:flex-row w-full  overflow-hidden  rounded-2xl "
        >
          <div className=" py-10 md:py-0 w-full md:w-[50%] bg-[#F3F3F9] dark:bg-slate-900  flex flex-col items-start justify-center">
            <h2 className=" text-2xl md:text-lg 2xl:text-2xl font-semibold mb-2 px-8">
              Website
            </h2>
            <p className=" md:max-w-[15.5rem] 2xl:max-w-[20rem] px-8 text-sm md:text-xs 2xl:text-sm text-start ">
              We’ll research your product and start building.
            </p>
          </div>
          <div className=" w-full md:w-[50%] bg-[#F3F3F9] dark:bg-slate-900 ">
            <Image
              src="/images/portfolio2.jpg"
              alt="Splenify"
              width={225}
              className=" w-full h-full "
              height={123}
            />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Specialization;
