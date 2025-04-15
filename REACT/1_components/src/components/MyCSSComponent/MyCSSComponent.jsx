import React from 'react'

const MyCSSComponent = () => {

  const cssInline = {
    color:"#F00",
    FontSize: "20px",
    backgroundColor: "#000"
  }
  return (
<>
<p style={cssInline}>Meu parágrafo</p>
</>
  )
}

export default MyCSSComponent