import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import ContactModal from "./ContactModal";

const HeroSection = () => {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <>
      <section className="relative min-h-screen gradient-hero overflow-hidden pt-20">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-40 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "-3s" }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-primary/3 to-transparent rounded-full" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="flex flex-col items-center justify-center min-h-[calc(100vh-5rem)] text-center py-12">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 animate-fade-up">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
              <span className="font-body text-sm font-medium text-primary">Meta Ads Experts</span>
            </div>

            {/* Main Heading */}
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
              Scale Your Business with
              <br />
              <span className="text-gradient">Expert Meta Ads</span>
            </h1>

            {/* Subheading */}
            <p className="font-body text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-up" style={{ animationDelay: "0.2s" }}>
              We help businesses achieve exceptional growth through data-driven Meta advertising strategies that deliver real, measurable results.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
              <Button variant="hero" size="xl" onClick={() => setContactOpen(true)} className="group">
                Get Started Today
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="xl" onClick={() => setContactOpen(true)} className="group">
                <Play className="w-5 h-5" />
                Watch How It Works
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-16 flex flex-wrap items-center justify-center gap-8 sm:gap-12 animate-fade-up" style={{ animationDelay: "0.4s" }}>
              <div className="text-center">
                <p className="font-display text-3xl sm:text-4xl font-bold text-foreground">3+</p>
                <p className="font-body text-sm text-muted-foreground">Years Experience</p>
              </div>
              <div className="w-px h-12 bg-border hidden sm:block" />
              <div className="text-center">
                <p className="font-display text-3xl sm:text-4xl font-bold text-foreground">50+</p>
                <p className="font-body text-sm text-muted-foreground">Happy Clients</p>
              </div>
              <div className="w-px h-12 bg-border hidden sm:block" />
              <div className="text-center">
                <p className="font-display text-3xl sm:text-4xl font-bold text-primary">10X</p>
                <p className="font-body text-sm text-muted-foreground">Average ROAS</p>
              </div>
              <div className="w-px h-12 bg-border hidden sm:block" />
              <div className="text-center">
                <p className="font-display text-3xl sm:text-4xl font-bold text-foreground">Meta</p>
                <p className="font-body text-sm text-muted-foreground">Ads Certified</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>
      <ContactModal open={contactOpen} onOpenChange={setContactOpen} />
    </>
  );
};

export default HeroSection;
