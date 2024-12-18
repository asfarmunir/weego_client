import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import localFont from "next/font/local";
const recoleta = localFont({ src: "../../app/recoleta.ttf" });

const services = [
  {
    title: "Ride Booking",
    description:
      "Book rides at your convenience and get where you need to go, fast and safely.   ",
    icon: "/hero3.png",
  },
  {
    title: "Carpooling",
    description:
      "Save on your commute by carpooling with others. More people, less cost, and reduced environmental impact.",
    icon: "/hero4.png",
  },
  {
    title: "Ride Sharing",
    description:
      "Share rides with people traveling the same route, and save money while reducing your carbon footprint.",
    icon: "/hero5.png",
  },
];

const Services = () => {
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
      className="flex flex-col w-full items-center gap-5 py-12 md:px-8 my-[20px] md:my-[30px]"
    >
      <h2 className="text-base 2xl:xl tracking-wide">Services</h2>
      <h1
        className={`text-2xl px-5 relative md:text-3xl 2xl:text-5xl tracking-wide text-center mb-6 ${recoleta.className}`}
      >
        We Provide What <span className="grad_text">Customers</span>{" "}
        <span className="grad_text">Demands</span>
      </h1>
      <div className="mt-12 max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.6,
                ease: "easeOut",
                delay: index * 0.2, // Stagger delay for each card
              },
            }}
            className="bg-white dark:bg-slate-900 flex flex-col items-center p-6 rounded-lg shadow-lg"
          >
            <h3 className="text-2xl font-semibold text-yellow-500">
              {service.title}
            </h3>
            <p className="text-slate-800 h-24 dark:text-white mt-4">
              {service.description}
            </p>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                transition: {
                  duration: 0.6,
                  ease: "easeOut",
                  delay: index * 0.3,
                },
              }}
              className="mt-4"
            >
              <Image
                src={service.icon}
                alt={service.title}
                width={240}
                height={240}
                className="mt-auto"
              />
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Services;
