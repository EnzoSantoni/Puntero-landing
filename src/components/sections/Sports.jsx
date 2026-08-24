import Section from "../ui/Section";
import SectionTitle from "../ui/SectionTitle";
import Card from "../ui/Card.jsx";
import {sports} from "../../data/sports.js";
import { Goal, Volleyball, Check } from "lucide-react";

const styles = {
    futbol: {icon: Goal, chip:"bg-primary/10 text-primary", check: "text-primary"},
    padel: {icon: Volleyball, chip: "bg-accent/10 text-accent", check: "text-accent"}
}

export default function Sports () {

    return (
        <Section id="deportes">
            <SectionTitle kicker="Deportes" title="Fútbol y pádel" subtitle="Cada grupo es de un solo deporte y no se puede cambiar después. Si jugás a los dos, armá un grupo para cada uno."/>
            <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
                {sports.map(s => {
                    const { icon: Icon, chip, check } = styles[s.key];
                    return <Card key={s.key}>
                        <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl ${chip}`}><Icon size={24} /></div>
                        <h3 className="mt-5 text-2xl font-bold">{s.name}</h3>
                        <p className="mt-2 text-sm text-ink-muted">{s.tagline}</p>
                        <ul className="mt-6 space-y-3">
                            {s.items.map(i => {
                                return <li key={i} className="flex items-start gap-3 text-sm text-ink-muted">
                                    <Check size={18} className={`mt-0.5 shrink-0 ${check}`} />
                                    {i}
                                </li>
                            })}
                        </ul>
                    </Card>
                })}
            </div>

        </Section>
    )
}