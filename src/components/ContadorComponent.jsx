import useCounter from "../hooks/useCounter"

export const ContadorComponent = () => {



    const {contador, incrementar, decrementar, resetear} = useCounter(0)


    return(
        <>
            <h1>Contador: { contador }</h1>
            <button className="btn btn-primary m-2" onClick={() => incrementar(1)}> +1 </button>
            <button className="btn btn-danger m-2" onClick={() => resetear()}> RESET </button>
            <button className="btn btn-primary m-2" onClick={() => decrementar(1, true)}> -1 </button>
        </>
    )
}