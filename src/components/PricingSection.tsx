import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check, Star, Sparkles } from "lucide-react";
import ContactModal from "./ContactModal";

const PricingSection = () => {
  const [contactOpen, setContactOpen] = useState(false);

  const packages = [
    {
      name: "Base Package",
      price: "30,000",
      period: "/month",
      description: "Perfect for businesses starting their Meta ads journey",
      icon: Star,
      popular: false,
      features: [
        "Minimum Ad Spend: ₹60,000",
        "Facebook & Instagram Ads",
        "Campaign Setup & Management",
        "Audience Research & Targeting",
        "Ad Creative Suggestions",
        "Weekly Performance Reports",
        "Email Support",
        "Monthly Strategy Calls",
      ],
    },
    {
      name: "Premium Package",
      price: "35,000",
      period: "/month",
      description: "For businesses ready to scale aggressively",
      icon: Sparkles,
      popular: true,
      features: [
        "All Base Package Features",
        "Unlimited Ad Spend Management",
        "Advanced Audience Segmentation",
        "Custom Ad Creative Design",
        "A/B Testing & Optimization",
        "Daily Performance Monitoring",
        "Priority WhatsApp Support",
        "Bi-weekly Strategy Calls",
        "Conversion Tracking Setup",
        "Retargeting Campaigns",
      ],
    },
  ];

  return (
    <>
      <section id="pricing" className="py-20 sm:py-32 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block font-body text-sm font-semibold text-primary uppercase tracking-wider mb-4">
              Pricing
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Simple, Transparent <span className="text-gradient">Pricing</span>
            </h2>
            <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose the package that fits your business needs. No hidden fees, no surprises.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`relative p-8 rounded-3xl transition-all duration-500 hover:-translate-y-2 ${
                  pkg.popular
                    ? "gradient-card border-2 border-primary shadow-elevated"
                    : "gradient-card border border-border/50 shadow-card"
                }`}
              >
                {/* Popular Badge */}
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1 px-4 py-1.5 rounded-full gradient-primary text-primary-foreground text-sm font-semibold shadow-soft">
                      <Sparkles className="w-4 h-4" />
                      Most Popular
                    </span>
                  </div>
                )}

                {/* Package Header */}
                <div className="text-center mb-8">
                  <div className={`w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center ${
                    pkg.popular ? "gradient-primary" : "bg-primary/10"
                  }`}>
                    <pkg.icon className={`w-8 h-8 ${pkg.popular ? "text-primary-foreground" : "text-primary"}`} />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                    {pkg.name}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground mb-4">
                    {pkg.description}
                  </p>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="font-display text-4xl sm:text-5xl font-bold text-foreground">
                      ₹{pkg.price}
                    </span>
                    <span className="font-body text-muted-foreground">{pkg.period}</span>
                  </div>
                </div>

                {/* Features List */}
                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      <span className="font-body text-sm text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button
                  variant={pkg.popular ? "hero" : "outline"}
                  size="lg"
                  className="w-full"
                  onClick={() => setContactOpen(true)}
                >
                  Get Started
                </Button>
              </div>
            ))}
          </div>

          {/* Custom Package Note */}
          <p className="text-center font-body text-muted-foreground mt-12">
            Need a custom solution?{" "}
            <button
              onClick={() => setContactOpen(true)}
              className="text-primary font-medium hover:underline underline-offset-4"
            >
              Contact us for a tailored package
            </button>
          </p>
        </div>
      </section>
      <ContactModal open={contactOpen} onOpenChange={setContactOpen} />
    </>
  );
};

export default PricingSection;
