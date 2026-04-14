import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, ShoppingBag } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

const SHOP_LINKS = [
  { to: "/", label: "Home" },
  { to: "/products", label: "All Dresses" },
  { to: "/about", label: "About Us" },
  { to: "/contact", label: "Contact" },
];

const CATEGORY_LINKS = [
  { to: "/products?category=Midi", label: "Midi Dresses" },
  { to: "/products?category=Maxi", label: "Maxi Dresses" },
  { to: "/products?category=Casual", label: "Casual Wear" },
  { to: "/products?category=Festive", label: "Festive" },
  { to: "/products?category=Evening", label: "Evening Wear" },
];

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border" data-ocid="footer">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <ShoppingBag className="w-5 h-5 text-accent" />
              <span className="font-display font-bold text-lg text-foreground">
                Dress Boutique
              </span>
            </div>
            <p className="text-sm text-muted-foreground font-body leading-relaxed mb-4">
              Curated dresses for every occasion — from breezy daywear to
              showstopping festive looks.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-muted text-muted-foreground hover:text-accent hover:bg-accent/10 transition-smooth"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-muted text-muted-foreground hover:text-accent hover:bg-accent/10 transition-smooth"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-muted text-muted-foreground hover:text-[#25D366] hover:bg-[#25D366]/10 transition-smooth"
                aria-label="WhatsApp"
              >
                <SiWhatsapp className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h3 className="font-display font-semibold text-sm uppercase tracking-wider text-foreground mb-4">
              Shop
            </h3>
            <ul className="space-y-2">
              {SHOP_LINKS.map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-sm text-muted-foreground hover:text-accent font-body transition-smooth"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-display font-semibold text-sm uppercase tracking-wider text-foreground mb-4">
              Categories
            </h3>
            <ul className="space-y-2">
              {CATEGORY_LINKS.map(({ to, label }) => (
                <li key={to}>
                  <a
                    href={to}
                    className="text-sm text-muted-foreground hover:text-accent font-body transition-smooth"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-semibold text-sm uppercase tracking-wider text-foreground mb-4">
              Get in Touch
            </h3>
            <address className="not-italic space-y-2 text-sm text-muted-foreground font-body">
              <p>123, Fashion Street</p>
              <p>Mumbai, Maharashtra 400001</p>
              <p className="mt-3">
                <a
                  href="tel:+919876543210"
                  className="hover:text-accent transition-smooth"
                >
                  +91 98765 43210
                </a>
              </p>
              <p>
                <a
                  href="mailto:hello@dressboutique.in"
                  className="hover:text-accent transition-smooth"
                >
                  hello@dressboutique.in
                </a>
              </p>
              <p className="text-xs text-muted-foreground">
                Mon–Sat: 10am – 8pm
              </p>
            </address>
          </div>
        </div>
      </div>
    </footer>
  );
}
