function AboutPage() {
    return (
        <section className="bg-teal-950">
            <article className="text-center">
                <div className="container mx-auto px-4">
                    <h1 className="font-mono text-slate-200 text-2xl pt-2">Bienvenido al simulador de plazo fijo online</h1>
                    <br />
                    <p className="font-sans text-slate-200 text-xl text-justify">
                        Este proyecto tiene como proposito simular un plazo fijo online, un plazo fijo es un instrumento de inversión de bajo riesgo a través del cual las entidades bancarias te pagan una tasa de interés por mantener el dinero inmovilizado,
                        el cual devolvera al final del periodo seleccionado, un interes más el capital invertido.
                        Las tecnologías utilizadas para realizarlo fueron Next.js, React y Tailwind CSS.
                        Teniendo como lenguaje de programación JavaScript, en su desarrollo.
                    </p>
                </div>
                <div className="flex flex-col md:flex-row justify-center py-4">
                    <div className="flex flex-col items-center my-2 sm:my-4 mx-4 border-solid border-2 border-sky-500 rounded-md p-2 bg-sky-950">
                        <img className="object-center w-24 h-24" src="nextjs.png" alt="Next.js" />
                        <h1 className="text-slate-200 text-sm pt-2 sm:pt-0">Next.js</h1>
                    </div>
                    <div className="flex flex-col items-center my-2 sm:my-4 mx-4 border-solid border-2 border-sky-500 rounded-md p-2 bg-sky-950">
                        <img className="object-center w-24 h-24" src="react.png" alt="React" />
                        <h1 className="text-slate-200 text-sm pt-2 sm:pt-0">React</h1>
                    </div>
                    <div className="flex flex-col items-center my-2 sm:my-4 mx-4 border-solid border-2 border-sky-500 rounded-md p-2 bg-sky-950">
                        <img className="object-center w-24 h-24" src="javascript.png" alt="JavaScript" />
                        <h1 className="text-slate-200 text-sm pt-2 sm:pt-0">JavaScript</h1>
                    </div>
                    <div className="flex flex-col items-center my-2 sm:my-4 mx-4 border-solid border-2 border-sky-500 rounded-md p-2 bg-sky-950">
                        <img className="object-center w-24 h-24" src="tailwind-css.png" alt="Tailwind CSS" />
                        <h1 className="text-slate-200 text-sm pt-2 sm:pt-0">Tailwind CSS</h1>
                    </div>
                </div>
                <div className="container mx-auto px-4">
                    <h2 className="font-mono text-slate-200 text-2xl">¿Por que usar Next.js?</h2>
                    <br />
                    <p className="font-sans text-slate-200 text-xl text-justify">
                        Next.js es un Framework de React, desarrollado por Vercel. Permite un marco de trabajo a los desarrolladores para crear sitios web
                        y aplicaciones web de alto rendimiento a través de la renderización del lado del servidor.
                    </p>
                </div>
            </article>
            <div className="text-center">
                <h1 className="font-mono text-slate-200 text-2xl pt-4 border-b-4 border-solid border-sky-700">Preguntas frecuentes</h1>
                <div className="grid gap-x-8 grid-cols-1 md:grid-cols-2 px-2 py-2">
                    <article className="font-sans text-slate-200 text-xl text-justify px-6">
                        <div className="grid-cols-1">
                            <div>
                                <br />
                                <h2 className="font-mono text-slate-200 text-left md:text-center text-base">¿En qué consiste un Plazo Fijo?</h2>
                                <p className="text-sm p-2">
                                    Es un tipo de inversión en la que se deposita dinero en un banco durante un período de tiempo determinado.
                                    El beneficiario recibe una retribución en concepto de tasa de interés, vinculada al tiempo que transcurre entre la colocación y la fecha de vencimiento.
                                </p>
                            </div>
                            <div>
                                <br />
                                <h2 className="font-mono text-slate-200 text-left md:text-center text-base">¿En qué moneda se puede realizar?</h2>
                                <p className="text-sm p-2">
                                    El plazo fijo se puede realizar en pesos y en dolares en Argentina
                                </p>
                            </div>
                        </div>
                    </article>
                    <article className="font-sans text-slate-200 text-xl text-justify px-6">
                        <div className="grid-cols-1">
                            <div>
                                <br />
                                <h2 className="font-mono text-slate-200 text-left md:text-center text-base">¿Comó calcular el interés del plazo fijo</h2>
                                <p className="text-sm p-2">
                                    Para saber el valor en concepto de interés de un plazo fijo se debe realizar el siguiente calculo:
                                    (Monto * TNA * Cantidad de días) / (365 * 100)
                                </p>
                            </div>
                            <div>
                                <br />
                                <h2 className="font-mono text-slate-200 text-left md:text-center text-base">¿Existe un monto mínimo o máximo para realizar un Plazo Fijo?</h2>
                                <p className="text-sm p-2">
                                    El monto mínimo son $1000 o U$S100. En cuanto al monto máximo, será aquel que determine la entidad bancaria
                                </p>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    )
}

export default AboutPage;