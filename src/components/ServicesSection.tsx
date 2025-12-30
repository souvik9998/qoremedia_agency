import { Megaphone, Globe, ShoppingCart, TrendingUp, BarChart3 } from "lucide-react";
import { motion } from "framer-motion";

const ServicesSection = () => {
  const services = [
    {
      icon: Megaphone,
      title: "Meta Ads Management",
      tagline: "Scale Your Business with Expert Ad Campaigns",
      description: "Full-service Facebook & Instagram advertising with strategic campaign management, creative optimization, and data-driven targeting to maximize your ROAS.",
      features: ["Campaign Strategy & Setup", "Audience Research & Targeting", "Ad Creative Development", "Performance Optimization", "Detailed Reporting"],
    },
    {
      icon: Globe,
      title: "Website Development",
      tagline: "Custom Websites That Convert Visitors to Customers",
      description: "Professional, responsive websites built for speed, SEO, and conversions. From landing pages to full business websites that represent your brand perfectly.",
      features: ["Custom Design & Development", "Mobile-First Responsive", "SEO Optimized", "Fast Loading Speed", "Content Management"],
    },
    {
      icon: ShoppingCart,
      title: "Shopify E-commerce Website",
      tagline: "Launch Your Online Store with Shopify",
      description: "Complete Shopify store setup and customization. From product listings to payment integration, we build stores that sell and scale with your business.",
      features: ["Store Setup & Configuration", "Theme Customization", "Product & Inventory Setup", "Payment Gateway Integration", "App Integrations"],
    },
    {
      icon: TrendingUp,
      title: "Revenue Acceleration",
      tagline: "Unlock Your Business Growth Potential",
      description: "Strategic consulting and implementation to boost your revenue streams. We identify growth opportunities and execute strategies that deliver measurable results.",
      features: ["Growth Strategy Development", "Funnel Optimization", "Conversion Rate Improvement", "Customer Retention Strategies", "Revenue Analytics"],
    },
    {
      icon: BarChart3,
      title: "Performance Marketing",
      tagline: "Data-Driven Marketing That Delivers ROI",
      description: "Results-focused digital marketing across multiple channels. Every rupee spent is tracked and optimized for maximum return on your investment.",
      features: ["Multi-Channel Campaigns", "A/B Testing & Optimization", "Real-Time Analytics", "Lead Generation", "ROI Tracking & Reporting"],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  return (
    <section id="services" className="py-16 sm:py-24 bg-background relative overflow-hidden">
      {/* Transparent animated background blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 -left-32 w-96 h-96 rounded-full bg-accent/10 blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -40, 0],
            y: [0, 40, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 -right-32 w-80 h-80 rounded-full bg-primary/10 blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/3 w-64 h-64 rounded-full bg-accent/5 blur-2xl"
        />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block font-body text-sm font-semibold text-accent uppercase tracking-wider mb-4 px-4 py-2 bg-accent/10 rounded-full border border-accent/20">
            What We Do
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Services That We Provide
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive digital solutions tailored to grow your business and maximize your ROI.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              whileHover={{ scale: 1.01, y: -4 }}
              transition={{ duration: 0.3 }}
            >
              <div className="group relative p-6 sm:p-8 rounded-2xl bg-card border border-border/50 shadow-card hover:shadow-elevated hover:border-accent/30 transition-all duration-500 overflow-hidden">
                {/* Subtle hover glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-accent/5 via-transparent to-accent/5 pointer-events-none" />
                
                <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 relative z-10">
                  {/* Icon & Title */}
                  <div className="lg:w-1/3">
                    <motion.div
                      whileHover={{ rotate: [0, -5, 5, 0] }}
                      transition={{ duration: 0.5 }}
                      className="w-14 h-14 rounded-xl bg-accent/15 border border-accent/20 flex items-center justify-center mb-4"
                    >
                      <service.icon className="w-7 h-7 text-accent" />
                    </motion.div>
                    <h3 className="font-display text-xl sm:text-2xl font-bold mb-2 text-foreground">
                      {service.title}
                    </h3>
                    <p className="font-body text-accent font-medium text-sm">
                      {service.tagline}
                    </p>
                  </div>
                  
                  {/* Description & Features */}
                  <div className="lg:w-2/3">
                    <p className="font-body text-muted-foreground leading-relaxed mb-5">
                      {service.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {service.features.map((feature, featureIndex) => (
                        <motion.span
                          key={feature}
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: featureIndex * 0.05 }}
                          className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium bg-secondary/80 text-secondary-foreground border border-border/30 hover:border-accent/30 hover:bg-accent/10 transition-colors duration-300"
                        >
                          {feature}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;