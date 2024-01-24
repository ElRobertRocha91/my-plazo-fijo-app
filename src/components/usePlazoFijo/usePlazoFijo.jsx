import { useState, useEffect } from "react";

function usePlazoFijo() {
    //Estado para guardar los datos de la API
    const [dataApi, setDataApi] = useState(null);

    //Estado para guardar el tipo de plazo fijo a simular.
    const [plazoFijo, setPlazoFijo] = useState("pesos");
    //Estado para guardar el monto ingresado.
    const [monto, setMonto] = useState(0);
    //Estado para inicializar en cero el resultado.
    const [result, setResult] = useState({
        TNA: 0,
        intereses: 0,
        montoFinal: 0
    });
    const [fechaActual, setFechaActual] = useState(new Date());
    const [inputMasDias, setInputMasDias] = useState(false);
    const [cantidadDias, setCantidadDias] = useState(30);

    useEffect(() => {
        const getData = async () => {
            try {
                const res = await fetch("http://localhost:3000/api");

                if (!res.ok) {
                    throw new Error("Failed to fetch data");
                }

                const data =  await res.json();
                // console.log(data);
                setDataApi(data);
            } catch (error) {
                console.error("Error fetch data:", error);
            }
        };
        //Invocamos cuando se monte el componente.
        getData();
    }, []);

    //Actualizamos el estado cuando el cliente seleccione el tipo de plazo fijo a simular.
    const handleChangePlazoFijo = (event) => {
        setPlazoFijo(event.target.value);
    }

    //Actualizamos el estado y capturamos el valor del input, que ingreso el cliente.
    const handleChangeMonto = (event) => {
        setMonto(event.target.value);
    }

    //Capturamos los días que ingresara al selecionar mas dias.
    const handleChangeDias = (event) => {
        setCantidadDias(event.target.value);
    }

    const handleChangeMasdias = (dias) => {
        //Verificamos si habilitamos el input de días adicionales.
        if (dias === "masDías") {
            setInputMasDias(true);
        } else {
            setInputMasDias(false);
            setCantidadDias(30);
        }
    }
    //dataApi es un objeto ==> {tasas: []}
    //Datos de las tasas de interes del BCRA.
    const TNA_$ = dataApi ? dataApi.tasas.find(tasa => tasa.name === "pesos").TNA : 0;
    const TNA_U$D = dataApi ? dataApi.tasas.find(tasa => tasa.name === "dolares").TNA : 0;
    const numCien = 100;

    //Lógica para calcular el interes.
    const calculateInterest = (dias) => {
        const tna = plazoFijo === "pesos" ? TNA_$ : TNA_U$D;
        const montoNumerico = parseInt(monto);
        
        if (dias >= 30 && dias < 60) {
            const tnm = tna / 12;
            const interesGanado = parseFloat(((montoNumerico * tnm) / numCien).toFixed(2));
            return interesGanado;
        } else if (dias >= 60 && dias < 90) {
            const tnm = tna / 6;
            const interesGanado = parseFloat(((montoNumerico * tnm) / numCien).toFixed(2));
            return interesGanado;
        } else if (dias >= 90 && dias < 120) {
            const tnm = tna / 4;
            const interesGanado = parseFloat(((monto * tnm) / numCien).toFixed(2));           
            return interesGanado;
        } else if (dias >= 120 && dias <= 365) {
            const tnm = tna / 2;
            const interesGanado = parseFloat(((monto * tnm) / numCien).toFixed(2));            
            return interesGanado;
        }
    }

    //Función ejecutadora.
    const handleCalculate = (dias) => {
        const diasNumerico = parseInt(dias);
        const montoNumerico = parseFloat(monto);
        
        //Validación
        if ( plazoFijo === "pesos" && montoNumerico < 1000) {
            alert("El monto minimo permitido es de $ 1.000");
            //Con return me aseguro que se detenga la ejecución de la función.
            return;
        }else if(plazoFijo === "dolares" && montoNumerico < 100){
            alert("El monto minimo permitido es de U$S 100");
            return;
        }
        //Calcula los intereses y el capital invertido.
        const intereses = calculateInterest(diasNumerico);
        const montoFinal = parseFloat(monto) + parseFloat(intereses);

        //Calculamos la fecha de finalización del plazo fijo
        const nuevaFechaFinalización = new Date();
        nuevaFechaFinalización.setDate(nuevaFechaFinalización.getDate() + dias);

        setFechaActual(nuevaFechaFinalización);

        const TNA = plazoFijo === "pesos" ? TNA_$ : TNA_U$D;
        setResult({ TNA, intereses, montoFinal });
    }

    return {
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
    }
}

export default usePlazoFijo;