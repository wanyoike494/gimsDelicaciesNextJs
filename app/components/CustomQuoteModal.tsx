"use client";

import { useState, useEffect } from "react";
import { WHATSAPP_NUMBER } from "../data/products";
import { triggerConfetti } from "../utils/helpers";

interface CustomQuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefillCakeName?: string;
}

export default function CustomQuoteModal({
  isOpen,
  onClose,
  prefillCakeName = "",
}: CustomQuoteModalProps) {
  const [eventType, setEventType] = useState("Wedding Cake");
  const [flavor, setFlavor] = useState("");
  const [servings, setServings] = useState("");
  const [date, setDate] = useState("");
  const [notes, setNotes] = useState("");

  useEffect(() => {
    if (prefillCakeName) {
      setNotes(`Interested in style similar to: ${prefillCakeName}`);
    }
  }, [prefillCakeName]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    triggerConfetti();

    const text = `Hello Chef Alice & Gims Delicacies! 🎂✨\n\nI would like to request a *Custom Cake Quote* with the following details:\n\n🎉 *Event Type:* ${eventType}\n🍰 *Preferred Flavor:* ${flavor || "Not specified"}\n👥 *Estimated Guests / Servings:* ${servings || "Not specified"}\n📅 *Event Date:* ${date || "As soon as possible"}\n📝 *Special Request/Notes:* ${notes || "None"}\n\nPlease get back to me with pricing and design suggestions!`;

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    onClose();
    window.open(url, "_blank");
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 bg-amber-950/80 backdrop-blur-md z-50 flex items-center justify-center p-4"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-3xl max-w-lg w-full p-6 md:p-8 shadow-2xl border border-rose-100 relative transform transition-all"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-stone-100 text-stone-600 flex items-center justify-center hover:bg-rose-100 hover:text-rose-600 transition cursor-pointer"
        >
          <i className="fa-solid fa-xmark text-lg"></i>
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center text-2xl font-bold">
            <i className="fa-solid fa-cake-candles"></i>
          </div>
          <div>
            <h3 className="text-2xl font-extrabold text-amber-950 font-heading">
              Custom Cake Quote
            </h3>
            <p className="text-xs text-rose-600 font-medium">
              Bespoke Design by Head Chef Alice
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-stone-700 uppercase mb-1">
              Event Type
            </label>
            <select
              value={eventType}
              onChange={(e) => setEventType(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 focus:ring-2 focus:ring-amber-500 outline-none text-stone-800 font-medium"
            >
              <option value="Wedding Cake">Wedding Cake</option>
              <option value="Birthday Cake">Birthday Cake</option>
              <option value="Graduation Cake">Graduation Cake</option>
              <option value="Anniversary Cake">Anniversary Cake</option>
              <option value="Other Special Celebration">Other Celebration</option>
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-stone-700 uppercase mb-1">
                Preferred Flavor
              </label>
              <input
                type="text"
                value={flavor}
                onChange={(e) => setFlavor(e.target.value)}
                placeholder="e.g. Red Velvet, Vanilla, Chocolate"
                className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 focus:ring-2 focus:ring-amber-500 outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-stone-700 uppercase mb-1">
                Estimated Servings / Guests
              </label>
              <input
                type="text"
                value={servings}
                onChange={(e) => setServings(e.target.value)}
                placeholder="e.g. 50 Guests, 3 Tiers"
                className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 focus:ring-2 focus:ring-amber-500 outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-stone-700 uppercase mb-1">
              Event Date
            </label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 focus:ring-2 focus:ring-amber-500 outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-stone-700 uppercase mb-1">
              Special Design Requests & Notes
            </label>
            <textarea
              rows={3}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Describe theme, color preferences, budget, or cake style..."
              className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 focus:ring-2 focus:ring-amber-500 outline-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="btn-shimmer w-full py-4 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-extrabold shadow-lg shadow-amber-500/20 transition flex items-center justify-center gap-3 text-base cursor-pointer"
          >
            <i className="fa-brands fa-whatsapp text-xl text-emerald-300"></i>
            <span>Send Quote Request via WhatsApp</span>
          </button>
        </form>
      </div>
    </div>
  );
}
