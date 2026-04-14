import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { createRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Heart, Quote, Sparkles, Star } from "lucide-react";
import { motion } from "motion/react";
import { Route as RootRoute } from "./__root";

export const Route = createRoute({
  getParentRoute: () => RootRoute,
  path: "/about",
  component: AboutPage,
});

const VALUES = [
  {
    icon: "🪡",
    title: "Quality Fabrics",
    desc: "Every dress in our collection is crafted from premium, breathable fabrics — carefully selected to feel luxurious and last through seasons.",
    gradient:
      "linear-gradient(135deg, oklch(0.96 0.04 345) 0%, oklch(0.95 0.03 355) 100%)",
  },
  {
    icon: "💸",
    title: "Affordable Prices",
    desc: "Looking beautiful shouldn't cost a fortune. We source directly and price fairly so every woman can dress the way she deserves.",
    gradient:
      "linear-gradient(135deg, oklch(0.96 0.04 220) 0%, oklch(0.95 0.03 230) 100%)",
  },
  {
    icon: "✨",
    title: "Personal Style",
    desc: "We believe fashion is deeply personal. Our team helps you find pieces that feel like you — not just trendy, but truly yours.",
    gradient:
      "linear-gradient(135deg, oklch(0.97 0.04 80) 0%, oklch(0.96 0.03 70) 100%)",
  },
];

const STATS = [
  { num: "500+", label: "Happy Customers" },
  { num: "100+", label: "Styles Available" },
  { num: "5★", label: "Average Rating" },
];

function AboutPage() {
  return (
    <div className="bg-background">
      {/* Hero */}
      <section
        className="relative overflow-hidden py-24 md:py-32"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.96 0.03 340) 0%, oklch(0.96 0.03 220) 50%, oklch(0.97 0.02 60) 100%)",
        }}
      >
        {/* Decorative blobs */}
        <div
          className="absolute -top-20 -right-20 w-80 h-80 rounded-full opacity-30 blur-3xl pointer-events-none"
          style={{ background: "oklch(0.85 0.14 345)" }}
        />
        <div
          className="absolute -bottom-16 -left-16 w-72 h-72 rounded-full opacity-20 blur-3xl pointer-events-none"
          style={{ background: "oklch(0.82 0.12 230)" }}
        />
        <div className="container mx-auto px-4 text-center max-w-3xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge
              variant="secondary"
              className="font-body text-xs tracking-widest uppercase px-4 py-1.5 mb-6 inline-flex items-center gap-1.5"
            >
              <Heart className="w-3 h-3 fill-accent text-accent" />
              Who We Are
            </Badge>
            <h1 className="font-display font-bold text-5xl md:text-6xl lg:text-7xl text-foreground leading-tight mb-6">
              About <span className="text-accent">Dress&nbsp;Boutique</span>
            </h1>
            <p className="font-body text-muted-foreground text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
              A local boutique born from a love of fashion and a belief that
              every woman deserves to feel effortlessly beautiful — every single
              day.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
              className="relative"
            >
              <div
                className="aspect-[4/5] rounded-2xl overflow-hidden shadow-xl"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.94 0.05 340) 0%, oklch(0.92 0.05 220) 100%)",
                }}
              >
                <img
                  src="/assets/generated/owner-portrait.dim_600x700.jpg"
                  alt="Dress Boutique Owner"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-5 -right-5 bg-card rounded-2xl px-5 py-3 shadow-lg border border-border/60">
                <p className="font-display font-bold text-foreground text-sm">
                  Est. 2019
                </p>
                <p className="text-xs text-muted-foreground font-body">
                  Mumbai, India
                </p>
              </div>
              <div className="absolute -top-4 -left-4 bg-card rounded-2xl p-3 shadow-lg border border-border/60">
                <Star className="w-5 h-5 text-accent fill-accent" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="space-y-6"
            >
              <div>
                <Sparkles className="w-6 h-6 text-accent mb-3" />
                <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4">
                  Our Story
                </h2>
              </div>
              <p className="font-body text-muted-foreground leading-relaxed text-base">
                Dress Boutique started in 2019 as a small passion project in a
                cosy corner of Mumbai. Founder Priya Sharma had one clear
                vision: to create a local boutique where women could discover
                beautiful, handpicked dresses without the overwhelm of big-box
                fashion stores.
              </p>
              <p className="font-body text-muted-foreground leading-relaxed text-base">
                What began with just 20 carefully curated pieces has blossomed
                into a beloved neighbourhood destination, carrying over 100
                styles — from breezy floral midis to elegant evening gowns. Each
                dress is chosen with the same personal care as the very first
                collection.
              </p>
              <p className="font-body text-muted-foreground leading-relaxed text-base">
                We believe fashion is deeply personal. That&apos;s why we remain
                just a WhatsApp message away — real humans, real advice, no bots
                — helping you find the dress that makes you feel unmistakably
                you.
              </p>
              {/* Stats */}
              <div className="flex items-center gap-8 pt-2">
                {STATS.map(({ num, label }) => (
                  <div key={label} className="text-center">
                    <p className="font-display font-bold text-2xl md:text-3xl text-foreground">
                      {num}
                    </p>
                    <p className="text-xs text-muted-foreground font-body mt-0.5">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values / Pillars */}
      <section
        className="py-20 border-y border-border"
        style={{ background: "oklch(0.975 0.012 60)" }}
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-3">
              What We Stand For
            </h2>
            <p className="text-muted-foreground font-body max-w-xl mx-auto">
              Three pillars that guide every dress we choose and every customer
              we serve.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {VALUES.map(({ icon, title, desc, gradient }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className="rounded-2xl p-8 border border-border/50 shadow-sm hover-lift"
                style={{ background: gradient }}
                data-ocid={`value-card-${i}`}
              >
                <span className="text-4xl mb-5 block">{icon}</span>
                <h3 className="font-display font-bold text-xl text-foreground mb-3">
                  {title}
                </h3>
                <p className="text-sm text-muted-foreground font-body leading-relaxed">
                  {desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Owner / Team Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-14"
          >
            <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-3">
              Meet the Founder
            </h2>
            <p className="text-muted-foreground font-body">
              The heart and soul behind Dress Boutique.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-card rounded-3xl border border-border/60 shadow-lg overflow-hidden"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
              {/* Image side */}
              <div
                className="relative min-h-64 md:min-h-80"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.92 0.06 345) 0%, oklch(0.90 0.06 220) 100%)",
                }}
              >
                <img
                  src="/assets/generated/owner-portrait.dim_600x700.jpg"
                  alt="Priya Sharma - Founder"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              {/* Bio side */}
              <div className="p-8 md:p-10 flex flex-col justify-center">
                <Quote className="w-8 h-8 text-accent/40 mb-4" />
                <p className="font-body text-muted-foreground leading-relaxed mb-6 italic text-base">
                  &ldquo;I wanted every woman who walked through our doors — or
                  messaged us on WhatsApp — to feel like she had a personal
                  stylist and a trusted friend in one.&rdquo;
                </p>
                <div>
                  <p className="font-display font-bold text-xl text-foreground">
                    Priya Sharma
                  </p>
                  <p className="text-sm text-accent font-body font-medium mt-0.5">
                    Founder & Head Buyer
                  </p>
                  <p className="text-sm text-muted-foreground font-body mt-3 leading-relaxed">
                    With over a decade of experience in fashion retail, Priya
                    built Dress Boutique on the belief that beautiful dresses
                    should be accessible, personal, and joyful.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-20 border-t border-border"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.95 0.04 345) 0%, oklch(0.95 0.04 220) 100%)",
        }}
      >
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-5xl mb-6 block">👗</span>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4">
              Ready to Find Your Dream Dress?
            </h2>
            <p className="font-body text-muted-foreground text-lg mb-8 leading-relaxed">
              Browse our handpicked collection and discover styles that speak to
              you. Every dress is just a tap away.
            </p>
            <Link to="/products" data-ocid="about-cta-products">
              <Button
                size="lg"
                className="font-display font-semibold px-10 py-6 text-base rounded-xl shadow-md hover-lift"
              >
                Shop Our Collection
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
