const footerLinks = [
  { label: "Sustainability", href: "#" },
  { label: "Wholesale", href: "#" },
  { label: "Careers", href: "#" },
  { label: "Privacy", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-on-surface text-surface flex flex-col items-center px-12 py-16 w-full">
      <div className="w-full flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
        <div className="text-lg font-headline text-surface">Salted Shore</div>

        <div className="flex space-x-8 font-label uppercase tracking-[0.12em] text-[0.6875rem]">
          {footerLinks.map((link) => (
            <a
              key={link.label}
              className="text-surface/60 hover:text-surface transition-opacity"
              href={link.href}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex space-x-6">
          <a
            className="text-surface hover:opacity-80 transition-opacity"
            href="#"
            aria-label="Website"
          >
            <span className="material-symbols-outlined">public</span>
          </a>
          <a
            className="text-surface hover:opacity-80 transition-opacity"
            href="#"
            aria-label="Instagram"
          >
            <span className="material-symbols-outlined">camera</span>
          </a>
        </div>
      </div>

      <div className="w-full pt-8 border-t border-surface/10 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="font-label uppercase tracking-[0.12em] text-[0.6875rem] text-surface/40">
          &copy; 2024 Salted Shore Artisan Gelato. Handcrafted in Sri Lanka.
        </p>
        <div className="flex items-center space-x-2 text-surface/40">
          <span className="material-symbols-outlined text-sm">
            location_on
          </span>
          <p className="font-label uppercase tracking-[0.12em] text-[0.6875rem]">
            Weligama &middot; Colombo
          </p>
        </div>
      </div>
    </footer>
  );
}
