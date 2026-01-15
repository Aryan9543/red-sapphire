import React from "react";
import Slider from "react-slick";
import { Search, Tune, AttachMoney, Article } from "@mui/icons-material";

const features = [
  {
    icon: <Search className="text-black text-3xl" />,
    title: "Search",
    description:
      "Find your perfect flight, hotel, or vehicle in seconds. Sapphire Orbit’s smart search uses advanced algorithms to deliver tailored suggestions, saving you time and hassle. Start your journey with precision and ease.",
  },
  {
    icon: <Tune className="text-black text-3xl" />,
    title: "Filter",
    description:
      "Narrow down options effortlessly. With advanced filters, customize your search by preferences like budget, amenities, or eco-friendly choices. Find exactly what you need, instantly.",
  },
  
  {
    icon: <AttachMoney className="text-black text-3xl" />,
    title: "Pricing",
    description:
      "Get the best deals with real-time pricing. Sapphire Orbit ensures transparency and competitiveness, so you always book with confidence.",
  },
  {
    icon: <Article className="text-black text-3xl" />,
    title: "Rich Content",
    description:
      "Explore before you book. Dive into detailed descriptions, high-quality visuals, and user reviews to make informed decisions effortlessly.",
  },
];

const FeatureSlider = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768, // tablet
        settings: {
          slidesToShow: 1.2,
        },
      },
    ],
  };

  return (
    <div className="px-4 py-8 bg-white">
      <Slider {...settings}>
        {features.map((item, idx) => (
          <div key={idx} className="px-2">
            <div className="rounded-xl shadow-md bg-white border border-gray-200 p-6 slide-card-rs">
              <div className="flex items-center mb-3 space-x-3">
                {item.icon}
                <h3 className="text-xl font-semibold text-black">{item.title}</h3>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed">{item.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default FeatureSlider;
