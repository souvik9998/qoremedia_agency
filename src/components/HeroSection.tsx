import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import ContactModal from "./ContactModal";

const HeroSection = () => {
  const [contactOpen, setContactOpen] = useState(false);
  const [startCount, setStartCount] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCount(true);
        }
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

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

  const stats = [
    { value: 3, suffix: "+", label: "Years Experience", highlight: false },
    { value: 50, suffix: "+", label: "Happy Clients", highlight: false },
    { value: 10, suffix: "X", label: "Average ROAS", highlight: true },
    { value: null, text: "Meta", label: "Ads Certified", highlight: false },
  ];

  return (
    <>
      <section className="relative min-h-screen bg-background overflow-hidden pt-20">
        {/* Background Gradient Glow */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Top center glow */}
          <motion.div 
            className="absolute -top-20 left-1/2 -translate-x-1/2 w-[800px] h-[400px] gradient-glow opacity-60"
            animate={{ 
              scale: [1, 1.1, 1],
              opacity: [0.4, 0.6, 0.4],
            }}
            transition={{ 
              duration: 8, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          />
          {/* Floating orbs */}
          <motion.div 
            className="absolute top-40 right-20 w-64 h-64 rounded-full bg-primary/10 blur-3xl"
            animate={{ 
              y: [0, -30, 0],
              x: [0, 20, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{ 
              duration: 10, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          />
          <motion.div 
            className="absolute bottom-40 left-20 w-80 h-80 rounded-full bg-accent/10 blur-3xl"
            animate={{ 
              y: [0, 30, 0],
              x: [0, -20, 0],
              scale: [1, 1.15, 1],
            }}
            transition={{ 
              duration: 12, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: 2,
            }}
          />
          {/* Grid pattern overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
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
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 backdrop-blur-sm"
            >
              <motion.span 
                className="w-2 h-2 rounded-full bg-primary"
                animate={{ opacity: [1, 0.4, 1], scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="font-body text-sm font-medium text-primary">Digital Growth Partner</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1 
              variants={itemVariants}
              className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 max-w-4xl tracking-tight"
            >
              We Help Your Business
              <br />
              <span className="text-gradient">To Grow</span>
            </motion.h1>

            {/* Subheading */}
            <motion.p 
              variants={itemVariants}
              className="font-body text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
            >
              Engineering high-speed systems to scale your brand and surge your revenue.
            </motion.p>

            {/* Single CTA Button with Animation */}
            <motion.div 
              variants={itemVariants}
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button 
                  size="xl" 
                  onClick={() => setContactOpen(true)} 
                  className="group relative overflow-hidden gradient-primary text-primary-foreground shadow-glow hover:shadow-glow-intense transition-all duration-500 animate-pulse-glow"
                >
                  {/* Shimmer effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    animate={{ x: ['-200%', '200%'] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  />
                  <span className="relative z-10 flex items-center gap-2">
                    Unlock the Qoremedia
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Button>
              </motion.div>
            </motion.div>

            {/* Trust Indicators with Count Animation */}
            <motion.div 
              ref={statsRef}
              className="mt-20 flex flex-wrap items-center justify-center gap-8 sm:gap-16"
              variants={containerVariants}
            >
              {stats.map((stat) => (
                <motion.div 
                  key={stat.label}
                  variants={statsVariants}
                  className="text-center"
                >
                  <p className={`font-display text-3xl sm:text-4xl font-bold ${stat.highlight ? 'text-primary' : 'text-foreground'}`}>
                    {stat.value !== null ? (
                      <>
                        {startCount ? (
                          <CountUp
                            start={0}
                            end={stat.value}
                            duration={2}
                            suffix={stat.suffix}
                          />
                        ) : (
                          `0${stat.suffix}`
                        )}
                      </>
                    ) : (
                      stat.text
                    )}
                  </p>
                  <p className="font-body text-sm text-muted-foreground mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Gradient Fade */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background via-background/80 to-transparent" />
      </section>
      <ContactModal open={contactOpen} onOpenChange={setContactOpen} />
    </>
  );
};

export default HeroSection;