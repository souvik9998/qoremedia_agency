import { Megaphone, Globe, ShoppingCart, TrendingUp, BarChart3, ArrowRight } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { Button } from "./ui/button";

const ServicesSection = () => {
  const services = [
    {
      icon: Megaphone,
      title: "Meta Ads Management",
      tagline: "Scale Your Business with Expert Ad Campaigns",
      description: "Full-service Facebook & Instagram advertising with strategic campaign management, creative optimization, and data-driven targeting to maximize your ROAS.",
      features: ["Campaign Strategy & Setup", "Audience Research & Targeting", "Ad Creative Development", "Performance Optimization", "Detailed Reporting"],
      color: "from-blue-500 to-indigo-600",
    },
    {
      icon: Globe,
      title: "Website Development",
      tagline: "Custom Websites That Convert Visitors to Customers",
      description: "Professional, responsive websites built for speed, SEO, and conversions. From landing pages to full business websites that represent your brand perfectly.",
      features: ["Custom Design & Development", "Mobile-First Responsive", "SEO Optimized", "Fast Loading Speed", "Content Management"],
      color: "from-emerald-500 to-teal-600",
    },
    {
      icon: ShoppingCart,
      title: "Shopify E-commerce Website",
      tagline: "Launch Your Online Store with Shopify",
      description: "Complete Shopify store setup and customization. From product listings to payment integration, we build stores that sell and scale with your business.",
      features: ["Store Setup & Configuration", "Theme Customization", "Product & Inventory Setup", "Payment Gateway Integration", "App Integrations"],
      color: "from-orange-500 to-amber-600",
    },
    {
      icon: TrendingUp,
      title: "Revenue Acceleration",
      tagline: "Unlock Your Business Growth Potential",
      description: "Strategic consulting and implementation to boost your revenue streams. We identify growth opportunities and execute strategies that deliver measurable results.",
      features: ["Growth Strategy Development", "Funnel Optimization", "Conversion Rate Improvement", "Customer Retention Strategies", "Revenue Analytics"],
      color: "from-purple-500 to-violet-600",
    },
    {
      icon: BarChart3,
      title: "Performance Marketing",
      tagline: "Data-Driven Marketing That Delivers ROI",
      description: "Results-focused digital marketing across multiple channels. Every rupee spent is tracked and optimized for maximum return on your investment.",
      features: ["Multi-Channel Campaigns", "A/B Testing & Optimization", "Real-Time Analytics", "Lead Generation", "ROI Tracking & Reporting"],
      color: "from-rose-500 to-pink-600",
    },
  ];

  return (
    <section id="services" className="py-16 sm:py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/20 via-transparent to-secondary/20 pointer-events-none" />
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block font-body text-sm font-semibold text-primary uppercase tracking-wider mb-4 px-4 py-2 bg-primary/10 rounded-full">
            Our Expertise
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Services That <span className="text-gradient">Drive Results</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive digital solutions tailored to grow your business and maximize your ROI.
          </p>
        </AnimatedSection>

        {/* Services Grid */}
        <div className="space-y-8">
          {services.map((service, index) => (
            <AnimatedSection
              key={service.title}
              delay={index * 0.1}
              direction={index % 2 === 0 ? "left" : "right"}
            >
              <div className="group relative p-6 sm:p-8 rounded-3xl bg-card border border-border/50 shadow-soft hover:shadow-card transition-all duration-500 overflow-hidden">
                {/* Gradient accent */}
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${service.color}`} />
                
                <div className="flex flex-col lg:flex-row gap-6 lg:gap-10">
                  {/* Icon & Title */}
                  <div className="lg:w-1/3">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 shadow-lg`}>
                      <service.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="font-display text-xl sm:text-2xl font-bold mb-2 text-foreground">
                      {service.title}
                    </h3>
                    <p className="font-body text-primary font-medium text-sm">
                      {service.tagline}
                    </p>
                  </div>
                  
                  {/* Description & Features */}
                  <div className="lg:w-2/3">
                    <p className="font-body text-muted-foreground leading-relaxed mb-5">
                      {service.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {service.features.map((feature) => (
                        <span
                          key={feature}
                          className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium bg-secondary text-secondary-foreground border border-border/50"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* CTA */}
        <AnimatedSection className="text-center mt-12">
          <Button variant="hero" size="lg" className="group">
            Explore All Services
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ServicesSection;
