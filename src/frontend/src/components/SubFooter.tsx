export default function SubFooter() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined"
      ? window.location.hostname
      : "dressboutique.in";
  const caffeineUrl = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`;

  return (
    <div
      className="bg-muted/40 border-t border-border py-4"
      data-ocid="subfooter"
    >
      <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-muted-foreground font-body">
        <p>© {year} Dress Boutique. All rights reserved.</p>
        <p>
          Built with love using{" "}
          <a
            href={caffeineUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline transition-smooth"
          >
            caffeine.ai
          </a>
        </p>
      </div>
    </div>
  );
}
