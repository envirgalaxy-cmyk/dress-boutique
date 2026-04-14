import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { createRoute } from "@tanstack/react-router";
import { Clock, ExternalLink, Mail, MapPin, Phone } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { SiWhatsapp } from "react-icons/si";
import { toast } from "sonner";
import { Route as RootRoute } from "./__root";

export const Route = createRoute({
  getParentRoute: () => RootRoute,
  path: "/contact",
  component: ContactPage,
});

const CONTACT_INFO = [
  {
    icon: MapPin,
    label: "Visit Us",
    value: "123 Fashion Street, Mumbai, India",
    href: "https://maps.google.com/maps/dir/?api=1&destination=19.0760,72.8777",
  },
  {
    icon: Phone,
    label: "Call Us",
    value: "+91-98765-43210",
    href: "tel:+919876543210",
  },
  {
    icon: Mail,
    label: "Email Us",
    value: "hello@dressboutique.com",
    href: "mailto:hello@dressboutique.com",
  },
  {
    icon: Clock,
    label: "Opening Hours",
    value: "Mon – Sat: 10:00 AM – 8:00 PM",
    href: undefined,
  },
];

// OpenStreetMap embed for Mumbai (lat 19.0760, lng 72.8777)
const OSM_SRC =
  "https://www.openstreetmap.org/export/embed.html?bbox=72.8577%2C18.9960%2C72.8977%2C19.1560&layer=mapnik&marker=19.0760%2C72.8777";

const DIRECTIONS_URL =
  "https://maps.google.com/maps/dir/?api=1&destination=19.0760,72.8777&destination_place_id=Mumbai";

function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    await new Promise((res) => setTimeout(res, 800));
    setSubmitting(false);
    toast.success("Message sent! We'll get back to you soon.", {
      duration: 5000,
      description: `Thanks, ${formData.name}! We'll reply to ${formData.email}.`,
    });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="bg-background">
      {/* Page header */}
      <section className="bg-card border-b border-border py-14">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <p className="text-xs text-muted-foreground font-body uppercase tracking-widest mb-2">
              We&apos;d Love to Hear From You
            </p>
            <h1 className="font-display font-bold text-4xl md:text-5xl text-foreground mb-3">
              Find Us
            </h1>
            <p className="text-muted-foreground font-body max-w-lg">
              Stop by our boutique, give us a call, or drop a message —
              we&apos;re always happy to help you find your perfect dress.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left: Contact info + WhatsApp + Map */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              {/* Info cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {CONTACT_INFO.map(({ icon: Icon, label, value, href }, i) => (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.07 }}
                    className="bg-card rounded-xl p-5 border border-border/60 hover-lift"
                    data-ocid={`contact-info-${label.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-accent/10 shrink-0">
                        <Icon className="w-4 h-4 text-accent" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs text-muted-foreground font-body uppercase tracking-wider mb-1">
                          {label}
                        </p>
                        {href ? (
                          <a
                            href={href}
                            target={
                              href.startsWith("http") ? "_blank" : undefined
                            }
                            rel={
                              href.startsWith("http")
                                ? "noopener noreferrer"
                                : undefined
                            }
                            className="text-sm font-body text-foreground hover:text-accent transition-smooth break-words"
                          >
                            {value}
                          </a>
                        ) : (
                          <p className="text-sm font-body text-foreground">
                            {value}
                          </p>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* WhatsApp CTA */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="rounded-2xl p-6 border border-[#25D366]/25 bg-[#25D366]/5"
              >
                <h3 className="font-display font-semibold text-foreground mb-2 text-lg">
                  Prefer WhatsApp?
                </h3>
                <p className="text-sm text-muted-foreground font-body mb-4">
                  Chat with us directly for the fastest response — we usually
                  reply within minutes!
                </p>
                <a
                  href="https://wa.me/919876543210?text=Hi!%20I'd%20like%20to%20know%20more%20about%20your%20dresses%20%F0%9F%92%90"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#25D366] text-white font-semibold font-body text-sm transition-smooth hover:bg-[#20bc5a] hover:shadow-md active:scale-95"
                  data-ocid="contact-whatsapp-cta"
                >
                  <SiWhatsapp className="w-4 h-4" />
                  Chat on WhatsApp
                </a>
              </motion.div>

              {/* OpenStreetMap embed */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 }}
                className="rounded-2xl overflow-hidden border border-border"
                data-ocid="contact-map"
              >
                <iframe
                  src={OSM_SRC}
                  width="100%"
                  height="290"
                  style={{ border: 0 }}
                  loading="lazy"
                  title="Dress Boutique Location — Mumbai"
                  aria-label="Interactive map showing our store location in Mumbai"
                />
                <div className="bg-card px-4 py-3 border-t border-border flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground font-body">
                    <MapPin className="w-3 h-3" />
                    <span>123 Fashion Street, Mumbai</span>
                  </div>
                  <a
                    href={DIRECTIONS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold font-body bg-accent text-accent-foreground transition-smooth hover:opacity-90"
                    data-ocid="contact-directions-btn"
                  >
                    <ExternalLink className="w-3 h-3" />
                    Get Directions
                  </a>
                </div>
              </motion.div>
            </motion.div>

            {/* Right: Contact form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="bg-card rounded-2xl border border-border/60 p-8 sticky top-8">
                <h2 className="font-display font-bold text-2xl text-foreground mb-1">
                  Send a Message
                </h2>
                <p className="text-sm text-muted-foreground font-body mb-7">
                  We&apos;ll get back to you within 24 hours.
                </p>
                <form
                  onSubmit={handleSubmit}
                  className="space-y-5"
                  data-ocid="contact-form"
                >
                  <div className="space-y-2">
                    <Label
                      htmlFor="name"
                      className="font-body text-sm font-medium"
                    >
                      Your Name
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Priya Sharma"
                      required
                      className="rounded-lg font-body"
                      data-ocid="contact-name-input"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label
                      htmlFor="email"
                      className="font-body text-sm font-medium"
                    >
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="priya@example.com"
                      required
                      className="rounded-lg font-body"
                      data-ocid="contact-email-input"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label
                      htmlFor="message"
                      className="font-body text-sm font-medium"
                    >
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Hi! I'm looking for a floral midi dress for a wedding. Do you have something in size M in pastel colours?"
                      rows={6}
                      required
                      className="rounded-lg font-body resize-none"
                      data-ocid="contact-message-input"
                    />
                  </div>
                  <Button
                    type="submit"
                    disabled={submitting}
                    className="w-full rounded-full font-body font-semibold py-6"
                    data-ocid="contact-submit-btn"
                  >
                    {submitting ? "Sending…" : "Send Message"}
                  </Button>
                </form>

                {/* Divider */}
                <div className="flex items-center gap-3 my-6">
                  <div className="flex-1 h-px bg-border" />
                  <span className="text-xs text-muted-foreground font-body">
                    or reach us directly
                  </span>
                  <div className="flex-1 h-px bg-border" />
                </div>

                {/* Quick contact actions */}
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href="tel:+919876543210"
                    className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-border text-sm font-body font-medium text-foreground transition-smooth hover:bg-muted"
                    data-ocid="contact-call-btn"
                  >
                    <Phone className="w-4 h-4 text-accent" />
                    Call Us
                  </a>
                  <a
                    href="mailto:hello@dressboutique.com"
                    className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-border text-sm font-body font-medium text-foreground transition-smooth hover:bg-muted"
                    data-ocid="contact-email-btn"
                  >
                    <Mail className="w-4 h-4 text-accent" />
                    Email Us
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
