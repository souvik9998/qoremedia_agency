import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import CountUp from "react-countup";
import ContactModal from "./ContactModal";

const HeroSection = () => {
  const [contactOpen, setContactOpen] = useState(false);
  const [startCount, setStartCount] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

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
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        ease: [0.25, 0.4, 0.25, 1] as const,
      },
    },
  };

  const headingVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
        delayChildren: 0.5,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -90 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.4, 0.25, 1] as const,
      },
    },
  };

  const statsVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  const floatingParticles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 2,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 10 + 10,
    delay: Math.random() * 5,
  }));

  const splitText = (text: string) => {
    return text.split("").map((char, index) => (
      <motion.span
        key={index}
        variants={letterVariants}
        className="inline-block"
        style={{ whiteSpace: char === " " ? "pre" : "normal" }}
      >
        {char}
      </motion.span>
    ));
  };

  const stats = [
    { value: 3, suffix: "+", label: "Years Experience", highlight: false },
    { value: 50, suffix: "+", label: "Happy Clients", highlight: false },
    { value: 10, suffix: "X", label: "Average ROAS", highlight: true },
    { value: null, text: "Meta", label: "Ads Certified", highlight: false },
  ];

  return (
    <>
      <section ref={sectionRef} className="relative min-h-screen bg-background overflow-hidden pt-20">
        {/* Background Gradient Glow */}
        <motion.div className="absolute inset-0 overflow-hidden" style={{ y: backgroundY }}>
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
          
          {/* Floating particles */}
          {floatingParticles.map((particle) => (
            <motion.div
              key={particle.id}
              className="absolute rounded-full bg-primary/20"
              style={{
                width: particle.size,
                height: particle.size,
                left: `${particle.x}%`,
                top: `${particle.y}%`,
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: particle.duration,
                repeat: Infinity,
                delay: particle.delay,
                ease: "easeInOut",
              }}
            />
          ))}
        </motion.div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <motion.div 
            className="flex flex-col items-center justify-center min-h-[calc(100vh-5rem)] text-center py-12"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            style={{ y: textY, opacity }}
          >
            {/* Badge */}
            <motion.div 
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 backdrop-blur-sm"
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(139, 92, 246, 0.3)" }}
            >
              <motion.span 
                className="w-2 h-2 rounded-full bg-primary"
                animate={{ opacity: [1, 0.4, 1], scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="font-body text-sm font-medium text-primary">Digital Growth Partner</span>
            </motion.div>

            {/* Main Heading with letter animation */}
            <motion.h1 
              variants={headingVariants}
              initial="hidden"
              animate="visible"
              className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-snug mb-5 max-w-4xl tracking-tight"
            >
              {splitText("Dominate Your Market With ")}
              <motion.span 
                className="text-gradient font-medium inline-block"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
              >
                {splitText("Performance-Driven Media")}
              </motion.span>
            </motion.h1>

            {/* Subheading */}
            <motion.p 
              variants={itemVariants}
              className="font-body text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
            >
              Engineering high-speed systems to scale your brand and surge your revenue.
            </motion.p>

            {/* Single CTA Button with Animated Border */}
            <motion.div 
              variants={itemVariants}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block"
              >
                <Button 
                  size="lg" 
                  onClick={() => setContactOpen(true)} 
                  className="btn-animated-border text-primary-foreground rounded-lg border-0 group"
                >
                  <motion.span 
                    className="flex items-center gap-2"
                    whileHover={{ x: 5 }}
                  >
                    Unlock the Qoremedia
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowRight className="w-4 h-4" />
                    </motion.span>
                  </motion.span>
                </Button>
              </motion.div>
            </motion.div>

            {/* Trust Indicators with Count Animation */}
            <motion.div 
              ref={statsRef}
              className="mt-20 flex flex-wrap items-center justify-center gap-8 sm:gap-16"
              variants={containerVariants}
            >
              {stats.map((stat, index) => (
                <motion.div 
                  key={stat.label}
                  variants={statsVariants}
                  className="text-center group cursor-default"
                  whileHover={{ scale: 1.1, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  custom={index}
                >
                  <motion.p 
                    className={`font-display text-3xl sm:text-4xl font-bold ${stat.highlight ? 'text-primary' : 'text-foreground'}`}
                    whileHover={{ textShadow: stat.highlight ? "0 0 20px rgba(139, 92, 246, 0.5)" : "none" }}
                  >
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
                  </motion.p>
                  <p className="font-body text-sm text-muted-foreground mt-1 group-hover:text-foreground transition-colors">{stat.label}</p>
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