'use client'

import usePlazoFijo from './../components/usePlazoFijo/usePlazoFijo';
import MontoInput from './../components/MontoInput/MontoInput';
import Button from '../components/Button/Button';
import DiasInput from '../components/diasInput/DiasInput';
import Card from '../components/Card/Card';

function Page() {

    const {
        plazoFijo,
        monto,
        result,
        fechaActual,
        inputMasDias,
        cantidadDias,
        handleChangePlazoFijo,
        handleChangeMonto,
        handleChangeDias,
        handleChangeMasdias,
        handleCalculate
    } = usePlazoFijo();

    return (
        <section>
            <div>
                <h1 className="text-3xl font-bold underline text-center">Simulá tu Plazo Fijo</h1>
                <h4 className="text-3xl my-3 px-3">Tipo de Plazo Fijo</h4>
            </div>
            <div>
                <div className='flex flex-row space-x-4 space-y-1 mx-3'>
                    <input type="radio" value="pesos" checked={plazoFijo === "pesos"} onChange={handleChangePlazoFijo} />
                    <p>Plazo Fijo en pesos</p>
                </div>
                <div className='flex flex-row space-x-4 space-y-1 mx-3'>
                    <input type="radio" value="dolares" checked={plazoFijo === "dolares"} onChange={handleChangePlazoFijo} />
                    <p>Plazo Fijo en dólares</p>
                </div>
                <div>
                    <div className="text-center sm:text-left">
                        <h2 className="text-3xl my-3">¿Cuánto querés invertir?</h2>
                    </div>
                    <div>
                        {plazoFijo === "pesos" && <MontoInput monto={monto} plazoFijo={plazoFijo} onChange={handleChangeMonto}/>}
                        {plazoFijo === "dolares" && <MontoInput monto={monto} plazoFijo={plazoFijo} onChange={handleChangeMonto}/>}
                    </div>
                    <div>
                        <div className="text-center sm:text-left">
                            <h2 className="text-3xl my-3">¿A cuántos días?</h2>
                        </div>
                        <Button handleCalculate={handleCalculate} handleChangeMasdias={handleChangeMasdias} />
                        <DiasInput cantidadDias={cantidadDias} inputMasDias={inputMasDias} handleChangeDias={handleChangeDias} handleCalculate={handleCalculate} />
                        <Card result={result} fechaActual={fechaActual} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Page;