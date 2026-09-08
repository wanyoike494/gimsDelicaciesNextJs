"use client";

import { useState } from "react";
import Header from "./components/Header";
import HeroCarousel from "./components/HeroCarousel";
import TrustBar from "./components/TrustBar";
import ProductCatalog from "./components/ProductCatalog";
import CustomQuoteBanner from "./components/CustomQuoteBanner";
import AboutChef from "./components/AboutChef";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import CustomQuoteModal from "./components/CustomQuoteModal";

export default function Home() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [prefillCakeName, setPrefillCakeName] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const handleOpenQuoteModal = (cakeName: string = "") => {
    setPrefillCakeName(cakeName);
    setIsQuoteModalOpen(true);
  };

  const handleCloseQuoteModal = () => {
    setIsQuoteModalOpen(false);
    setPrefillCakeName("");
  };

  return (
    <>
      <Header onOpenCustomQuote={handleOpenQuoteModal} />

      <main className="relative z-10">
        <HeroCarousel
          onOpenCustomQuote={handleOpenQuoteModal}
          onSelectCategory={setSelectedCategory}
        />
        <TrustBar />
        <ProductCatalog
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          onOpenCustomQuote={handleOpenQuoteModal}
        />
        <CustomQuoteBanner onOpenCustomQuote={handleOpenQuoteModal} />
        <AboutChef />
        <ContactSection />
      </main>

      <Footer
        onOpenCustomQuote={handleOpenQuoteModal}
        onSelectCategory={setSelectedCategory}
      />

      <CustomQuoteModal
        isOpen={isQuoteModalOpen}
        onClose={handleCloseQuoteModal}
        prefillCakeName={prefillCakeName}
      />
    </>
  );
}
