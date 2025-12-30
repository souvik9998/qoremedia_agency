import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { motion } from "framer-motion";
import ContactModal from "./ContactModal";

const HeroSection = () => {
  const [contactOpen, setContactOpen] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.4, 0.25, 1] as const,
      },
    },
  };

  const statsVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <>
      <section className="relative min-h-screen gradient-hero overflow-hidden pt-20">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div 
            className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"
            animate={{ 
              y: [0, -20, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{ 
              duration: 6, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          />
          <motion.div 
            className="absolute bottom-40 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl"
            animate={{ 
              y: [0, 20, 0],
              scale: [1, 1.05, 1],
            }}
            transition={{ 
              duration: 8, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: 1,
            }}
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-primary/3 to-transparent rounded-full" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <motion.div 
            className="flex flex-col items-center justify-center min-h-[calc(100vh-5rem)] text-center py-12"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Badge */}
            <motion.div 
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8"
            >
              <motion.span 
                className="w-2 h-2 rounded-full bg-primary"
                animate={{ opacity: [1, 0.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="font-body text-sm font-medium text-primary">Digital Growth Partner</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1 
              variants={itemVariants}
              className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 max-w-4xl"
            >
              Engineering high-speed systems to{" "}
              <span className="text-gradient">scale your brand</span> and{" "}
              <span className="text-gradient">surge your revenue</span>
            </motion.h1>

            {/* Subheading */}
            <motion.p 
              variants={itemVariants}
              className="font-body text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
            >
              Engineering high-speed systems to scale your brand and surge your revenue.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button variant="hero" size="xl" onClick={() => setContactOpen(true)} className="group">
                Start Growing Today
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="xl" onClick={() => setContactOpen(true)} className="group">
                <Play className="w-5 h-5" />
                See How It Works
              </Button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div 
              className="mt-16 flex flex-wrap items-center justify-center gap-8 sm:gap-12"
              variants={containerVariants}
            >
              {[
                { value: "3+", label: "Years Experience" },
                { value: "50+", label: "Happy Clients" },
                { value: "10X", label: "Average ROAS", highlight: true },
                { value: "Meta", label: "Ads Certified" },
              ].map((stat) => (
                <motion.div 
                  key={stat.label}
                  variants={statsVariants}
                  className="text-center"
                >
                  <p className={`font-display text-3xl sm:text-4xl font-bold ${stat.highlight ? 'text-primary' : 'text-foreground'}`}>
                    {stat.value}
                  </p>
                  <p className="font-body text-sm text-muted-foreground">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>
      <ContactModal open={contactOpen} onOpenChange={setContactOpen} />
    </>
  );
};

export default HeroSection;
