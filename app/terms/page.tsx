"use client";
import React from 'react';
import FooterSection from '@/components/Footer';
import Navbar from '@/components/Navbar';
import ScrollToTopButton from "@/components/ScrollToTopButton";
import TrustedPartners from "@/components/TrustedPartners";
import { ThemeProvider, useTheme } from "@/components/ThemeProvider";

const TermsAndConditionsContent = () => {
  const { theme } = useTheme();
  console.log("Theme:", theme); // Should log "dark" or "light"

  return (
    <div className={`${theme === "dark" ? "bg-[#111]" : "bg-[#fff]"} privacy-notice-pg`}>
      <Navbar />
      <section className="container mx-auto p-6 cont-sec">
      <h1 className={`text-3xl font-bold mb-6 ${theme === "dark" ? "text-[#fff]" : "text-[#000]"}`}>
         Terms & Conditions
      </h1>


        <p className={`text-md ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>
        Through these Terms of Use (&quot;Terms&quot;), a binding legal agreement is established between users (referred to as &quot;you&quot; or &quot;your&quot;) and Red Sapphire Company (also known as &quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). With this agreement, we govern how users can access and interact with our software, websites, applications, and related services (collectively, the “Services”).
        You agree to our terms by accessing or using our services through &quot;I Accept&quot; buttons and order form signatures. When you represent a business or legal organization, you confirm your authorization to accept these terms. Due to your lack of authority or any disagreement with these terms, please avoid our services.
        </p>

        <h2 className={`text-2xl font-semibold mt-6 ${theme === "dark" ? "text-[#fff]" : "text-[#000]"}`}>Scope of Services</h2>
        <p className={`text-md ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>
        Red Sapphire operates as an expert provider of technology-based solutions across multiple service areas. The company provides customized services that help universities, warehouses, travel agencies, and businesses execute their complex operations more efficiently.
        </p>
        
          <h3 className={`text-2xl font-semibold mt-6 ${theme === "dark" ? "text-[#fff]" : "text-[#000]"}`}>
            Our Suite of Tools
          </h3>
          <div className="pt-24 container mx-auto px-4 sm:px-6 lg:px-8">
          
          <ul className={`list-disc list-inside space-y-4 text-md pl-6 ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>
          <li>Sapphire Veritas: University Management Platform</li>
            <li>Sapphire Tracknexus: Inventory and Warehouse Management Platform</li>
            <li>Sapphire Orbit: Travel Management Platform</li>
            <li>Sapphire RuleSyncTool: Streamline Process for Travel Agency</li>
            <li>Sapphire OrbitConnectAPI: API Travel Solutions</li>
            <li>Sapphire ElevateX: Optimize Operations for Travel Agencies</li>
          </ul>
        </div>

        <h2 className={`text-2xl font-semibold mt-6 ${theme === "dark" ? "text-[#fff]" : "text-[#000]"}`}>License</h2>
        <p className={`text-md ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>
        Upon agreeing to these terms, we extend to you a limited, revocable, non-exclusive, non-transferable license to access and use our services strictly for internal business use or personal purposes. This license does not permit resale, redistribution, or replication of any portion of our software or platforms.
        </p>

        <h2 className={`text-2xl font-semibold mt-6 ${theme === "dark" ? "text-[#fff]" : "text-[#000]"}`}>Use of Services</h2>
        <p className={`text-md ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>
        You agree to use our services only for lawful and intended purposes. Certain features may require registration and account creation. In such cases, it is your duty to:
        </p>
        <div className="pt-24 container mx-auto px-4 sm:px-6 lg:px-8">
          <ul className={`list-disc list-inside space-y-4 text-md pl-6 ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>
          <li>Keep login credentials private</li>
            <li>Ensure the accuracy and currency of submitted information</li>
            <li>Prevent unauthorized use of your account</li>
          </ul>
        </div>
        <p className={`text-md ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>
        You are solely accountable for all activities carried out using your access credentials.
        </p>
        

        <h2 className={`text-2xl font-semibold mt-6 ${theme === "dark" ? "text-[#fff]" : "text-[#000]"}`}>Fees and Payment</h2>
        <p className={`text-md ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>
        Some features or service tiers may require payment. Where applicable:
        </p>
        <div className="pt-24 container mx-auto px-4 sm:px-6 lg:px-8">
          <ul className={`list-disc list-inside space-y-4 text-md pl-6 ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>
          <li>Keep login credentials private</li>
            <li>Your contractual agreement with our company contains all the fees and rate definitions.</li>
            <li>Payment to Red Sapphire needs to be made according to the established billing structure at the right time.</li>
            <li>We maintain the ability to change pricing terms at any time. Our website or email service will maintain notification of any price or policy adjustments.</li>
            <li>You must pay any taxes that pertain to your transactions with us.</li>
            <li>Our organization possesses full discretion to determine whether refunds will be provided.</li>
          </ul>
        </div>

        <h2 className={`text-2xl font-semibold mt-6 ${theme === "dark" ? "text-[#fff]" : "text-[#000]"}`}>Intellectual Property</h2>
        <p className={`text-md ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>
        All materials and components of the services, including but not limited to logos, user interfaces, designs, text, code, and media content, are either owned by Red Sapphire or licensed for our use. You may not copy, alter, or repurpose any part of our intellectual property without our explicit written permission.
        </p>

        <h2 className={`text-2xl font-semibold mt-6 ${theme === "dark" ? "text-[#fff]" : "text-[#000]"}`}>User Content</h2>
        <p className={`text-md ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>
        You may be allowed to upload, publish, or submit content (referred to as “User Content”) while using our services. When doing so, you grant Red Sapphire a perpetual, worldwide, royalty-free license to use and adapt that content as part of our operations. You warrant that you hold all necessary rights or permissions to grant us this license.
        </p>

        <h2 className={`text-2xl font-semibold mt-6 ${theme === "dark" ? "text-[#fff]" : "text-[#000]"}`}>Prohibited Conduct</h2>
        <p className={`text-md ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>
        You are strictly prohibited from:
        </p>
        <div className="pt-24 container mx-auto px-4 sm:px-6 lg:px-8">
          <ul className={`list-disc list-inside space-y-4 text-md pl-6 ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>
          <li>Keep login credentials private</li>
            <li>Interfering with the operation of our services.</li>
            <li>Using automated bots or scraping tools to access data.</li>
            <li>We maintain the ability to change pricing terms at any time. Our website or email service will maintain notification of any price or policy adjustments.</li>
            <li>Attempting to reverse-engineer or tamper with our software.</li>
            <li>Introducing malware or harmful scripts.</li>
            <li>Bypassing access controls or breaching system security.</li>
            <li>Any such activity may lead to termination of your access and potential legal action.</li>
          </ul>
        </div>

        <h2 className={`text-2xl font-semibold mt-6 ${theme === "dark" ? "text-[#fff]" : "text-[#000]"}`}>Data Privacy</h2>
        <p className={`text-md ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>
        The usage of users&apos; personal data follows the guidelines set by our Privacy Policy. When using our services, you agree to the specified terms in the policy for how personal data is gathered and stored for its usage purposes.
        </p>

        <h2 className={`text-2xl font-semibold mt-6 ${theme === "dark" ? "text-[#fff]" : "text-[#000]"}`}>Disclaimer of Warranties</h2>
        <p className={`text-md ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>
        The services operate under &quot; as is&quot; and &quot;as available &quot; standards. Our services come without any express or implied warranty of accuracy, completeness, or suitability for particular purposes, according to Red Sapphire&apos; s terms. The law permits our company to fully disclaim all forms of implied warranties, including those of merchantability and fitness.
        </p>

        <h2 className={`text-2xl font-semibold mt-6 ${theme === "dark" ? "text-[#fff]" : "text-[#000]"}`}>Limitation of Liability</h2>
        <p className={`text-md ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>
        Red Sapphire has no financial responsibility for any indirect, incidental, or consequential damages that result from your use or inability to utilize our services. Total liability, if any, is limited to the amount you paid (if any) for use of our services.
        </p>

        <h2 className={`text-2xl font-semibold mt-6 ${theme === "dark" ? "text-[#fff]" : "text-[#000]"}`}>Termination</h2>
        <p className={`text-md ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>
        We have the right to block your access to our services temporarily or permanently upon detecting misuse or term violations, or suspicious conduct. All remaining fees become due at once after service termination.       
        </p>

        <h2 className={`text-2xl font-semibold mt-6 ${theme === "dark" ? "text-[#fff]" : "text-[#000]"}`}>Governing Law</h2>
        <p className={`text-md ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>
        The site and these terms of use are governed by and construed by the laws of Uttar Pradesh, India, for agreements established for activities taking place exclusively within that state without regard to its conflict of law principles.
        </p>

        <h2 className={`text-2xl font-semibold mt-6 ${theme === "dark" ? "text-[#fff]" : "text-[#000]"}`}>Modifications </h2>
        <p className={`text-md ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>
        
        The terms of service for Red Sapphire are subject to periodic revisions without notice. Terms posted on our website will activate immediately for all users. Your continuous use of the services after modifications indicates your agreement to the new terms.
        </p>


        <h2 className={`text-2xl font-semibold mt-6 ${theme === "dark" ? "text-[#fff]" : "text-[#000]"}`}>Notification of Security Breach</h2>
        <p className={`text-md ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>
        We will appropriately notify you about any security breach affecting your data access, and details of the incident will be provided as promptly as possible.
        </p>

        <h2 className={`text-2xl font-semibold mt-6 ${theme === "dark" ? "text-[#fff]" : "text-[#000]"}`}>Support </h2>
        <p className={`text-md ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>
        The company provides support services to end-users and its partners. For assistance, please email :  {" "}
        <a href="https://redsapphire.in/contact"target="_blank"rel="noopener noreferrer"className="text-red-600 hover:underline contact-link">
          https://redsapphire.in/contact. 
        </a>
        {" "}Our team responds quickly to all requests through professional communications.
        </p>

        <h2 className={`text-2xl font-semibold mt-6 ${theme === "dark" ? "text-[#fff]" : "text-[#000]"}`}>Reporting Abuse </h2>
        <p className={`text-md ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>
        Immediately report all suspected abuse of our platform with suspicious contact from alleged Red Sapphire users by sending an email to the address provided,{" "}
        <strong className={`${theme === "dark" ? "text-red-500" : "text-red-600"} font-bold`}>
          info@redsapphire.in
        </strong>  
        </p>


        <h2 className={`text-2xl font-semibold mt-6 ${theme === "dark" ? "text-[#fff]" : "text-[#000]"}`}>Contact Us </h2>
        <p className={`text-md ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>
        For any questions or feedback regarding these terms, we invite you to reach out to our support team at  {" "}
        <a href="https://redsapphire.in/contact"target="_blank"rel="noopener noreferrer"className="text-red-600 hover:underline contact-link">
          https://redsapphire.in/contact. 
        </a>
        {" "}Our team responds quickly to all requests through professional communications.
        </p>



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

const terms = () => {
  return (
    <ThemeProvider>
      <TermsAndConditionsContent />
    </ThemeProvider>
  );
};

export default terms;
