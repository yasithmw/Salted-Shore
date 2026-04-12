import type { Flavor } from "../../data/flavors";

interface FlavorCardProps extends Flavor {
  className?: string;
}

export default function FlavorCard({
  label,
  title,
  description,
  imageSrc,
  imageAlt,
  className = "",
}: FlavorCardProps) {
  return (
    <div className={`flex flex-col items-center text-center ${className}`}>
      <div className="w-full aspect-[4/5] mb-12 overflow-hidden rounded-lg">
        <img
          alt={imageAlt}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
          src={imageSrc}
        />
      </div>
      <span className="font-label text-secondary text-[10px] uppercase tracking-widest mb-4">
        {label}
      </span>
      <h3 className="font-headline text-3xl mb-4">{title}</h3>
      <p className="font-body text-on-surface/60 text-sm leading-relaxed max-w-xs">
        {description}
      </p>
    </div>
  );
}
