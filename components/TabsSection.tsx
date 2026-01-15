"use client";
import { useState } from "react";
import { useTheme } from "@/components/ThemeProvider";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function TabsSection() {
  const { theme } = useTheme();
  const [activeTab, setActiveTab] = useState("travel-inventory");

  const tabs = [
    {
      id: "travel-inventory",
      label: "Travel Inventory Management",
      leftContent: (
        
        <div className="cont-box-clip">
            <p
                className={`mb-6 text-md font-regular ${
                theme === "dark" ? "text-white" : "text-white"
                }`}
            >
                <span className="font-bold block">Travel Inventory Management</span>
                Manage hotels, flights, vehicles, and activities in one place. Update and
                share across platforms easily. Perfect for agencies handling diverse suppliers.
                Keeps your travel business organized and efficient.
            </p>
          <Image
            src="/Images/orbit-logo-prd-wht.svg"
            alt="Overview image"
            width={250}
            height={150}
            className="rounded-lg w-full h-auto"
          />
          
          </div>
      ),
      rightContent: (
        <div className="lnk-box-clip">
          <Link
            href="/contact"
            className={`font-medium inline-block text-[12px] md:text-base text-[#A60505] px-[40px] py-[10px] hover:no-underline rounded-[8px] transition bg-[#fff] cursor-pointer ${
              theme === "dark" ? "border-[#fff]" : "border-[#fff]"
            }`}
          >
            Explore
          </Link>
        </div>
      ),
    },
    {
      id: "custom-booking",
      label: "Custom  Booking Portal",
      leftContent: (
        
        <div className="cont-box-clip">
            <p
                className={`mb-6 text-md font-regular ${
                theme === "dark" ? "text-white" : "text-white"
                }`}
            >
                <span className="font-bold block">Travel Inventory Management22</span>
                Manage hotels, flights, vehicles, and activities in one place. Update and
                share across platforms easily. Perfect for agencies handling diverse suppliers.
                Keeps your travel business organized and efficient.
            </p>
          <Image
            src="/Images/orbit-logo-prd-wht.svg"
            alt="Overview image"
            width={250}
            height={150}
            className="rounded-lg w-full h-auto"
          />
          </div>
      ),
      rightContent: (
        <div className="lnk-box-clip">
          <Link
            href="/contact"
            className={`font-medium inline-block text-[12px] md:text-base text-[#A60505] px-[40px] py-[10px] hover:no-underline rounded-[8px] transition bg-[#fff] cursor-pointer ${
              theme === "dark" ? "border-[#fff]" : "border-[#fff]"
            }`}
          >
            Explore
          </Link>
        </div>
      ),
    },
    {
      id: "glob-api",
      label: "Global API Integrations",
      leftContent: (
        
        <div className="cont-box-clip">
            <p
                className={`mb-6 text-md font-regular ${
                theme === "dark" ? "text-white" : "text-white"
                }`}
            >
                <span className="font-bold block">Travel Inventory Management</span>
                Manage hotels, flights, vehicles, and activities in one place. Update and
                share across platforms easily. Perfect for agencies handling diverse suppliers.
                Keeps your travel business organized and efficient.
            </p>
          <Image
            src="/Images/orbit-logo-prd-wht.svg"
            alt="Overview image"
            width={250}
            height={150}
            className="rounded-lg w-full h-auto"
          />
          </div>
      ),
      rightContent: (
        <div className="lnk-box-clip">
          <Link
            href="/contact"
            className={`font-medium inline-block text-[12px] md:text-base text-[#A60505] px-[40px] py-[10px] hover:no-underline rounded-[8px] transition bg-[#fff] cursor-pointer ${
              theme === "dark" ? "border-[#fff]" : "border-[#fff]"
            }`}
          >
            Explore
          </Link>
        </div>
      ),
    },
    {
      id: "academic-managment",
      label: "Academic Management Tools",
      leftContent: (
        
        <div className="cont-box-clip">
            <p
                className={`mb-6 text-md font-regular ${
                theme === "dark" ? "text-white" : "text-white"
                }`}
            >
                <span className="font-bold block">Travel Inventory Management33</span>
                Manage hotels, flights, vehicles, and activities in one place. Update and
                share across platforms easily. Perfect for agencies handling diverse suppliers.
                Keeps your travel business organized and efficient.
            </p>
          <Image
            src="/Images/orbit-logo-prd-wht.svg"
            alt="Overview image"
            width={250}
            height={150}
            className="rounded-lg w-full h-auto"
          />
          </div>
      ),
      rightContent: (
        <div className="lnk-box-clip">
          <Link
            href="/contact"
            className={`font-medium inline-block text-[12px] md:text-base text-[#A60505] px-[40px] py-[10px] hover:no-underline rounded-[8px] transition bg-[#fff] cursor-pointer ${
              theme === "dark" ? "border-[#fff]" : "border-[#fff]"
            }`}
          >
            Explore
          </Link>
        </div>
      ),
    },
    {
      id: "warehouse-inventory",
      label: "Warehouse Inventory Control",
      leftContent: (
        
        <div className="cont-box-clip">
            <p
                className={`mb-6 text-md font-regular ${
                theme === "dark" ? "text-white" : "text-white"
                }`}
            >
                <span className="font-bold block">Travel Inventory Management</span>
                Manage hotels, flights, vehicles, and activities in one place. Update and
                share across platforms easily. Perfect for agencies handling diverse suppliers.
                Keeps your travel business organized and efficient.
            </p>
          <Image
            src="/Images/orbit-logo-prd-wht.svg"
            alt="Overview image"
            width={250}
            height={150}
            className="rounded-lg w-full h-auto"
          />
          </div>
      ),
      rightContent: (
        <div className="lnk-box-clip">
          <Link
            href="/contact"
            className={`font-medium inline-block text-[12px] md:text-base text-[#A60505] px-[40px] py-[10px] hover:no-underline rounded-[8px] transition bg-[#fff] cursor-pointer ${
              theme === "dark" ? "border-[#fff]" : "border-[#fff]"
            }`}
          >
            Explore
          </Link>
        </div>
      ),
    },
    {
      id: "analytic-reporting",
      label: "Analytics & Reporting",
      leftContent: (
        
        <div className="cont-box-clip">
            <p
                className={`mb-6 text-md font-regular ${
                theme === "dark" ? "text-white" : "text-white"
                }`}
            >
                <span className="font-bold block">Travel Inventory Management</span>
                Manage hotels, flights, vehicles, and activities in one place. Update and
                share across platforms easily. Perfect for agencies handling diverse suppliers.
                Keeps your travel business organized and efficient.
            </p>
          <Image
            src="/Images/orbit-logo-prd-wht.svg"
            alt="Overview image"
            width={250}
            height={150}
            className="rounded-lg w-full h-auto"
          />
          </div>
      ),
      rightContent: (
        <div className="lnk-box-clip">
          <Link
            href="/contact"
            className={`font-medium inline-block text-[12px] md:text-base text-[#A60505] px-[40px] py-[10px] hover:no-underline rounded-[8px] transition bg-[#fff] cursor-pointer ${
              theme === "dark" ? "border-[#fff]" : "border-[#fff]"
            }`}
          >
            Explore
          </Link>
        </div>
      ),
    },
    {
      id: "commision-managment",
      label: "Commission Management",
      leftContent: (
        
        <div className="cont-box-clip">
            <p
                className={`mb-6 text-md font-regular ${
                theme === "dark" ? "text-white" : "text-white"
                }`}
            >
                <span className="font-bold block">Travel Inventory Management</span>
                Manage hotels, flights, vehicles, and activities in one place. Update and
                share across platforms easily. Perfect for agencies handling diverse suppliers.
                Keeps your travel business organized and efficient.
            </p>
          <Image
            src="/Images/orbit-logo-prd-wht.svg"
            alt="Overview image"
            width={250}
            height={150}
            className="rounded-lg w-full h-auto"
          />
          </div>
      ),
      rightContent: (
        <div className="lnk-box-clip">
          <Link
            href="/contact"
            className={`font-medium inline-block text-[12px] md:text-base text-[#A60505] px-[40px] py-[10px] hover:no-underline rounded-[8px] transition bg-[#fff] cursor-pointer ${
              theme === "dark" ? "border-[#fff]" : "border-[#fff]"
            }`}
          >
            Explore
          </Link>
        </div>
      ),
    },
    {
      id: "custom-development",
      label: "Custom Development",
      leftContent: (
        
        <div className="cont-box-clip">
            <p
                className={`mb-6 text-md font-regular ${
                theme === "dark" ? "text-white" : "text-white"
                }`}
            >
                <span className="font-bold block">Travel Inventory Management</span>
                Manage hotels, flights, vehicles, and activities in one place. Update and
                share across platforms easily. Perfect for agencies handling diverse suppliers.
                Keeps your travel business organized and efficient.
            </p>
          <Image
            src="/Images/orbit-logo-prd-wht.svg"
            alt="Overview image"
            width={250}
            height={150}
            className="rounded-lg w-full h-auto"
          />
          </div>
      ),
      rightContent: (
        <div className="lnk-box-clip">
          <Link
            href="/contact"
            className={`font-medium inline-block text-[12px] md:text-base text-[#A60505] px-[40px] py-[10px] hover:no-underline rounded-[8px] transition bg-[#fff] cursor-pointer ${
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
        <div className="text-center py-2">
          <h3
            className={`mb-[50px] section-title transition-transform duration-300 hover:scale-105 hover:text-[#C40C0C] font-semibold ds-bg ${
              theme === "dark" ? "text-[#C40C0C] dark-ds-bg" : ""
            }`}
          >
            Our Services
          </h3>
        </div>

        {/* Nav Pills */}
        <motion.div
            initial={{ opacity: 0, y: 40, x: 0 }}
            whileInView={{ opacity: 1, y: 0, x: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: false }}
              className="flex justify-start items-center space-x-4 mb-10 tabs buttons-outer px-4 pb-2">
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
