import { Megaphone, Users2, LineChart, Palette, Target, Repeat } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Megaphone,
      title: "Meta Ads Management",
      description: "Full-service Facebook & Instagram advertising with expert campaign management.",
    },
    {
      icon: Target,
      title: "Audience Targeting",
      description: "Precision targeting to reach your ideal customers at the right moment.",
    },
    {
      icon: Palette,
      title: "Creative Strategy",
      description: "Scroll-stopping ad creatives that capture attention and drive action.",
    },
    {
      icon: LineChart,
      title: "Performance Analytics",
      description: "Detailed insights and reporting to track every rupee of your ad spend.",
    },
    {
      icon: Repeat,
      title: "Retargeting Campaigns",
      description: "Re-engage warm audiences and convert visitors into loyal customers.",
    },
    {
      icon: Users2,
      title: "Lead Generation",
      description: "High-quality leads delivered directly to your business pipeline.",
    },
  ];

  return (
    <section id="services" className="py-20 sm:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block font-body text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            What We Offer
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive Meta advertising solutions designed to grow your business.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group p-6 sm:p-8 rounded-2xl bg-card border border-border/50 shadow-soft hover:shadow-card transition-all duration-500 hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold mb-2 text-foreground">
                {service.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
