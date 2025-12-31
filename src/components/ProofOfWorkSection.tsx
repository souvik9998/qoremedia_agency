import { motion } from "framer-motion";
import { ExternalLink, TrendingUp, ShoppingBag, Globe } from "lucide-react";
import { Button } from "./ui/button";
import adsGrowthImg from "@/assets/portfolio-ads-growth.png";
import shopifySalesImg from "@/assets/portfolio-shopify-sales.png";
import moveonnImg from "@/assets/portfolio-moveonn.png";

const ProofOfWorkSection = () => {
  const projects = [
    {
      icon: TrendingUp,
      category: "Meta Ads Management",
      title: "10X ROAS Growth Campaign",
      description: "Achieved exceptional return on ad spend through strategic audience targeting, creative optimization, and continuous performance monitoring.",
      metrics: ["10X ROAS", "120% Conversion Increase", "₹5,468+ Daily Revenue"],
      image: adsGrowthImg,
    },
    {
      icon: ShoppingBag,
      category: "Shopify E-commerce",
      title: "E-commerce Sales Dashboard",
      description: "Built and optimized Shopify stores that drive consistent revenue growth with seamless checkout experiences and inventory management.",
      metrics: ["$7,500+ Monthly Sales", "95% Order Success", "500+ Orders"],
      image: shopifySalesImg,
    },
    {
      icon: Globe,
      category: "Website Development",
      title: "MoveOnn.co.in",
      description: "Designed and developed a modern, responsive e-commerce website with stunning UI/UX, fast loading speeds, and mobile-first approach.",
      metrics: ["Mobile Responsive", "SEO Optimized", "Fast Loading"],
      image: moveonnImg,
      link: "https://moveonn.co.in",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" as const },
    },
  };

  return (
    <section id="portfolio" className="py-16 sm:py-24 bg-secondary/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute -top-40 -right-40 w-80 h-80 rounded-full border border-primary/10"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full border border-accent/10"
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
            Our Portfolio
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Our Success Stories
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Real results from real clients. See how we've helped businesses grow with our services.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              className="group"
            >
              <div className="h-full flex flex-col rounded-2xl bg-card border border-border/50 shadow-card hover:shadow-elevated overflow-hidden transition-all duration-500">
                {/* Image */}
                <div className="relative h-48 sm:h-56 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-transparent to-transparent" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-primary/90 text-primary-foreground backdrop-blur-sm">
                      <project.icon className="w-3.5 h-3.5" />
                      {project.category}
                    </span>
                  </div>

                  {/* External Link */}
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute top-4 right-4 p-2 rounded-full bg-card/80 backdrop-blur-sm border border-border/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-primary hover:text-primary-foreground"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 p-5 sm:p-6 flex flex-col">
                  <h3 className="font-display text-lg sm:text-xl font-bold mb-2 text-foreground">
                    {project.title}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                    {project.description}
                  </p>

                  {/* Metrics */}
                  <div className="flex flex-wrap gap-2">
                    {project.metrics.map((metric) => (
                      <span
                        key={metric}
                        className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-primary/10 text-primary border border-primary/20"
                      >
                        {metric}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Button variant="outline" size="lg" className="group">
            View More Projects
            <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProofOfWorkSection;