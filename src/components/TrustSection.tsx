import { Shield, Clock, Target, Users } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const TrustSection = () => {
  const trustItems = [
    {
      icon: Shield,
      title: "Trusted Partnership",
      description: "We treat your business like our own. Complete transparency in every campaign we run.",
    },
    {
      icon: Clock,
      title: "Timely Delivery",
      description: "Deadlines are sacred. Your campaigns launch on time, every time, without compromise.",
    },
    {
      icon: Target,
      title: "Result-Focused",
      description: "Every rupee spent is accounted for. We optimize relentlessly for maximum ROI.",
    },
    {
      icon: Users,
      title: "Dedicated Support",
      description: "A dedicated team member for your account. Quick responses, real solutions.",
    },
  ];

  return (
    <section id="about" className="py-20 sm:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block font-body text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            Why Choose Us
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Trust Our <span className="text-gradient">Business Procedure</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            At qoremedia, trust and timing aren't just values—they're the foundation of everything we do.
          </p>
        </AnimatedSection>

        {/* Trust Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustItems.map((item, index) => (
            <AnimatedSection
              key={item.title}
              delay={index * 0.1}
              direction="up"
            >
              <div className="group h-full p-6 sm:p-8 rounded-2xl gradient-card border border-border/50 shadow-soft hover:shadow-card transition-all duration-500 hover:-translate-y-2">
                <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mb-6 shadow-soft group-hover:shadow-glow transition-shadow duration-500">
                  <item.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-3 text-foreground">
                  {item.title}
                </h3>
                <p className="font-body text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
