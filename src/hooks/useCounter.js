import { useState } from "react"


const useCounter = (valorInicial = 0) => {

  const [contador, setContador] = useState(valorInicial)

  const incrementar = (valor = 1) => {
    setContador(contador + valor)
  }

  const decrementar = (valor = 1, negativo) => {
    
    if(!negativo && contador - valor < 1) return
    setContador(contador - valor)
  }

  const resetear = () => {
    setContador(0)
  }

  return {
    contador,
    incrementar,
    decrementar,
    resetear
  }
  
}

export default useCounter
