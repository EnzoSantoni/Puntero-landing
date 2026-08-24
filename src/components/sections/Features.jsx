import SectionTitle from "../ui/SectionTitle";
import { features } from "../../data/features";
import Card from "../ui/Card"
import Section from "../ui/Section";

export default function Features () {

    return (
        <Section id="features">
            <SectionTitle kicker="Características" title="Todo lo que tu grupo necesita" subtitle="Desde armar los equipos hasta contar los goles. Sin planillas sueltas ni cadenas de WhatsApp que se pierden." />
            <div className="mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {features.map(f => {
                    const Icon = f.icon;
                    return <Card key={f.title} className="group transition duration-200 hover:border-primary/40 motion-safe:hover:-translate-y-1">
                        <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-surface-2 text-primary group-hover:bg-primary/10 transition-colors duration-200">
                            <Icon size={20} />
                        </div>
                        <h3 className="mt-5 text-lg font-semibold">{f.title}</h3>
                        <p className="mt-2 text-sm text-ink-muted">{f.description}</p>
                    </Card>
                })}
            </div>
        </Section>
    )
}