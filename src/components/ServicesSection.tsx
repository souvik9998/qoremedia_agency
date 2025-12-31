import { Megaphone, Globe, ShoppingCart, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

const ServicesSection = () => {
  const services = [
    {
      icon: Megaphone,
      title: "Meta Ads Management",
      tagline: "Scale Your Business with Expert Ad Campaigns",
      description: "Full-service Facebook & Instagram advertising with strategic campaign management and data-driven targeting.",
      features: ["Campaign Strategy", "Audience Targeting", "Performance Optimization"],
    },
    {
      icon: Globe,
      title: "Website Development",
      tagline: "Custom Websites That Convert",
      description: "Professional, responsive websites built for speed, SEO, and conversions that represent your brand.",
      features: ["Custom Design", "Mobile-First", "SEO Optimized"],
    },
    {
      icon: ShoppingCart,
      title: "Shopify E-commerce",
      tagline: "Launch Your Online Store",
      description: "Complete Shopify store setup and customization. From products to payments, we build stores that sell.",
      features: ["Store Setup", "Theme Customization", "Payment Integration"],
    },
    {
      icon: TrendingUp,
      title: "Revenue Acceleration",
      tagline: "Unlock Your Growth Potential",
      description: "Strategic consulting to boost your revenue streams with measurable, data-driven results.",
      features: ["Growth Strategy", "Funnel Optimization", "Conversion Improvement"],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" as const },
    },
  };

  return (
    <section id="services" className="py-20 sm:py-28 bg-background relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 -left-40 w-80 h-80 rounded-full bg-primary/5 blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -30, 0],
            y: [0, 30, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 -right-40 w-96 h-96 rounded-full bg-accent/5 blur-3xl"
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
          <span className="inline-block font-body text-sm font-semibold text-primary uppercase tracking-wider mb-4 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
            What We Do
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Services We Provide
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive digital solutions tailored to grow your business and maximize your ROI.
          </p>
        </motion.div>

        {/* 2x2 Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -8 }}
              transition={{ duration: 0.3 }}
            >
              <div className="group relative h-full p-8 rounded-2xl bg-card border border-border/50 shadow-card hover:shadow-elevated hover:border-primary/30 transition-all duration-500 overflow-hidden">
                {/* Hover glow effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 pointer-events-none" />
                
                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: [0, -5, 5, 0], scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                    className="w-16 h-16 rounded-xl bg-primary/15 border border-primary/25 flex items-center justify-center mb-6 group-hover:shadow-glow transition-shadow duration-500"
                  >
                    <service.icon className="w-8 h-8 text-primary" />
                  </motion.div>
                  
                  {/* Content */}
                  <h3 className="font-display text-xl sm:text-2xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="font-body text-accent font-medium text-sm mb-4">
                    {service.tagline}
                  </p>
                  <p className="font-body text-muted-foreground leading-relaxed mb-6">
                    {service.description}
                  </p>
                  
                  {/* Features */}
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature, featureIndex) => (
                      <motion.span
                        key={feature}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: featureIndex * 0.1 }}
                        className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium bg-secondary text-secondary-foreground border border-border/50 hover:border-primary/30 hover:bg-primary/10 transition-colors duration-300"
                      >
                        {feature}
                      </motion.span>
                    ))}
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