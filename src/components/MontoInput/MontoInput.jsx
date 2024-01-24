function MontoInput({ monto, plazoFijo, onChange }) {
    return (
        <div className="card">
            {plazoFijo === "pesos" && (
                <div className="flex flex-col mx-4 text-center sm:text-left md:flex-row">
                    <label className="px-3">Monto en $</label>
                    <input type="number" value={monto} onChange={onChange} className="bg-teal-100 border-solid border-2 border-sky-900 rounded text-center md:text-right"/>
                </div>
            )}
            {plazoFijo === "dolares" && (
                <div className="flex flex-col mx-4 text-center sm:text-left md:flex-row">
                    <label className="px-3">Monto en U$D</label>
                    <input type="number" value={monto} onChange={onChange} className="bg-teal-100 border-solid border-2 border-sky-900 rounded text-center md:text-right"/>
                </div>
            )}
        </div>
    )
}

export default MontoInput;