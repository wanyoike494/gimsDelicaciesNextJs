"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { PRODUCTS, Product } from "../data/products";
import { openWhatsAppProductOrder } from "../utils/helpers";

interface ProductCatalogProps {
  selectedCategory: string;
  onSelectCategory: (cat: string) => void;
  onOpenCustomQuote: (prefillCakeName?: string) => void;
}

export default function ProductCatalog({
  selectedCategory,
  onSelectCategory,
  onOpenCustomQuote,
}: ProductCatalogProps) {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((p: Product) => {
      const matchesCat =
        selectedCategory === "all" || p.category === selectedCategory;
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        p.name.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query) ||
        p.categoryName.toLowerCase().includes(query);

      return matchesCat && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const categories = [
    { id: "all", label: "All Delicacies", icon: "fa-solid fa-border-all" },
    { id: "cakes", label: "Cakes", icon: "fa-solid fa-cake-candles text-amber-500" },
    { id: "cookies", label: "Cookies", icon: "fa-solid fa-cookie text-amber-700" },
    { id: "cinnamon", label: "Cinnamon Rolls", icon: "fa-solid fa-scroll text-amber-600" },
    { id: "donuts", label: "Donuts", icon: "fa-solid fa-ring text-rose-500" },
    { id: "cupcakes", label: "Cupcakes & Muffins", icon: "fa-solid fa-cupcake text-pink-500" },
    { id: "samosas", label: "Samosas", icon: "fa-solid fa-play text-amber-600 rotate-90" },
    { id: "drinks", label: "Drinks & Shakes", icon: "fa-solid fa-glass-water text-blue-500" },
    { id: "uji", label: "Uji Power", icon: "fa-solid fa-bowl-food text-emerald-600" },
  ];

  return (
    <section id="catalog-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 scroll-mt-24">
      {/* Section Title Header */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <span className="inline-block px-4 py-1.5 rounded-full bg-rose-100 text-rose-700 font-extrabold text-xs tracking-wider uppercase mb-3 border border-rose-200">
          Our Delicacies Showcase
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-amber-950 font-heading">
          Explore Our Delicious Products
        </h2>
        <p className="text-stone-600 mt-3 text-base md:text-lg">
          Select your favorite category or search for cakes, pastries, samosas, drinks, and our signature Uji Power. Click <strong>&quot;Make Order&quot;</strong> to chat directly on WhatsApp!
        </p>
      </div>

      {/* SEARCH BAR & CATEGORY CHIPS */}
      <div className="space-y-6 mb-10">
        {/* Search Input */}
        <div className="max-w-md mx-auto relative">
          <i className="fa-solid fa-magnifying-glass absolute left-4 top-1/2 -translate-y-1/2 text-stone-400"></i>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search cakes, donuts, samosas, Uji Power..."
            className="w-full pl-11 pr-4 py-3.5 rounded-2xl bg-white border border-rose-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent text-stone-800 placeholder-stone-400"
          />
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 pt-1 scrollbar-none justify-start md:justify-center">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              data-category={cat.id}
              className={`cat-btn whitespace-nowrap px-5 py-2.5 rounded-2xl text-sm font-bold bg-white text-stone-700 border border-stone-200 hover:border-rose-300 transition-all flex items-center gap-2 cursor-pointer ${
                selectedCategory === cat.id ? "active" : ""
              }`}
            >
              <i className={cat.icon}></i> {cat.label}
            </button>
          ))}
        </div>

        {/* Count Indicator */}
        <div className="flex items-center justify-between border-b border-stone-200 pb-3">
          <span
            id="catalog-count-badge"
            className="text-sm font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-full border border-rose-100"
          >
            {filteredProducts.length} Delicious Items Available
          </span>
          <span className="text-xs text-stone-500 flex items-center gap-1">
            <i className="fa-solid fa-circle-check text-emerald-500"></i> Live WhatsApp Ordering
          </span>
        </div>
      </div>

      {/* DYNAMIC PRODUCT GRID */}
      {filteredProducts.length === 0 ? (
        <div className="col-span-full text-center py-16 px-4 bg-rose-50/50 rounded-3xl border border-rose-100">
          <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-rose-100 flex items-center justify-center text-rose-500 text-3xl">
            <i className="fa-solid fa-cookie-bite"></i>
          </div>
          <h3 className="text-xl font-bold text-stone-800 mb-2">No Items Found</h3>
          <p className="text-stone-500 max-w-md mx-auto mb-6">
            We couldn&apos;t find any products matching your filter or search keyword. Try selecting another category!
          </p>
          <button
            onClick={() => {
              onSelectCategory("all");
              setSearchQuery("");
            }}
            className="px-6 py-2.5 rounded-xl bg-rose-600 text-white font-semibold shadow-md hover:bg-rose-700 transition cursor-pointer"
          >
            View All Products
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((p) => (
            <div
              key={p.id}
              className="product-card group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl border border-rose-100/70 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Image & Badges */}
              <div className="relative h-64 overflow-hidden bg-stone-100">
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  className="product-card-img object-cover"
                />

                <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/90 backdrop-blur-md text-rose-700 shadow-md border border-rose-100">
                    {p.badge}
                  </span>
                </div>

                <div className="absolute top-3 right-3 z-10">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-amber-950/80 text-amber-200 backdrop-blur-md">
                    {p.categoryName}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-stone-900 group-hover:text-rose-600 transition-colors mb-2 leading-snug font-heading">
                    {p.name}
                  </h3>

                  <p className="text-stone-600 text-sm mb-4 line-clamp-3 leading-relaxed">
                    {p.description}
                  </p>
                </div>

                <div>
                  <div className="pt-4 border-t border-stone-100 flex items-center justify-between gap-2 mb-4">
                    <span className="text-xs text-stone-500 uppercase tracking-wider font-semibold">
                      Price
                    </span>
                    <span className="text-lg font-extrabold text-rose-600 bg-rose-50 px-3 py-1 rounded-xl border border-rose-100">
                      {p.price}
                    </span>
                  </div>

                  {/* Buttons */}
                  {p.isCustomQuote ? (
                    <button
                      onClick={() => onOpenCustomQuote(p.name)}
                      className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-bold shadow-md shadow-amber-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <i className="fa-solid fa-pen-ruler"></i>
                      <span>Get Custom Quote</span>
                    </button>
                  ) : (
                    <button
                      onClick={() => openWhatsAppProductOrder(p.name, p.price)}
                      className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-700 hover:to-emerald-600 text-white font-bold shadow-md shadow-emerald-600/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <i className="fa-brands fa-whatsapp text-lg"></i>
                      <span>Make Order</span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
