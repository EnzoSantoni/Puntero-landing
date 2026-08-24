import { links } from "../../data/nav"
import Container from "../ui/Container"

export default function Footer () {

    return (
        <footer className="border-t border-line py-12 md:py-16"> 
            <Container> 
                <div className="flex flex-col md:flex-row  md:items-center justify-between gap-6">
                    <div>
                        <span className="text-xl font-bold"><span className="text-primary">Pun</span>tero</span>
                        <p className="mt-3 max-w-xs text-sm text-ink-dim">Un proyecto hecho por y para los que juegan.</p>
                    </div>
                    <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-ink-muted">
                        {links.map(l => {
                            return <a className="hover:text-ink transition-colors" href={l.href} key={l.href}>{l.label}</a>
                        })}
                        <a href="https://app.puntero.com.ar" className="hover:text-ink transition-colors">Entra</a>
                    </nav>
                </div>
            </Container>
        </footer>
    )
}