import { WHATSAPP_NUMBER } from "../data/products";

export function triggerConfetti(): void {
  // Particles effect removed
}

export function openWhatsAppProductOrder(productName: string, price: string): void {
  const text = `Hello Gims Delicacies! 🎂\n\nI would like to order the following item:\n📌 *Product:* ${productName}\n💰 *Price:* ${price}\n\nPlease inform me of availability and delivery/pickup arrangements. Thank you!`;
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
  window.open(url, "_blank");
}

export function openGeneralWhatsAppOrder(): void {
  const text = `Hello Gims Delicacies! 🍰\n\nI visited your website and would like to inquire about your cakes, pastries, snacks, or refreshments. Please share your current menu and ordering details!`;
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
  window.open(url, "_blank");
}
