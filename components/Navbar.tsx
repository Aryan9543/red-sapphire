"use client";
  import { Menu, X } from "lucide-react";
  import Image from "next/image";
  import { useEffect, useRef, useState } from "react";
  import Link from "next/link";
  import { usePathname } from "next/navigation";
  import ToggleBtn from "@/components/ToggleBtn";
  import { useTheme } from "@/components/ThemeProvider";
  import { motion } from "framer-motion";

  export default function Navbar() {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [isProductDropdownOpen, setProductDropdownOpen] = useState(false);
    const [isServicesDropdownOpen, setServicesDropdownOpen] = useState(false);
    const pathname = usePathname();
    const { theme } = useTheme();
    const productDropdownRef = useRef(null);
    const servicesDropdownRef = useRef(null);

    const toggleMobileMenu = () => {
      setMobileMenuOpen((prevState) => !prevState);
    };

    // Scroll Effect
    useEffect(() => {
      const handleScroll = () => {
        setScrolled(window.scrollY > 50);
      };
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close dropdowns on outside click
    useEffect(() => {
      function handleClickOutside(event: MouseEvent) {
        if (
          productDropdownRef.current &&
          !(productDropdownRef.current as HTMLElement).contains(event.target as Node)
        ) {
          setProductDropdownOpen(false);
        }
        if (
          servicesDropdownRef.current &&
          !(servicesDropdownRef.current as HTMLElement).contains(event.target as Node)
        ) {
          setServicesDropdownOpen(false);
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const menuItems = [
      { label: "Home", path: "/" },
      { label: "About Us", path: "/about" },
      { label: "Careers", path: "/career" },
      { label: "Contact", path: "/contact" },
      { label: "Products", path: "/products" },
      { label: "Services", path: "/services" },
    ];

    return (
          <motion.div
            initial={{ opacity: 0, y: -60, x: 0 }}
            whileInView={{ opacity: 1, y: 0, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeIn" }}
            viewport={{ once: false }}
        className={`header-outer fixed top-0 left-0 w-full z-[1000] transition-all duration-300 ease-in-out ${
          scrolled
            ? theme === "dark"
              ? "backdrop-blur-lg bg-[#000]/60 shadow-lg border-b border-red-700"
              : "backdrop-blur-lg bg-white/30 shadow-lg border-b border-[#890000]"
            : theme === "dark"
            ? "bg-[#000] border-b border-red-700"
            : "bg-white border-b border-[#890000]"
        }`}
      >
        <div className="inner-container">
          <header className="py-[10px]">
            <div className="container mx-auto flex items-center justify-between px-4 relative">
              {/* Logo */}
              <div>
                <Link href="/">
                  <Image
                    src={"/Images/logo-rs-mn.svg"}
                    alt="Logo"
                    width={300}
                    height={106}
                    priority
                    className="object-contain w-auto max-w-full h-auto logo-main"
                  />
                </Link>
              </div>

              {/* Mobile Menu Button */}
              <div className="relative mt-btn">
                <button
                  className={`w-11 h-11 rounded-[9.2px] flex justify-center items-center shadow-[13.27px_9.29px_26.54px_0px_#00000014]
                    ${theme === "dark" ? "wht-btn" : "blk-btn"}`}
                  onClick={toggleMobileMenu}
                >
                  {isMobileMenuOpen ? <X /> : <Menu />}
                </button>
              </div>

              {/* Navigation Menu - Desktop */}
              <nav className="hidden md:block">
                <ul className="flex space-x-8">
                  {menuItems.map((item) => {
                    if (item.label === "Products") {
                      return (
                        <li key={item.label} ref={productDropdownRef} className="relative group list-none">
                          <div
                            className="flex items-center cursor-pointer"
                            onClick={() => setProductDropdownOpen((prev) => !prev)}
                          >
                            <p
                              className={`link-text font-regular text-lg ${
                                pathname === item.path
                                  ? theme === "dark"
                                    ? "text-red-500 underline underline-offset-8"
                                    : "text-custom-red underline rounded-full underline-offset-8"
                                  : theme === "dark"
                                  ? "text-gray-100 hover:text-red-400 hover:underline underline-offset-8"
                                  : "text-[#171717] hover:text-custom-red hover:underline underline-offset-8"
                              }`}
                            >
                              {item.label}
                            </p>
                            <svg
                              className={`mt-1 ml-1 transition-transform duration-200 ease-in-out group-hover:stroke-[#f87171] ${
                                isProductDropdownOpen ? "rotate-180" : ""
                              }`}
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke={theme === "dark" ? "#fff" : "#000"}
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <polyline points="6 9 12 15 18 9" />
                            </svg>
                          </div>

                          {/* Products Dropdown - Desktop */}
                          {isProductDropdownOpen && (
                            <div
                              className={`prdctd-drop ddmnu-outr absolute w-full top-full mt-2 shadow-lg rounded-md min-w-[200px] z-50 border rounded-[20px] overflow-hidden
                                ${theme === "dark" ? "bg-[#1F1F1F] border-[#d1d1d1]" : "bg-white border-[#980606]"}`}
                            >
                              <div className="ddmnu-inner-box flex w-full justify-between">
                                <div className="ddmnu-inner-box-left relative">
                                  <Image 
                                    src="/Images/prdcts-left-render.svg" 
                                    alt="services-bg" 
                                    priority
                                    className="w-auto h-auto rs-left-render" 
                                    width={300}
                                    height={200}
                                  />
                                </div>
                                <div className="ddmnu-inner-box-right">
                                  <Image src="/Images/herocardbg.png" alt="rs-logo" priority className="w-auto h-auto rs-bg-ddmnu" 
                                    width={32}
                                    height={20}
                                  />
                                  <label className="ddmnu-hdng text-center text-md text-white font-regular bg-[#980606] block px-2 py-2">
                                    Explore our suite of innovative solutions designed to empower your business.
                                  </label>
                                  <div className="ddmnu-inner-links">
                                                                  <Link href="/products/veritas"
                                                                    className={`ddmu-link cursor-pointer border 
                                                                      ${theme === "dark" ? "border-[#111111] bg-black" : "border-grey-300 bg-white"}`}
                                                                      >
                                                                    <Image
                                                                      src="/Images/veritas-logo.svg"
                                                                      width={32}
                                                                      height={20}
                                                                      alt="veritas-logo"
                                                                      priority
                                                                      className="w-auto h-auto logo-prdct"
                                                                    />
                                                                    <Image
                                                                      src="/Images/veritas-logo-prd-wht.svg"
                                                                      width={32}
                                                                      height={20}
                                                                      alt="veritas-logo"
                                                                      priority
                                                                      className="w-auto h-auto logo-prdct-wht"
                                                                    />
                                                                    <p
                                                                    className={`text-end text-sm mt-1 font-semibold no-underline
                                                                      ${theme === "dark" ? "text-white" : "text-black"}`}
                                                                      >
                                                                    The Future of<br/>University Management
                                                                    </p>
                                                                  </Link>
                                                                  <Link href="/products/tracknexus"
                                                                    className={`ddmu-link cursor-pointer border 
                                                                      ${theme === "dark" ? "border-[#111111] bg-black" : "border-grey-300 bg-white"}`}
                                                                      >
                                                                  <Image
                                                                      src="/Images/tracknexus-logo.svg"
                                                                      width={32}
                                                                      height={20}
                                                                      alt="tracknexus-logo"
                                                                      priority
                                                                      className="w-auto h-auto logo-prdct"
                                                                    />
                                                                    <Image
                                                                      src="/Images/tarcknexus-logo-prd-wht.svg"
                                                                      width={32}
                                                                      height={20}
                                                                      alt="tracknexus-logo"
                                                                      priority
                                                                      className="w-auto h-auto logo-prdct-wht"
                                                                    />
                                                                  <p
                                                                    className={`text-end text-sm mt-1 font-semibold
                                                                      ${theme === "dark" ? "text-white" : "text-black"}`}
                                                                      >
                                                                    Security Meets<br/>Simplicity
                                                                    </p>
                                                                  </Link>
                                                                  <Link href="/products/orbit"
                                                                    className={`ddmu-link cursor-pointer border 
                                                                      ${theme === "dark" ? "border-[#111111] bg-black" : "border-grey-300 bg-white"}`}
                                                                      >
                                                                  <Image
                                                                      src="/Images/orbit-logo.svg"
                                                                      width={32}
                                                                      height={20}
                                                                      alt="orbit-logo"
                                                                      priority
                                                                      className="w-auto h-auto logo-prdct"
                                                                    />
                                                                    <Image
                                                                      src="/Images/orbit-logo-prd-wht.svg"
                                                                      width={32}
                                                                      height={20}
                                                                      alt="orbit-logo"
                                                                      priority
                                                                      className="w-auto h-auto logo-prdct-wht"
                                                                    />
                                                                  <p
                                                                    className={`text-end text-sm mt-1 font-semibold
                                                                      ${theme === "dark" ? "text-white" : "text-black"}`}
                                                                      >
                                                                      Your World,<br/>Connected.
                                                                    </p>
                                                                  </Link>
                                                                  <Link href="/products/orbitconnect"
                                                                    className={`ddmu-link cursor-pointer border 
                                                                      ${theme === "dark" ? "border-[#111111] bg-black" : "border-grey-300 bg-white"}`}
                                                                      >
                                                                  <Image
                                                                      src="/Images/orbitconnect-logo.svg"
                                                                      width={32}
                                                                      height={20}
                                                                      alt="orbitconnect-logo"
                                                                      priority
                                                                      className="w-auto h-auto logo-prdct"
                                                                    />
                                                                    <Image
                                                                      src="/Images/orbitconnect-logo-prd-wht.svg"
                                                                      width={32}
                                                                      height={20}
                                                                      alt="orbitconnect-logo"
                                                                      priority
                                                                      className="w-auto h-auto logo-prdct-wht"
                                                                    />
                                                                    <p
                                                                    className={`text-end text-sm mt-1 font-semibold
                                                                      ${theme === "dark" ? "text-white" : "text-black"}`}
                                                                      >
                                                                    Rules That Work.<br/>Revenue That Grows
                                                                    </p>
                                                                  </Link>
                                                                  <Link href="/products/rulesync"
                                                                    className={`ddmu-link cursor-pointer border 
                                                                      ${theme === "dark" ? "border-[#111111] bg-black" : "border-grey-300 bg-white"}`}
                                                                      >
                                                                  <Image
                                                                      src="/Images/rulesync-logo.svg"
                                                                      width={32}
                                                                      height={20}
                                                                      alt="rulesync-logo"
                                                                      priority
                                                                      className="w-auto h-auto logo-prdct"
                                                                    />
                                                                    <Image
                                                                      src="/Images/rulesync-logo-prd-wht.svg"
                                                                      width={32}
                                                                      height={20}
                                                                      alt="rulesync-logo"
                                                                      priority
                                                                      className="w-auto h-auto logo-prdct-wht"
                                                                    />
                                                                    <p
                                                                    className={`text-end text-sm mt-1 font-semibold
                                                                      ${theme === "dark" ? "text-white" : "text-black"}`}
                                                                      >
                                                                    Seamless Integration,<br/>Infinite Possibilities
                                                                    </p>
                                                                  </Link>
                                                                  <Link href="/products/elevate"
                                                                    className={`ddmu-link cursor-pointer border 
                                                                      ${theme === "dark" ? "border-[#111111] bg-black" : "border-grey-300 bg-white"}`}
                                                                      >
                                                                  <Image
                                                                      src="/Images/elevate-logo-prd.svg"
                                                                      width={32}
                                                                      height={20}
                                                                      alt="elevate-logo"
                                                                      priority
                                                                      className="w-auto h-auto logo-prdct"
                                                                    />
                                                                    <Image
                                                                      src="/Images/elevate-logo-prd-wht.svg"
                                                                      width={32}
                                                                      height={20}
                                                                      alt="elevate-logo"
                                                                      priority
                                                                      className="w-auto h-auto logo-prdct-wht"
                                                                    />
                                                                    <p
                                                                    className={`text-end text-sm mt-1 font-semibold
                                                                      ${theme === "dark" ? "text-white" : "text-black"}`}
                                                                      >
                                                                        Unlock Revenue with<br/>Tailored Travel Solutions
                                                                    </p>
                                                                  </Link>
                                                                </div>
                                </div>
                              </div>
                            </div>
                          )}
                        </li>
                      );
                    }

                    if (item.label === "Services") {
                      return (
                        <li key={item.label} ref={servicesDropdownRef} className="relative group list-none">
                          <div
                            className="flex items-center cursor-pointer"
                            onClick={() => setServicesDropdownOpen((prev) => !prev)}
                          >
                            <p
                              className={`link-text font-regular text-lg ${
                                pathname === item.path
                                  ? theme === "dark"
                                    ? "text-#fff underline underline-offset-8"
                                    : ":hover-text-custom-red underline rounded-full underline-offset-8"
                                  : theme === "dark"
                                  ? "text-gray-100 hover:text-red-400 hover:underline underline-offset-8"
                                  : ":hover-text-[#171717] hover:text-custom-red hover:underline underline-offset-8"
                              }`}
                            >
                              {item.label}
                            </p>
                            <svg
                              className={`mt-1 ml-1 transition-transform duration-200 ease-in-out group-hover:stroke-[#f87171] ${
                                isServicesDropdownOpen ? "rotate-180" : ""
                              }`}
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke={theme === "dark" ? "#fff" : "#000"}
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <polyline points="6 9 12 15 18 9" />
                            </svg>
                          </div>

                          {/* Services Dropdown - Desktop */}
                          {isServicesDropdownOpen && (
                            <div
                              className={`ddmnu-outr srvc-ddmnu-outr absolute w-full top-full mt-2 shadow-lg rounded-md min-w-[200px] z-50 border rounded-[20px] overflow-hidden
                                ${theme === "dark" ? "bg-[#1F1F1F] border-[#d1d1d1]" : "bg-white border-[#980606]"}`}
                            >
                              <div className="ddmnu-inner-box flex w-full justify-between">
                                <div className="ddmnu-inner-box-left relative">
                                  <Image 
                                    src="/Images/service-dropdown-left-img-girl.svg" 
                                    alt="services-bg" 
                                    priority
                                    className="w-auto h-auto rs-left-render boy-ren" 
                                    width={300}
                                    height={200}
                                  />
                                  <Image 
                                    src="/Images/service-dropdown-left-img.svg" 
                                    alt="services-bg" 
                                    priority
                                    className="w-auto h-auto rs-left-render girl-ren" 
                                    width={300}
                                    height={200}
                                  />
                                </div>
                                <div className="ddmnu-inner-box-right">
                                  <Image 
                                    src="/Images/herocardbg.png" 
                                    alt="services-bg" 
                                    priority
                                    className="w-auto h-auto rs-bg-ddmnu" 
                                    width={32}
                                    height={20}
                                  />
                                  <label className="ddmnu-hdng text-end text-md text-white font-regular bg-[#980606] block px-3 py-2">
                                    Our comprehensive services to boost your business
                                  </label>
                                  <div className="ddmnu-inner-links">
                                    <Link href="/services/technology"
                                      className={`tech-link ddmu-link cursor-pointer border
                                        ${theme === "dark" ? "border-[#111111] bg-black" : "border-grey-300 bg-white"}`}
                                    >
                                      <p className={`text-start text-sm mt-1 font-semibold ${theme === "dark" ? "text-white" : "text-black"}`}>
                                        Technology
                                      </p>
                                    </Link>
                                    <Link href="/services/reporting-and-analytics"
                                      className={`reanl-link ddmu-link cursor-pointer border
                                        ${theme === "dark" ? "border-[#111111] bg-black" : "border-grey-300 bg-white"}`}
                                    >
                                      <p className={`text-start text-sm mt-1 font-semibold ${theme === "dark" ? "text-white" : "text-black"}`}>
                                        Reporting & Analytics
                                      </p>
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          )}
                        </li>
                      );
                    }

                    return (
                      <li key={item.label} className="list-none">
                        <Link href={item.path} passHref className="hover:no-underline">
                          <p
                            className={`link-text font-regular text-lg cursor-pointer ${
                              pathname === item.path
                                ? theme === "dark"
                                  ? "text-red-500 underline underline-offset-8"
                                  : "text-custom-red underline rounded-full underline-offset-8"
                                : theme === "dark"
                                ? "text-gray-100 hover:text-red-400 hover:underline underline-offset-8"
                                : "text-[#171717] hover:text-custom-red hover:underline underline-offset-8"
                            }`}
                          >
                            {item.label}
                          </p>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </nav>

              {/* Toggle Theme Button */}
              <div className="tgl-fix">
                <ToggleBtn />
              </div>
            </div>

            {/* Mobile Menu */}
            <nav
              className={`mobile-menu ${
                isMobileMenuOpen ? "block" : "hidden"
              } md:hidden ${
                theme === "dark"
                  ? "bg-[#1a1a1a]"
                  : "bg-gradient-to-r from-[#870303] to-[#5A0303]"
              } border-t border-gray-200 transition-height duration-300 ease-in-out mt-4 w-[250px] max-w-[250px] rounded-[9.2px] absolute right-[36px] z-[999] mb-mnu`}
            >
              <ul className="p-6">
                {menuItems.map((item, index, arr) => {
                  if (item.label === "Products") {
                    return (
                      <li key={item.label} className="mb-6 list-none relative">
                        <div
                          onClick={() => setProductDropdownOpen((prev) => !prev)}
                          className="font-semibold text-base cursor-pointer flex justify-center items-center mbl-mnu-link"
                        >
                          <span className={`${theme === "dark" ? "text-white" : "text-[#fff]"}`}>
                            {item.label}
                          </span>
                          <svg
                            className={`ml-2 transition-transform duration-300 ${isProductDropdownOpen ? "rotate-180" : ""}`}
                            width="32"
                            height="32"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#fff"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <polyline points="6 9 12 15 18 9" />
                          </svg>
                        </div>

                        {/* Products Dropdown - Mobile */}
                        {isProductDropdownOpen && (
                            <div className="ddmnu-inner-links">
                            <Link href="/products/product1"
                              className={`ddmu-link cursor-pointer border 
                                ${theme === "dark" ? "border-[#111111] bg-black" : "border-grey-300 bg-white"}`}
                                >
                              <Image
                                src="/Images/veritas-logo.svg"
                                width={32}
                                height={20}
                                alt="veritas-logo"
                                priority
                                className="w-auto h-auto logo-prdct"
                              />
                              <Image
                                src="/Images/veritas-logo-prd-wht.svg"
                                width={32}
                                height={20}
                                alt="veritas-logo"
                                priority
                                className="w-auto h-auto logo-prdct-wht"
                              />
                              <p
                              className={`text-end text-sm mt-1 font-semibold no-underline
                                ${theme === "dark" ? "text-white" : "text-black"}`}
                                >
                              The Future of<br/>University Management
                              </p>
                            </Link>
                            <Link href="/products/product2"
                              className={`ddmu-link cursor-pointer border 
                                ${theme === "dark" ? "border-[#111111] bg-black" : "border-grey-300 bg-white"}`}
                                >
                            <Image
                                src="/Images/tracknexus-logo.svg"
                                width={32}
                                height={20}
                                alt="tracknexus-logo"
                                priority
                                className="w-auto h-auto logo-prdct"
                              />
                              <Image
                                src="/Images/tarcknexus-logo-prd-wht.svg"
                                width={32}
                                height={20}
                                alt="tracknexus-logo"
                                priority
                                className="w-auto h-auto logo-prdct-wht"
                              />
                            <p
                              className={`text-end text-sm mt-1 font-semibold
                                ${theme === "dark" ? "text-white" : "text-black"}`}
                                >
                              Security Meets<br/>Simplicity
                              </p>
                            </Link>
                            <Link href="/products/orbit"
                              className={`ddmu-link cursor-pointer border 
                                ${theme === "dark" ? "border-[#111111] bg-black" : "border-grey-300 bg-white"}`}
                                >
                              <Image
                                  src="/Images/orbit-logo.svg"
                                  width={32}
                                  height={20}
                                  alt="orbit-logo"
                                  priority
                                  className="w-auto h-auto logo-prdct"
                                />
                              <Image
                                src="/Images/orbit-logo-prd-wht.svg"
                                width={32}
                                height={20}
                                alt="orbit-logo"
                                priority
                                className="w-auto h-auto logo-prdct-wht"
                              />
                              <p
                                className={`text-end text-sm mt-1 font-semibold
                                  ${theme === "dark" ? "text-white" : "text-black"}`}
                                  >
                                  Your World,<br/>Connected.
                                </p>
                            </Link>
                            <Link href="/products/as"
                              className={`ddmu-link cursor-pointer border 
                                ${theme === "dark" ? "border-[#111111] bg-black" : "border-grey-300 bg-white"}`}
                                >
                            <Image
                                src="/Images/orbitconnect-logo.svg"
                                width={32}
                                height={20}
                                alt="orbitconnect-logo"
                                priority
                                className="w-auto h-auto logo-prdct"
                              />
                              <Image
                                src="/Images/orbitconnect-logo-prd-wht.svg"
                                width={32}
                                height={20}
                                alt="orbitconnect-logo"
                                priority
                                className="w-auto h-auto logo-prdct-wht"
                              />
                              <p
                              className={`text-end text-sm mt-1 font-semibold
                                ${theme === "dark" ? "text-white" : "text-black"}`}
                                >
                              Rules That Work.<br/>Revenue That Grows
                              </p>
                            </Link>
                            <Link href="/products/product3"
                              className={`ddmu-link cursor-pointer border 
                                ${theme === "dark" ? "border-[#111111] bg-black" : "border-grey-300 bg-white"}`}
                                >
                            <Image
                                src="/Images/rulesync-logo.svg"
                                width={32}
                                height={20}
                                alt="rulesync-logo"
                                priority
                                className="w-auto h-auto logo-prdct"
                              />
                              <Image
                                src="/Images/rulesync-logo-prd-wht.svg"
                                width={32}
                                height={20}
                                alt="rulesync-logo"
                                priority
                                className="w-auto h-auto logo-prdct-wht"
                              />
                              <p
                              className={`text-end text-sm mt-1 font-semibold
                                ${theme === "dark" ? "text-white" : "text-black"}`}
                                >
                              Seamless Integration,<br/>Infinite Possibilities
                              </p>
                            </Link>
                            <Link href="/products/product3"
                              className={`ddmu-link cursor-pointer border 
                                ${theme === "dark" ? "border-[#111111] bg-black" : "border-grey-300 bg-white"}`}
                                >
                            <Image
                                src="/Images/elevate-logo-prd.svg"
                                width={32}
                                height={20}
                                alt="elevate-logo"
                                priority
                                className="w-auto h-auto logo-prdct"
                              />
                              <Image
                                src="/Images/elevate-logo-prd-wht.svg"
                                width={32}
                                height={20}
                                alt="elevate-logo"
                                priority
                                className="w-auto h-auto logo-prdct-wht"
                              />
                              <p
                              className={`text-end text-sm mt-1 font-semibold
                                ${theme === "dark" ? "text-white" : "text-black"}`}
                                >
                                  Unlock Revenue with<br/>Tailored Travel Solutions
                              </p>
                            </Link>
                          </div>
                        )}
                      </li>
                    );
                  }

                  if (item.label === "Services") {
                    return (
                      <li key={item.label} className="mb-6 list-none relative">
                        <div
                          onClick={() => setServicesDropdownOpen((prev) => !prev)}
                          className="font-semibold text-base cursor-pointer flex justify-center items-center mbl-mnu-link"
                        >
                          <span className={`${theme === "dark" ? "text-white" : "text-[#fff]"}`}>
                            {item.label}
                          </span>
                          <svg
                            className={`ml-2 transition-transform duration-300 ${isServicesDropdownOpen ? "rotate-180" : ""}`}
                            width="32"
                            height="32"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#fff"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <polyline points="6 9 12 15 18 9" />
                          </svg>
                        </div>

                        {/* Services Dropdown - Mobile */}
                        {isServicesDropdownOpen && (
                          <div className="ddmnu-inner-links mt-2">
                            <Link href="/services/technology"
                              className={`tech-link ddmu-link cursor-pointer border mb-2
                                ${theme === "dark" ? "border-[#111111] bg-black" : "border-grey-300 bg-white"}`}
                            >
                              <p className={`text-end text-sm mt-1 font-semibold ${theme === "dark" ? "text-white" : "text-black"}`}>
                                Technology
                              </p>
                            </Link>
                            <Link href="/services/reporting-and-analytics"
                              className={`reanl-link ddmu-link cursor-pointer border mb-2
                                ${theme === "dark" ? "border-[#111111] bg-black" : "border-grey-300 bg-white"}`}
                            >
                              <p className={`text-end text-sm mt-1 font-semibold ${theme === "dark" ? "text-white" : "text-black"}`}>
                                Reporting & Analytics
                              </p>
                            </Link>
                          </div>
                        )}
                      </li>
                    );
                  }

                  return (
                    <li
                      key={item.label}
                      className={`list-none ${index === arr.length - 1 ? "mb-0" : "mb-6"}`}
                    >
                      <Link href={item.path} passHref className="hover:no-underline">
                        <p
                          className={`font-semibold text-base cursor-pointer ${
                            pathname === item.path ? "underline" : ""
                          } ${theme === "dark" ? "text-white" : "text-[#fff]"}`}
                        >
                          {item.label}
                        </p>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </header>
        </div>
        </motion.div>
    );
  }