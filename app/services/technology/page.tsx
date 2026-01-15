"use client";
import React from 'react';
import Image from 'next/image';
import FooterSection from '@/components/Footer';
import Navbar from '@/components/Navbar';
import TrustedPartners from "@/components/TrustedPartners";
import TabsSection from "@/components/TabsSection";
import TechStackSlider from "@/components/TechStackSlider";
import { ThemeProvider, useTheme } from "@/components/ThemeProvider";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import Link from "next/link";
import { motion } from "framer-motion";

const CareerContent = () => {
  const { theme } = useTheme();

  return (
    <div
      className={`tchnlgy min-h-screen ${
        theme === "dark" ? "bg-[#000] text-white" : "bg-[#fff] text-black"
      } service-pg`}
    >
      <Navbar />
      {/* banner */}
      <section className='srv-banner-sec relative overflow-hidden'>
            <Image src={`${
                    theme === "dark"
                      ? "/Images/drk-thm-lns-bnr.png"
                      : "/Images/lgt-thm-lns-bnr.png"
                    }`}
             alt="right-render" className="w-full lns-bnr-render"
                      width={1920}
                      height={400}
                  />
        <div className="container">
          <div className='srv-banner-sec-inner flex justify-space-between'>
            <motion.div
                initial={{ opacity: 0, y: 0,  translateX: -100 }}  // slide from left
            whileInView={{ opacity: 1, y: 0,  translateX: 0 }}  // settle in place
            transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
            viewport={{ once: false }}
                className="left-sd-cont relative">
            <Image src="/Images/herocardbg.png" alt="right-render" className="w-full rs-log-bg absolute"
                      width={300}
                      height={400}
                  />
            <h1
                className={`text-lg font-bold ${
                  theme === "dark" ? "text-[#fff]" : "text-black"
                }`}>
                    Technology
            </h1>
            <p
                className={`text-[20px] font-regular mb-[50px] ${
                  theme === "dark" ? "text-[#fff]" : "text-black"
                }`}>
                  <span className='text-[#C40C0C]'>RedSapphire</span> brings smart technology to transform how businesses work. From
                  travel solutions to academic tools and warehouse management, our platforms make operations
                  smooth, connect you globally, and help you grow with clear insights.
            </p>
            <Link
                      href="/contact"
                      className={`text-[12px] md:text-base text-white px-[29px] py-[14px] hover:no-underline rounded-full hover:bg-red-700 transition bg-gradient-to-r from-[#870303] to-[#5A0303] cursor-pointer ${
                        theme === "dark" ? "border-[#A06A6A]" : "border-[#fff]"
                      }`}
                    >
                      Contact Us
                    </Link>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 0,  translateX: 100 }}  // slide from right
            whileInView={{ opacity: 1, y: 0,  translateX: 0 }}  
            transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
            viewport={{ once: false }}
            className="right-sd-cont">
                <div className="rsd-cont-box text-end">
                  <Image src="/Images/rgt-rndr-grl.svg" alt="right-render" className="w-full bnr-rgt"
                      width={567}
                      height={539}
                  />
                </div>
            </motion.div>
          </div>
        </div>
      </section>
      <TabsSection />
      <TechStackSlider />
      <br></br>
      <TrustedPartners />
      <FooterSection />
      {/* scroll btn bottom to top */}
            <ScrollToTopButton />
    </div>
  );
};

const Career = () => {
  return (
    <ThemeProvider>
      <CareerContent />
    </ThemeProvider>
  );
};

export default Career;
