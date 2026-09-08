"use client";

import { useState } from "react";
import Image from "next/image";
import { openGeneralWhatsAppOrder } from "../utils/helpers";

interface HeaderProps {
  onOpenCustomQuote: (prefillCakeName?: string) => void;
}

export default function Header({ onOpenCustomQuote }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* TOP CONTACT & SOCIAL BAR */}
      <div className="bg-gradient-to-r from-amber-950 via-rose-950 to-amber-950 text-rose-100 text-xs md:text-sm py-2 px-4 shadow-inner relative z-50">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-4 flex-wrap justify-center sm:justify-start">
            <a
              href="tel:0724323377"
              className="hover:text-amber-300 transition flex items-center gap-1.5 font-medium"
            >
              <i className="fa-solid fa-phone text-amber-400"></i>
              <span>0724323377</span>
            </a>
            <span className="hidden sm:inline text-rose-800">•</span>
            <a
              href="mailto:gimsdelicacies@gmail.com"
              className="hover:text-amber-300 transition flex items-center gap-1.5 font-medium"
            >
              <i className="fa-solid fa-envelope text-amber-400"></i>
              <span>gimsdelicacies@gmail.com</span>
            </a>
            <span className="hidden md:inline text-rose-800">•</span>
            <span className="hidden md:inline text-amber-200/90 font-semibold">
              <i className="fa-solid fa-crown text-amber-400 mr-1"></i> Head Chef:
              Alice Njambi
            </span>
          </div>

          {/* Social Media Buttons */}
          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold text-rose-300 hidden sm:inline">
              Follow Us:
            </span>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-7 h-7 rounded-full bg-white/10 hover:bg-rose-600 text-white flex items-center justify-center transition-all transform hover:scale-110"
              aria-label="Facebook"
            >
              <i className="fa-brands fa-facebook-f text-xs"></i>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-7 h-7 rounded-full bg-white/10 hover:bg-rose-600 text-white flex items-center justify-center transition-all transform hover:scale-110"
              aria-label="Instagram"
            >
              <i className="fa-brands fa-instagram text-xs"></i>
            </a>
            <a
              href="https://wa.me/254724323377"
              target="_blank"
              rel="noopener noreferrer"
              className="w-7 h-7 rounded-full bg-emerald-500/20 hover:bg-emerald-600 text-emerald-300 hover:text-white flex items-center justify-center transition-all transform hover:scale-110"
              aria-label="WhatsApp"
            >
              <i className="fa-brands fa-whatsapp text-xs"></i>
            </a>
          </div>
        </div>
      </div>

      {/* MAIN HEADER / NAVBAR */}
      <header className="sticky top-0 bg-white/90 backdrop-blur-md border-b border-rose-100 shadow-sm z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Brand Logo & Title */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl overflow-hidden shadow-md border-2 border-rose-200 group-hover:rotate-3 transition-transform duration-300 relative">
              <Image
                src="/assets/logo/IMG-20260706-WA0000.jpg"
                alt="Gims Delicacies Logo"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <span className="block text-xl md:text-2xl font-extrabold text-amber-950 tracking-tight font-heading leading-tight group-hover:text-rose-600 transition-colors">
                Gims Delicacies
              </span>
              <span className="block text-xs font-semibold text-rose-600 tracking-wider uppercase">
                Cakes & Refreshment
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-8 font-semibold text-stone-700">
            <a href="#" className="hover:text-rose-600 transition-colors text-rose-600">
              Home
            </a>
            <a href="#catalog-section" className="hover:text-rose-600 transition-colors">
              Product Catalog
            </a>
            <a href="#about-section" className="hover:text-rose-600 transition-colors">
              Chef Alice
            </a>
            <a href="#custom-quote-section" className="hover:text-rose-600 transition-colors">
              Custom Quotes
            </a>
            <a href="#contact-section" className="hover:text-rose-600 transition-colors">
              Contact Us
            </a>
          </nav>

          {/* Desktop Action Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={() => onOpenCustomQuote()}
              className="px-4 py-2.5 rounded-xl bg-amber-100 hover:bg-amber-200 text-amber-900 font-bold text-sm border border-amber-300/60 transition shadow-sm flex items-center gap-2 cursor-pointer"
            >
              <i className="fa-solid fa-cake-candles text-amber-600"></i>
              <span>Get Quote</span>
            </button>

            <button
              onClick={openGeneralWhatsAppOrder}
              className="btn-shimmer px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md shadow-emerald-600/20 transition flex items-center gap-2 cursor-pointer"
            >
              <i className="fa-brands fa-whatsapp text-lg"></i>
              <span>Order on WhatsApp</span>
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="lg:hidden p-2.5 rounded-xl bg-rose-50 text-rose-700 hover:bg-rose-100 transition cursor-pointer"
            aria-label="Open Navigation Menu"
          >
            <i className="fa-solid fa-bars text-xl"></i>
          </button>
        </div>
      </header>

      {/* MOBILE NAVIGATION DRAWER */}
      <div
        className={`fixed inset-y-0 right-0 w-80 max-w-[85vw] bg-white shadow-2xl z-50 transform ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out flex flex-col justify-between p-6 lg:hidden`}
      >
        <div>
          <div className="flex items-center justify-between pb-6 border-b border-stone-100">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl overflow-hidden relative">
                <Image
                  src="/assets/logo/IMG-20260706-WA0000.jpg"
                  alt="Logo"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h4 className="font-bold text-stone-900">Gims Delicacies</h4>
                <span className="text-xs text-rose-600">Cakes & Refreshment</span>
              </div>
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="w-9 h-9 rounded-full bg-stone-100 text-stone-600 flex items-center justify-center hover:bg-rose-100 hover:text-rose-600 transition cursor-pointer"
            >
              <i className="fa-solid fa-xmark text-lg"></i>
            </button>
          </div>

          <nav className="mt-6 flex flex-col gap-4 font-semibold text-stone-700 text-lg">
            <a
              href="#"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-stone-50 hover:text-rose-600 flex items-center gap-3"
            >
              <i className="fa-solid fa-house text-rose-500 w-6"></i> Home
            </a>
            <a
              href="#catalog-section"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-stone-50 hover:text-rose-600 flex items-center gap-3"
            >
              <i className="fa-solid fa-utensils text-rose-500 w-6"></i> Product Catalog
            </a>
            <a
              href="#about-section"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-stone-50 hover:text-rose-600 flex items-center gap-3"
            >
              <i className="fa-solid fa-user-chef text-rose-500 w-6"></i> Chef Alice Njambi
            </a>
            <a
              href="#custom-quote-section"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-stone-50 hover:text-rose-600 flex items-center gap-3"
            >
              <i className="fa-solid fa-wand-magic-sparkles text-rose-500 w-6"></i> Custom Cake Quote
            </a>
            <a
              href="#contact-section"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-stone-50 hover:text-rose-600 flex items-center gap-3"
            >
              <i className="fa-solid fa-phone text-rose-500 w-6"></i> Contact & Ordering
            </a>
          </nav>
        </div>

        <div className="space-y-3 pt-6 border-t border-stone-100">
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenCustomQuote();
            }}
            className="w-full py-3 rounded-xl bg-amber-100 text-amber-900 font-bold flex items-center justify-center gap-2 cursor-pointer"
          >
            <i className="fa-solid fa-cake-candles text-amber-600"></i> Get Custom Quote
          </button>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              openGeneralWhatsAppOrder();
            }}
            className="w-full py-3 rounded-xl bg-emerald-600 text-white font-bold flex items-center justify-center gap-2 cursor-pointer"
          >
            <i className="fa-brands fa-whatsapp text-lg"></i> Order on WhatsApp
          </button>

          <div className="flex justify-center gap-4 pt-3">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone-500 hover:text-rose-600 text-xl"
            >
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone-500 hover:text-rose-600 text-xl"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a
              href="https://wa.me/254724323377"
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone-500 hover:text-emerald-600 text-xl"
            >
              <i className="fa-brands fa-whatsapp"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
