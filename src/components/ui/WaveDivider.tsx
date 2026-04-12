interface WaveDividerProps {
  flipped?: boolean;
}

export default function WaveDivider({ flipped = false }: WaveDividerProps) {
  return (
    <div
      className={`absolute ${flipped ? "bottom-0" : "top-0"} left-0 w-full h-16 opacity-[0.18] pointer-events-none ${flipped ? "rotate-180" : ""}`}
    >
      <svg
        className="w-full h-full"
        preserveAspectRatio="none"
        viewBox="0 0 1440 64"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 32C100 20 200 44 300 32C400 20 500 44 600 32C700 20 800 44 900 32C1000 20 1100 44 1200 32C1300 20 1400 44 1440 32"
          fill="none"
          stroke="#FFFFFF"
          strokeWidth="0.9"
        />
        <path
          d="M0 42C120 30 220 54 320 42C420 30 520 54 620 42C720 30 820 54 920 42C1020 30 1120 54 1220 42C1320 30 1420 54 1440 42"
          fill="none"
          stroke="#FFFFFF"
          strokeWidth="0.9"
        />
        <path
          d="M0 22C80 10 180 34 280 22C380 10 480 34 580 22C680 10 780 34 880 22C980 10 1080 34 1180 22C1280 10 1380 34 1440 22"
          fill="none"
          stroke="#FFFFFF"
          strokeWidth="0.9"
        />
        <path
          d="M0 52C140 40 240 64 340 52C440 40 540 64 640 52C740 40 840 64 940 52C1040 40 1140 64 1240 52C1340 40 1440 64 1440 52"
          fill="none"
          stroke="#FFFFFF"
          strokeWidth="0.9"
        />
        <path
          d="M0 12C60 0 160 24 260 12C360 0 460 24 560 12C660 0 760 24 860 12C960 0 1060 24 1160 12C1260 0 1360 24 1440 12"
          fill="none"
          stroke="#FFFFFF"
          strokeWidth="0.9"
        />
        <path
          d="M0 27C110 15 210 39 310 27C410 15 510 39 610 27C710 15 810 39 910 27C1010 15 1110 39 1210 27C1310 15 1410 39 1440 27"
          fill="none"
          stroke="#FFFFFF"
          strokeWidth="0.9"
        />
      </svg>
    </div>
  );
}
