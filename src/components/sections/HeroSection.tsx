export default function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex flex-col justify-end p-12 md:p-24">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          alt="A premium, high-fidelity painterly illustration of a Sri Lankan sea shore and sea view. The sea is a prominent Aqua Wave color with crisp white breaking waves."
          className="w-full h-full object-cover"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDteFBW0Yzrs2ZV3DffDEsVbBKGhUEW_pyn11rvBwIiBYrsUDTapfQRqO9r6J02UDJIHsFgAfuFnKivhhKbVY9vkL15jitELsVzI__79gX0rv7eJV5L98WAOsyolT9IPKZWOcyXbBs04RRIdKB4TTawcUKBifHj6_S_WLflWF-Rp3On8WD0sYlAWDYyykxsWeLGXwX3SMEHZyueYUgYBDFyjhM4fWVUsOaP6x17DnHTFSPaQWZpUsnKFhff6rawvuQ6atxjyvq4NMP3"
        />
        <div className="absolute inset-0 grainy-overlay pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl">
        <div className="mb-6">
          <span className="font-label uppercase tracking-[0.2em] text-xs text-white/90 block mb-4">
            Creamery &middot; Weligama, Sri Lanka
          </span>
          <h1 className="font-headline text-6xl md:text-8xl font-light tracking-tight text-white leading-[1.1] mb-8">
            The shore, <br />
            in a scoop.
          </h1>
          <p className="font-body text-xl text-white/80 max-w-md leading-relaxed mb-12">
            Slow-churned, small batch gelato inspired by the rhythm of the
            Indian Ocean and the soul of the island.
          </p>
          <div className="flex items-center space-x-8">
            <button className="bg-secondary text-on-secondary px-10 py-4 rounded-full font-label uppercase tracking-widest text-xs font-bold hover:scale-105 transition-transform">
              Find your scoop
            </button>
          </div>
        </div>
      </div>

      {/* Spinning stamp */}
      <div className="absolute bottom-12 right-12 md:bottom-24 md:right-24 z-10">
        <div className="w-32 h-32 rounded-full overflow-hidden flex items-center justify-center animate-spin-slow">
          <img
            alt="Salted Shore Logo Stamp"
            className="w-full h-full object-contain opacity-60"
            src="/logo stamp.jpg"
          />
        </div>
      </div>
    </section>
  );
}
