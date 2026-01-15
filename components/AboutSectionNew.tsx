/* eslint-disable @typescript-eslint/no-unused-vars, @next/next/no-img-element */
"use client";
import { ThemeProvider, useTheme } from "@/components/ThemeProvider";
import Image from 'next/image';
import Link from "next/link";
import { motion } from "framer-motion";

export default function AboutContentNew() {
  const { theme } = useTheme();

  return (
    <div className={`${theme === "dark" ? "bg-[#000]" : "bg-[#fff]"} aboutnew-sec`}>

      <div className="lng-text-rgt-rendr">
        <div className="container">
          <div className="text-center py-2">
            <h3
              className={`mb-[50px] mx-auto pad-x section-title transition-transform duration-300 hover:scale-105 hover:text-[#C40C0C] font-semibold ds-bg ${
                theme === "dark" ? "text-[#C40C0C] dark-ds-bg" : ""
              }`}
            >
              About Red Sapphire
            </h3>
        </div>
          <section className="grid grid-cols-1 md:grid-cols-12 ltrr-inr-box">
            <motion.div 
            initial={{ opacity: 0, y: 0,  translateX: -100 }}  // slide from left
            whileInView={{ opacity: 1, y: 0,  translateX: 0 }}  // settle in place
            transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
            viewport={{ once: false }}
            className="text-center col-span-12 md:col-span-8 ltrr-cont ltrr-inr">
              <p 
            className={`order-2 text-md font-regular mb-[50px] max-sm:order-1 md:text-left sm:text-wrap ${
              theme === "dark" ? "text-[#fff]" : "text-gray-700"
            }`}
            >
              <span className="font-bold w-full block">At Red Sapphire, we’re more than just a tech company </span>
                we’re your dedicated partner in success. Founded in 2025, we specialize in creating smart,
                intuitive software that addresses real-world challenges faced by travel agencies, universities,
                and businesses in inventory and logistics management.RedSapphire brings smart technology to
                transform how businesses work. From travel solutions to academic tools and warehouse management,
                our platforms make operations smooth, connect you globally, and help you grow with clear insights.
              </p>
              <Link
                  href="/about"
                  className={`text-[12px] md:text-base text-white px-[29px] py-[14px] hover:no-underline rounded-full hover:bg-red-700 transition bg-gradient-to-r from-[#870303] to-[#5A0303] cursor-pointer ${
                    theme === "dark" ? "border-[#A06A6A]" : "border-[#fff]"
                  }`}
                >
                  Know More
                </Link>
            </motion.div>
            <motion.div 
            initial={{ opacity: 0, y: 0,  translateX: 0 }}  // settle in place
            whileInView={{ opacity: 1, y: 0,  translateX: -100 }}  // slide from right
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            viewport={{ once: false }}
            className="flex justify-center items-center col-span-12 md:col-span-4 ltrr-rndr ltrr-inr">
              <div className="video-triangle-frame-outer relative flex justify-end items-end">
                <Image src="/Images/video-frame-top.png" alt="right-render" className="w-full absolute vf-top"
               width={567}
                height={539}
               />
                <div className="video-triangle-frame relative flex justify-end items-end">
                
                  <video
                    className="w-full h-full object-cover clip-video absolute"
                    autoPlay
                    loop
                    muted
                    playsInline
                    >
                    <source
                      src="/videos/travelrs.mp4"
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </motion.div>
          </section>
        </div>
      </div>
    </div>
  );
}
