import Container from "../ui/Container"
import Button from "../ui/Button"
import dashboard from "../../assets/image/dashboard-desktop.png"

export default function Hero () {


    return (
        <section className="py-20 md:py-28 lg:py-32 relative overflow-hidden">
            <div className="pointer-events-none absolute left-1/2 -translate-x-1/2 top-0 h-[500px] w-[900px] rounded-full bg-primary/20 blur-3xl" aria-hidden="true"></div>
            <div className="relative">
                <Container>
                    <div className="text-center">
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight">Organizá tus partidos con amigos, sin quilombo.</h1>
                        <p className="mt-6 text-base md:text-lg text-ink-muted max-w-2xl mx-auto">Puntero junta a tu grupo de fútbol o pádel: armá los partidos, sumá gente con un link y llevá los goles y las estadísticas de cada uno.</p>
                        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Button href="https://app.puntero.com.ar">Empezá gratis</Button>
                            <Button variant="ghost" href="#como-funciona">Ver cómo funciona</Button>
                        </div>
                    </div>
                    <div className="mt-16 md:mt-20 rounded-2xl border border-line bg-surface p-2">
                            <div className="aspect-video w-full overflow-hidden rounded-xl bg-surface-2">
                                <img className="h-full w-full object-cover object-top" src={dashboard} alt="Dashboard de Puntero con las métricas del grupo: partidos jugados, jugadores, equipos y goles totales." />
                            </div>
                        </div>
                </Container>
            </div>
        </section>
    )
}