function DiasInput({ cantidadDias, inputMasDias, handleChangeDias, handleCalculate }) {
    return (
        <div>
            {inputMasDias && (
                <div className="flex flex-col m-4 md:flex-row md:space-x-2 md:items-center">
                    <div className="my-2 sm:my-4 text-center sm:text-left">
                        <label>Ingrese la cantidad de días (máximo 365): </label>
                    </div>
                    <div className="my-2 sm:my-4">
                        <input type="number"
                            value={cantidadDias}
                            onChange={handleChangeDias}
                            className="bg-teal-100 border-solid border-2 border-sky-900 rounded w-full text-center md:text-right" />
                    </div>
                    <div className="my-2 sm:my-4">
                        <button type="button"
                            className="bg-sky-400 rounded w-full md:w-24 border-2 border-sky-900 hover:bg-sky-800 hover:text-white"
                            onClick={() => handleCalculate(parseInt(cantidadDias))}>
                            Calcular
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default DiasInput;