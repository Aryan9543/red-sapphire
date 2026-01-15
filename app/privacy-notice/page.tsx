"use client";
import React from 'react';
import FooterSection from '@/components/Footer';
import Navbar from '@/components/Navbar';
import ScrollToTopButton from "@/components/ScrollToTopButton";
import TrustedPartners from "@/components/TrustedPartners";
import { ThemeProvider, useTheme } from "@/components/ThemeProvider";

const CareerContent = () => {
  const { theme } = useTheme();

  return (
    <div className={`${theme === "dark" ? "bg-[#111]" : "bg-[#fff]"} privacy-notice-pg`}>
      <Navbar />
      <section className="container mx-auto p-6 cont-sec">
        <h1 className={`text-3xl font-bold mb-6 ${theme === "dark" ? "text-[#fff]" : "text-[#000]"}`}>
          Red Sapphire Privacy Policy
        </h1>

        <h2 className={`text-2xl font-semibold mt-6 ${theme === "dark" ? "text-[#fff]" : "text-[#000]"}`}>Introduction</h2>
        <p className={`text-md ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>
          Red Sapphire has strong regulations about your privacy and trust. The privacy policy explains Red Sapphire &apos; s processes for obtaining and managing personal details and data. The collection of data and information takes place when you access redsapphire.in or utilize any of our products and services. It also describes the rights and options customers have access to regarding their information.
        </p>

        <p className={`text-md ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>
          This Privacy Policy explains which personal information we obtain from users who access our website and our Red Sapphire products, such as Sapphire Veritas, Sapphire Tracknexus, Sapphire Orbit, Sapphire RuleSyncTool, Sapphire OrbitConnectAPI, and Sapphire ElevateX. The privacy policy provides details about information use, identifies sharing entities, and establishes rights related to your data, with contact information for privacy-related inquiries.
        </p>

        <h2 className={`text-2xl font-semibold mt-6 ${theme === "dark" ? "text-[#fff]" : "text-[#000]"}`}>How We Collect Personal Information</h2>
        <p className={`text-md ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>
          Red Sapphire obtains your personal information from different sources to manage our website and products efficiently and to deliver our services. Our website, redsapphire.in, is publicly accessible for visitors who wish to discover the website, including product and service details. Our website visitors can reach out to us through multiple channels, which include requesting a demo, using the contact us option, and performing various other website activities.
        </p>

        <h2 className={`text-2xl font-semibold mt-6 ${theme === "dark" ? "text-[#fff]" : "text-[#000]"}`}>Website Visitors</h2>
        <p className={`text-md ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>
          You may be required to enter personal information through web forms when visiting our website. Information may also be collected from website users automatically through tracking technologies such as cookies.
        </p>

        <h2 className={`text-2xl font-semibold mt-6 ${theme === "dark" ? "text-[#fff]" : "text-[#000]"}`}>Personal Information</h2>
        <p className={`text-md ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>
          The definition of &quot; personal information &quot; includes all details that allow the specific identification of a particular person. With the help of website forms and third-party applications, we collect personal information that comprises names, email addresses, telephone numbers, social media profiles, and all types of contact details you enter into our systems.
        </p>

        <h2 className={`text-2xl font-semibold mt-6 ${theme === "dark" ? "text-[#fff]" : "text-[#000]"}`}>Methods of Collecting Information</h2>
        <p className={`text-md ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>
          Our company can obtain your personal information through web forms, market initiatives, social media engagement, business card exchanges at events, and when you take part in promotions. Your personal details, including credit card information, will be requested when you use Red Sapphire products designed for the travel industry or travel management companies (TMCs) and their equivalent entities.
        </p>

        <h2 className={`text-2xl font-semibold mt-6 ${theme === "dark" ? "text-[#fff]" : "text-[#000]"}`}>Information Automatically Collected</h2>
        <p className={`text-md ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>
          Our website tracks your interaction activities automatically. Your device &apos; s information includes browser details, IP addresses, and time zone with appropriate cookies, which the system gathers systematically. Through your site navigation, we gain information that includes visited web pages or products, your referral source web pages or search, and details about your interaction with the website. All information collected automatically falls under the label “Device Information.”
        </p>

        <h2 className={`text-2xl font-semibold mt-6 ${theme === "dark" ? "text-[#fff]" : "text-[#000]"}`}>Technologies Used for Collection</h2>
        <p className={`text-md ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>
        Cookies: These are data files located on your system through unique anonymous identifiers. Further information about cookies, with disability instructions, is available at <a href="http://www.allaboutcookies.org " target="_blank" rel="noopener noreferrer"> http://www.allaboutcookies.org.</a>
        
    
        <br></br>
        Log Files: Your website activities produce log files through automated records that store your IP addresses and browser types with Internet service provider data and referring/exit page timestamps.

        Web Beacons, Tags, and Pixels: These represent electronic files that monitor your internet session activities.
        ”
        </p>

        <h2 className={`text-2xl font-semibold mt-6 ${theme === "dark" ? "text-[#fff]" : "text-[#000]"}`}>How We Use Personal Information</h2>
        <p className={`text-md ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>
        The information we collect from third parties and you enables our website to operate for disclosed purposes at the time of personal information collection or through your consent
        </p>

        <h2 className={`text-2xl font-semibold mt-6 ${theme === "dark" ? "text-[#fff]" : "text-[#000]"}`}>Your Data Protection Rights</h2>
        <p className={`text-md ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>
        Depending on your jurisdiction, you could have rights about how we process your personal information. This includes:
        <br></br>
        1. Requesting confirmation on whether we are processing your information.
        <br></br>
        2. Obtaining access to your personal information or a copy thereof.
        <br></br>
        3. Receiving an electronic copy of your personal information for transfer to another company (the “right of data portability”).
        <br></br>
        4. Objecting to or restricting the uses of your personal information.
        <br></br>
        5. Requesting corrections to inaccurate, untrue, incomplete, or improperly processed information.
        <br></br>
        6. Withdrawing your previously granted consent.
        <br></br>
        7. Requesting deletion of your personal information, subject to applicable legal exceptions.
        <br></br>

        In case you need to exercise these rights, please contact us at redsapphire.in. 

        We will respond to your requests by applicable laws and as promptly as is reasonable.

        </p>

        <h2 className={`text-2xl font-semibold mt-6 ${theme === "dark" ? "text-[#fff]" : "text-[#000]"}`}>Interest-Based Advertising Practices</h2>
        <p className={`text-md ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>
        While you engage with our website, it might involve third-party advertising companies that collect information about your online activities. It will be used to provide advertising for customized products and services. 

      <br></br>
       You may find Red Sapphire advertisements on different websites based on your visit information. These advertising networks may use unique cookies or pixel tags to recognize you on your different devices. If you need to learn more about personalized advertising practices and opt-out methods, you must visit:
       <br></br>

       <a href="https://optout.aboutads.info/?c=2&lang=EN" target="_blank" rel="noopener noreferrer">
            http://optout.aboutads.info
        </a>
        <br />
        
        <a href="https://optout.networkadvertising.org/?c=1" target="_blank" rel="noopener noreferrer">
        http://optout.networkadvertising.org
        </a>
        </p>

        <h2 className={`text-2xl font-semibold mt-6 ${theme === "dark" ? "text-[#fff]" : "text-[#000]"}`}>Updates to This Privacy Policy</h2>
        <p className={`text-md ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>
        This Privacy Policy remains subject to updates by the company at any time to incorporate new services or data practices and comply with relevant laws. We will make legal notifications when we execute essential changes. Users can check the most recent update of this Privacy Policy through the timestamp displayed at the policy &apos; s beginning. Our website displays our updated policy immediately for effectiveness. 
        </p>

        <h2 className={`text-2xl font-semibold mt-6 ${theme === "dark" ? "text-[#fff]" : "text-[#000]"}`}>Contact Us</h2>
        <p className={`text-md ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>
        Red Sapphire maintains its headquarters in Shamli, Uttar Pradesh, 251305, India. This has the responsibility to gather and handle your personal information according to this Privacy Policy.

        For all inquiries regarding this Privacy Policy, contact us at https://redsapphire.in/contact or through our mailing address, info@redsapphire.in. Please do not submit sensitive information or credit card details in your emails because email security cannot be guaranteed. 

        </p>

        <h2 className={`text-2xl font-semibold mt-6 ${theme === "dark" ? "text-[#fff]" : "text-[#000]"}`}>Conclusion </h2>
        <p className={`text-md ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>
        
        Our organization prioritizes your privacy rights as we combine strict data protection with tailored service delivery. You can address privacy-related questions to our contact channels. We appreciate your decision to work with Red Sapphire as your preferred business partner. 

        </p>
        <br></br>
        <br></br>
        <div className={`${theme === "dark" ? "bg-[#111]" : "bg-[#fff]"}`}>
           <TrustedPartners />
                        
         </div>

      </section>

      {/* Footer */}
      <FooterSection />
      <ScrollToTopButton />
    </div>
  );
};

const Career = () => {
  return (
    <ThemeProvider>
      <CareerContent />
    </ThemeProvider>
  );
};

export default Career;
