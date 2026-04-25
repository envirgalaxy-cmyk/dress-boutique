export default function SubFooter() {
  const year = new Date().getFullYear();

  return (
    <div
      className="bg-muted/40 border-t border-border py-4"
      data-ocid="subfooter"
    >
      <div className="container mx-auto px-4 flex items-center justify-center text-center">
        <p className="mb-0 text-xs text-muted-foreground font-body leading-relaxed">
          &copy; {year} Dress Boutique. All rights reserved. Designed &amp;
          Developed by{" "}
          <a
            href="https://sage-meringue-21784f.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline transition-smooth"
          >
            Jay Patel
          </a>{" "}
          (
          <a
            href="https://envirgalaxy.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline transition-smooth"
          >
            EnvirGalaxy Consultancy
          </a>
          )
        </p>
      </div>
    </div>
  );
}
