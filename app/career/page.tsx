"use client";
import React from 'react';
import Image from 'next/image';
import FooterSection from '@/components/Footer';
import Navbar from '@/components/Navbar';
import TrustedPartners from "@/components/TrustedPartners";
import { ThemeProvider, useTheme } from "@/components/ThemeProvider";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import { motion } from "framer-motion";

const CareerContent = () => {
  const { theme } = useTheme();

  return (
    <div
      className={`min-h-screen ${
        theme === "dark" ? "bg-[#000] text-white" : "bg-[#fff] text-black"
      } about-pg`}
    >
      <Navbar />
      <div>
        <section className="flex h-[630px] justify-center w-full items-center overflow-hidden relative abt-pg-bnr">
          <div className="absolute inset-0">
            <video
              key={theme}
              className="h-full w-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            >
              <source
                src={`${
                  theme === "dark"
                    ? "/videos/LanderPageVideo_dark.mp4"
                    : "https://redsapphireweb.s3.ap-south-1.amazonaws.com/LanderPageVideo_white.mp4"
                }`}
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>

          <div className="banr-crcl-render relative mt-auto h-[531px] w-full z-[1]">
            {/* <Image
              src={
                theme === "dark"
                  ? "/Images/hero/big-half-circle-dark.svg" // 🌑 dark theme image
                  : "/Images/hero/big-half-circle.svg"      // ☀️ light theme image
              }
              alt="Hero Center"
              width={978}
              height={531}
              className="mx-auto mt-[60px] md:block hidden"
              priority
            /> */}

            <div className="banr-cont text-center md:bottom-0 px-4 transform z-[1] cmng-soon-cont">
              <Image
                src="/Images/herocardbg.png"
                alt="Hero Card Background Image"
                layout="intrinsic"
                width={250.83}
                height={350}
                className="absolute bottom-0 rs-logo-bg-abt"
              />
              <div className="text-center">
                <motion.h1
                  initial={{ opacity: 0, y: 40, x: 0 }}
                  whileInView={{ opacity: 1, y: 0, x: 0 }}
                  transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                  viewport={{ once: false }}
                   className="text-4xl font-bold mb-2">Coming Soon
                   </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 40, x: 0 }}
                  whileInView={{ opacity: 1, y: 0, x: 0 }}
                  transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
                  viewport={{ once: false }}
                className="text-lg">We&apos;re working hard to bring you exciting opportunities
                </motion.p>
              </div>
            </div>
            {/* Gradient BG behind button */}
            <div
              className={`absolute bottom-1/4 md:bottom-0 w-full h-[100px] z-[0] ${
                theme === "dark" ? "bg-gradient-to-t from-[#000] to-transparent" : "grdnt-bg-wht"
              }`}
            ></div>
          </div>
        </section>
      </div>
      <div
        className={`${
          theme === "dark" ? "bg-[#000] text-white" : "bg-[#fff] text-black"
        }`}
      >
        <TrustedPartners />
      </div>
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
