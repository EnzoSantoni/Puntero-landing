import Container from "../ui/Container"
import Button from "../ui/Button"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import { links } from "../../data/nav"




export default function Navbar() {

    const [open, setOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 bg-bg/80 backdrop-blur-md border-b border-line">
            <nav>
                <Container>
                    <div className="flex items-center justify-between h-16">
                        <span className="text-xl font-bold"><span className="text-primary">Pun</span>tero</span>
                        <div className="hidden md:flex items-center gap-8">
                            {links.map(l => {
                                return <a className="text-sm text-ink-muted hover:text-ink transition-colors" href={l.href} key={l.href}>{l.label}</a>
                            })}
                        </div>
                        <div className="hidden md:flex items-center gap-3">
                            <Button variant="ghost" href="https://app.puntero.com.ar">Entrar</Button>
                            <Button href="https://app.puntero.com.ar">Crear cuenta</Button>
                        </div>
                        <button 
                            className="md:hidden p-2 rounded-xl text-ink hover:bg-surface-2 transition-colors focus-visible:outline-2 focus-visible:outline-accent" aria-expanded={open} 
                            aria-label={open ? "Cerrar menú" : "Abrir menú"} 
                            aria-controls="mobile-menu"
                            onClick={() => setOpen(!open)}>
                                {open ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </Container>

                {open && 
                <div className="md:hidden border-t border-line" id="mobile-menu">
                    <Container>
                        <div className="flex flex-col gap-1 py-4 ">
                            {links.map(l => {
                                return <a className="text-base text-ink-muted hover:text-ink transition-colors py-2" href={l.href} key={l.href} onClick={() => setOpen(false)} >{l.label}</a>
                            })}
                        </div>
                        <div className="flex flex-col gap-3 pb-6">
                            <Button variant="ghost" href="https://app.puntero.com.ar">Entrar</Button>
                            <Button href="https://app.puntero.com.ar">Crear cuenta</Button>
                        </div>
                    </Container>
                </div>}
            </nav>
        </header>
    )
}