"use client";

import "@splidejs/react-splide/css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { ThemeProvider, useTheme } from "@/components/ThemeProvider";
import { motion } from "framer-motion";

export default function TechStackSlider() {
  const { theme } = useTheme();

  const imageList = [
    "/Images/aws.png",
    "/Images/bs.png",
    "/Images/figma.png",
    "/Images/htmll.png",
    "/Images/next-js.png",
    "/Images/java.png",
    "/Images/php.png",
    "/Images/react.png",
    "/Images/vs.png",
    "/Images/vue.png",
    "/Images/css.png",
    "/Images/dot-net.png",
    "/Images/git.png",
    "/Images/hibernate.png",
    "/Images/illustrator.png",
    "/Images/js.png",
    "/Images/next.png",
    "/Images/salesforce.png",
    "/Images/signal-tv.png",
    "/Images/wordpress.png",
    "/Images/xd.png",
    "/Images/spring-boot.png",
  ];

  const sliderOptions = {
    type: "loop",
    arrows: false,
    pagination: false,
    autoplay: true,
    interval: 1,
    speed: 60000,
    easing: "linear",
    drag: false,
    pauseOnHover: true,
    autoWidth: true,
    gap: "2rem",
    breakpoints: {
      1200: { gap: "2rem" },
      992: { gap: "2rem" },
      768: { gap: "1rem" },
      480: { gap: "1rem" },
    },
  };

  return (
    <section className="tech-stack py-8 px-4" style={{ overflow: "hidden" }}>
      <div className="text-center py-2">
        <h3
          className={`mb-[50px] section-title transition-transform duration-300 hover:scale-105 hover:text-[#C40C0C] font-semibold ds-bg ${
            theme === "dark" ? "text-[#C40C0C] dark-ds-bg" : ""
          }`}
        >
          Tech Stacks
        </h3>
      </div>
      <div className="w-full">
        {/* Left Slider */}
        <motion.div
              initial={{ opacity: 0, y: 40, x: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, y: 0, x: 0, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
              viewport={{ once: false }}
             className="w-full my-1">
          <Splide options={{ ...sliderOptions }}>
            {imageList.map((src, index) => (
              <SplideSlide key={`left-${index}`}>
                <img src={src} alt={`Slide ${index + 1}`} className="w-full h-auto object-contain" />
              </SplideSlide>
            ))}
          </Splide>
        </motion.div>

        {/* Right Slider - reversed direction */}
        <motion.div
              initial={{ opacity: 0, y: 40, x: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, y: 0, x: 0, scale: 1 }}
              transition={{ duration: 0.7, delay: 1, ease: "easeOut" }}
              viewport={{ once: false }}
               className="w-full my-1">
          <Splide options={{ ...sliderOptions, direction: "rtl" }}>
            {imageList.map((src, index) => (
              <SplideSlide key={`right-${index}`}>
                <img src={src} alt={`Slide ${index + 1}`} className="w-full h-auto object-contain" />
              </SplideSlide>
            ))}
          </Splide>
        </motion.div>
      </div>
    </section>
  );
}
