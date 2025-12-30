import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Megaphone, Globe, TrendingUp, Target, Palette, BarChart3, Code, Smartphone, ShoppingCart, Users, Zap, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";
import AnimatedSection from "@/components/AnimatedSection";

const Services = () => {
  const [contactOpen, setContactOpen] = useState(false);

  const services = [
    {
      id: "meta-ads",
      icon: Megaphone,
      title: "Meta Ads Management",
      subtitle: "Facebook & Instagram Advertising",
      description: "Full-service Meta advertising that drives real business growth. We handle everything from strategy to execution.",
      features: [
        {
          icon: Target,
          title: "Precision Targeting",
          description: "Reach your ideal customers with laser-focused audience targeting based on demographics, interests, and behaviors."
        },
        {
          icon: Palette,
          title: "Creative Excellence",
          description: "Scroll-stopping ad creatives that capture attention and drive action with compelling visuals and copy."
        },
        {
          icon: BarChart3,
          title: "Performance Analytics",
          description: "Detailed insights and reporting to track every rupee of your ad spend with transparent ROI metrics."
        },
        {
          icon: Zap,
          title: "Continuous Optimization",
          description: "Daily monitoring and A/B testing to maximize campaign performance and minimize wasted spend."
        },
      ],
      benefits: [
        "Campaign strategy & setup",
        "Audience research & targeting",
        "Ad creative design & copywriting",
        "Daily performance monitoring",
        "Weekly detailed reports",
        "Retargeting campaigns",
      ],
    },
    {
      id: "web-services",
      icon: Globe,
      title: "Web Services",
      subtitle: "Design & Development",
      description: "Beautiful, high-converting websites that represent your brand and turn visitors into customers.",
      features: [
        {
          icon: Code,
          title: "Custom Development",
          description: "Tailored web solutions built from the ground up to meet your specific business requirements."
        },
        {
          icon: Smartphone,
          title: "Mobile-First Design",
          description: "Responsive designs that look stunning and function perfectly on every device and screen size."
        },
        {
          icon: Zap,
          title: "Speed Optimized",
          description: "Lightning-fast load times that improve user experience and boost search engine rankings."
        },
        {
          icon: Target,
          title: "Conversion Focused",
          description: "Strategic layouts and CTAs designed to guide visitors toward taking action."
        },
      ],
      benefits: [
        "Custom website design",
        "Landing page development",
        "E-commerce solutions",
        "SEO optimization",
        "Performance optimization",
        "Ongoing maintenance",
      ],
    },
    {
      id: "sales-boost",
      icon: TrendingUp,
      title: "Sales Boost",
      subtitle: "Revenue Growth Strategies",
      description: "Comprehensive strategies to accelerate your sales pipeline and maximize revenue growth.",
      features: [
        {
          icon: Users,
          title: "Lead Generation",
          description: "High-quality leads delivered directly to your business pipeline through targeted campaigns."
        },
        {
          icon: ShoppingCart,
          title: "E-commerce Growth",
          description: "Strategies to increase average order value, reduce cart abandonment, and boost conversions."
        },
        {
          icon: BarChart3,
          title: "Sales Analytics",
          description: "Data-driven insights to understand your sales funnel and identify growth opportunities."
        },
        {
          icon: Zap,
          title: "Automation",
          description: "Streamlined processes and automated workflows to scale your sales operations efficiently."
        },
      ],
      benefits: [
        "Sales funnel optimization",
        "Lead nurturing campaigns",
        "Customer retention strategies",
        "Upselling & cross-selling",
        "Performance tracking",
        "Growth consulting",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 gradient-hero overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div 
            className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"
            animate={{ y: [0, -20, 0], scale: [1, 1.1, 1] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <span className="inline-block font-body text-sm font-semibold text-primary uppercase tracking-wider mb-4">
              Our Services
            </span>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              Solutions to <span className="text-gradient">Grow Your Business</span>
            </h1>
            <p className="font-body text-lg text-muted-foreground">
              Comprehensive digital solutions designed to accelerate your growth and maximize your ROI.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Sections */}
      {services.map((service, serviceIndex) => (
        <section 
          key={service.id} 
          id={service.id}
          className={`py-16 sm:py-24 ${serviceIndex % 2 === 0 ? 'bg-background' : 'bg-secondary/30'}`}
        >
          <div className="container mx-auto px-4 sm:px-6">
            {/* Service Header */}
            <AnimatedSection className="text-center mb-12">
              <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center mx-auto mb-6 shadow-card">
                <service.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold mb-2">
                {service.title}
              </h2>
              <p className="font-body text-primary font-medium mb-4">{service.subtitle}</p>
              <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
                {service.description}
              </p>
            </AnimatedSection>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-6 mb-12">
              {service.features.map((feature, index) => (
                <AnimatedSection
                  key={feature.title}
                  delay={index * 0.1}
                  direction={index % 2 === 0 ? "right" : "left"}
                >
                  <div className="group h-full p-6 rounded-2xl bg-card border border-border/50 shadow-soft hover:shadow-card transition-all duration-500 hover:-translate-y-1">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-display text-lg font-semibold mb-2 text-foreground">
                      {feature.title}
                    </h3>
                    <p className="font-body text-sm text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </AnimatedSection>
              ))}
            </div>

            {/* Benefits & CTA */}
            <AnimatedSection delay={0.3}>
              <div className="bg-card rounded-2xl border border-border/50 shadow-card p-8">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="font-display text-xl font-semibold mb-4 text-foreground">
                      What's Included
                    </h3>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {service.benefits.map((benefit) => (
                        <div key={benefit} className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="font-body text-sm text-foreground">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="text-center md:text-right">
                    <Button 
                      variant="hero" 
                      size="lg" 
                      onClick={() => setContactOpen(true)}
                      className="group"
                    >
                      Get Started
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>
      ))}

      <Footer />
      <ContactModal open={contactOpen} onOpenChange={setContactOpen} />
    </div>
  );
};

export default Services;
