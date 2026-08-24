import { faq } from "../../data/faq"
import Section from "../ui/Section.jsx"
import SectionTitle from "../ui/SectionTitle.jsx"
import { ChevronDown } from "lucide-react"

export default function Faq () {

    return (
        <Section id="faq">
            <SectionTitle kicker="FAQ" title="Preguntas frecuentes" subtitle="Lo que casi siempre nos preguntan antes de arrancar."  />

            <div className="mt-12 md:mt-16 max-w-3xl mx-auto border-t border-line" >
                {faq.map(f => {
                    return <details name="faq" className="group border-b border-line" key={f.question}>
                        <summary className="list-none cursor-pointer py-5 flex items-center justify-between gap-4 focus-visible:outline-2 focus-visible:outline-accent">
                            <h3 className="text-base md:text-lg font-semibold transition-colors duration-200 group-open:text-primary">{f.question}</h3>
                            <ChevronDown size={20} className="shrink-0 text-ink-muted transition-transform duration-200 group-open:rotate-180"/>
                        </summary>
                        <p className="pb-5 text-sm md:text-base text-ink-muted">{f.answer}</p>
                    </details>
                })}
            </div>
        </Section>
        
    )
}