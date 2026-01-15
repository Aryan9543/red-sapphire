"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Masonry from "react-masonry-css";
import { motion } from "framer-motion";
import FooterSection from '@/components/Footer';
import Navbar from '@/components/Navbar';
import TrustedPartners from "@/components/TrustedPartners";
import { ThemeProvider, useTheme } from "@/components/ThemeProvider";
import ScrollToTopButton from "@/components/ScrollToTopButton";

// Product data array
const productData = [
  {
    name: "Sapphire Veritas",
    description: "University ERP Tool for streamlined academic and administrative management.",
    link: "/products/veritas",
    image: "/Images/veritas-lft-ren.svg",
  },
  {
    name: "Sapphire Tracknexus",
    description: "Logistic & Warehouse Inventory Tool for efficient supply chain operations.",
    link: "/products/tracknexus",
    image: "/Images/tracknexus-lft-ren.svg",
  },
  {
    name: "Sapphire Orbit",
    description: "Agent Portal for seamless travel agency operations and management.",
    link: "/products/orbit",
    image: "/Images/orbit-lft-ren.svg",
  },
  {
    name: "Sapphire RuleSync",
    description: "Automation Commission/Markup Tool for dynamic pricing and automation.",
    link: "/products/rulesync",
    image: "/Images/rulesync-lft-ren.svg",
  },
  {
    name: "Sapphire OrbitConnect API",
    description: "Connected API Integration for NDC/GDS to enhance travel connectivity.",
    link: "/products/orbitconnect",
    image: "/Images/orbitconnect-lft-ren.svg",
  },
  {
    name: "Sapphire ElevateX",
    description: "Travel Inventory & Packages for curated travel experiences.",
    link: "/products/elevatex",
    image: "/Images/elevate-lft-ren.svg",
  },
];

// Parent variant for stagger
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

// Each card animation variant
const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const ProductsContent = () => {
  const { theme } = useTheme();

  const breakpointColumnsObj = {
    default: 3,
    1024: 2,
    640: 1,
  };

  return (
    <div
      className={`min-h-screen products-pg 
        ${
        theme === "dark" ? "bg-[#000] text-white" : "bg-[#fff] text-black"
        }`}
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
                        <h1 className="text-4xl font-bold mb-2">Our Products</h1>
                        <p className="text-lg"> Explore our suite of innovative solutions designed to empower your business.</p>
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

      <section className="products-sec inner-container text-center pb-[50px] p-2 relative">
        <div className="absolute top-40 left-0 right-0 bottom-0 z-0">
          <Image
            src="/Images/herocardbg.png"
            alt="Hero Card Background Image"
            width={500.83}
            height={350}
            objectFit="cover"
            className="mx-auto object-cover bg-rs-products"
          />
        </div>

        {/* Animation wrapper with stagger */}
        <motion.div
          className="z-10 relative mt-[50px]"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="masonry-grid"
            columnClassName="masonry-column"
          >
            {productData.map((product, idx) => (
              <motion.div
                key={idx}
                variants={cardVariants}
                className={`item border border-[#7800003D] rounded-[25px] py-6 px-8 relative ${
                  theme === "dark" ? "text-white dark-ds-bg" : "text-black product-card-bg  bg-gradient-to-r from-[#fff0] to-[#e9e9e9]"
                }`}
              >
                <Link href={product.link}>
                  <div className="flex gap-x-6 items-start">
                    <div
                      className={`w-[50px] h-[50px] sm:w-[70px] sm:h-[70px] testimonial-card-bg-render rounded-full flex-center justify-center crd-rnd-render-bx ${
                        theme === "dark"
                          ? "ll-rndr-box"
                          : ""
                      }`}
                      >
                      <Image
                        className='ll-rndr'
                        src={product.image}
                        width={67}
                        height={67}
                        priority
                        alt={product.name}
                      />
                    </div>
                    <div className="card-cont">
                        <h4
                          className={`text-md sm:text-[24px] font-semibold text-left prod-nm ${
                            theme === "dark" ? "text-white" : "text-[#000]"
                          }`}
                        >
                          {product.name}
                        </h4>
                      <p
                        className={`text-md leading-5 font-light mt-2 text-left ${
                          theme === "dark" ? "text-white" : "text-[#000]"
                        }`}
                      >
                        {product.description}
                      </p>
                  </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </Masonry>
        </motion.div>
        {/* Gradient red bubble */}
        <div className="bubble-grdnt products-bgrd"></div>
      </section>
        <TrustedPartners />
      <FooterSection />
            {/* scroll btn bottom to top */}
                  <ScrollToTopButton />
    </div>
  );
};

const Products = () => {
  return (
    <ThemeProvider>
      <ProductsContent />
    </ThemeProvider>
  );
};

export default Products;