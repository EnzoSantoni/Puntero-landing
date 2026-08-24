export default function SectionTitle ({ kicker, title, subtitle }) {

    return (
        <div className="text-center">
            {kicker && <p className="text-sm font-semibold text-primary">{kicker}</p>}
            <h2 className="mt-3 text-3xl md:text-5xl font-extrabold tracking-tight">{title}</h2>
            {subtitle && <p className="mt-4 text-base md:text-lg text-ink-muted max-w-2xl mx-auto">{subtitle}</p>}
        </div>
    )
}