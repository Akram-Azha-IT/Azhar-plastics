import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    
    // Harvey.ai inspired monochrome variations
    const variants = {
      primary: "bg-white text-black hover:bg-zinc-200",
      secondary: "bg-zinc-900 border border-white/10 text-white hover:bg-zinc-800",
      outline: "border border-white/20 bg-transparent text-white hover:bg-white/10",
      ghost: "text-zinc-400 hover:text-white hover:bg-white/5",
    };

    const sizes = {
      sm: "h-8 px-4 text-xs font-semibold uppercase tracking-widest",
      md: "h-11 px-6 py-2 text-sm font-semibold tracking-wide",
      lg: "h-14 px-10 text-base font-semibold tracking-wider",
    };

    return (
      <Comp
        className={cn(
          "inline-flex items-center justify-center rounded-none whitespace-nowrap transition-all duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-500 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98]",
          variants[variant],
          sizes[size],
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, cn };
