"use client";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "./ThemeProvider"; // ✅ import your dark theme context
import FacebookIcon from "@/app/Icons/FacebookIcon";
import InstagramIcon from "@/app/Icons/InstagramIcon";
import TelegramIcon from "@/app/Icons/TelegramIcon";
import TwitterIcon from "@/app/Icons/TwitterIcon";
import LinkedInIcon from "@/app/Icons/LinkedInIcon";
import SideArrowIcon from "@/app/Icons/SideArrowIcon";
import PhoneIcon from "@/app/Icons/PhoneIcon";
import EmailIcon from "@/app/Icons/EmailIcon";
import MapIcon from "@/app/Icons/MapIcon";

const socialLinks = [
  { id: 1, name: "LinkedIn", icon: <LinkedInIcon />, path: "https://www.linkedin.com/company/redsapphire-software" },
  { id: 2, name: "Facebook", icon: <FacebookIcon />, path: "https://facebook.com" },
  { id: 3, name: "Twitter", icon: <TwitterIcon />, path: "https://twitter.com" },
  { id: 4, name: "Telegram", icon: <TelegramIcon />, path: "https://telegram.org" },
  { id: 5, name: "Instagram", icon: <InstagramIcon />, path: "https://www.instagram.com/redsapphireofficial" },
];

const quickLinks = [
  { id: 1, name: "Home", path: "/" },
  { id: 2, name: "About Us", path: "/about" },
  { id: 3, name: "Career", path: "/career" },
  { id: 4, name: "Blogs", path: "/blogs" },
  { id: 5, name: "Contact Us", path: "/contact" },
];

export default function FooterSection() {
  const { theme } = useTheme(); // ✅ access current theme

  return (
    <div className={`footer ${theme === "dark" ? "bg-[#151515] text-white" : "bg-white text-black"}`}>
      <div className="container mx-auto px-4 py-6 lg:py-8">
        <div className="grid grid-cols-1 text-sm">
          <div className="ftr-grd-box grid grid-cols-1 md:[grid-template-columns:300px_1fr_1fr] lg:[grid-template-columns:280px_1fr_1fr_1fr_1fr] gap-6 md:gap-6 lg-gap-4">
            
            {/* Logo & Social Links */}
            <div className="widget ft-lft">
              <Image src="/Images/logo-rs-mn.svg" alt="Logo" width={264} height={106} className="object-contain w-auto max-w-full h-auto logo-main" />
              <p className="mt-1"><strong>Redsapphire Software Private Limited</strong></p>
              <p className="text-xs"><strong>CIN</strong> - U47413UP2022PTC21589</p>
              <div className="flex items-center gap-4 mt-5 text-custom-red">
                {socialLinks.map((social) => (
                  <Link key={social.id} href={social.path} target="_blank" rel="noopener noreferrer">
                    {social.icon}
                  </Link>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="widget qc-lnks">
              <h3 className="font-semibold mb-2 inline-block relative">
                Quick Links
                <span className="absolute bottom-0 left-0 w-1/2 border-b-2 border-custom-red"></span>
              </h3>
              <ul className="mt-1 space-y-1 mx-auto">
                {quickLinks.map((link) => (
                  <li key={link.id} className="flex items-center gap-1">
                    <SideArrowIcon />
                    <Link href={link.path} className="hover:text-custom-red transition">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Business Enquiry */}
            <div className="widget bsns-enq">
              <h3 className="font-semibold mb-2 inline-block relative">
                Business Enquiry
                <span className="absolute bottom-0 left-0 w-1/2 border-b-2 border-custom-red"></span>
              </h3>
              <div className="mt-1 flex items-start gap-1 qlinks">
                <PhoneIcon />
                <Link href="tel:+918218545834" className="hover:text-custom-red transition">
                  +91-8218545834
                </Link>
              </div>
              <div className="mt-1 flex items-start gap-1 qlinks">
                <EmailIcon />
                <Link href="mailto:info@redsapphire.in" className="hover:text-custom-red transition">
                  info@redsapphire.in
                </Link>
              </div>
            </div>

            {/* Location */}
            <div className="widget lctn">
              <h3 className="font-semibold mb-2 inline-block relative">
                Our Location
                <span className="absolute bottom-0 left-0 w-1/2 border-b-2 border-custom-red"></span>
              </h3>
              <div className="mt-1 flex items-start gap-1 qlinks">
                <MapIcon />
                <span>Shamli, Uttar Pradesh 251305, India</span>
              </div>
            </div>

            {/* Job Seeker */}
            <div className="widget jb-skr">
              <h3 className="font-semibold mb-2 inline-block relative">
                Job Seeker
                <span className="absolute bottom-0 left-0 w-1/2 border-b-2 border-custom-red"></span>
              </h3>
              <div className="mt-1 flex items-start gap-1 qlinks">
                <PhoneIcon />
                <Link href="tel:+918218545834" className="hover:text-custom-red transition">
                  +91-8218545834
                </Link>
              </div>
              <div className="mt-1 flex items-start gap-1 qlinks">
                <EmailIcon />
                <Link href="mailto:info@redsapphire.in" className="hover:text-custom-red transition">
                  info@redsapphire.in
                </Link>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Links for privacy & terms */}
      <div className={`text-center text-base  mt-4 space-x-4 px-2 ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>
        <Link href="/privacy-notice" className="hover:text-custom-red transition hover:underline">Privacy Notice</Link>
        <span>|</span>
        <Link href="/terms" className="hover:text-custom-red transition hover:underline">Terms of Service</Link>
      </div> 

      {/* Copyright */}
      <div className={`cr-sec mt-4 border-t py-3 text-center text-xs ${theme === "dark" ? "text-gray-300 border-gray-700" : "text-gray-700 border-gray-300"}`}>
        © Copyright 2024 <span className="text-custom-red text-md">Red Sapphire Software Industry Pvt. Ltd.</span> All Rights Reserved
      </div>
    </div>
  );
}