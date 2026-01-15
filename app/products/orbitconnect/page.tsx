// app/product/orbitconnect/page.tsx
"use client";
import Image from 'next/image';
import FooterSection from "@/components/Footer";
import TrustedPartners from "@/components/TrustedPartners";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import Navbar from "@/components/Navbar";
import { ThemeProvider, useTheme } from "@/components/ThemeProvider";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import "@splidejs/react-splide/css";

const OrbitConnectPage = () => {
  const { theme } = useTheme();
  return (

    <div className={`prdct-page orbitconnect min-h-screen relative 
    ${theme === 
    "dark" ? "bg-black text-white" : "bg-white text-black"}`}>

        <Navbar />

        {/* Product Page Banner Section */}
        <section className="ppbnr-outr relative">
          <div className="ppbnr-inr">
            <div className="pp-bnr-lft relative">
                <Image
                src="/Images/orbitconnect-bnr-red-left.png"
                alt="Product Orbit Banner"
                width={800}
                height={500}
                className="w-full h-auto prdct-bl-rndr"
                priority
              />
              <div className="pp-bnr-lft-cont">
                <Image
                  src="/Images/orbitconnect-logo-prd-wht.svg"
                  alt="orbitconnect logo white"
                  width={800}
                  height={500}
                  className="w-full h-auto object-contain prdct-bnr-logo"
                  priority
                />
                <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold py-4 text-[#fff]">
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
              <b style={{ color: '#C40C0C' }}>Sapphire OrbitConnect</b> is a game-changing, complete package designed to help businesses like yours do amazing things in the travel world. It's all about opening up tons of new possibilities! Whether you're a new company just starting out and wanting to add travel stuff to your platform, or you're a bigger, more established business needing a simple way to link up with major booking systems for things like flights and hotels, Sapphire OrbitConnect has the tools you need. It really helps you speed things up and keep your customers happy and connected.
            </p>
            <p className="text-md sm:text-base md:text-md lg:text-md leading-relaxed mx-auto mb-2 text-center">
              <b style={{ color: '#C40C0C' }}>Sapphire OrbitConnect</b> uses smart technology designed to help you succeed in the travel business, especially since things are always changing so quickly. It offers powerful features that can grow with you, gives you information right when it happens, and connects smoothly with travel systems everywhere. Using this means your business can stay ahead of the game, keep customers happy, and offer more exciting travel choices.
            </p>
          </div>
        </section>

        {/* Travel Solutions Section */}
        <section className="sldr-nd-render">
          <div className="container">
            <div className="sldrnrndr-inr flex relative">
              <div className="prdct-graphic ring-animate relative ">
                <span>
                  <Image 
                  src="/Images/orbitconnect-prct-name-logo.png" 
                  alt="orbit banner element"
                  width={300}
                  height={300}
                  className="w-full h-auto max-w-[150px] sm:max-w-[200px] md:max-w-[300px] prdct-nm-logo-render"
                  />  
                </span>
              </div>
              <div className="rgt-slder">
                <Splide
                    options={{
                      type: "loop",      // finite loop
                      perPage: 2,
                      perMove: 1,          // move one at a time
                      gap: '1rem',          // move one at a time
                      autoplay: true,
                      breakpoints: {
                        992: {
                          perPage: 1,      
                        },
                        768: {
                          perPage: 2,      
                        },
                        576: {
                          perPage: 1,      
                        },
                      },
                      pagination: true,   // remove dots if not needed
                      arrows: false,        // show arrows
                    }}
                    aria-label="Orbit Connect Slider"
                  >
                    <SplideSlide>
                      <div className="card-box">
                        <h3 className="text-xl font-semibold mb-2">Comprehensive Travel API Suite</h3>
                        <p className="text-md font-regular">
                         <b style={{ color: '#C40C0C' }}>Sapphire OrbitConnect</b> provides convenience in the form that you get to access a wide range of travel options in one place. This includes flights and hotel bookings, car rentals or bus charters, and even tours. How does it ensure one gets the most updated information? Well, it connects directly with the top travel systems out there, including GDS and NDC providers. This is super important because it means your business will always have the most reliable and current travel information right at its fingertips
                        </p>
                      </div>
                    </SplideSlide>
                    <SplideSlide>
                      <div className="card-box">
                        <h3 className="text-xl font-semibold mb-2">Easy Integration with GDS & New Distribution Capability</h3>
                        <p className="text-md font-regular">
                          You can easily connect your system to the big, important travel systems like Sabre. You can also link up with the newer ways of booking known as New Distribution Capability. This setup means you get fantastic access to flights and other travel options from all over the world. And you'll have plenty of useful travel details right there too.
                        </p>
                      </div>
                    </SplideSlide>
                    <SplideSlide>
                    <div className="card-box">
                      <h3 className="text-xl font-semibold mb-2">Real-Time Availability and Pricing</h3>
                      <p className="text-md font-regular">
                        You'll always have the very latest information instantly. This includes details on what's available, current prices, and any new bookings. With <b style={{ color: '#C40C0C' }}>Sapphire OrbitConnect</b>, we make sure your customers consistently see the correct, accurate details. Due to this, booking becomes a really smooth and easy experience for them.
                      </p>
                    </div>
                    </SplideSlide>
                    <SplideSlide>
                    <div className="card-box">
                      <h3 className="text-xl font-semibold mb-2">Advanced Personalization and Customization</h3>
                      <p className="text-md font-regular">
                       You can use smart filters, remember what folks like (their preferences!), and suggest things just for them. This lets you offer travel choices that feel tailor-made, truly meeting what each individual traveler needs.
                      </p>
                    </div>
                    </SplideSlide>
                    <SplideSlide>
                    <div className="card-box">
                      <h3 className="text-xl font-semibold mb-2">End-to-End Booking Management</h3>
                      <p className="text-md font-regular">
                       With <b style={{ color: '#C40C0C' }}>Sapphire OrbitConnect</b>, you get a system that handles everything for you. It takes care of flight bookings, sorting out hotel stays, and even managing cancellations. This way, you can give your users a complete, hassle-free service all in one place.
                      </p>
                    </div>
                    </SplideSlide>
                    <SplideSlide>
                    <div className="card-box">
                      <h3 className="text-xl font-semibold mb-2">Multi-Currency and Multi-Payment Gateway Support</h3>
                      <p className="text-md font-regular">
                       <b style={{ color: '#C40C0C' }}>Sapphire OrbitConnect's</b> API is designed to support lots of different ways people pay and handle many different currencies. This is super helpful whether your customers are right here or across the world, making sure they have a smooth and easy time completing their payment through your system.
                      </p>
                    </div>
                    </SplideSlide>
                    <SplideSlide>
                    <div className="card-box">
                      <h3 className="text-xl font-semibold mb-2">Real-Time Notifications and Alerts</h3>
                      <p className="text-md font-regular">
                       You have a great way to keep your customers informed. Send them automatic updates right away for things like flight changes, cancellations, or confirmed bookings. This is a powerful way to build trust and make their experience much better overall.
                      </p>
                    </div>
                    </SplideSlide>
                    <SplideSlide>
                    <div className="card-box">
                      <h3 className="text-xl font-semibold mb-2">Detailed Analytics & Reporting</h3>
                      <p className="text-md font-regular">
                       You'll get to see live information about important things like how people are booking, what your customers seem to like best, and exactly how the API is being used. Having these real-time details really helps your business make smart choices based on facts and make your services even better.
                      </p>
                    </div>
                    </SplideSlide>
                     <SplideSlide>
                    <div className="card-box">
                      <h3 className="text-xl font-semibold mb-2">Enhanced Security & Compliance</h3>
                      <p className="text-md font-regular">
                       We realize you need to protect your users' information, and our security is built to help you do so. Aside from that, we assist you in meeting major industry standards—things like PCI-DSS and GDPR are among them.
                      </p>
                    </div>
                    </SplideSlide>
                         <SplideSlide>
                    <div className="card-box">
                      <h3 className="text-xl font-semibold mb-2">Developer-Friendly Environment</h3>
                      <p className="text-md font-regular">
                       Making things easy for developers is key with Sapphire OrbitConnect. You get complete software kits, safe places to test, and clear guides. This just makes integrating simple and quick. And it really helps you get your products to market faster.
                      </p>
                    </div>
                    </SplideSlide>
                </Splide>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="prdct-pg-fetr">
          <div className="container">
            <div className="hdng-ftr mx-auto text-center">
              <h3
                  className={`mx-auto pad-x section-title transition-transform duration-300 hover:scale-105 hover:text-[#C40C0C] font-semibold ds-bg ${
                    theme === "dark" ? "text-[#C40C0C] dark-ds-bg" : ""
                  }`}
                >
                Features
              </h3>
            </div>
            <div className="cards-outer-sec-inner relative">
              <Image
                src="/Images/orbitconnect.png"
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
                    title: "Seamless Connectivity to Global Travel Networks",
                    desc: `Connecting smoothly to travel services worldwide is straightforward with 
                      Sapphire OrbitConnect. It links your business to a wide range of global travel options, letting you offer everything from flights and places to stay to ground transport—all in one easy spot. By connecting with the main GDS and NDC systems, you get access to plenty of travel information. This really helps your customers plan their trips easily.`
                  },
                  {
                    title: "Scalable Solutions for Any Business API Suite",
                    desc: `It doesn't matter if you're just starting a small travel business or you're part of a big, established company—Sapphire OrbitConnect has a solution that can expand right along with what you need. Our platform is built to handle everything from simple integrations to really complex systems for large businesses.`
                  },
                  {
                    title: "Instant Access to Real-Time Data with GDS",
                    desc: `With Sapphire OrbitConnect, you get instant access to live pricing, what's available right now, and booking updates. This way, you can always offer your customers the very latest travel options.`
                  },
                  {
                    title: "Enhance Customer Experience with Personalization",
                    desc: `By using real-time information, you can personalize everything along their journey. This means showing them travel ideas they'll really like or making search options work perfectly for their needs.`
                  },
                  {
                    title: "Boost Operational Efficiency and Pricing",
                    desc: `With all your travel information in one accessible spot in your control with Sapphire OrbitConnect, you won't have to juggle systems or do it manually anymore. That's less effort and time wasted doing things that don't matter most: making travel experiences great for everyone.`
                  },
                  {
                    title: "Stay Competitive with Cutting-Edge Technology",
                    desc: `The travel business is always changing, isn't it? So, staying ahead of what's new is really important. Sapphire OrbitConnect uses the very latest API technology to help you do just that.`
                  },
                  {
                    title: "Simplify Payments with Multi-Currency Support",
                    desc: `Making payments simple for everyone, no matter where they are, is really important. That's why Sapphire OrbitConnect helps you out with support for different currencies and connects smoothly with payment systems.`
                  },
                  {
                    title: "Gain Actionable Insights and Pricing",
                    desc: `You'll find helpful reporting right inside Sapphire OrbitConnect. It shows you what's happening with your business, like how bookings are trending, what customers are up to, and the API's performance.`
                  },
                  {
                    title: "Secure and Compliant API",
                    desc: `Sapphire OrbitConnect has strong security measures, like using top-level encryption to protect data, handling transactions securely, and following all those important international rules about keeping your information private.`
                  },
                  {
                    title: "Fast Integration, Quick Results",
                    desc: `Developers can integrate Sapphire OrbitConnect into their applications with minimal effort, using our comprehensive tools and resources.`
                  }
                ].map((item, index) => (
                  <SplideSlide key={index}>
                    <div className="fetr-card min-h-[300px] z-10">
                      <div className={`fetr-card-inr ds-bg rounded-lg ${theme === "dark" ? "dark-ds-bg" : ""}`}>
                        <h4 className="font-semibold mb-2">{item.title}</h4>
                        <p className="font-regular mb-2">{item.desc}</p>
                      </div>
                    </div>
                  </SplideSlide>
                ))}
              </Splide>
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
                Why Sapphire OrbitConnectAPI
              </h3>
            </div>
            <div className="why-prct-inr flex w-full mt-[20px]">
              <div className="whyp-lft-cont w-full">
                <div className="prct-nm-logo">
                  <Image 
                  src="/Images/orbitconnect-prct-name-logo.png" 
                  alt="orbit banner element"
                  width={300}
                  height={300}
                  className="w-full h-auto max-w-[150px] sm:max-w-[200px] md:max-w-[300px] prdct-nm-logo-render"
                />
                </div>
              </div>
              <div className="whyp-rgt-cont w-full">
                <h3 className={`text-xl font-semibold mb-3 ${
                    theme === "dark" ? "text-[#C40C0C]" : ""
                  }`}
                >
                  Sapphire OrbitConnectAPI
                </h3>
                <p className="text-md mb-2">
                  At <b style={{ color: '#C40C0C' }}>Red Sapphire</b>, we pride ourselves on being problem-solvers, not just tech experts. We take the time to understand your unique requirements, ensuring our tools fit seamlessly into your operations. Our commitment to you extends beyond the initial setup; we provide 24/7 support, guiding you every step of the way to ensure you never face hurdles alone.
                </p>
                <p className="text-md mb-2">
                  We deliver on our promises with reliable, jargon-free software designed for simplicity and clarity. With Red Sapphire, you can expect straightforward solutions that yield real results.
                  Simple tools, real results—that’s the Red Sapphire way.
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

const OrbitConnect = () => {
  return (
    <ThemeProvider>
      <OrbitConnectPage />
    </ThemeProvider>
  );
};

export default OrbitConnect;