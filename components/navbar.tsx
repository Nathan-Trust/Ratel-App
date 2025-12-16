"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 100; // Navbar height offset
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav
      className={`fixed top-0 z-50 w-full bg-white px-8 py-6 transition-shadow duration-300 ${
        isScrolled ? "shadow-md" : ""
      }`}
    >
      <div className="mx-auto flex max-w-[1440px] items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => scrollToSection("hero")}
          className="flex items-center gap-2"
        >
          <Image
            src="/657a0b91309fa430e2b8be8ed6b6e13327c43891.png"
            alt="Ratel Logo"
            width={141}
            height={48}
            priority
          />
        </button>

        {/* Navigation Links */}
        <div className="flex items-center gap-8">
          <button
            onClick={() => scrollToSection("hero")}
            className="text-base font-medium text-gray-900 hover:text-[#0D9488] transition-colors"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="text-base font-medium text-gray-900 hover:text-[#0D9488] transition-colors"
          >
            Why Chose Us?
          </button>
          <button
            onClick={() => scrollToSection("how-it-works")}
            className="text-base font-medium text-gray-900 hover:text-[#0D9488] transition-colors"
          >
            How It Works
          </button>
          <button
            onClick={() => scrollToSection("testimonials")}
            className="text-base font-medium text-gray-900 hover:text-[#0D9488] transition-colors"
          >
            Testimonials
          </button>
        </div>

        {/* CTA Button */}
        <Link
          href="/download"
          className="flex items-center gap-2 rounded-lg bg-[#0D9488] px-6 py-3 text-base font-semibold text-white hover:bg-[#0F766E] transition-colors"
        >
          Download App
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.16666 10H15.8333M15.8333 10L10.8333 5M15.8333 10L10.8333 15"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </div>
    </nav>
  );
}
