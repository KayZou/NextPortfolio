export default function SectionWrapper({children}) {
    return (
        <section className="border-t py-7 border-amber-600 dark:border-white">
            {children}
        </section>
    )
}