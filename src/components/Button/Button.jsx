function Button({ handleCalculate, handleChangeMasdias }) {
    return (
        <div className="flex flex-col m-4 md:flex-row md:space-x-2 md:items-center">
            <div className="my-2 sm:my-4">
                <button
                    type="button"
                    className="bg-sky-400 px-3 py-2 rounded w-full md:w-24 border-2 border-sky-900 hover:bg-sky-800 hover:text-white"
                    onClick={() => handleCalculate(30)}
                >
                    30 días
                </button>
            </div>
            <div className="my-2 sm:my-4">
                <button
                    type="button"
                    className="bg-sky-400 px-3 py-2 rounded w-full md:w-24 border-2 border-sky-900 hover:bg-sky-800 hover:text-white"
                    onClick={() => handleCalculate(60)}
                >
                    60 días
                </button>
            </div>
            <div className="my-2 sm:my-4">
                <button
                    type="button"
                    className="bg-sky-400 px-3 py-2 rounded w-full md:w-24 border-2 border-sky-900 hover:bg-sky-800 hover:text-white"
                    onClick={() => handleCalculate(90)}
                >
                    90 días
                </button>
            </div>
            <div className="my-2 sm:my-4">
                <button
                    type="button"
                    className="bg-sky-400 px-3 py-2 rounded w-full md:w-24 border-2 border-sky-900 hover:bg-sky-800 hover:text-white"
                    onClick={() => handleChangeMasdias("masDías")}
                >
                    Más días
                </button>
            </div>
        </div>
    )
}

export default Button;