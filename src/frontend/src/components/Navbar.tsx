import { Link, useLocation } from "@tanstack/react-router";
import { Menu, ShoppingBag, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { SiWhatsapp } from "react-icons/si";

const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/products", label: "Products" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

const WHATSAPP_NUMBER = "919876543210";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  const prevPathRef = useRef(pathname);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (prevPathRef.current !== pathname) {
    prevPathRef.current = pathname;
    setMenuOpen(false);
  }

  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi! I'd like to know more about your dresses 💐")}`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
        scrolled
          ? "bg-card shadow-subtle border-b border-border backdrop-blur-sm"
          : "bg-card/95 backdrop-blur-sm"
      }`}
      data-ocid="navbar"
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <ShoppingBag className="w-6 h-6 text-accent transition-smooth group-hover:scale-110" />
          <div className="flex flex-col leading-none">
            <span className="font-display font-bold text-lg text-foreground tracking-tight">
              Dress Boutique
            </span>
            <span className="text-[10px] text-muted-foreground font-body tracking-widest uppercase">
              New Arrivals Daily
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav
          className="hidden md:flex items-center gap-1"
          aria-label="Main navigation"
        >
          {NAV_LINKS.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className="px-4 py-2 rounded-md text-sm font-body font-medium text-foreground transition-smooth hover:bg-muted hover:text-accent [&.active]:text-accent [&.active]:font-semibold"
              data-ocid={`nav-${label.toLowerCase()}`}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-2">
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full bg-[#25D366] text-white text-sm font-semibold transition-smooth hover:opacity-90 hover:shadow-elevated"
            aria-label="Chat on WhatsApp"
            data-ocid="navbar-whatsapp"
          >
            <SiWhatsapp className="w-4 h-4" />
            <span>WhatsApp</span>
          </a>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="md:hidden p-2 rounded-md text-foreground hover:bg-muted transition-smooth"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            data-ocid="navbar-hamburger"
          >
            {menuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {menuOpen && (
        <div className="md:hidden bg-card border-t border-border shadow-elevated animate-slide-up">
          <nav
            className="container mx-auto px-4 py-4 flex flex-col gap-1"
            aria-label="Mobile navigation"
          >
            {NAV_LINKS.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className="px-4 py-3 rounded-md text-sm font-body font-medium text-foreground hover:bg-muted hover:text-accent [&.active]:text-accent [&.active]:bg-muted transition-smooth"
                data-ocid={`mobile-nav-${label.toLowerCase()}`}
              >
                {label}
              </Link>
            ))}
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 flex items-center justify-center gap-2 py-3 rounded-full bg-[#25D366] text-white text-sm font-semibold transition-smooth"
              data-ocid="mobile-whatsapp"
            >
              <SiWhatsapp className="w-4 h-4" />
              Chat on WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
