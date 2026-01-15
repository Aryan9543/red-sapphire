"use client";
import FooterSection from "@/components/Footer";
import Navbar from "@/components/Navbar";
import TrustedPartners from "@/components/TrustedPartners";
import { ThemeProvider, useTheme } from "@/components/ThemeProvider";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import React, { useState, FormEvent, useCallback } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { motion } from "framer-motion";

// Define TypeScript interface for form data
interface FormData {
  firstName: string;
  lastName: string;
  website: string;
  email: string;
  contactNumber: string;
  hearAboutUs: string;
  service: string;
  message: string;
}

const ContactPage: React.FC = () => {
  const { theme } = useTheme();
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    website: "",
    email: "",
    contactNumber: "",
    hearAboutUs: "",
    service: "",
    message: "",
  });
  const [status, setStatus] = useState<string>("");
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRecaptchaChange = useCallback((token: string | null) => {
    setRecaptchaToken(token);
  }, []);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!recaptchaToken) {
      setStatus("Please complete the reCAPTCHA");
      return;
    }

    setStatus("Sending...");

    try {
      const response = await fetch("http://localhost/redsapphire/mail.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...formData, recaptchaToken }),
      });

      const result = await response.json();
      if (response.ok) {
        setStatus("Email sent successfully!");
        setFormData({
          firstName: "",
          lastName: "",
          website: "",
          email: "",
          contactNumber: "",
          hearAboutUs: "",
          service: "",
          message: "",
        });
        setRecaptchaToken(null);
      } else {
        setStatus(`Error: ${result.error}`);
      }
    } catch (error) {
      setStatus(`Error: Failed to send email - ${(error as Error).message}`);
    }
  };

  return (
      <div className={`${theme === "dark" ? "bg-[#000]" : "bg-[#fff]"} contact-pg relative`}>
        <Navbar />
        <section className="flex items-center justify-center contact-pg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl contact-pg-inr relative z-[2]">
            
            {/* Left Side - Video */}
            <div className="w-full flex items-center justify-center vid-sec absolute z-[1] h-full">
            <div className="w-full overflow-hidden rounded-lg shadow-lg h-full">
              <video
                key={theme}
                className="w-full h-full object-cover"
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
          </div>
          <div className="container">
            {/* Right Side - Contact Form */}
            <div className="w-full contact-frm-sec relative z-[-1]">
              
                <motion.h2
                  initial={{ opacity: 0, y: 40, x: 0 }}
                  whileInView={{ opacity: 1, y: 0, x: 0 }}
                  transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                  viewport={{ once: false }}
                className={`text-3xl font-bold text-center ${
                  theme === "dark" ? "text-[#fff]" : "text-[#000]"
                }`}
              >
                Contact Us
              </motion.h2>
              
              <motion.form
                  initial={{ opacity: 0, y: 40, x: 0 }}
                  whileInView={{ opacity: 1, y: 0, x: 0 }}
                  transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
                  viewport={{ once: false }}
              className="space-y-4 contact-frm-sec-inr" onSubmit={handleSubmit}>
                <div className="cfrs-box">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className={`p-3 border rounded-md w-full fn-input ${
                      theme === "dark" ? "dark-ds-bg text-[#fff]" : "border-gray-300 inpt-lgt"
                    }`}
                    required
                  />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className={`p-3 border rounded-md w-full ln-input ${
                      theme === "dark" ? "dark-ds-bg text-[#fff]" : "border-gray-300"
                    }`}
                    required
                  />
                  <input
                    type="text"
                    name="website"
                    placeholder="Website"
                    value={formData.website}
                    onChange={handleInputChange}
                    className={`p-3 border rounded-md w-full site-input ${
                      theme === "dark" ? "dark-ds-bg text-[#fff]" : "border-gray-300"
                    }`}
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`p-3 border rounded-md w-full email-input ${
                      theme === "dark" ? "dark-ds-bg text-[#fff]" : "border-gray-300"
                    }`}
                    required
                  />
                  <input
                    type="tel"
                    name="contactNumber"
                    placeholder="Contact Number"
                    value={formData.contactNumber}
                    onChange={handleInputChange}
                    className={`p-3 border rounded-md w-full cn-input ${
                      theme === "dark" ? "dark-ds-bg text-[#fff]" : "border-gray-300"
                    }`}
                    required
                  />
                  <select
                    name="hearAboutUs"
                    value={formData.hearAboutUs}
                    onChange={handleInputChange}
                    className={`p-3 border rounded-md w-full w-slct-input ${
                      theme === "dark" ? "dark-ds-bg text-[#fff]" : "border-gray-300"
                    }`}
                    required
                  >
                    <option value="">How did you hear about us?</option>
                    <option>Event or Conference</option>
                    <option>Social Media</option>
                    <option>Google Search</option>
                    <option>Referral</option>
                  </select>
                </div>

                {/* Radio Button Section */}
                <motion.div
                  initial={{ opacity: 0, y: 40, x: 0 }}
                  whileInView={{ opacity: 1, y: 0, x: 0 }}
                  transition={{ duration: 1, delay: 1, ease: "easeOut" }}
                  viewport={{ once: false }}
                 className="mt-5 rd-btn-sec">
                  <h3
                    className={`text-lg font-regular ${
                      theme === "dark" ? "text-[#fff]" : "rd-btn-hdng"
                    }`}
                  >
                    What services are you interested in?
                  </h3>
                  <div className="space-y-2 mt-2 rd-btn-inr">
                    {[
                      "University ERP Tool (Sapphire Veritas)",
                      "Logistic & Warehouse Inventory Tool (Sapphire Tracknexus)",
                      "Reporting & Analytics",
                      "Agent Portal (Sapphire Orbit)",
                      "Automation Commission/Markup Tool (Sapphire RuleSync)",
                      "Connected API Integration NDC/GDS (Sapphire OrbitConnect API)",
                      "Sapphire Trip",
                      "Travel Inventory & Packages (Sapphire ElevateX)",
                    ].map((service) => (
                      <div key={service} className="flex items-start space-x-2 rbtn-inr relative">
                        <input
                          type="radio"
                          name="service"
                          value={service}
                          checked={formData.service === service}
                          onChange={handleInputChange}
                          className="w-4 h-4"
                          required
                        />
                        <label
                          className={`font-regular ${
                            theme === "dark" ? "text-[#fff]" : "text-[#000]"
                          }`}
                        >
                          {service}
                        </label>
                        <div className="check">
                          <div className="inside"></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
                <div className="txt-outer">
                  <textarea
                    name="message"
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className={`p-3 border border-gray-300 rounded-md w-full min-h-[120px] textarea ${
                      theme === "dark" ? "dark-ds-bg text-[#fff]" : "border-gray-300"
                    }`}
                  />
                </div>
                {/* reCAPTCHA */}
                <div className="recaptcha-sec flex justify-start p-3">
                  <ReCAPTCHA
                    sitekey="6LfaH3cUAAAAAATsIcttB_6NkmziDmPcLh1qa9yd" // Replace with your Google reCAPTCHA Site Key
                    onChange={handleRecaptchaChange}
                    theme={theme === "dark" ? "dark" : "light"}
                  />
                </div>
                {/* Submit Button */}
                <div className="sbmt-btn">
                  <button
                    type="submit"
                    className="hover:scale-105 text-[12px] sm:text-sm md:text-base text-white px-[29px] py-[14px] rounded-full hover:bg-red-700 transition whitespace-nowrap bg-gradient-to-r from-[#870303] to-[#5A0303] cursor-pointer flex-1 sm:flex-0 sbmt-btn"
                  >
                    Submit
                  </button>
                </div>
                {status && <p className="text-center mt-4">{status}</p>}
              </motion.form>
            </div>
          </div>
        </div>
      </section>
      <div className="bubble-grdnt lft-botm-ltl-up"></div>
      <div className="bubble-grdnt rgtmdl"></div>
          {/* trusted partnner slider added */}
        <TrustedPartners />
        <FooterSection />
        {/* scroll btn bottom to top */}
              <ScrollToTopButton />
     
    </div>
  );
};

const ContactUs: React.FC = () => {
  return (
    <ThemeProvider>
      <ContactPage />
    </ThemeProvider>
  );
};

export default ContactUs;