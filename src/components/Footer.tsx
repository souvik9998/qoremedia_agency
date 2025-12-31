import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Phone, Instagram, Linkedin, Facebook } from "lucide-react";
import { motion } from "framer-motion";
import ContactModal from "./ContactModal";
import AnimatedSection from "./AnimatedSection";

const Footer = () => {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <>
      <footer className="bg-card dark:bg-secondary border-t border-border">
        {/* CTA Section */}
        <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16">
          <AnimatedSection className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Ready to <span className="text-primary">Scale</span> Your Business?
            </h2>
            <p className="font-body text-lg text-muted-foreground mb-8">
              Join 50+ businesses that trust qoremedia to manage their Meta advertising and drive real growth.
            </p>
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button variant="hero" size="xl" onClick={() => setContactOpen(true)} className="group">
                Schedule Your Free Consultation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </AnimatedSection>
        </div>

        {/* Footer Links */}
        <div className="border-t border-border">
          <div className="container mx-auto px-4 sm:px-6 py-12">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Brand */}
              <div className="lg:col-span-2">
                <a href="#" className="inline-block mb-4">
                  <span className="font-display text-2xl font-bold">
                    <span className="text-primary">qore</span>
                    <span className="text-foreground">media</span>
                  </span>
                </a>
                <p className="font-body text-muted-foreground max-w-sm mb-6">
                  Your trusted partner for Meta advertising. We help businesses scale with data-driven strategies.
                </p>
                <div className="flex flex-col gap-3">
                  <a href="tel:+917797571334" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                    <Phone className="w-4 h-4" />
                    <span className="font-body text-sm">+91 77975 71334</span>
                  </a>
                  <a href="mailto:hello@qoremedia.in" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                    <Mail className="w-4 h-4" />
                    <span className="font-body text-sm">hello@qoremedia.in</span>
                  </a>
                </div>
                {/* Social Links */}
                <div className="flex gap-3 mt-4">
                  <a
                    href="https://instagram.com/qoremedia"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-lg bg-secondary/50 hover:bg-primary/15 flex items-center justify-center transition-colors group"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </a>
                  <a
                    href="https://linkedin.com/company/qoremedia"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-lg bg-secondary/50 hover:bg-primary/15 flex items-center justify-center transition-colors group"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </a>
                  <a
                    href="https://facebook.com/qoremedia"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-lg bg-secondary/50 hover:bg-primary/15 flex items-center justify-center transition-colors group"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </a>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="font-display font-semibold mb-4 text-foreground">Quick Links</h4>
                <ul className="space-y-3">
                  {["Services", "Strategy", "Pricing", "About"].map((link) => (
                    <li key={link}>
                      <a
                        href={`#${link.toLowerCase()}`}
                        className="font-body text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Services */}
              <div>
                <h4 className="font-display font-semibold mb-4 text-foreground">Services</h4>
                <ul className="space-y-3">
                  {["Meta Ads", "Lead Generation", "Retargeting", "Creative Strategy"].map((service) => (
                    <li key={service}>
                      <span className="font-body text-sm text-muted-foreground">
                        {service}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border">
          <div className="container mx-auto px-4 sm:px-6 py-6">
            <p className="font-body text-sm text-muted-foreground text-center">
              © {new Date().getFullYear()} qoremedia. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
      <ContactModal open={contactOpen} onOpenChange={setContactOpen} />
    </>
  );
};

export default Footer;
