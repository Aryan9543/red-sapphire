"use client";
import { useState } from "react";
import { useTheme } from "@/components/ThemeProvider";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function TabsSection() {
  const { theme } = useTheme();
  const [activeTab, setActiveTab] = useState("analytic-reporting");

  const tabs = [
    
    {
      id: "analytic-reporting",
      label: "Analytics & Reporting",
      leftContent: (
        
        <div className="cont-box-clip">
            <p
                className={`mb-6 text-lg font-regular ${
                theme === "dark" ? "text-white" : "text-white"
                }`}
            >
                <span className="font-bold block text-xl md:text-1xl lg:text-2xl mb-3">Transform Data into Direction</span>
                We don’t just show you numbers — we show you what they mean.
                With real-time dashboards, deep insights, and clean reports, we help organizations reduce risk, cut costs, and move faster.
            </p>
          
          </div>
      ),
      rightContent: (
        <div className="lnk-box-clip flex justify-start pl-1">
          <Link
            href="/contact"
         className={`font-medium inline-block text-[12px] md:text-base text-[#A60505] px-[35px] py-[9px] hover:no-underline rounded-[8px] transition bg-[#fff] cursor-pointer ${
              theme === "dark" ? "border-[#fff]" : "border-[#fff]"
            }`}
          >
            Explore
          </Link>
        </div>
      ),
    },
  ];

  return (
      <div className={`${theme === "dark" ? "bg-[#000]" : "bg-[#fff]"} tabs-section py-12`}>
  
          {/* Nav Pills */}
          <motion.div
              initial={{ opacity: 0, y: 40, x: 0 }}
              whileInView={{ opacity: 1, y: 0, x: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: false }}
              className="flex justify-center items-center flex-wrap gap-4 mb-10 tabs buttons-outer px-4 pb-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`tab-pil-btn px-5 py-2 rounded-full border border-[#c6c6c6] text-sm font-medium transition-all ${
                  activeTab === tab.id
                    ? "bg-[#A60505] text-white active"
                    : "bg-[#fff] text-[#A60505] hover:bg-[#A60505] hover:text-[#fff]"
                }`
              }
          >
                {tab.label}
              </button>
            ))}
          </motion.div>
  
          {/* Tab Content */}
          
          <div className="container">
            <div className="tabs-cont-box flex items-start justify-between">
              <motion.div 
              initial={{ opacity: 0, y: 0,  translateX: -100 }}  // slide from left
              whileInView={{ opacity: 1, y: 0,  translateX: 0 }}  // settle in place
              transition={{ duration: 0.5, delay: 0.7, ease: "easeOut" }}
              viewport={{ once: false }}
               className="max-w-3xl mr-auto tc-left">
                <div className="transition duration-300 ease-in-out top-clip relative z-[2]">
                {tabs.find(tab => tab.id === activeTab)?.leftContent}
                <Image src="/Images/top-clip.svg" alt="right-render" className="w-full absolute top-clip-bg"
                    width={567}
                    height={539}
                />
                </div>
                <div className="transition duration-300 ease-in-out bottom-clip relative z-[2]">
                  {tabs.find(tab => tab.id === activeTab)?.rightContent}
                  <Image src="/Images/bottom-clip.svg" alt="right-render" className="w-full absolute bottom-clip-bg"
                    width={567}
                    height={539}
                />
                </div>
              </motion.div>
              <motion.div 
              initial={{ opacity: 0, y: 0,  translateX: 100 }}  // slide from left
              whileInView={{ opacity: 1, y: 0,  translateX: 0 }}  // settle in place
              transition={{ duration: 0.5, delay: 0.7, ease: "easeOut" }}
              viewport={{ once: false }}
               className="tc-right">
                <Image src="/Images/aboutus-new-render.png" alt="right-render" className="w-full"
                    width={567}
                    height={539}
                />
              </motion.div >
            </div>
          </div>
      </div>
    );
}
