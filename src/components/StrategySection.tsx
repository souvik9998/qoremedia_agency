import { useState } from "react";
import { Button } from "@/components/ui/button";
import { TrendingUp, BarChart3, Zap, ArrowRight, CheckCircle2 } from "lucide-react";
import ContactModal from "./ContactModal";
import AnimatedSection from "./AnimatedSection";

const StrategySection = () => {
  const [contactOpen, setContactOpen] = useState(false);

  const strategySteps = [
    {
      icon: BarChart3,
      step: "01",
      title: "Deep Analysis",
      description: "We analyze your business, competitors, and target audience to craft the perfect strategy.",
    },
    {
      icon: Zap,
      step: "02",
      title: "Custom Campaign",
      description: "Tailored ad creatives and copy that resonate with your specific audience segments.",
    },
    {
      icon: TrendingUp,
      step: "03",
      title: "Scale & Optimize",
      description: "Continuous optimization and scaling to maximize your returns while minimizing costs.",
    },
  ];

  const benefits = [
    "Data-driven targeting strategies",
    "A/B tested ad creatives",
    "Daily performance monitoring",
    "Weekly detailed reports",
    "Dedicated account manager",
    "24/7 campaign support",
  ];

  return (
    <>
      <section id="strategy" className="py-12 sm:py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Content */}
            <AnimatedSection direction="right">
              <span className="inline-block font-body text-sm font-semibold text-primary uppercase tracking-wider mb-4">
                Our Approach
              </span>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                The Strategy That
                <br />
                <span className="text-gradient">Actually Works</span>
              </h2>
              <p className="font-body text-lg text-muted-foreground mb-8 leading-relaxed">
                While others guess, we analyze. Our proven 3-step methodology has helped 50+ businesses achieve unprecedented growth through Meta advertising.
              </p>

              {/* Benefits Grid */}
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {benefits.map((benefit, index) => (
                  <AnimatedSection key={benefit} delay={index * 0.05} direction="none">
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="font-body text-sm text-foreground">{benefit}</span>
                    </div>
                  </AnimatedSection>
                ))}
              </div>

              <Button variant="hero" size="lg" onClick={() => setContactOpen(true)} className="group">
                Start Your Journey
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </AnimatedSection>

            {/* Right Content - Strategy Cards */}
            <div className="space-y-6">
              {strategySteps.map((step, index) => (
                <AnimatedSection
                  key={step.title}
                  delay={index * 0.15}
                  direction="left"
                >
                  <div className="group relative flex gap-6 p-6 rounded-2xl gradient-card border border-border/50 shadow-soft hover:shadow-card transition-all duration-500 hover:-translate-x-2">
                    {/* Step Number */}
                    <div className="absolute -left-3 top-6 w-6 h-6 rounded-full gradient-primary flex items-center justify-center text-xs font-bold text-primary-foreground shadow-soft">
                      {index + 1}
                    </div>
                    
                    {/* Icon */}
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                      <step.icon className="w-7 h-7 text-primary" />
                    </div>

                    {/* Content */}
                    <div>
                      <span className="font-display text-xs font-bold text-primary uppercase tracking-wider">
                        Step {step.step}
                      </span>
                      <h3 className="font-display text-xl font-semibold mt-1 mb-2 text-foreground">
                        {step.title}
                      </h3>
                      <p className="font-body text-muted-foreground">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>
      <ContactModal open={contactOpen} onOpenChange={setContactOpen} />
    </>
  );
};

export default StrategySection;
