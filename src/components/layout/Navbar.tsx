const navLinks = [
  { label: "Home", href: "#", active: true },
  { label: "Menu", href: "#flavors" },
  { label: "Our Story", href: "#story" },
];

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-transparent flex items-center px-12 py-6 max-w-full">
      {/* Logo — left */}
      <div className="text-2xl font-light tracking-tighter text-on-surface font-headline">
        Salted Shore
      </div>

      {/* Nav links — centered */}
      <div className="hidden md:flex flex-1 justify-center">
        <div className="flex space-x-8 font-label uppercase tracking-[0.12em] text-[0.6875rem]">
          {navLinks.map((link) => (
            <a
              key={link.label}
              className={
                link.active
                  ? "text-secondary font-semibold border-b-2 border-secondary pb-1"
                  : "text-on-surface/70 hover:text-secondary transition-colors"
              }
              href={link.href}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>

      {/* CTA — right */}
      <button className="hidden md:block bg-secondary text-on-secondary px-8 py-3 rounded-full hover:scale-105 transition-transform duration-300 font-label uppercase tracking-[0.12em] text-[0.6875rem] font-bold">
        Contact Us
      </button>

      {/* Mobile hamburger */}
      <button className="md:hidden ml-auto" aria-label="Open menu">
        <span className="material-symbols-outlined text-on-surface">menu</span>
      </button>
    </nav>
  );
}
