import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium ring-offset-background transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 font-body",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow-soft hover:bg-[hsl(270,70%,55%)] hover:shadow-[0_0_25px_hsl(265,60%,50%,0.5)] hover:-translate-y-0.5 hover:scale-[1.02]",
        destructive: "bg-destructive text-destructive-foreground hover:bg-[hsl(0,75%,50%)] hover:shadow-[0_0_20px_hsl(0,84%,60%,0.4)]",
        outline: "border-2 border-primary bg-transparent text-primary hover:bg-primary hover:text-primary-foreground hover:shadow-[0_0_20px_hsl(255,65%,50%,0.4)] hover:border-[hsl(270,70%,55%)]",
        secondary: "bg-secondary text-secondary-foreground hover:bg-[hsl(250,20%,20%)] hover:text-primary-foreground hover:shadow-soft",
        ghost: "hover:bg-accent/20 hover:text-accent hover:shadow-[0_0_15px_hsl(265,55%,45%,0.2)]",
        link: "text-primary underline-offset-4 hover:underline hover:text-[hsl(270,70%,60%)]",
        hero: "gradient-primary text-primary-foreground shadow-card hover:shadow-[0_0_40px_hsl(255,65%,50%,0.5),0_20px_50px_-15px_hsl(0,0%,0%,0.5)] hover:-translate-y-1 hover:scale-[1.03] hover:brightness-110",
        accent: "gradient-accent text-accent-foreground shadow-card hover:shadow-[0_0_35px_hsl(275,50%,55%,0.5),0_20px_50px_-15px_hsl(0,0%,0%,0.5)] hover:-translate-y-1 hover:brightness-110",
      },
      size: {
        default: "h-10 px-6 py-2",
        sm: "h-9 rounded-md px-4",
        lg: "h-12 rounded-xl px-8 text-base",
        xl: "h-14 rounded-xl px-10 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
