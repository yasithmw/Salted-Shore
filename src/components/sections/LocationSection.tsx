import { useEffect, useRef, useState } from "react";
import { testimonials } from "../../data/testimonials";

const galleryImages = [
  {
    src: "https://lh3.googleusercontent.com/aida/ADBb0uhqBDfkuxTBc4dx0E_LI-tNiwO2-CF3YU0-ATqKp5B79CG2v05PgZt9oilGWmou5BEvr1BaMoDs4cwQPm_sd3qe5pG0aTQHiflbDx2TQ8o5eG8Yln4iqXhWf_Zbhi66sC7qg08_RBaQR1d5O_3uF9se_MKOBXGg69hVi-KFU0RW6iIVL-3g6tj-V6aK-m2wOmbmYqDV3f4Gp2MYkM5EVMFJjjMdfcnpmFibpFF4demfo4VzG5TV8dXcWHN0hJ-WznmhqQfIcWVnMko",
    alt: "black and white artistic photograph of a lone surfer walking along a misty Sri Lankan beach at dawn",
    caption: "Our selection",
    filter: "brightness-90",
  },
  {
    src: "https://lh3.googleusercontent.com/aida/ADBb0ujFdmK_pdLbNXfgMqGa-kEo7-8ImCZAEa68CflR84yz8lFZXJvCNvuVkRd1MZ7tPP9DEH59IanlO6fDPERym83rorRlYYyf3OIwcHhbjROOkXulJ1b_UpDAHIus1yAyce25uEpjT2ArAUETowWrsDakl0N78_KSq85CHUbCVn4aNlwb_qyfpBeQljepoxM7lntjdCNuRRWosTn3u2sxIDAPXxjUUifT2iLbwvtwNzw_fyUJh-qtIq8v1w21ibDyqEG4bxJDuRWG_4I",
    alt: "close-up of vibrant tropical greenery with large waxy leaves in deep emerald tones",
    caption: "Topped with love",
    offsetClass: "pt-12",
  },
  {
    src: "https://lh3.googleusercontent.com/aida/ADBb0uifqelUGhPnhiGNBKws17-e2kEsbhhWzYZxtvob03Uk8-fyy4M9n0oLB5r7Yx1jSTJpZxsFmiD4rz3lA1w6gts9NzFehujbcuW3I5rohegbq9kKVEGO8FGck0EwNdVYzHQpej6lKJpNCh7HvvEAM4xLfXyeA4d7lt_8qKtToYQNmc7oDHfFQNdxClE4yzXwsQYI6AEfjparJPvn--rh4lzTD0f8XndjeKvAANe8hpobeE_VrZSmFfr1BSRmlYNYbXN6-_CnpG1v76s",
    alt: "hand-painted ceramic sign that says Salted Shore in elegant script leaning against a textured plaster wall",
    caption: "Roman holiday",
  },
  {
    src: "https://lh3.googleusercontent.com/aida/ADBb0ujrTrCkMi-JvlFqoR2uPP8IPmEXyvAa7FdWs-25y7AQ5vM3S6O5JjRzrrAPibvslUVnuMy4PKrCms42N3YQ4uCWrcOxSLmk5anyvgsCp_jqzBHTdTgt2G1g6h9nJKoqvIabZOzA8PWaS3iK5oYHQ4OcdPBLz3zRjvZT-CwZTMuhs1fCdBaAzoUZUMgxPMpaOndrIN-HBerK4uFr2KmwaVOizZNY9z4mh2G83mziYcCMWnXEyqIhlwc_yC3MbyA8AGUDqBDrXDvTL1o",
    alt: "aerial view of a small batch of gelato being churned in a vintage-style machine with visible swirls of cream",
    caption: "The classic scoop",
    filter: "contrast-125",
    offsetClass: "pb-12",
  },
];

const avatarColors = [
  "bg-primary",
  "bg-secondary",
  "bg-tertiary",
  "bg-primary-container text-on-primary-container",
  "bg-tertiary-container text-on-tertiary-container",
];

function TestimonialCard({
  name,
  location,
  quote,
  initials,
  index,
}: {
  name: string;
  location: string;
  quote: string;
  initials: string;
  index: number;
}) {
  const colorClass = avatarColors[index % avatarColors.length];

  return (
    <div className="flex-shrink-0 w-[320px] md:w-[360px] p-6 md:p-8 bg-surface rounded-lg shadow-sm snap-start">
      <div className="flex items-center space-x-3 mb-4">
        <div
          className={`w-10 h-10 rounded-full ${colorClass} flex items-center justify-center text-sm font-bold text-on-primary`}
        >
          {initials}
        </div>
        <div>
          <p className="font-bold text-sm">{name}</p>
          <p className="text-xs text-on-surface/50">{location}</p>
        </div>
      </div>

      {/* Stars */}
      <div className="flex space-x-0.5 mb-3">
        {[...Array(5)].map((_, i) => (
          <span
            key={i}
            className="material-symbols-outlined text-secondary text-base"
            style={{
              fontVariationSettings: '"FILL" 1, "wght" 400, "GRAD" 0, "opsz" 20',
            }}
          >
            star
          </span>
        ))}
      </div>

      <p className="text-sm italic leading-relaxed text-on-surface/80">
        "{quote}"
      </p>
    </div>
  );
}

export default function LocationSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  /* Auto-scroll effect */
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let animationId: number;
    let lastTimestamp: number | null = null;
    const speed = 0.5; // px per frame at 60fps

    const step = (timestamp: number) => {
      if (lastTimestamp !== null && !isPaused) {
        const delta = timestamp - lastTimestamp;
        container.scrollLeft += speed * (delta / 16);

        // Reset when we've scrolled through the first set
        const halfScroll = container.scrollWidth / 2;
        if (container.scrollLeft >= halfScroll) {
          container.scrollLeft = 0;
        }
      }
      lastTimestamp = timestamp;
      animationId = requestAnimationFrame(step);
    };

    animationId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationId);
  }, [isPaused]);

  // Duplicate testimonials for seamless loop
  const doubled = [...testimonials, ...testimonials];

  return (
    <section id="location" className="bg-surface-container-low">
      <div className="flex flex-col md:flex-row min-h-[819px]">
        {/* Left: Info */}
        <div className="w-full md:w-1/2 p-12 md:p-24 flex flex-col justify-center">
          <div className="max-w-md">
            <h2 className="font-headline text-4xl md:text-5xl mb-12 leading-tight">
              Visit us by the break.
            </h2>

            <div className="space-y-8 mb-16">
              <div>
                <p className="font-label text-secondary text-[10px] uppercase tracking-widest mb-2">
                  Address
                </p>
                <p className="font-body text-lg">
                  42nd Beach Road, <br />
                  Weligama, Sri Lanka
                </p>
              </div>
              <div>
                <p className="font-label text-secondary text-[10px] uppercase tracking-widest mb-2">
                  Daily Hours
                </p>
                <p className="font-body text-lg">11:00 AM — 10:00 PM</p>
              </div>
            </div>

            <a className="inline-flex items-center space-x-4 group" href="#">
              <span className="font-label uppercase tracking-[0.2em] text-xs font-bold border-b border-on-surface pb-1">
                Find the shore
              </span>
              <span className="material-symbols-outlined text-xl group-hover:translate-x-2 transition-transform">
                east
              </span>
            </a>
          </div>
        </div>

        {/* Right: Image grid */}
        <div className="w-full md:w-1/2 grid grid-cols-2 grid-rows-2 gap-4 p-4 md:p-8">
          {galleryImages.map((img) => (
            <div
              key={img.caption}
              className={`relative group overflow-hidden ${img.offsetClass ?? ""}`}
            >
              <img
                alt={img.alt}
                className={`w-full h-full object-cover ${img.filter ? `filter ${img.filter}` : ""}`}
                src={img.src}
              />
              <div className="absolute bottom-4 left-4">
                <p className="text-surface font-headline italic text-sm">
                  {img.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials strip */}
      <div className="py-16 md:py-24">
        <div className="px-12 md:px-24 mb-10">
          <p className="font-label text-secondary text-[10px] uppercase tracking-widest mb-3">
            What people are saying
          </p>
          <h3 className="font-headline text-2xl md:text-3xl leading-snug">
            Loved by locals &amp; travellers alike.
          </h3>
        </div>

        <div
          ref={scrollRef}
          className="flex space-x-5 overflow-x-auto px-12 md:px-24 pb-4 scrollbar-hide snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          {doubled.map((t, i) => (
            <TestimonialCard
              key={`${t.name}-${i}`}
              name={t.name}
              location={t.location}
              quote={t.quote}
              initials={t.initials}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
