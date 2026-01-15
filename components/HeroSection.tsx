"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useTheme } from "@/components/ThemeProvider";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const { theme } = useTheme();

  const [text, setText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const fullText =
    "Partner in Travel, Learning, and Logistics Technology with Intelligent Data Solutions";
  const speed = 50; // typing speed in ms

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


  // Animation variants for staggered, smooth effects
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.6, -0.05, 0.01, 0.99], // Apple-like smooth easing
      },
    },
  };

  return (
    <section className="bnr-inner relative w-full h-[630px] flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="absolute inset-0 z-0"
      >
        <video
          key={theme}
          className="w-full h-full object-cover"
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
        </motion.div>
      </div>

      {/* Center Image Positioned at Bottom */}
      <div className="banr-crcl-render relative mt-auto h-[531px] w-full z-[1]">
        <Image
          src={
            theme === "dark"
              ? "/Images/hero/big-half-circle-dark.svg"
              : "/Images/hero/big-half-circle.svg"
          }
          alt="Hero Center"
          width={978}
          height={531}
          className="mx-auto mt-[60px] md:block hidden"
          priority
        />

        {/* ✅ Animated Content */}
        <motion.div
          initial={{ opacity: 0, y: 40, x: "-50%" }}
          whileInView={{ opacity: 1, y: 0, x: "-50%" }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="banr-cont text-center w-[280px] sm:w-[588px] max-w-[588px] z-[1] px-4"
        >
          <Image
            src="/Images/herocardbg.png"
            alt="Hero Card Background Image"
            layout="intrinsic"
            width={250.83}
            height={350}
            className="absolute bottom-0 left-[165.08px] z-[-1] hc-bg"
          />

          <h1
            className={`text-2xl sm:text-3xl md:text-[28px] lg:text-4xl font-bold md:leading-[55px] ${
              theme === "dark" ? "text-white" : "text-[#000]"
            }`}
          >
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

          <p
            className={`text-xl sm:text-2xl md:text-[28px] font-normal mt-4 md:leading-[35px] ${
              theme === "dark" ? "text-gray-300" : "text-[#000]"
            }`}
          >
            Empower your business with the tools of tomorrow.
          </p>

          <div className="my-8">
            <Link href="/contact">
              <button className="text-[12px] sm:text-sm md:text-base text-white px-[29px] py-[14px] rounded-full hover:bg-red-700 transition whitespace-nowrap bg-gradient-to-r from-[#870303] to-[#5A0303] cursor-pointer flex-1 sm:flex-0 mt-5">
                Request Demo
              </button>
            </Link>
          </div>
        </motion.div>

        {/* Gradient BG behind button */}
        <div
          className={`absolute bottom-1/4 md:bottom-0 w-full h-[100px] z-[0] ${
            theme === "dark"
              ? "bg-gradient-to-t from-[#000] to-transparent"
              : "grdnt-bg-wht"
          }`}
        ></div>
      </div>

      <style jsx>{`
        @keyframes blink {
          0% {
            opacity: 1;
          }
          50% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
        .animate-blink {
          animation: blink 1s step-start infinite;
        }
      `}</style>
    </section>
  );
}