export default function Heading({children}){
    return (
        <h2 className="capitalize text-2xl md:lg text-amber-500 dark:text-white font-bold my-3 text-center mb-10 underline">
            {children}
        </h2>
    )
}