export default function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex flex-col justify-end p-12 md:p-24">
      {/* Background video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          src="/Hero2.mp4"
        />
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
      {/* <div className="absolute bottom-6 right-6 z-10">
        <div className="w-32 h-32 rounded-full overflow-hidden flex items-center justify-center animate-spin-slow">
          <img
            alt="Salted Shore Logo Stamp"
            className="w-full h-full object-contain opacity-60"
            src="/logo stamo 2.svg"
          />
        </div>
      </div> */}
    </section>
  );
}
