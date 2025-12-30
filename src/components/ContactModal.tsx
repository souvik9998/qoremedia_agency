import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Phone, Mail, MessageCircle } from "lucide-react";
import CountUp from "react-countup";

interface ContactModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

interface AnimatedNumberProps {
  value: string;
  start: boolean;
}

const AnimatedNumber = ({ value, start }: AnimatedNumberProps) => {
  // Extract digits and format
  const digits = value.replace(/\D/g, "");
  const prefix = value.startsWith("+") ? "+" : "";
  
  if (!start) {
    return <span>{value}</span>;
  }

  return (
    <span>
      {prefix}
      <CountUp
        start={0}
        end={parseInt(digits)}
        duration={1.5}
        separator=""
        preserveValue
      />
    </span>
  );
};

const ContactModal = ({ open, onOpenChange }: ContactModalProps) => {
  const [animationStarted, setAnimationStarted] = useState(false);

  useEffect(() => {
    if (open) {
      // Small delay before starting animation
      const timer = setTimeout(() => setAnimationStarted(true), 200);
      return () => clearTimeout(timer);
    } else {
      setAnimationStarted(false);
    }
  }, [open]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md gradient-card border-border/50 shadow-elevated">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl text-center">
            Let's <span className="text-gradient">Connect</span>
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-6 py-4">
          <p className="text-center text-muted-foreground font-body">
            Ready to scale your business? Reach out to us through any of these channels.
          </p>
          
          <div className="space-y-4">
            <a
              href="tel:+917797571334"
              className="flex items-center gap-4 p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center shadow-soft group-hover:shadow-card transition-shadow">
                <Phone className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <p className="font-medium text-foreground font-mono">
                  <AnimatedNumber value="+91 77975 71334" start={animationStarted} />
                </p>
                <p className="text-sm text-muted-foreground">Primary Contact</p>
              </div>
            </a>

            <a
              href="tel:+917001090471"
              className="flex items-center gap-4 p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center shadow-soft group-hover:shadow-card transition-shadow">
                <MessageCircle className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <p className="font-medium text-foreground font-mono">
                  <AnimatedNumber value="+91 7001090471" start={animationStarted} />
                </p>
                <p className="text-sm text-muted-foreground">Alternate Contact</p>
              </div>
            </a>

            <a
              href="mailto:qoremediabuisness@gmail.com"
              className="flex items-center gap-4 p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-full gradient-accent flex items-center justify-center shadow-soft group-hover:shadow-card transition-shadow">
                <Mail className="w-5 h-5 text-accent-foreground" />
              </div>
              <div>
                <p className="font-medium text-foreground">qoremediabuisness@gmail.com</p>
                <p className="text-sm text-muted-foreground">Email Us</p>
              </div>
            </a>
          </div>

          <p className="text-center text-sm text-muted-foreground">
            We typically respond within 24 hours
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ContactModal;
