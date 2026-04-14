import type { Product } from "@/types/product";
import { SiWhatsapp } from "react-icons/si";

interface WhatsAppButtonProps {
  product: Product;
  className?: string;
}

export default function WhatsAppButton({
  product,
  className = "",
}: WhatsAppButtonProps) {
  const discountedPrice = Math.round(
    product.originalPrice * (1 - product.discountPercent / 100),
  );

  const priceFormatted = discountedPrice.toLocaleString("en-IN");
  const origFormatted = product.originalPrice.toLocaleString("en-IN");

  const messageParts = [
    "Hi! I'm interested in this dress from Dress Boutique 💐",
    "",
    `*${product.name}*`,
    `Category: ${product.category}`,
    `Price: ₹${priceFormatted} (${product.discountPercent}% OFF from ₹${origFormatted})`,
    "",
    `Image: ${product.imageUrl}`,
    "",
    "Please let me know about availability and delivery options. Thank you!",
  ];

  const message = messageParts.join("\n");
  const whatsappUrl = `https://wa.me/919876543210?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#25D366] text-white font-semibold font-body text-sm transition-smooth hover:opacity-90 hover:shadow-elevated hover:-translate-y-0.5 ${className}`}
      aria-label={`Enquire about ${product.name} on WhatsApp`}
      data-ocid="whatsapp-enquire-btn"
    >
      <SiWhatsapp className="w-5 h-5" />
      <span>Enquire on WhatsApp</span>
    </a>
  );
}
