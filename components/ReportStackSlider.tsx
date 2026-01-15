"use client";

import "@splidejs/react-splide/css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { useTheme } from "@/components/ThemeProvider";
import { motion } from "framer-motion";

export default function TechStackSlider() {
  const { theme } = useTheme();

  const imageList = [
    "/Images/qlik.svg",
    "/Images/powerbi.svg",
    "/Images/zoho.svg",
    "/Images/googleanal.svg",
  ];

  const sliderOptions = {
    arrows: false,
    pagination: false,
    autoplay: true,
    interval: 2000,
    easing: "linear",
    drag: false,
    pauseOnHover: true,
    autoWidth: true,
    gap: "2rem",
    breakpoints: {
      1200: { gap: "2rem", perPage: 4 },
      992: { gap: "1.5rem", perPage: 3 },
      768: { gap: "1rem", perPage: 2 },
      480: { gap: "0.5rem", perPage: 1 },
    },
  };

  return (
    <section
      className={`tech-stack py-8 px-4 ${
        theme === "dark" ? "bg-[#000] text-white" : "bg-[#fff] text-black"
      }`}
      style={{ overflow: "hidden" }}
    >
      <div className="container mx-auto">
        <div className="text-center py-2">
          <h3
            className={`mb-[50px] section-title transition-transform duration-300 hover:scale-105 hover:text-[#C40C0C] font-semibold ${
              theme === "dark" ? "text-[#C40C0C] dark-ds-bg" : ""
            }`}
          >
            Tech Stacks
          </h3>
        </div>
        <div className="w-full flex justify-center items-center">
          <motion.div
            initial={{ opacity: 0, y: 40, x: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, y: 0, x: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
            viewport={{ once: false }}
            className="w-full"
          >
            <Splide
              options={{ ...sliderOptions }}
              className="flex justify-center"
            >
              {imageList.map((src, index) => (
                <SplideSlide
                  key={`slide-${index}`}
                  className="flex justify-center items-center"
                  style={{ minWidth: "120px" }}
                >
                  <img
                    src={src}
                    alt={`Tech Stack ${index + 1}`}
                    className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-36 lg:h-36 object-contain"
                    style={{ imageRendering: "auto" }}
                  />
                </SplideSlide>
              ))}
            </Splide>
          </motion.div>
        </div>
      </div>
    </section>
  );
}