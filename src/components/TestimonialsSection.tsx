import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "Founder, TechStart India",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      content: "qoremedia transformed our digital presence. Within 3 months, our lead generation increased by 400%. Their strategic approach to Meta ads is unmatched.",
      rating: 5,
    },
    {
      name: "Priya Sharma",
      role: "Marketing Head, FashionHub",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
      content: "The team's dedication and expertise helped us achieve a 12X ROAS. They truly understand e-commerce advertising and deliver results consistently.",
      rating: 5,
    },
    {
      name: "Amit Patel",
      role: "CEO, EduLearn Platform",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      content: "Professional, responsive, and result-oriented. qoremedia helped us scale from 100 to 5000+ enrollments per month through targeted Meta campaigns.",
      rating: 5,
    },
    {
      name: "Sneha Reddy",
      role: "Owner, Wellness Studio",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      content: "Best decision we made for our business. The team's creativity and strategic thinking helped us stand out in a competitive market. Highly recommend!",
      rating: 5,
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 sm:py-32 bg-secondary/30 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block font-body text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            Testimonials
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            What Our <span className="text-gradient">Clients Say</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our partners have to say about working with us.
          </p>
        </AnimatedSection>

        {/* Testimonial Carousel */}
        <AnimatedSection delay={0.2}>
          <div className="relative max-w-4xl mx-auto">
            {/* Quote Icon */}
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full gradient-primary flex items-center justify-center shadow-card z-10">
              <Quote className="w-6 h-6 text-primary-foreground" />
            </div>

            {/* Testimonial Card */}
            <div className="relative bg-card rounded-3xl shadow-card border border-border/50 p-8 sm:p-12 pt-12">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="text-center"
                >
                  {/* Stars */}
                  <div className="flex items-center justify-center gap-1 mb-6">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                    ))}
                  </div>

                  {/* Content */}
                  <p className="font-body text-lg sm:text-xl text-foreground leading-relaxed mb-8 max-w-2xl mx-auto">
                    "{testimonials[currentIndex].content}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center justify-center gap-4">
                    <img
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].name}
                      className="w-14 h-14 rounded-full object-cover border-2 border-primary/20"
                    />
                    <div className="text-left">
                      <p className="font-display font-semibold text-foreground">
                        {testimonials[currentIndex].name}
                      </p>
                      <p className="font-body text-sm text-muted-foreground">
                        {testimonials[currentIndex].role}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation Arrows */}
              <button
                onClick={prevTestimonial}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-secondary hover:bg-primary/10 flex items-center justify-center transition-colors group"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </button>
              <button
                onClick={nextTestimonial}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-secondary hover:bg-primary/10 flex items-center justify-center transition-colors group"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </button>
            </div>

            {/* Dots Indicator */}
            <div className="flex items-center justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? "bg-primary w-8" 
                      : "bg-border hover:bg-primary/30"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default TestimonialsSection;
