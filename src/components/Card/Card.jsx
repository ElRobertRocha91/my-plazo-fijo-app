import Image from "next/image";

function Card({ result, fechaActual }) {
    return (
        <div className="flex flex-col sm:flex-row gap-4 border-t-4 border-solid border-cyan-700 bg-blue-100">
            <div className="sm:w-1/2 m-4">
                <Image 
                    unoptimized
                    src="plazo-fijo.png"
                    alt="Image"
                    className="object-cover w-full h-full rounded-lg border-2 border-sky-900" />
            </div>
            <div className="sm:w-1/2 border-solid border-2 border-sky-900 rounded m-4">
                <div className="font-mono p-4">
                    <p>Al final del plazo fijo,recibís</p>
                </div>
                <div className="p-4 flex items-center">
                    <span className="mr-2">$</span>
                    <span className="font-bold">{result.montoFinal}</span>
                </div>
                <div className="font-mono p-4">
                    <p>TNA</p>
                    <span>{result.TNA}%</span>
                </div>
                <div className="font-mono p-4">
                    <p>Interés ganado</p>
                    <div className="flex items-center">
                        <span className="mr-2">$</span>
                        <span className="font-bold">{result.intereses}</span>
                    </div>
                </div>
                <div className="font-mono p-4">
                    <p>Hasta el</p>
                    <p>{fechaActual.toLocaleDateString()}</p>
                </div>

            </div>
        </div>
    )
}

export default Card;