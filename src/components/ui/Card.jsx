export default function Card({ children, className= "" }) {

    return (
        <div className={`bg-surface border border-line rounded-2xl p-6 md:p-8 ${className}`}>{children}</div>
    )
}