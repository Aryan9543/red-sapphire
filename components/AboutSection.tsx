import Image from "next/image";
import { useTheme } from "./ThemeProvider";
import { motion } from "framer-motion";

export default function AboutSection() {
  const { theme } = useTheme();

  return (
    <section className="abt-outer inner-container text-center py-16 px-8 sm:px-0 relative">
      {/* Background Image */}
      <div className="absolute top-1/3 left-0 right-0 bottom-0 z-0">
        <Image
          src="/Images/bg-abt-secc.png"
          alt="Hero Card Background Image"
          width={250.83}
          height={350}
          objectFit="cover"
          className="mx-auto bg-rs-abt"
        />
      </div>

      {/* Fade-in Content Box */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
        viewport={{ once: true }}
        className={`relative z-10 p-8 sm:p-12 border rounded-[30px] abt-sec 
          ${theme === "dark" ? "border-white bg-black/30 drk-abt-sec dark-ds-bg" : "border-gray-300 bg-white/40"}`}
      >
        <h3
          className={`pad-x section-title transition-transform duration-300 hover:scale-105 hover:text-[#C40C0C] font-semibold ds-bg ${
            theme === "dark" ? "text-[#C40C0C] dark-ds-bg" : ""
          }`}
        >
          About Red Sapphire
        </h3>

        <p
          className={`text-lg sm:text-2xl md:text-2xl font-semibold mt-6 leading-relaxed 
            ${theme === "dark" ? "text-white" : "text-black"}`}
        >
          At Red Sapphire, we’re more than just a tech company—we’re your dedicated partner in success. Founded in 2025, we specialize in creating smart, intuitive software that addresses real-world challenges faced by travel agencies, universities, and businesses in inventory and logistics management.
        </p>
        <p
          className={`text-lg sm:text-2xl md:text-2xl font-semibold mt-6 leading-relaxed 
            ${theme === "dark" ? "text-white" : "text-black"}`}
        >
          Our innovative tools streamline travel bookings—covering flights, hotels, and packages—allowing travel agencies to focus on crafting unforgettable journeys for their clients. For universities, we simplify processes from admissions to scheduling, enhancing the educational experience. Businesses rely on our software to efficiently track inventory, manage shipments, and optimize logistics, ensuring that goods move seamlessly from warehouse to customer.
          Every solution we offer is tailored to your specific needs. We prioritize listening to your challenges, adapting our approach, and delivering software that saves you time, reduces costs, and enhances customer satisfaction. Your success is our driving force.
        </p>
      </motion.div>
      {/* Gradient red bubble */}
      <div className="bubble-grdnt"></div>
    </section>
  );
}
