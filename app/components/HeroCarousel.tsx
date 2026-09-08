"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { HERO_SLIDES } from "../data/products";
import { openGeneralWhatsAppOrder, triggerConfetti } from "../utils/helpers";

interface HeroCarouselProps {
  onOpenCustomQuote: (prefillCakeName?: string) => void;
  onSelectCategory: (cat: string) => void;
}

export default function HeroCarousel({ onOpenCustomQuote, onSelectCategory }: HeroCarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index);
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5500);
    return () => clearInterval(timer);
  }, [nextSlide]);

  const handleCTA = (action: string) => {
    if (action === "uji") {
      onSelectCategory("uji");
      document.getElementById("catalog-section")?.scrollIntoView({ behavior: "smooth" });
    } else if (action === "catalog") {
      document.getElementById("catalog-section")?.scrollIntoView({ behavior: "smooth" });
    } else {
      openGeneralWhatsAppOrder();
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-6">
      {/* Slide Wrapper */}
      <div id="hero-slides-container" className="relative min-h-[520px] md:min-h-[580px] lg:min-h-[640px]">
        {HERO_SLIDES.map((slide, idx) => (
          <div
            key={idx}
            className={`hero-slide ${idx === currentSlide ? "active" : ""}`}
            data-index={idx}
          >
            <div className="relative w-full min-h-[520px] md:min-h-[580px] lg:min-h-[640px] flex items-center rounded-3xl overflow-hidden shadow-2xl bg-baked-gradient border border-rose-100/60 my-2">
              {/* Background Decorative Blur Circle */}
              <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-rose-400/20 rounded-full blur-3xl pointer-events-none"></div>
              <div className="absolute -left-20 -top-20 w-80 h-80 bg-amber-400/20 rounded-full blur-3xl pointer-events-none"></div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 md:p-12 w-full z-10">
                {/* Text Content */}
                <div className="lg:col-span-7 space-y-5 text-left">
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-100 border border-rose-200 text-rose-700 text-xs md:text-sm font-semibold tracking-wide shadow-sm">
                    <i className="fa-solid fa-cake-candles text-amber-500"></i>
                    <span>{slide.badge}</span>
                  </div>

                  <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-amber-950 leading-tight font-heading">
                    {slide.title}
                  </h1>

                  <p className="text-base md:text-xl text-rose-900/80 font-medium">
                    {slide.tagline}
                  </p>

                  <p className="text-sm md:text-base text-stone-600 max-w-xl leading-relaxed">
                    {slide.desc}
                  </p>

                  <div className="flex flex-wrap items-center gap-4 pt-4">
                    <button
                      onClick={() => handleCTA(slide.ctaAction)}
                      className="btn-shimmer px-7 py-3.5 rounded-2xl bg-gradient-to-r from-rose-600 to-rose-500 hover:from-rose-700 hover:to-rose-600 text-white font-bold shadow-lg shadow-rose-500/30 hover:shadow-rose-600/40 transition-all transform hover:-translate-y-0.5 flex items-center gap-3 cursor-pointer"
                    >
                      <i className="fa-brands fa-whatsapp text-xl text-emerald-300"></i>
                      <span>{slide.ctaText}</span>
                    </button>

                    <button
                      onClick={() => onOpenCustomQuote()}
                      className="px-6 py-3.5 rounded-2xl bg-amber-100 hover:bg-amber-200 text-amber-900 font-bold border border-amber-300/60 shadow-sm transition-all flex items-center gap-2 cursor-pointer"
                    >
                      <i className="fa-solid fa-wand-magic-sparkles text-amber-600"></i>
                      <span>Get Custom Quote</span>
                    </button>
                  </div>
                </div>

                {/* Slide Image Container */}
                <div className="lg:col-span-5 relative flex justify-center">
                  <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-3xl overflow-hidden shadow-2xl border-4 border-white/80 ring-4 ring-rose-200/50 group">
                    <Image
                      src={slide.image}
                      alt={slide.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-transparent to-transparent flex items-end p-4">
                      <span className="text-white text-xs md:text-sm font-bold bg-white/20 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/30">
                        <i className="fa-solid fa-fire text-amber-400 mr-1"></i>{" "}
                        {slide.category}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Slide Navigation Controls & Indicators */}
      <div className="flex items-center justify-between mt-4 px-2">
        <div className="flex items-center gap-3">
          <button
            onClick={prevSlide}
            className="w-10 h-10 rounded-full bg-white shadow-md border border-rose-100 text-rose-700 hover:bg-rose-600 hover:text-white transition flex items-center justify-center cursor-pointer"
            aria-label="Previous slide"
          >
            <i className="fa-solid fa-chevron-left"></i>
          </button>
          <button
            onClick={nextSlide}
            className="w-10 h-10 rounded-full bg-white shadow-md border border-rose-100 text-rose-700 hover:bg-rose-600 hover:text-white transition flex items-center justify-center cursor-pointer"
            aria-label="Next slide"
          >
            <i className="fa-solid fa-chevron-right"></i>
          </button>
        </div>

        <div className="flex items-center gap-2">
          {HERO_SLIDES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToSlide(idx)}
              className={`h-3 rounded-full transition-all duration-300 cursor-pointer ${
                idx === currentSlide
                  ? "w-8 bg-rose-600"
                  : "w-3 bg-stone-300 hover:bg-rose-300"
              }`}
              aria-label={`Slide ${idx + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
}
