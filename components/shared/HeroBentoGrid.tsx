import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
export default function BentoGridDemo() {
  return (
    <>
      <div className=" w-full    h-fit hidden md:flex items-start my-8   justify-center gap-6">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 1,
              ease: "easeOut",
            },
          }}
          viewport={{
            once: true,
            amount: 0.25,
          }}
          className="hidden md:block"
        >
          <Image
            src="/chat.svg"
            alt="hero"
            width={230}
            height={230}
            objectFit="cover"
            className=" rounded-md"
            objectPosition="center"
          />
        </motion.div>
        <div className="flex flex-col gap-4 -mt-4">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                delay: 0.65,
                duration: 1,
                ease: "easeOut",
              },
            }}
            viewport={{
              once: true,
              amount: 0.25,
            }}
          >
            <Image
              src="/hero1.png"
              alt="hero"
              width={400}
              height={400}
              objectFit="cover"
              objectPosition="center"
            />
          </motion.div>

          <div className="flex gap-4 ">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  duration: 1,
                  ease: "easeOut",
                },
              }}
              viewport={{
                once: true,
              }}
            >
              <Image
                src="/images/hero_img3.svg"
                alt="hero"
                width={200}
                height={400}
                objectFit="cover"
                objectPosition="center"
              />
            </motion.div>

            <div className="flex flex-col gap-1 ">
              <Image
                src="/images/toggle.svg"
                alt="hero"
                width={100}
                height={400}
                objectFit="cover"
                objectPosition="center"
              />

              <div className="flex gap-12">
                <motion.div
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: {
                      delay: 0.1,
                      duration: 1,
                      ease: "easeOut",
                    },
                  }}
                  viewport={{
                    once: true,
                  }}
                >
                  {" "}
                  <Image
                    src="/hero2.png"
                    alt="hero"
                    width={320}
                    height={400}
                    objectFit="cover"
                    objectPosition="center"
                  />
                </motion.div>
                <motion.div
                  initial={{ rotate: 50 }}
                  whileInView={{
                    rotate: 0,
                    transition: {
                      duration: 1,
                      ease: "easeInOut",
                    },
                  }}
                  viewport={{
                    once: true,
                  }}
                >
                  {" "}
                  <Image
                    src="/images/star2.svg"
                    alt="hero"
                    width={120}
                    height={400}
                    objectFit="cover"
                    objectPosition="center"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: {
              delay: 0.5,
              duration: 1,
              ease: "easeOut",
            },
          }}
          viewport={{
            once: true,
            amount: 0.25,
          }}
          className="hidden md:flex flex-col gap-1 -ml-72"
        >
          <Image
            src="/images/volume1.svg"
            alt="hero"
            width={260}
            height={260}
            objectFit="cover"
            objectPosition="center"
          />
          <Image
            src="/images/volume2.svg"
            alt="hero"
            width={260}
            height={260}
            objectFit="cover"
            objectPosition="center"
          />
          <Image
            src="/images/volume3.svg"
            alt="hero"
            width={260}
            height={260}
            objectFit="cover"
            objectPosition="center"
          />
          <Image
            src="/images/hero_img8.svg"
            alt="hero"
            width={310}
            height={100}
            objectFit="cover"
            objectPosition="center"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 150 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 1.1,
              delay: 0.2,
              ease: "easeOut",
            },
          }}
          viewport={{
            once: true,
            amount: 0.25,
          }}
        >
          <Image
            src="/weego3.svg"
            alt="hero"
            width={250}
            height={200}
            objectFit="cover"
            className=" mt-12"
            objectPosition="center"
          />
        </motion.div>
      </div>
      <Image
        src="/images/hero.png"
        alt="hero"
        width={200}
        height={200}
        objectFit="cover"
        objectPosition="center"
        className="md:hidden w-full px-4"
      />
    </>
  );
}
