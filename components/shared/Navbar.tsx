"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import ToggleTheme from "@/components/shared/ToggleTheme";
import { RiMenu3Line } from "react-icons/ri";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const navlinks = [
  {
    name: "Home",
    link: "home",
  },
  {
    name: "Services",
    link: "services",
  },
  {
    name: "About",
    link: "about",
  },
  {
    name: "Contact",
    link: "contact",
  },
];

const scrollToSection = (section: string, offset = 100) => {
  const el = document.getElementById(section);
  console.log(section);
  if (el) {
    const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
};

const Navbar = () => {
  return (
    <div className=" w-full absolute  bg-background   items-center flex justify-between shadow-2xl shadow-gray-200/50 dark:shadow-gray-900/60 px-8 md:px-12 py-4 2xl:py-5 ">
      <h2 className="text-3xl font-bold text-yellow-600">WEEGO</h2>
      <div className="hidden lg:inline-flex items-center gap-10">
        {navlinks.map((item, index) => (
          <button
            onClick={() => scrollToSection(item.link)}
            key={index}
            className=" text-sm 2xl:text-lg  flex flex-col "
          >
            <p
              className={`${
                item.link === "#"
                  ? "text-black font-semibold "
                  : "text-[#878787] dark:text-slate-300"
              }`}
            >
              {item.name}
            </p>
            {item.link === "#" && (
              <span className="w-[45%] border-2 rounded-md border-[#00FAFE]"></span>
            )}
          </button>
        ))}
      </div>
      <div className="hidden lg:flex items-center gap-4">
        <ToggleTheme />

        {/* <button className=" bg-white dark:bg-transparent text-sm 2xl:text-base text-yellow-600 font-semibold rounded-[20px] px-5 2xl:px-6 py-2.5 2xl:py-3 border-[3px] text-center  border-yellow-600">
          Schedule a call
        </button> */}
      </div>
      <Sheet>
        <SheetTrigger className="block lg:hidden">
          <RiMenu3Line className="text-2xl" />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <Image
              src="/images/splenify.svg"
              alt="Splenify"
              width={150}
              className=" mb-12"
              height={150}
            />
            <div className="flex  relative flex-col-reverse items-center">
              <div className="flex flex-col items-center gap-4 mb-12">
                {navlinks.map((item, index) => (
                  <button
                    onClick={() => scrollToSection(item.link)}
                    key={index}
                    className=" text-sm 2xl:text-lg  flex flex-col "
                  >
                    <p
                      className={`${
                        item.link === "#"
                          ? "text-black font-semibold "
                          : "text-[#878787]"
                      }`}
                    >
                      {item.name}
                    </p>
                    {item.link === "#" && (
                      <span className="w-[45%] border-2 rounded-md border-[#00FAFE]"></span>
                    )}
                  </button>
                ))}
              </div>
              <div className="flex  items-center gap-4 mb-12">
                <button className=" bg-black p-1 2xl:p-2 rounded-full">
                  <Image
                    src="/icons/sun.svg"
                    alt="Phone"
                    width={30}
                    height={30}
                  />
                </button>
                {/* <button className=" bg-white text-sm 2xl:text-base text-slate-500 font-semibold rounded-full px-5 2xl:px-8 py-2.5 2xl:py-4 border-2 border-[#00FAFE]">
                  Schedule a call
                </button> */}
              </div>
            </div>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Navbar;
