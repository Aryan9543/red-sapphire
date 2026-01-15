"use client";

import Image from "next/image";
import Masonry from "react-masonry-css";
import { motion } from "framer-motion";
import { useTheme } from "./ThemeProvider"; // ✅ Import your theme hook

const testimonialData = [
  {
    img: "/Images/img_1.png",
    title: "Next-Gen ERP Experience",
    desc: "We recently switched to Sapphire Veritas, and it has proven to be a game changer for us! With its smart admission system, it saved us weeks of work; therefore, no more manual merit lists or endless paperwork. The student portal is so easy to use; students can check results, register for courses, and even make payments all in one place. What really stood out the best was the seamless integration with our existing systems and the 24/7 support they provide. It makes us feel like everything just works together. If you are looking to make your institution smarter and more efficient, this is the best ERP solution for you.",
  },
  {
    img: "/Images/img_2.png",
    title: "Smarter Logistics, Real Results",
    desc: "Red Sapphire’s Tracknexus has completely changed how we handle our logistics operations. Route planning is now more efficient, which has sped up our deliveries and significantly lowered fuel expenses. Our team experiences less stress on the road, and we have noticed a clear improvement in customer satisfaction. The system’s real-time tracking and smart analytics allow us to prevent issues before they escalate. It is actually very difficult to find a solution that improves so many areas at once—operations, cost, and service. Tracknexus didn’t just streamline our workflow; it helped us work smarter and grow stronger across the board.",
  },
  {
    img: "/Images/img_3.png",
    title: "Built for the Modern TMC",
    desc: "Using Sapphire Orbit has been a turning point in modernizing our travel operations. Far beyond a standard booking system, it functions as a fully integrated travel ecosystem. From flights and hotels to vehicles and live pricing insights, everything is seamlessly connected within one intelligent platform. Its AI-driven tools, combined with the RueSyncTool integration, give us a sharper edge in revenue management and operational efficiency. What stands out most is the robust security architecture that keeps all transactions transparent and protected. This platform does not just streamline processes; it enhances every aspect of how we deliver value to our clients.",
  },
  {
    img: "/Images/img_4.png",
    title: "Complex Commissions, Simplified. Revenue, Amplified",
    desc: "We were looking for a tool that could handle the complexity of commission structures without overwhelming our team. Sapphire RuleSyncTool delivered that and more. It automates our commission calculations flawlessly, manages contracts centrally, and even identifies the most lucrative booking paths. The integration with our booking systems was easy, and we received the onboarding support from the Sapphire team excellently. What we love most is the ability to track everything in real time, which means no more delays and no more errors. It is reliable, scalable, and built for travel professionals. If you want rules that truly work and revenue that grows, this is the perfect fit for you! ",
  },
  {
    img: "/Images/img_5.png",
    title: "ElevateX Delivers What Others Promise",
    desc: "In our pursuit of a streamlined travel operations system that maintains essential features, ElevateX emerged as the ideal solution. It is an all-in-one interface that enables efficient management of everything from room rates to rental cars and excursions within minutes.The real-time updates enable channel synchronization, while CRM features allow personalized marketing initiatives. There is no steep learning curve to use this solution, and the support team delivers superior support beyond expectations. The ElevateX platform comes with functionality to boost our organization's ability for exceptional travel delivery.",
  },
  {
    img: "/Images/img_6.png",
    title: "Personalized Travel, Empowered Engagement",
    desc: "While opting for Sapphire OrbitConnect, our travel operations are revolutionized. The seamless integration capabilities enable us to access complete travel services effortlessly. Real-time data updates allow us to give our customers the most accurate travel information, which optimizes their booking process. Moreover, the advanced personalization features have significantly improved our customer engagement by customizing recommendations to individual preferences. The platform's robust analytics capabilities help us make informed decisions, ensuring steady growth. With top-tier security measures in place, we confidently protect our user's data. The travel industry has finally received its revolutionary solution through Sapphire OrbitConnect.",
  },
];

// 👇 Parent variant for stagger
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // delay between children
    },
  },
};

// 👇 Each card animation variant
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

export default function TestimonialSection() {
  const { theme } = useTheme(); // ✅ Get current theme

  const breakpointColumnsObj = {
    default: 3,
    1024: 2,
    640: 1,
  };

  return (
    <section className="testi-sec inner-container text-center pb-[50px] p-2 relative">
      <div className="absolute top-40 left-0 right-0 bottom-0 z-0">
        <Image
          src="/Images/herocardbg.png"
          alt="Hero Card Background Image"
          width={500.83}
          height={350}
          objectFit="cover"
          className="mx-auto object-cover bg-rs-testi"
        />
      </div>
      <h3
        className={`pad-x section-title transition-transform duration-300 hover:scale-105 hover:text-[#C40C0C] font-semibold ds-bg ${
          theme === "dark" ? "text-[#C40C0C] dark-ds-bg" : ""
        }`}
      >
        Testimonials
      </h3>

      {/* 👇 Animation wrapper with stagger */}
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
          {testimonialData.map((item, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className={`item border border-[#7800003D] rounded-[25px] py-6 ps-6 pe-8 relative ${
                theme === "dark"
                  ? "text-white dark-ds-bg"
                  : "text-black testimonial-card-bg"
              }`}
            >
              <div className="flex gap-x-6 items-start testi-hd">
                <div className="testi-auth-render">
                  <Image
                    src={item.img}
                    width={67}
                    height={67}
                    priority
                    alt=""
                  />
                </div>
                <h4
                  className={`text-md sm:text-[24px] font-semibold text-left athr-nm ${
                    theme === "dark" ? "text-white" : " text-[#000]"
                  }`}
                >
                  {item.title}
                </h4>
              </div>
              <p
                className={`text-sm leading-5 font-light mt-9 text-left ${
                  theme === "dark" ? "text-white" : " text-[#000]"
                }`}
              >
                {item.desc}
              </p>
            </motion.div>
          ))}
        </Masonry>
      </motion.div>
      {/* Gradient red bubble */}
      <div className="bubble-grdnt testi-bgrd"></div>
    </section>
  );
}
