import React from 'react'
import './MyCSSComponent.css'


const MyCSSComponent = () => {

  const cssInline = {
    color:"#F00",
    FontSize: "20px",
    backgroundColor: "#000"
  }
  return (
<>
<h1>Meu Título</h1>
<p style={cssInline}>Meu parágrafo</p>
</>
  )
}

export default MyCSSComponent