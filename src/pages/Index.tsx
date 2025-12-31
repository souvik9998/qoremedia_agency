import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustSection from "@/components/TrustSection";
import ServicesSection from "@/components/ServicesSection";
import ProofOfWorkSection from "@/components/ProofOfWorkSection";
import StrategySection from "@/components/StrategySection";
import PricingSection from "@/components/PricingSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactFormSection from "@/components/ContactFormSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <TrustSection />
      <ServicesSection />
      <ProofOfWorkSection />
      <StrategySection />
      <PricingSection />
      <TestimonialsSection />
      <ContactFormSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
