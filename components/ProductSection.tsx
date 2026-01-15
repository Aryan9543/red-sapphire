// eslint-disable-next-line react-hooks/rules-of-hooks

"use client";
import Image from "next/image";
import Link from "next/link";

import { Splide, SplideSlide } from '@splidejs/react-splide';
import "@splidejs/react-splide/css";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { useTheme } from "./ThemeProvider"; // ✅ Import your theme hook


const productData = [
  {
    id: 1,
    title: "Security Meets Simplicity",
    description:
      "Step into a new era of efficiency with Sapphire Vault, the innovative solution for secure, seamless, and scalable inventory and warehouse management. Combining cutting-edge technology with unmatched reliability, it empowers businesses to optimize workflows, protect assets, and drive growth. With Sapphire Vault, your inventory is always in safe hands.",
      img_1: "/Images/tracknexus-lft-ren.svg",
    width: 222,
    ht: 63,
    img_2_1: "/Images/car_1.png",
    img_2_2: "/Images/tracknexus-logo.svg",
    link: "Read More",
  },
  {
    id: 2,
    title: "The Future Of University mangement",
    description:
      "Discover Sapphire Veritas, the ultimate University ERP solution crafted to simplify campus operations, boost efficiency and drive academic excellence. With cutting-edge technology, real-time analytics, and seamless integration, it empowers institutions to focus on what truly matters—education. Trusted by leading universities, Sapphire Veritas is your partner in building a smarter, more connected campus.",
      img_1: "/Images/veritas-lft-ren.svg",
    img_2: "/Images/veritas-logo.svg",
    width: 197,
    ht: 64,
    link: "Read More",
  },
  {
    id: 3,
    title: "Your World, Connected.",
    description:
      "Welcome to Sapphire Orbit, the all-in-one travel management platform designed to transform how TMCs and travel agencies operate. With seamless NDC and GDS integration, AI-powered recommendations, exclusive rates, and advanced analytics, Sapphire Orbit connects your business to the world of travel like never before. Simplify operations, boost revenue, and deliver exceptional experiences—all from a single, intuitive platform.",
    width: 121,
    ht: 67,
    img_1: "/Images/orbit-lft-ren.svg",
    img_2: "/Images/orbit-logo.svg",
    link: "Read More",
    url : "/products/orbit"
  },
  {
    id: 4,
    title: "Rules That Work. Revenue That Grows",
    description: `In the fast-paced world of travel management, manual commission calculations and contract management can be time-consuming, error-prone, and inefficient. Enter Sapphire RuleSyncTool, a rule engine-driven automation tool designed to streamline commission calculations, simplify contract management, and maximize revenue for travel agencies and Travel Management Companies (TMCs).
With Sapphire RuleSyncTool, you can say goodbye to manual processes and hello to a smarter, faster, and more profitable way of managing commissions and contracts.`,
img_1: "/Images/rulesync-lft-ren.svg",
    img_2: "/Images/rulesync-logo.svg",
    width: 197,
    ht: 64,
    link: "Read More",
  },
  {
    id: 5,
    title: "Seamless Integration, Infinite Possibilities",
    description: `Sapphire OrbitConnect is a game-changing all-in-one travel API solution, designed to empower businesses by unlocking a world of possibilities in the travel sector. Whether you’re a startup eager to integrate travel data into your platform or an established enterprise in need of seamless connectivity to Global Distribution Systems (GDS) and New Distribution Capability, Sapphire OrbitConnect offers the tools and resources you need to accelerate growth and enhance customer engagement.`,
    img_1: "/Images/orbitconnect-lft-ren.svg",
    img_2: "/Images/orbitconnect-logo.svg",
    width: 197,
    ht: 64,
    link: "Read More",
    url : "/products/orbit"
  },
  {
    id: 6,
    title: "Simplify Travel Management with Unified Inventory",
    description: `Sapphire ElevateX is your all-in-one solution for running a travel agency smoothly. Manage hotels, vehicles, activities, tickets, and more from one easy platform. Design custom travel packages, make customers happy, and grow your profits while staying ahead in the travel industry.`,
    img_1: "/Images/elevate-logo.svg",
    img_2: "/Images/elevate-logo-prd.svg",
    width: 197,
    ht: 64,
    link: "Read More",
  },
];
const counters = [
  { end: 30, suffix: "+", text: "Clients" },
  { end: 5, suffix: "k+", text: "Hours Spent on Craft" },
  { end: 4.8, decimals: 1, text: "Review Rate" },
];

export default function ProductSection() {
  const { theme } = useTheme(); // ✅ Get current theme

  return (
    <section
      className={`inner-container text-center md:pb-[118px] relative prdct-st ${
        theme === "dark" ? "text-white" : "text-black"
      }`}
    >
      <div>
        <Link href="#">
          <h3
          className={`pad-x section-title transition-transform duration-300 hover:scale-105 hover:text-[#C40C0C] font-semibold ds-bg ${
            theme === "dark" ? "text-[#C40C0C] dark-ds-bg" : ""
          }`}
          >
            Product Suite
          </h3>
        </Link>
 
        <motion.div
        initial={{ opacity: 0, y: 0, x: 100, scale: 1 }}
        whileInView={{ opacity: 1, y: 0, x: 0, scale: 1 }}
        transition={{ duration: 0.5, delay: 1, ease: "easeIn" }}
        viewport={{ once: false }}
      >
        <div
          className={`mt-10 slider-outer-mrgn ${
            theme === "dark" ? "slider-outer-dark" : ""
          }`}
          >
          <Splide
           key={theme}
            options={{
              type: "loop",
              perPage: 3,
              gap: "1rem",
              autoplay: true,
              interval: 2500,
              pauseOnHover: true,
              pagination: true,
              arrows: false,
              focus: "center",
              breakpoints: {
                1200: { perPage: 3 },
                992: { perPage: 2, focus: false },
                768: { perPage: 2, focus: false },
                480: { perPage: 1, focus: false },
              },
            }}
          >
            {productData.map((item, idx) => (
              <SplideSlide key={item.id}>
                <div
                  className={`border rounded-[25px] p-8 h-full prdct-card ${
                    theme === "dark"
                      ? "text-white dark-ds-bg"
                      : "text-black testimonial-card-bg"
                  }`}
                >
                  <div className="flex justify-between items-center">
                  <div
                      className={`crd-rnd-render-bx w-[50px] h-[50px] sm:w-[70px] sm:h-[70px] testimonial-card-bg-render rounded-full flex-center justify-center ${
                        theme === "dark"
                          ? "ll-rndr-box"
                          : ""
                      }`}
                      >
                       <Image
                        src={item.img_1}
                        width={32}
                        height={20}
                        alt=""
                        priority
                        className="w-auto h-auto ll-rndr"
                      />
                    </div>

                    {idx === 0 && item.img_2_1 && (
                      <div className="prdct-logo-hd">
                        <Image
                          src={item.img_2_1}
                          width={73}
                          height={18}
                          alt=""
                          priority
                          className="ml-auto leading-0 w-auto h-auto"
                        />
                        <Image
                          src={item.img_2_2}
                          width={item.width}
                          height={item.ht}
                          alt=""
                          priority
                          className="w-[150px] h-[40px] sm:w-auto sm:h-auto"
                        />
                      </div>
                    )}

                    {item.img_2 && (
                      <div className="prdct-logo-hd">
                        <Image
                          src={item.img_2}
                          width={item.width}
                          height={item.ht}
                          alt=""
                          priority
                          className="w-[150px] h-[63px] sm:w-auto sm:h-auto"
                        />
                      </div>
                    )}
                  </div>

                  <div className="flex gap-x-6 items-center mt-10 card-title-top">
                    <h4
                      className={`text-[20px] font-semibold text-left ${
                        theme === "dark" ? "text-white" : "text-black"
                      }`}
                    >
                      {item.title}
                    </h4>
                  </div>
                  <p
                    className={`text-sm leading-5 font-light mt-[29px] text-left line-clamp-6 card-para-mdl ${
                      theme === "dark" ? "text-gray-300" : "text-[#000]"
                    }`}
                  >
                    {item.description}
                  </p>

                  {item.link && item.url &&(
                    <div className="flex justify-end mt-3 rd-mr-btn">
                      <Link href={item.url}>
                        <button
                        className={`text-[12px] md:text-base text-white px-[29px] py-[14px] rounded-full hover:bg-red-700 transition bg-gradient-to-r from-[#870303] to-[#5A0303] cursor-pointer ${
                          theme === "dark" ? "border-[#A06A6A]" : "border-[#fff]"
                        }`}
                        >
                          {item.link}
                        </button>
                      </Link>
                    </div>
                  )}
                </div>
              </SplideSlide>
            ))}
          </Splide>
        </div>
        </motion.div>
      </div>

      {/* COUNTER CARDS */}
      <div className="relative grid grid-cols-1 sm:grid-cols-3 items-center flex-wrap pt-[50px] md:pt-[150px]">
  {counters.map((item, idx) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { ref, inView } = useInView({
      triggerOnce: true,
      threshold: 0.1, // Trigger when 40% of the element is visible
    });

    return (
      <motion.div
        ref={ref}
        key={idx}
        className="mb-10 md:mb-0 flex-1 relative countr-card"
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.8, duration: 0.8 }}
      >
        {idx === 1 && (
          <Image
            src="/Images/herocardbg.png"
            alt="Hero Card Background Image"
            width={200.83}
            height={250}
            objectFit="cover"
            className="absolute inset-0 mx-auto z-0 -top-20 bg-logo-rs"
          />
        )}

        <h2
            className={`text-5xl md:text-9xl md:leading-5 font-semibold tracking-[0%] md:mb-[67px] text-center z-10 ${
              theme === "dark" ? "text-[#A28C8C]" : "text-[#000]"
            }`}
            >
          {inView && (
            <CountUp
              end={item.end}
              duration={2}
              delay={1.5}
              suffix={item.suffix || ""}
              decimals={item.decimals || 0}
            />
          )}
        </h2>
        <p
            className={`text-2xl md:text-[32px] md:leading-[38px] font-light z-10 ${
              theme === "dark" ? "text-white" : "text-[#000]"
            }`}
          >
          {item.text}
        </p>
      </motion.div>
    );
  })}
</div>
{/* Gradient red bubble */}
<div className="bubble-grdnt prd-bgrd"></div>
    </section>
  );
}
