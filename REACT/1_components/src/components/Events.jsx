import React from 'react'

const Events = () => {
  const handleGreetings = (name) =>{
    alert(`Olá ${name}`)
  }
  return (
   <>
   <button onClick={()=>alert("clicado")}>Alerta</button>
   <button onClick={()=> handleGreetings('João')}>Chamado da função</button>
   </>
  )
}

export default Events
