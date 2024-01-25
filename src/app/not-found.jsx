import Link from "next/link";

function NotFound() {
    return (
        <section className="flex h-[calc(100vh-7rem)] justify-center items-center bg-teal-950">
            <div className="text-center">
                <h1 className="text-4xl font-bold text-slate-200">Error: 404</h1>
                <p className="font-serif text-slate-200">{`Pagina "No Encontrada"`}</p>
                <Link href="/" className="text-slate-400 text-2xl mt-5">
                    Volver
                </Link>
            </div>
        </section>
    )
}

export default NotFound;