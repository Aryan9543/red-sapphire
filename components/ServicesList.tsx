"use client";

import "@splidejs/react-splide/css";
import { motion } from "framer-motion";
import { Splide, SplideSlide } from "@splidejs/react-splide";

export default function ServicesList() {
  const imageList = [
    "/Images/api-render-new.png",
    "/Images/university-render-new.png",
    "/Images/dashboard-render-new.png",
    "/Images/travel-render-new.png",
    "/Images/revenue-render-new.png",
    "/Images/security-render-new.png",
  ];

  const sliderOptions = {
    type: "loop",
    arrows: false,
    pagination: false,
    autoplay: true,
    interval: 1,
    speed: 30000,
    easing: "linear",
    drag: false,
    pauseOnHover: true,
    autoWidth: true,
    gap: "6rem",
  
    breakpoints: {
      1200: {
        gap: "4rem",
      },
      992: {
        gap: "3rem",
      },
      768: {
        gap: "2rem",
      },
      480: {
        gap: "1rem",
      },
    },
  };  

// eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
  const SlideItem = (text:any, index:any) => (
    <SplideSlide key={index}>
      <div className="mqu-text">
      <span>{text}</span>
        <i className="circle-o"></i>
      </div>
    </SplideSlide>
  );

  return (
    <section className="services-list pb-4" style={{ overflow: "hidden" }}>
      {/* Top - LTR */}
      <motion.div
        initial={{ opacity: 0, y: 40, x: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, y: 0, x: 0, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
        viewport={{ once: false }}
      >
        <Splide options={sliderOptions}>
          {imageList.map((src, index) => (
            <SplideSlide key={index}>
              <img
                src={src}
                alt={`Slide ${index + 1}`}
              />
            </SplideSlide>
          ))}
        </Splide>
      </motion.div>
      {/* Bottom - RTL */}

      {/* <Splide options={{ ...marqueeOptions, direction: "rtl" }}>
        {repeatedBottom.map((text, i) => SlideItem(text, `bottom-${i}`))}
      </Splide> */}
    </section>
  );
}
