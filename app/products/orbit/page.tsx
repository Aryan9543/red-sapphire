// app/products/orbit/page.tsx
"use client";
import Image from 'next/image';
import FooterSection from "@/components/Footer";
import TrustedPartners from "@/components/TrustedPartners";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import Navbar from "@/components/Navbar";
import { ThemeProvider, useTheme } from "@/components/ThemeProvider";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import "@splidejs/react-splide/css";

const OrbitContent = () => {
  const { theme } = useTheme();

  return (
    <div className={`prdct-page orbit min-h-screen relative ${theme === "dark" ? "bg-black text-white" : "bg-white text-black"}`}>
      {/* Navbar */}
      <Navbar />

        {/* Product Page Banner Section */}
        <section className="ppbnr-outr relative">
          <div className="ppbnr-inr">
            <div className="pp-bnr-lft relative">
                <Image
                src="/Images/orbit-bnr-red-left.png"
                alt="Product Orbit Banner"
                width={800}
                height={500}
                className="w-full h-auto prdct-bl-rndr"
                priority
              />
              <div className="pp-bnr-lft-cont">
                <Image
                  src="/Images/orbit-logo-prd-wht.svg"
                  alt="orbitconnect logo white"
                  width={800}
                  height={500}
                  className="w-full h-auto object-contain prdct-bnr-logo"
                  priority
                />
                <p className="text-end text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold py-4 text-[#fff]">
                  Seamless Integration, Infinite Possibilities
                </p>
                <button className="bg-white font-bold rounded-lg text-[#A60505] hover:bg-gray-100 transition-colors">
                  Request Demo
                </button>
              </div>
            </div>
            <div className="pp-bnr-rgt">
              <div className="video-triangle-frame-outer relative flex justify-end items-end">
                <Image src="/Images/video-frame-top.png" alt="right-render" className="w-full absolute vf-top"
                  width={567}
                  height={539}
                  />
                  <div className="video-triangle-frame relative flex justify-end items-end">
                  
                    <video
                      className="w-full h-full object-cover clip-video absolute"
                      autoPlay
                      loop
                      muted
                      playsInline
                      >
                      <source
                        src="/videos/travelrs.mp4"
                        type="video/mp4"
                      />
                      Your browser does not support the video tag.
                    </video>
                  </div>
              </div>
            </div>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="intro-sectn">
          <div className="container">
            <p className="text-md sm:text-base md:text-md lg:text-md leading-relaxed mx-auto mb-2 text-center">
              <b style={{ color: '#C40C0C' }}>Sapphire Orbit</b> is a comprehensive platform that empowers travel management companies (TMCs) and agencies to manage their operational model. It enables businesses to confidently adapt to travel industry changes through its integration of modern solutions and innovative technology and real-time intelligence, and seamless API technology.
            </p>
            <p className="text-md sm:text-base md:text-md lg:text-md leading-relaxed mx-auto mb-2 text-center">
              With its unified approach, Sapphire Orbit streamlines operational processes and supports consistent revenue growth. The platform combines high-standard customer travel experiences with user-friendly interfaces to satisfy today’s travel requirements.
            </p>
          </div>
        </section>

        {/* Travel Solutions Section */}
        <section className="sldr-nd-render">
          <div className="container">
            <div className="sldrnrndr-inr relative">
              <div className="prdct-graphic ring-animate relative ">
                <span>
                  <Image 
                  src="/Images/orbit-prct-name-logo.png" 
                  alt="orbit banner element"
                  width={300}
                  height={300}
                  className="w-full h-auto max-w-[150px] sm:max-w-[200px] md:max-w-[300px] prdct-nm-logo-render"
                  />  
                </span>
              </div>
              <div className="trvl-mdl-cont flex justify-between w-full">
                <div className="mc-card">
                  <h3 className='text-end font-semibold text-xl'>A Seamless, Unified Travel Ecosystem</h3>
                  <p className='text-end font-regular text-md'>Users no longer need to work between different platforms. Sapphire Orbit provides travel businesses a unique platform that enables them to manage flights, hotel bookings, ground transport services, and ancillary services. Through one integrated platform, professionals can manage bookings and trip details without shifting between different systems efficiently.</p>
                <p className='text-end font-regular text-md'>Travel agencies gain the ability to adjust itineraries easily as they achieve instant access to global travel content. The system's fast adaptability with centralized-function integration allows organizations to stay competitive and offer faster services and individualized experiences.</p>
                </div>
                
                <div className="mc-card">
                  <h3 className='text-start font-semibold text-xl'>Security You Can Trust: Powered by Blockchain</h3>
                  <p className='text-start font-regular text-md'>In the industry, data integrity and client trust are priorities; therefore, Sapphire Orbit provides leading-edge security protection. This platform is designed on blockchain technology to ensure that transactions are secure, transparent, and resistant to unauthorized modifications in all transactions. With these robust security standards, businesses and their clients feel secure in today’s data-centered environment.
                  </p>
                </div>
              </div>

              <div className="trvl-mdl-cont flex justify-between w-full">
                <div className="mc-card">
                  <h3 className='text-end font-semibold text-xl'>Immersive Analytics & Real-Time Intelligence</h3>
                  <p className='text-end font-regular text-md'>Sapphire Orbit features an advanced analytics dashboard designed to support informed decision-making. With real-time performance metrics, historical data, and customer behavior analysis, agencies gain deep insight into business operations. This data helps teams refine services, adjust offerings, and plan strategically to meet both short-term goals and long-term growth.</p>
                </div>
                
                <div className="mc-card">
                  <h3 className='text-start font-semibold text-xl'>Optimized Revenue with RueSync Integration</h3>
                  <p className='text-start font-regular text-md'>Beyond managing travel logistics, Sapphire Orbit enhances profitability. Through its integration with RueSyncTool, the platform offers AI-powered commission intelligence and live profit tracking. Agencies can quickly identify high-margin opportunities, minimize revenue leakage, and reduce manual tasks. As a result, profitability increases without adding workload.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

{/* Features Section */}
<section className="prdct-pg-fetr">
  <div className="container">
    <div className="hdng-ftr mx-auto text-center">
      <h3
        className={`mx-auto pad-x section-title transition-transform duration-300 hover:scale-105 hover:text-[#C40C0C] font-semibold ds-bg ${theme === "dark" ? "text-[#C40C0C] dark-ds-bg" : ""}`}
      >
        Features
      </h3>
    </div>
    <div className="cards-outer-sec">
      <div className="cards-outer-sec-inner relative">
        <Image
          src="/Images/orbitImg.png"
          alt="orbit banner element"
          width={300}
          height={300}
          className="w-full pnl-red-bg absolute z-0"
        />
        <Splide
          key={`orbitpg-features-${theme}`}
          options={{
            type: 'loop',
            perPage: 3,        // show 3 at a time
            perMove: 1,        // move 1 at a time
            focus: 'center', 
            gap: "20px",
            autoplay: false,
            destroyOnUnmount: true,
            arrows: false,
            pagination: true,
            breakpoints: {
              575: {
                perPage: 1,    // 1 on mobile portrait
                perMove: 1,
                focus: 0, 
              },
              991: {
                perPage: 2,    // 1 on mobile
                perMove: 1,
                focus: 0, 
              },
              1024: {
                perPage: 2,    // 2 on tablet
                perMove: 1,
                focus: 0, 
              }
            },
          }}
          aria-label="OrbitConnect Features"
        >
          {[
            {
              icon: "/Images/search-icon-white.svg",
              icon2: "/Images/search-icon-black.svg",
              title: "Smart Search",
              desc: "Discover the best flights, hotels, or vehicles in seconds. The system learns user preferences for tailored results."
            },
            {
              icon: "/Images/filter-icon-white.svg",
              icon2: "/Images/filter-icon-black.svg",
              title: "Advanced Filtering",
              desc: "Sort by price, amenities, sustainability features, or policies—precision made simple."
            },
            {
              icon: "/Images/price-tag-white.svg",
              icon2: "/Images/price-tag-black.svg",
              title: "Real-Time Pricing",
              desc: "Transparent and competitive pricing leads to better deals with no surprises."
            },
            {
              icon: "/Images/thumbs-up-icon-white.svg",
              icon2: "/Images/thumbs-up-icon-black.svg",
              title: "Rich Visual Content",
              desc: "View high-resolution images, detailed descriptions, and verified customer reviews for confident decision-making."
            },
          ].map((item, index) => (
            <SplideSlide key={index}>
              <div className="fetr-card">
                <div className={`fetr-card-inr ds-bg rounded-lg ${theme === "dark" ? "dark-ds-bg" : ""}`}>
                  <div className="flex justify-start hd-tp">
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={300}
                      height={300}
                      className="w-full hidden wht-icon"
                    />
                    <Image
                      src={item.icon2}
                      alt={item.title}
                      width={300}
                      height={300}
                      className="w-full blk-icon"
                    />
                    <h4 className="font-semibold mb-2">{item.title}</h4>
                  </div>
                  <p className="font-regular mb-2">{item.desc}</p>
                </div>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
  </div>
</section>



        {/* Why OrbitConnect Section */}
        <section className="why-prct relative">
          <div className="container">
            <div className="hdng-why mx-auto text-center">
              <h3
                  className={`mx-auto pad-x section-title transition-transform duration-300 hover:scale-105 hover:text-[#C40C0C] font-semibold ds-bg ${
                    theme === "dark" ? "text-[#C40C0C] dark-ds-bg" : ""
                  }`}
                >
                Why Sapphire Orbit
              </h3>
            </div>
            <div className="why-prct-inr flex w-full mt-[20px] relative">
              <div className="whyp-lft-cont w-full">
                <div className="prct-nm-logo">
                  <Image 
                  src="/Images/orbit-prct-name-logo.png" 
                  alt="orbit banner element"
                  width={300}
                  height={300}
                  className="w-full h-auto max-w-[150px] sm:max-w-[200px] md:max-w-[300px] prdct-nm-logo-render"
                />
                </div>
              </div>
              <div className="whyp-rgt-cont w-full">
                <h3 className={`text-xl font-semibold mb-1 text-[#C40C0C] ${
                    theme === "dark" ? "text-[#C40C0C]" : ""
                  }`}
                >
                  AI-Powered Intelligence
                </h3>
                <p className="text-md mb-4">
                  Deliver personalized travel plans with smart automation.
                </p>
                <h3 className={`text-xl font-semibold mb-1 text-[#C40C0C] ${
                    theme === "dark" ? "text-[#C40C0C]" : ""
                  }`}
                >
                  Blockchain-Based Security
                </h3>
                <p className="text-md mb-4">
                  Safeguard every transaction with leading-edge data protection.
                </p>
                <h3 className={`text-xl font-semibold mb-1 text-[#C40C0C] ${
                    theme === "dark" ? "text-[#C40C0C]" : ""
                  }`}
                >
                  Predictive Analytics
                </h3>
                <p className="text-md mb-4">
                  Stay ahead of industry changes and evolving client preferences.
                </p>
                <h3 className={`text-xl font-semibold mb-1 text-[#C40C0C] ${
                    theme === "dark" ? "text-[#C40C0C]" : ""
                  }`}
                >
                  Futuristic Insights
                </h3>
                <p className="text-md mb-4">
                  Visual dashboards transform raw data into actionable strategies.
                </p>
                <h3 className={`text-xl font-semibold mb-1 text-[#C40C0C] ${
                    theme === "dark" ? "text-[#C40C0C]" : ""
                  }`}
                >
                  	Corporate Travel, Reimagined
                </h3>
                <p className="text-md mb-4">
                  Simplify bookings with tools that support compliance and speed.
                </p>
              </div>
            </div>
          </div>
        </section>

      {/* Bubble Gradients */}
      <div className="bubble-grdnt lft-botm-ltl-up"></div>
      <div className="bubble-grdnt rgtmdl"></div>

      {/* Trusted Partners Section */}
      <TrustedPartners />

      {/* Footer Section */}
      <FooterSection />

      {/* Scroll to Top Button */}
      <ScrollToTopButton />
    </div>
  );
};

const OrbitPage = () => {
  return (
    <ThemeProvider>
      <OrbitContent />
    </ThemeProvider>
  );
};

export default OrbitPage;
