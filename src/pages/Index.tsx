import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import RSVPSection from "@/components/RSVPSection";
import GiftsSection from "@/components/GiftsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
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
