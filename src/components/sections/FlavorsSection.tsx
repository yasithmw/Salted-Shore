import { flavors } from "../../data/flavors";
import FlavorCard from "../ui/FlavorCard";

export default function FlavorsSection() {
  return (
    <section id="flavors" className="py-32 px-8 md:px-12 bg-surface">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-stretch gap-16 md:gap-0">
          {flavors.map((flavor, index) => {
            const isFirst = index === 0;
            const isMiddle = index === 1;
            const isLast = index === flavors.length - 1;

            let wrapperClass = "flex-1";
            if (isFirst) wrapperClass += " md:pr-16 md:border-r border-outline-variant/30";
            if (isMiddle)
              wrapperClass +=
                " md:px-16 md:border-r border-outline-variant/30 bg-surface-container-low/40 py-12 md:py-0";
            if (isLast) wrapperClass += " md:pl-16";

            return (
              <FlavorCard
                key={flavor.title}
                {...flavor}
                className={wrapperClass}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
