import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "../../lib/utils"

const buttonVariants = cva(
    "inline-flex items-center justify-center rounded-md text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-orange/50 disabled:pointer-events-none disabled:opacity-50",
    {
        variants: {
            variant: {
                default:
                    "bg-white text-black hover:bg-white/90 shadow-sm",
                destructive:
                    "bg-red-500 text-white shadow-sm hover:bg-red-500/90",
                outline:
                    "border border-glass-border bg-transparent shadow-sm hover:bg-glass-bg-hover hover:border-glass-border-hover text-text-primary",
                secondary:
                    "bg-surface-3 text-text-primary shadow-sm hover:bg-surface-4",
                ghost:
                    "hover:bg-glass-bg-hover hover:text-text-primary text-text-secondary",
                link:
                    "text-accent-orange underline-offset-4 hover:underline",
                warm:
                    "bg-gradient-to-r from-accent-orange to-accent-amber text-white font-semibold hover:shadow-lg hover:shadow-accent-orange/25",
            },
            size: {
                default: "h-10 px-5 py-2",
                sm: "h-8 rounded-md px-4 text-xs",
                lg: "h-12 rounded-md px-8 text-base",
                icon: "h-10 w-10",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
)

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
    asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, ...props }, ref) => {
        return (
            <button
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                {...props}
            />
        )
    }
)
Button.displayName = "Button"

export { Button, buttonVariants }
