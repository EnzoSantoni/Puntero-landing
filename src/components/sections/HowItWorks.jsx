import Section from "../ui/Section";
import SectionTitle from "../ui/SectionTitle";
import { steps } from "../../data/steps"

export default function HowItWorks () {

    return (
        <Section id="como-funciona">
            <SectionTitle kicker="Cómo funciona" title="Cuatro pasos y ya están jugando" subtitle="Armás el grupo una vez y después cada partido te lleva dos minutos." />
            <ol className="mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {steps.map((s, i) => {
                    return (
                        <li key={s.title} className="relative after:absolute after:top-6 after:left-14 after:-right-6 after:h-px after:bg-line after:hidden lg:after:block lg:last:after:hidden">
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-surface-2 border border-line text-lg font-bold text-primary">{i + 1}</div>
                            <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
                            <p className="mt-2 text-sm text-ink-muted">{s.description}</p>
                        </li>
                )})}
            </ol>
        </Section>
    )
}