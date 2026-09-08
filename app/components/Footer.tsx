"use client";

import Image from "next/image";
import { openGeneralWhatsAppOrder } from "../utils/helpers";

interface FooterProps {
  onOpenCustomQuote: (prefillCakeName?: string) => void;
  onSelectCategory: (cat: string) => void;
}

export default function Footer({ onOpenCustomQuote, onSelectCategory }: FooterProps) {
  return (
    <>
      <footer className="bg-amber-950 text-stone-300 pt-16 pb-12 border-t-4 border-rose-600 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-12">
            {/* Col 1: Brand Info */}
            <div className="lg:col-span-4 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl overflow-hidden relative border border-amber-500">
                  <Image
                    src="/assets/logo/IMG-20260706-WA0000.jpg"
                    alt="Logo"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-extrabold text-white font-heading">
                    Gims Delicacies
                  </h3>
                  <span className="text-xs font-semibold text-amber-400">
                    Cakes and Refreshment
                  </span>
                </div>
              </div>

              <p className="text-stone-400 text-sm leading-relaxed">
                Your top destination for handcrafted celebration cakes, gourmet cinnamon rolls, savory samosas, ice cream, milkshakes, and authentic Kenyan Uji Power.
              </p>

              {/* Social Media Icons in Footer */}
              <div className="flex items-center gap-3 pt-2">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-rose-600 text-white flex items-center justify-center transition-all transform hover:scale-110"
                  aria-label="Facebook"
                >
                  <i className="fa-brands fa-facebook-f"></i>
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-rose-600 text-white flex items-center justify-center transition-all transform hover:scale-110"
                  aria-label="Instagram"
                >
                  <i className="fa-brands fa-instagram"></i>
                </a>
                <a
                  href="https://wa.me/254724323377"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-emerald-500/20 hover:bg-emerald-600 text-emerald-400 hover:text-white flex items-center justify-center transition-all transform hover:scale-110"
                  aria-label="WhatsApp"
                >
                  <i className="fa-brands fa-whatsapp text-lg"></i>
                </a>
              </div>
            </div>

            {/* Col 2: Quick Links */}
            <div className="lg:col-span-3 space-y-3">
              <h4 className="text-white font-bold text-lg font-heading border-b border-amber-800/60 pb-2">
                Quick Navigation
              </h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-rose-400 transition flex items-center gap-2">
                    <i className="fa-solid fa-chevron-right text-xs text-amber-500"></i> Home Page
                  </a>
                </li>
                <li>
                  <a href="#catalog-section" className="hover:text-rose-400 transition flex items-center gap-2">
                    <i className="fa-solid fa-chevron-right text-xs text-amber-500"></i> Full Catalog & Menu
                  </a>
                </li>
                <li>
                  <a href="#about-section" className="hover:text-rose-400 transition flex items-center gap-2">
                    <i className="fa-solid fa-chevron-right text-xs text-amber-500"></i> Head Chef Alice Njambi
                  </a>
                </li>
                <li>
                  <a href="#custom-quote-section" className="hover:text-rose-400 transition flex items-center gap-2">
                    <i className="fa-solid fa-chevron-right text-xs text-amber-500"></i> Custom Wedding Cake Quote
                  </a>
                </li>
                <li>
                  <a href="#contact-section" className="hover:text-rose-400 transition flex items-center gap-2">
                    <i className="fa-solid fa-chevron-right text-xs text-amber-500"></i> Contact & Order Info
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 3: Product Categories */}
            <div className="lg:col-span-2 space-y-3">
              <h4 className="text-white font-bold text-lg font-heading border-b border-amber-800/60 pb-2">
                Categories
              </h4>
              <ul className="space-y-2 text-sm text-stone-400">
                <li className="cursor-pointer hover:text-rose-300 transition" onClick={() => onSelectCategory("cakes")}>🎂 Wedding & Birthday Cakes</li>
                <li className="cursor-pointer hover:text-rose-300 transition" onClick={() => onSelectCategory("cookies")}>🍪 Fresh Baked Cookies</li>
                <li className="cursor-pointer hover:text-rose-300 transition" onClick={() => onSelectCategory("cinnamon")}>🌀 Cinnamon Rolls & Donuts</li>
                <li className="cursor-pointer hover:text-rose-300 transition" onClick={() => onSelectCategory("cupcakes")}>🧁 Cupcakes & Muffins</li>
                <li className="cursor-pointer hover:text-rose-300 transition" onClick={() => onSelectCategory("samosas")}>🥟 Crispy Beef/Chicken Samosas</li>
                <li className="cursor-pointer hover:text-rose-300 transition" onClick={() => onSelectCategory("drinks")}>🥤 Shakes, Ice Creams & Yoghurts</li>
                <li className="cursor-pointer hover:text-rose-300 transition" onClick={() => onSelectCategory("uji")}>🥣 Signature Uji Power</li>
              </ul>
            </div>

            {/* Col 4: Contact Details */}
            <div className="lg:col-span-3 space-y-3">
              <h4 className="text-white font-bold text-lg font-heading border-b border-amber-800/60 pb-2">
                Contact Details
              </h4>
              <div className="space-y-2.5 text-sm text-stone-300">
                <p><strong className="text-white">Business:</strong> Gims Delicacies</p>
                <p><strong className="text-white">Email:</strong> <a href="mailto:gimsdelicacies@gmail.com" className="hover:text-rose-400">gimsdelicacies@gmail.com</a></p>
                <p><strong className="text-white">Phone / WhatsApp:</strong> <a href="tel:0724323377" className="hover:text-rose-400 font-bold text-amber-300">0724323377</a></p>
                <div className="pt-2 border-t border-amber-900">
                  <p><strong className="text-white">Owner & Head Chef:</strong> Alice Njambi</p>
                  <p><strong className="text-white">Chef Email:</strong> <a href="mailto:alicenjambi@gmail.com" className="hover:text-rose-400">alicenjambi@gmail.com</a></p>
                </div>
              </div>
            </div>
          </div>

          <hr className="border-amber-900/80 my-8" />

          <div className="text-center text-xs md:text-sm text-stone-400 space-y-2">
            <p>
              All rights reserved 2026. Passionately made by{" "}
              <a
                href="http://josephwanyoike.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-400 hover:text-amber-300 font-bold underline transition"
              >
                Joseph Wanyoike Njoroge
              </a>
              .
            </p>
          </div>
        </div>
      </footer>

      {/* FLOATING WHATSAPP BUTTON (BOTTOM-RIGHT) */}
      <a
        href="https://wa.me/254724323377?text=Hi%20Gims%20Delicacies!%20I'm%20interested%20in%20ordering."
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-pulse fixed bottom-20 md:bottom-8 right-6 z-40 w-14 h-14 md:w-16 md:h-16 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center shadow-2xl transition-transform hover:scale-110"
        aria-label="Chat on WhatsApp"
      >
        <i className="fa-brands fa-whatsapp text-3xl"></i>
      </a>

      {/* MOBILE STICKY BOTTOM ACTION BAR (FOR >90% MOBILE USERS) */}
      <div className="fixed bottom-0 inset-x-0 bg-white/95 backdrop-blur-md border-t border-rose-100 py-2.5 px-4 z-40 md:hidden flex items-center justify-around shadow-2xl">
        <a href="#" className="flex flex-col items-center text-xs font-semibold text-stone-600 hover:text-rose-600">
          <i className="fa-solid fa-house text-base text-rose-500"></i>
          <span>Home</span>
        </a>
        <a href="#catalog-section" className="flex flex-col items-center text-xs font-semibold text-stone-600 hover:text-rose-600">
          <i className="fa-solid fa-utensils text-base text-rose-500"></i>
          <span>Menu</span>
        </a>
        <button
          onClick={() => onOpenCustomQuote()}
          className="flex flex-col items-center text-xs font-semibold text-amber-700 cursor-pointer"
        >
          <i className="fa-solid fa-cake-candles text-base text-amber-500"></i>
          <span>Quote</span>
        </button>
        <button
          onClick={openGeneralWhatsAppOrder}
          className="flex flex-col items-center text-xs font-bold text-emerald-600 cursor-pointer"
        >
          <i className="fa-brands fa-whatsapp text-lg text-emerald-500"></i>
          <span>Order</span>
        </button>
      </div>
    </>
  );
}
