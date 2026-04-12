import WaveDivider from "../ui/WaveDivider";

export default function TaglineSection() {
  return (
    <section
      id="story"
      className="min-h-screen bg-[#AD1457] flex items-center justify-center py-20 px-8 md:px-12 relative overflow-hidden"
    >
      <WaveDivider />

      <div className="max-w-7xl w-full flex flex-col items-center text-center">
        <h2
          className="font-bold uppercase"
          style={{
            fontFamily: "Georgia, serif",
            fontSize: "72px",
            color: "#FEF6F9",
            letterSpacing: "-0.02em",
            lineHeight: 1.0,
            maxWidth: "800px",
          }}
        >
          MADE WHERE THE SALT MEETS THE SWEET.
        </h2>

        <div
          style={{
            width: "120px",
            height: "1px",
            backgroundColor: "rgba(119, 197, 213, 0.4)",
            margin: "32px 0",
          }}
        />

        <h2
          className="font-bold uppercase"
          style={{
            fontFamily: "Georgia, serif",
            fontSize: "72px",
            color: "#77C5D5",
            letterSpacing: "-0.02em",
            lineHeight: 1.0,
            maxWidth: "800px",
          }}
        >
          ONCE TASTED, YOU'LL NEVER LEAVE THE SHORE.
        </h2>
      </div>

      <WaveDivider flipped />
    </section>
  );
}
