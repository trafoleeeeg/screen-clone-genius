import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection"; 
import FeaturesSection from "@/components/FeaturesSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        {/* Gradient transition between sections */}
        <div className="h-32 bg-gradient-to-b from-[#161C28] to-[#1C2438]"></div>
        <FeaturesSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
