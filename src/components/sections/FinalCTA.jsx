import Section from "../ui/Section";
import Button from "../ui/Button";
import { ArrowRight } from "lucide-react";

export default function FinalCTA () {

    return (
        <Section className="border-y border-line bg-linear-to-b from-surface/60 to-bg text-center">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">Armá tu próximo partido en Puntero</h2>
            <p className="mt-5 text-base md:text-lg text-ink-muted max-w-xl mx-auto">Creá tu grupo, sumá a los pibes con un link y arrancá a llevar la cuenta en serio.</p>
            <div className="mt-10">
                <Button href="https://app.puntero.com.ar">Empezá gratis<ArrowRight size={18} aria-hidden="true" /></Button>

            </div>
        </Section>
    )
}