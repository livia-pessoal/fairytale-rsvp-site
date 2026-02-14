import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import RSVPSection from "@/components/RSVPSection";
import GiftsSection from "@/components/GiftsSection";
import Footer from "@/components/Footer";
import MagicalElements from "@/components/MagicalElements";

const Index = () => {
  return (
    <div className="min-h-screen">
      <MagicalElements />
      <Header />
      <main>
        <HeroSection />
        <RSVPSection />
        <GiftsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
