import ProductCard from "@/components/ProductCard";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useProducts } from "@/hooks/useProducts";
import { createRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Heart,
  MessageCircle,
  Sparkles,
  Star,
  Truck,
} from "lucide-react";
import { motion } from "motion/react";
import { SiWhatsapp } from "react-icons/si";
import { Route as RootRoute } from "./__root";

export const Route = createRoute({
  getParentRoute: () => RootRoute,
  path: "/",
  component: HomePage,
});

const CATEGORIES = [
  "All",
  "Midi",
  "Maxi",
  "Casual",
  "Festive",
  "Evening",
  "Wrap",
] as const;
const WHATSAPP_NUMBER = "919876543210";

const VALUE_PROPS = [
  {
    icon: Truck,
    label: "Free Delivery",
    desc: "On orders above ₹1999 within Mumbai",
  },
  {
    icon: Star,
    label: "Handpicked Quality",
    desc: "Every piece curated with care and love",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp Support",
    desc: "Chat with us directly for instant help",
  },
] as const;

const TESTIMONIALS = [
  {
    id: "t1",
    name: "Priya Sharma",
    review:
      "The Blooming Garden dress is absolutely stunning! Fits perfectly and the quality is amazing.",
    rating: 5,
    dress: "Blooming Garden Midi Dress",
  },
  {
    id: "t2",
    name: "Ananya Mehta",
    review:
      "Super fast delivery and the fabric feels so luxurious. I get compliments everywhere I go!",
    rating: 5,
    dress: "Celestial Slip Dress",
  },
  {
    id: "t3",
    name: "Kavita Nair",
    review:
      "Ordered for my sister's wedding — the Aurora Balloon Sleeve was a total showstopper!",
    rating: 5,
    dress: "Aurora Balloon Sleeve Dress",
  },
] as const;

function StarRating({ count }: { count: number }) {
  const stars = ["s1", "s2", "s3", "s4", "s5"] as const;
  return (
    <div className="flex gap-0.5">
      {stars.slice(0, count).map((s) => (
        <Star key={s} className="w-3.5 h-3.5 fill-accent text-accent" />
      ))}
    </div>
  );
}

function HomePage() {
  const { data: products, isLoading } = useProducts();
  const featured = products?.filter((p) => p.inStock).slice(0, 4) ?? [];
  const whatsappGeneralUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi! I'd love to browse your dress collection. Can you share what's available?")}`;

  return (
    <div className="flex flex-col">
      {/* ── Hero ── */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden">
        {/* Pink-to-sky gradient background matching design */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.88 0.08 0) 0%, oklch(0.92 0.06 340) 30%, oklch(0.9 0.1 230) 70%, oklch(0.88 0.12 220) 100%)",
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_70%_50%,oklch(0.95_0.03_60/0.6),transparent)]" />

        <div className="container mx-auto px-4 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center py-16 lg:py-24">
          {/* Left — text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="space-y-7"
          >
            <Badge
              variant="secondary"
              className="font-body text-xs tracking-widest uppercase px-4 py-1.5 border border-border/60"
            >
              <Sparkles className="w-3 h-3 mr-1.5" />
              New Arrivals Daily
            </Badge>

            <div>
              <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3">
                New Arrivals:
              </p>
              <h1 className="font-display font-bold text-5xl md:text-6xl lg:text-7xl text-foreground leading-[1.0] tracking-tight">
                Effortless
                <br />
                <span
                  style={{
                    background:
                      "linear-gradient(135deg, oklch(0.55 0.18 345), oklch(0.5 0.14 230))",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Elegance
                </span>
              </h1>
            </div>

            <p className="font-body text-muted-foreground text-lg max-w-md leading-relaxed">
              Discover our curated collection of dreamy dresses for every
              occasion — from breezy daywear to showstopping festive looks.
            </p>

            <div className="flex items-center gap-4 flex-wrap">
              <Link to="/products">
                <Button
                  size="lg"
                  className="rounded-full font-body font-semibold px-8 gap-2 shadow-lg"
                  data-ocid="hero-shop-cta"
                >
                  Shop Now
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link to="/about">
                <Button
                  variant="ghost"
                  size="lg"
                  className="rounded-full font-body px-8 hover:bg-card/60"
                >
                  Our Story
                </Button>
              </Link>
            </div>

            {/* Social proof */}
            <div className="flex items-center gap-3 pt-2">
              <div className="flex -space-x-2">
                {(["av1", "av2", "av3", "av4"] as const).map((id) => (
                  <div
                    key={id}
                    className="w-8 h-8 rounded-full bg-card border-2 border-background shadow-sm overflow-hidden"
                  >
                    <div
                      className="w-full h-full"
                      style={{
                        background:
                          "linear-gradient(135deg, oklch(0.88 0.08 345), oklch(0.88 0.08 220))",
                      }}
                    />
                  </div>
                ))}
              </div>
              <div>
                <div className="flex gap-0.5 mb-0.5">
                  {(["st1", "st2", "st3", "st4", "st5"] as const).map((id) => (
                    <Star
                      key={id}
                      className="w-3 h-3 fill-accent text-accent"
                    />
                  ))}
                </div>
                <p className="text-xs font-body text-muted-foreground">
                  Loved by{" "}
                  <span className="font-semibold text-foreground">
                    500+ customers
                  </span>
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right — hero image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.93 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-md lg:max-w-lg">
              {/* Decorative glow */}
              <div
                className="absolute -inset-6 rounded-3xl blur-2xl"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.85 0.12 345/0.3), oklch(0.85 0.12 220/0.3))",
                }}
              />
              <img
                src="/assets/generated/hero-dress-model.dim_1200x1500.jpg"
                alt="Elegant dress collection"
                className="relative w-full rounded-3xl shadow-elevated object-cover aspect-[3/4]"
              />
              {/* Floating loved badge */}
              <motion.div
                initial={{ opacity: 0, y: 20, x: -10 }}
                animate={{ opacity: 1, y: 0, x: 0 }}
                transition={{ delay: 0.9, duration: 0.5 }}
                className="absolute -bottom-5 -left-5 bg-card rounded-2xl p-4 shadow-elevated border border-border/60"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-accent/10 flex items-center justify-center">
                    <Heart className="w-4 h-4 text-accent fill-accent/80" />
                  </div>
                  <div>
                    <p className="text-[10px] text-muted-foreground font-body uppercase tracking-wider">
                      Loved by
                    </p>
                    <p className="text-sm font-display font-bold text-foreground">
                      500+ Customers
                    </p>
                  </div>
                </div>
              </motion.div>
              {/* Floating discount badge */}
              <motion.div
                initial={{ opacity: 0, y: -20, x: 10 }}
                animate={{ opacity: 1, y: 0, x: 0 }}
                transition={{ delay: 1.1, duration: 0.5 }}
                className="absolute -top-3 -right-3 bg-accent text-accent-foreground rounded-2xl px-4 py-2 shadow-elevated"
              >
                <p className="text-xs font-body font-semibold">Up to 20% OFF</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Categories strip ── */}
      <section className="bg-card border-y border-border py-5">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 overflow-x-auto scrollbar-hide pb-1">
            {CATEGORIES.map((cat, i) => (
              <Link key={cat} to="/products" className="shrink-0">
                <Badge
                  variant={i === 0 ? "default" : "secondary"}
                  className="cursor-pointer hover:bg-accent hover:text-accent-foreground transition-smooth px-4 py-1.5 font-body text-xs tracking-wide"
                  data-ocid={`category-${cat.toLowerCase()}`}
                >
                  {cat}
                </Badge>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured Products ── */}
      <section className="bg-background py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-end justify-between mb-10"
          >
            <div>
              <p className="text-xs text-muted-foreground font-body uppercase tracking-widest mb-2">
                Just In
              </p>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground">
                New Products
              </h2>
            </div>
            <Link
              to="/products"
              className="hidden sm:flex items-center gap-1 text-sm text-accent font-body font-medium hover:underline"
              data-ocid="view-all-products"
            >
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          {isLoading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {(["sk1", "sk2", "sk3", "sk4"] as const).map((sk) => (
                <div key={sk} className="space-y-3">
                  <Skeleton className="aspect-[3/4] rounded-xl w-full" />
                  <Skeleton className="h-4 w-3/4" />
                  <Skeleton className="h-4 w-1/2" />
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {featured.map((product, i) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                >
                  <ProductCard product={product} />
                </motion.div>
              ))}
            </div>
          )}

          <div className="mt-10 text-center sm:hidden">
            <Link to="/products">
              <Button variant="outline" className="rounded-full font-body px-8">
                View All Dresses
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA Banner — Shop the Collection ── */}
      <section className="relative overflow-hidden py-20 md:py-28">
        {/* Pink gradient background */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.82 0.10 345) 0%, oklch(0.78 0.12 350) 40%, oklch(0.82 0.09 320) 70%, oklch(0.86 0.08 230) 100%)",
          }}
        />
        {/* Decorative circles */}
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-white/10 blur-3xl" />

        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto space-y-6"
          >
            <Badge className="bg-white/20 text-white border-white/30 font-body text-xs tracking-widest uppercase px-4 py-1.5">
              <Sparkles className="w-3 h-3 mr-1.5" />
              Limited Collection
            </Badge>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-white leading-tight">
              Shop the Collection
            </h2>
            <p className="font-body text-white/80 text-lg max-w-lg mx-auto">
              Explore our full range of handpicked dresses — every piece
              designed to make you feel beautiful, confident, and effortlessly
              chic.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <Link to="/products">
                <Button
                  size="lg"
                  className="rounded-full font-body font-semibold px-10 gap-2 bg-white text-foreground hover:bg-white/90 shadow-lg"
                  data-ocid="collection-cta"
                >
                  Browse All Dresses
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <a
                href={whatsappGeneralUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-3 rounded-full bg-[#25D366] text-white font-semibold font-body text-sm shadow-lg transition-smooth hover:opacity-90 hover:-translate-y-0.5"
                data-ocid="banner-whatsapp-cta"
              >
                <SiWhatsapp className="w-5 h-5" />
                Chat on WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Value Props ── */}
      <section className="bg-muted/30 py-16 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            {VALUE_PROPS.map(({ icon: Icon, label, desc }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="flex flex-col items-center gap-4"
              >
                <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center">
                  <Icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-display font-semibold text-foreground">
                  {label}
                </h3>
                <p className="text-sm text-muted-foreground font-body">
                  {desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="bg-background py-16 md:py-24 border-t border-border">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <p className="text-xs text-muted-foreground font-body uppercase tracking-widest mb-2">
              Reviews
            </p>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground">
              What Customers Say
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map(({ id, name, review, rating, dress }, i) => (
              <motion.div
                key={id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className="bg-card rounded-2xl p-6 border border-border/60 shadow-card hover-lift"
              >
                <StarRating count={rating} />
                <p className="mt-4 font-body text-sm text-muted-foreground leading-relaxed line-clamp-3">
                  &ldquo;{review}&rdquo;
                </p>
                <div className="mt-5 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-accent/30 to-secondary/40 flex items-center justify-center font-display font-bold text-sm text-accent">
                    {name[0]}
                  </div>
                  <div>
                    <p className="font-display font-semibold text-sm text-foreground">
                      {name}
                    </p>
                    <p className="text-xs text-muted-foreground font-body">
                      {dress}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WhatsApp floating CTA ── */}
      <motion.a
        href={whatsappGeneralUrl}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.5, duration: 0.4 }}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 bg-[#25D366] text-white font-semibold font-body text-sm px-5 py-3 rounded-full shadow-elevated transition-smooth hover:opacity-90 hover:-translate-y-1 hover:shadow-2xl"
        aria-label="Chat on WhatsApp"
        data-ocid="floating-whatsapp-btn"
      >
        <SiWhatsapp className="w-5 h-5" />
        <span className="hidden sm:inline">Chat with us</span>
      </motion.a>
    </div>
  );
}
