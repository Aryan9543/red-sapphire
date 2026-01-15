"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react"; // Optional: use any icon or SVG

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="scrl-btm-tp fixed bottom-6 right-6 z-[1000] p-3 rounded-full bg-gradient-to-r from-[#870303] to-[#5A0303] hover:scale-110 transition-all duration-300 shadow-lg text-white"
          aria-label="Scroll to Top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </>
  );
}
