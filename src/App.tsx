import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import HeroSection from "./components/sections/HeroSection";
import TaglineSection from "./components/sections/TaglineSection";
import FlavorsSection from "./components/sections/FlavorsSection";
import LocationSection from "./components/sections/LocationSection";

export default function App() {
  return (
    <div className="bg-surface text-on-surface font-body selection:bg-secondary-fixed selection:text-on-secondary-fixed">
      <Navbar />
      <HeroSection />
      <TaglineSection />
      <FlavorsSection />
      <LocationSection />
      <Footer />
    </div>
  );
}
