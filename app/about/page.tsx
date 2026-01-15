"use client";
import React from 'react';
import Image from 'next/image';
import FooterSection from '@/components/Footer';
import Navbar from '@/components/Navbar';
import TrustedPartners from "@/components/TrustedPartners";
import { ThemeProvider, useTheme } from "@/components/ThemeProvider";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const AboutContent = () => {
  const { theme } = useTheme();
  const [text, setText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const fullText =
    "ABOUT US";
  const speed = 200; // typing speed in ms

  useEffect(() => {
    let i = 0;

    function typeWriter() {
      if (i < fullText.length) {
        setText(fullText.slice(0, i + 1));
        i++;
        setTimeout(typeWriter, speed);
      } else {
        setIsTyping(false); // stop blinking when done
      }
    }

    typeWriter();

    return () => {}; // no cleanup needed here
  }, []);
  
  return (
    <div className={`${theme === "dark" ? "bg-[#000]" : "bg-[#fff]"} about-pg`}>
      <Navbar />
      <section className="flex h-[630px] justify-center w-full items-center overflow-hidden relative abt-pg-bnr">
        <div className="absolute inset-0">
          <video
            key={theme}
            className="h-full w-full object-cover   "
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
          <Image
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
          />
          <motion.div
          initial={{ opacity: 0, y: 40, x: "-50%" }}
          whileInView={{ opacity: 1, y: 0, x: "-50%" }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="banr-cont text-center md:bottom-0 px-4  transform z-[1]">
            <Image
              src="/Images/herocardbg.png"
              alt="Hero Card Background Image"
              layout="intrinsic"
              width={250.83}
              height={350}
              className="absolute bottom-0 rs-logo-bg-abt"
            />

            <h1 className={`text-2xl font-bold lg:text-4xl mb-6 md:leading-[55px] md:text-[28px] sm:text-2xl 
              ${theme === "dark" ? "text-[#fff]" : "text-[#000]"}`}>
                <span
              className={`pr-1 ${
                isTyping
                  ? "border-r-2 border-black dark:border-white"
                  : ""
              }`}
            >
              {text}
            </span>
            </h1>

            <p className={`text-md font-normal mt-2 ${theme === "dark" ? "text-gray-300" : "text-[#000]"} abt-para-btm`}>
              <strong>At <span className="text-red-600 rs-clr-rd">Red Sapphire</span>, we’re more than just a tech company</strong><br />
              We’re your dedicated partner in success. Founded in 2025, we specialize in creating smart,
              intuitive software that addresses real-world challenges faced by travel agencies, universities,
              and businesses in inventory and logistics management.
            </p>
        </motion.div>
          {/* Gradient BG behind button */}
        <div
          className={`absolute bottom-1/4 md:bottom-0 w-full h-[100px] z-[0] ${
            theme === "dark" ? "bg-gradient-to-t from-[#000] to-transparent" : "grdnt-bg-wht"
          }`}
        ></div>
        </div>
      </section>

      <div className="lng-text-rgt-rendr">
        <div className="container">
          <section className="grid grid-cols-1 md:grid-cols-12 ltrr-inr-box">
            <motion.div 
            initial={{ opacity: 0, y: 0,  translateX: -100 }}  // slide from left
            whileInView={{ opacity: 1, y: 0,  translateX: 0 }}  // settle in place
            transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
            viewport={{ once: false }}
            className="text-center col-span-12 md:col-span-8 ltrr-cont ltrr-inr">
              <p className="order-1 text-lg font-bold max-sm:order-2 mb-4 md:leading-6 md:text-xl" style={{ color: '#C40C0C', textAlign: 'right' }}>
                Our innovative tools streamline travel bookings
              </p>
              <p 
            className={`order-2 text-md font-regular max-sm:order-1 md:text-right sm:text-wrap ${
              theme === "dark" ? "text-[#fff]" : "text-gray-700"
            }`}
            >
                Covering flights, hotels, and packages—allowing travel agencies to focus on crafting unforgettable journeys for their clients.
                For universities, we simplify processes from admissions to scheduling, enhancing the educational experience. Businesses rely on our
                software to efficiently track inventory, manage shipments, and optimize logistics, ensuring that goods move seamlessly from warehouse
                to customer.
                Every solution we offer is tailored to your specific needs. We prioritize listening to your challenges, adapting our approach, and
                delivering software that saves you time, reduces costs, and enhances customer satisfaction. Your success is our driving force.
              </p>
            </motion.div>
            <div className="flex justify-center items-center col-span-12 md:col-span-4 ltrr-rndr ltrr-inr">
              <video
              key={theme}
              className="w-full md:w-auto" autoPlay loop muted playsInline>
                <source
                  src={`${
                    theme === "dark"
                      ? "/videos/blackball.mp4"
                      : "https://redsapphireweb.s3.ap-south-1.amazonaws.com/SapphireOrbit_WhiteBall.mp4"
                    }`}
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
              {/* croped  video */}
              {/* <video className="w-full md:w-auto" autoPlay loop muted playsInline>
                <source
                  src="videos/white-ball.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video> */}
            </div>
          </section>
        </div>
      </div>

      <section className="abt-outer inner-container text-center py-16 px-8 sm:px-0 relative">
        <div className="relative z-10 p-8 sm:p-12 backdrop-blur-md abt-sec 
          border-gray-300 bg-white/40">
          <h3
          className={`pad-x section-title transition-transform duration-300 hover:scale-105 hover:text-[#C40C0C] font-semibold ds-bg ${
            theme === "dark" ? "text-[#C40C0C] dark-ds-bg" : ""
          }`}
          >
            Why Choose Us
          </h3>
          
          <motion.p
          initial={{ opacity: 0, y: 40, x: 0 }}
          whileInView={{ opacity: 1, y: 0, x: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: false }}
          className={`text-lg sm:text-2xl md:text-2xl font-semibold mt-6 leading-relaxed ${
            theme === "dark" ? "text-[#fff]" : "text-[#000]"
          }`}
          >
            At Red Sapphire, we pride ourselves on being problem-solvers, not just tech experts.
          We take the time to understand your unique requirements, ensuring our tools fit seamlessly
          into your operations. Our commitment to you extends beyond the initial setup; we provide
          24/7 support, guiding you every step of the way to ensure you never face hurdles alone.
          We deliver on our promises with reliable, jargon-free software designed for simplicity
          and clarity. With Red Sapphire, you can expect straightforward solutions that yield
          real results.
        </motion.p>
        </div>
      </section>
        {/* trusted partnner slider added */}
           <TrustedPartners />
      <FooterSection />
            {/* scroll btn bottom to top */}
                  <ScrollToTopButton />
    </div>
  );
};

const AboutUs = () => {
  return (
    <ThemeProvider>
      <AboutContent />
    </ThemeProvider>
  );
};

export default AboutUs;
