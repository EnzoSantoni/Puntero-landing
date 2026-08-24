import Container from "./Container"

export default function Section ({ id, className = "", children}) {

    return (
        <section className={`py-20 md:py-28 lg:py-32 ${className}`} id={id}>
            <Container>
                {children}
            </Container>
        </section>
    )
}