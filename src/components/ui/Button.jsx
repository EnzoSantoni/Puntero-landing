export default function Button ({ variant = "primary", children, href, ...props }) {

    const base = "px-6 py-3 font-semibold transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-accent inline-flex items-center justify-center gap-2"

    const variants = {
        primary: "bg-primary hover:bg-primary-hover text-bg rounded-full",
        secondary: "bg-surface-2 border border-line text-ink rounded-xl",
        ghost: "text-ink-muted hover:text-ink rounded-full"
    }
    
    const Tag = href ? "a" : "button";

    return (
        <Tag href={href} {...props} className={`${base} ${variants[variant]}`}>{children}</Tag>
    )
}