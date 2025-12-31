import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Send, Mail, Phone, Loader2 } from "lucide-react";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Please enter a valid email").max(255, "Email must be less than 255 characters"),
  phone: z.string().optional(),
  message: z.string().trim().min(1, "Message is required").max(1000, "Message must be less than 1000 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const ContactFormSection = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form data
    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      const firstError = result.error.errors[0];
      toast({
        title: "Validation Error",
        description: firstError.message,
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase.functions.invoke("send-contact-email", {
        body: formData,
      });

      if (error) throw error;

      toast({
        title: "Message Sent!",
        description: "We'll get back to you as soon as possible.",
      });

      // Reset form
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      console.error("Error sending message:", error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact-form" className="py-20 sm:py-28 bg-background relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full gradient-glow"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="inline-block font-body text-sm font-semibold text-primary uppercase tracking-wider mb-4 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
              Get In Touch
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Let's <span className="text-gradient">Grow Together</span>
            </h2>
            <p className="font-body text-lg text-muted-foreground max-w-xl mx-auto">
              Have a question or ready to scale your business? Drop us a message and we'll get back to you shortly.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-10">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2 space-y-6"
            >
              <div className="p-6 rounded-2xl bg-card border border-border/50">
                <h3 className="font-display text-xl font-bold mb-6 text-foreground">Contact Info</h3>
                
                <div className="space-y-4">
                  <a 
                    href="mailto:hello@qoremedia.in"
                    className="flex items-start gap-4 p-4 rounded-xl bg-secondary/50 hover:bg-primary/10 transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/15 flex items-center justify-center group-hover:bg-primary/25 transition-colors">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-body text-sm text-muted-foreground mb-1">Email Us</p>
                      <p className="font-body text-sm font-medium text-foreground">hello@qoremedia.in</p>
                    </div>
                  </a>

                  <a 
                    href="tel:+917797571334"
                    className="flex items-start gap-4 p-4 rounded-xl bg-secondary/50 hover:bg-primary/10 transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/15 flex items-center justify-center group-hover:bg-primary/25 transition-colors">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-body text-sm text-muted-foreground mb-1">Call Us</p>
                      <p className="font-body text-sm font-medium text-foreground">+91 77975 71334</p>
                      <p className="font-body text-sm font-medium text-foreground">+91 7001090471</p>
                    </div>
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-3"
            >
              <form onSubmit={handleSubmit} className="p-6 sm:p-8 rounded-2xl bg-card border border-border/50 shadow-card">
                <div className="grid sm:grid-cols-2 gap-5 mb-5">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-foreground">Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-secondary/50 border-border focus:border-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-foreground">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-secondary/50 border-border focus:border-primary"
                    />
                  </div>
                </div>

                <div className="space-y-2 mb-5">
                  <Label htmlFor="phone" className="text-foreground">Phone (Optional)</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+91 XXXXX XXXXX"
                    value={formData.phone}
                    onChange={handleChange}
                    className="bg-secondary/50 border-border focus:border-primary"
                  />
                </div>

                <div className="space-y-2 mb-6">
                  <Label htmlFor="message" className="text-foreground">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your project..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="bg-secondary/50 border-border focus:border-primary resize-none"
                  />
                </div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full gradient-primary text-primary-foreground shadow-glow hover:shadow-glow-intense transition-all duration-500"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </Button>
                </motion.div>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;