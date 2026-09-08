"use client";

import { useState } from "react";
import { WHATSAPP_NUMBER } from "../data/products";
import { triggerConfetti } from "../utils/helpers";

export default function ContactSection() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    triggerConfetti();

    const text = `Hello Gims Delicacies & Chef Alice! 💌\n\nNew Inquiry from Website:\n👤 *Name:* ${name || "Valued Customer"}\n📧 *Email:* ${email || "Not provided"}\n📞 *Phone:* ${phone || "Not provided"}\n💬 *Message:* ${message}`;

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");

    setName("");
    setPhone("");
    setEmail("");
    setMessage("");
  };

  return (
    <section id="contact-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 scroll-mt-24">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="px-4 py-1.5 rounded-full bg-rose-100 text-rose-700 font-extrabold text-xs uppercase tracking-wider border border-rose-200">
          Get in Touch
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-amber-950 font-heading mt-3">
          Contact Us & Place Orders
        </h2>
        <p className="text-stone-600 mt-2 text-base">
          Reach out directly to Head Chef Alice Njambi for inquiries, event catering, or custom order bookings.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Contact Info Cards */}
        <div className="lg:col-span-5 space-y-6">
          {/* Business Card */}
          <div className="bg-white p-6 md:p-8 rounded-3xl border border-rose-100 shadow-lg space-y-4">
            <div className="flex items-center gap-4 border-b border-stone-100 pb-4">
              <div className="w-12 h-12 rounded-2xl bg-rose-100 text-rose-600 flex items-center justify-center text-2xl">
                <i className="fa-solid fa-store"></i>
              </div>
              <div>
                <h3 className="font-extrabold text-xl text-amber-950 font-heading">
                  Gims Delicacies
                </h3>
                <span className="text-xs font-semibold text-rose-600">
                  Cakes and Refreshment
                </span>
              </div>
            </div>

            <div className="space-y-3 text-sm text-stone-700">
              <div className="flex items-center gap-3">
                <i className="fa-solid fa-phone text-rose-500 w-5"></i>
                <a href="tel:0724323377" className="hover:text-rose-600 font-bold">
                  0724323377
                </a>
              </div>
              <div className="flex items-center gap-3">
                <i className="fa-solid fa-envelope text-rose-500 w-5"></i>
                <a href="mailto:gimsdelicacies@gmail.com" className="hover:text-rose-600 font-bold">
                  gimsdelicacies@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <i className="fa-brands fa-whatsapp text-emerald-500 w-5 text-lg"></i>
                <a
                  href="https://wa.me/254724323377"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-600 font-bold"
                >
                  WhatsApp: 0724323377
                </a>
              </div>
            </div>
          </div>

          {/* Owner / Head Chef Card */}
          <div className="bg-amber-950 text-white p-6 md:p-8 rounded-3xl border border-amber-800 shadow-lg space-y-4">
            <div className="flex items-center gap-4 border-b border-amber-800 pb-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/20 text-amber-400 flex items-center justify-center text-2xl border border-amber-500/30">
                <i className="fa-solid fa-user-chef"></i>
              </div>
              <div>
                <h3 className="font-extrabold text-xl text-amber-200 font-heading">
                  Alice Njambi
                </h3>
                <span className="text-xs font-semibold text-amber-400">
                  Head Chef & Owner
                </span>
              </div>
            </div>

            <div className="space-y-3 text-sm text-amber-100/90">
              <div className="flex items-center gap-3">
                <i className="fa-solid fa-envelope text-amber-400 w-5"></i>
                <a href="mailto:alicenjambi@gmail.com" className="hover:text-amber-300 font-bold">
                  alicenjambi@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <i className="fa-solid fa-phone-flip text-amber-400 w-5"></i>
                <a href="tel:0724323377" className="hover:text-amber-300 font-bold">
                  0724323377
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Contact Form */}
        <div className="lg:col-span-7">
          <div className="bg-white p-6 md:p-10 rounded-3xl border border-rose-100 shadow-xl">
            <h3 className="text-2xl font-bold text-amber-950 mb-2 font-heading">
              Send an Enquiry or Order Request
            </h3>
            <p className="text-stone-500 text-sm mb-6">
              Fill in the details below to submit your enquiry directly via WhatsApp to Chef Alice.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-stone-700 uppercase mb-1">
                    Your Full Name
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Mary Wanjiru"
                    className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 focus:ring-2 focus:ring-rose-500 focus:bg-white outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-stone-700 uppercase mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. 0712345678"
                    className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 focus:ring-2 focus:ring-rose-500 focus:bg-white outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-700 uppercase mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="e.g. mary@gmail.com"
                  className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 focus:ring-2 focus:ring-rose-500 focus:bg-white outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-700 uppercase mb-1">
                  Message or Order Details
                </label>
                <textarea
                  rows={4}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell us what you'd like to order, quantity, event date, or any questions..."
                  className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 focus:ring-2 focus:ring-rose-500 focus:bg-white outline-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn-shimmer w-full py-4 rounded-2xl bg-gradient-to-r from-rose-600 to-rose-500 hover:from-rose-700 hover:to-rose-600 text-white font-extrabold shadow-lg shadow-rose-600/20 transition flex items-center justify-center gap-3 text-base cursor-pointer"
              >
                <i className="fa-brands fa-whatsapp text-xl text-emerald-300"></i>
                <span>Submit Inquiry via WhatsApp</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
