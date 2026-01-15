"use client";

import "@splidejs/react-splide/css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { useTheme } from "./ThemeProvider";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function TrustedPartners() {
  const { theme } = useTheme();
  const [currentTheme, setCurrentTheme] = useState(theme);

  useEffect(() => {
    setCurrentTheme(theme);
  }, [theme]);

  const logos = [
    { light: "/Images/pp-lgt-clr.svg", dark: "/Images/pp-lgt-clr.svg" },
    { light: "/Images/rzr-lgt-clr.svg", dark: "/Images/rzr-lgt-clr.svg" },
    { light: "/Images/moneris-lgt-clr.svg", dark: "/Images/moneris-lgt-clr.svg" },
    { light: "/Images/hotelbeds-lgt-clr.svg", dark: "/Images/hotelbeds-lgt-clr.svg" },
    { light: "/Images/agoda-lgt-clr.svg", dark: "/Images/agoda-lgt-clr.svg" },
    { light: "/Images/expedia-lgt-clr.svg", dark: "/Images/expedia-lgt-clr.svg" },
    { light: "/Images/sabre-lgt-clr.svg", dark: "/Images/sabre-lgt-clr.svg" },
  ];

  const repeatedLogos = Array(2).fill(logos).flat();

  const marqueeOptions = {
    type: "loop",
    arrows: false,
    pagination: false,
    autoplay: true,
    interval: 1,
    speed: 100000,
    easing: "linear",
    drag: false,
    pauseOnHover: true,
    autoWidth: true,    
  };

  return (
    <section
      className={`trusted-partners pt-[10px] pb-[90px] text-center overflow-hidden
        ${theme === "dark" ? "bg-[#000]" : "bg-[#fff]"}`}
    >
      <h3
        className={`pad-x section-title transition-transform duration-300 hover:scale-105 hover:text-[#C40C0C] font-semibold ds-bg ${
          theme === "dark" ? "text-[#C40C0C] dark-ds-bg" : ""
        }`}
      >
        Trusted By Market Leaders
      </h3>

            <motion.div
              initial={{ opacity: 0, y: 40, x: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, y: 0, x: 0, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
              viewport={{ once: false }}
            >
      <Splide key={currentTheme} options={marqueeOptions} className="tp-slider mt-[50px]">
        {repeatedLogos.map((logo, i) => (
          <SplideSlide key={`${i}-${currentTheme}`}>
            <div className="partner-logo-wrapper">
              <img
                src={currentTheme === "dark" ? logo.dark : logo.light}
                alt={`Partner ${i}`}
                className="partner-logo"
              />
            </div>
          </SplideSlide>
        ))}
      </Splide>
            </motion.div>
    </section>
  );
}
