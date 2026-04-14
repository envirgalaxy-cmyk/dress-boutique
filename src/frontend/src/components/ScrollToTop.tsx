import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={handleClick}
      className="fixed bottom-20 right-6 z-50 p-3 rounded-full bg-accent text-accent-foreground shadow-elevated transition-smooth hover:opacity-90 hover:shadow-lg hover:-translate-y-0.5 animate-fade-in"
      aria-label="Scroll to top"
      data-ocid="scroll-to-top"
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
}
