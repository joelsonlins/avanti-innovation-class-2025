import React, {useState, useEffect} from 'react'

const Counter = () => {

  const [counter, setCount] = useState(0);

  useEffect(()=>{
    document.title = `Contador: ${counter}`
  },[counter])

  const increment = () => {
    setCount((prevState)=>prevState + 1)
  }

  const decrement = () => {
    setCount((prevState)=>prevState - 1)
  }

  return (
    <>
    {counter}
    <button onClick={increment}>Incrementa o Valor</button>
    <button onClick={decrement}>Diminui o valor o Valor</button>
    </>
  )
}

export default Counter