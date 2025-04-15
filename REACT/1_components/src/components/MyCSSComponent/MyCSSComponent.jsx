import React from 'react'
import styles from "./MyCSSComponent.module.css"


const MyCSSComponent = () => {

  const cssInline = {
    color:"#F00",
    FontSize: "20px",
    backgroundColor: "#000"
  }
  return (
<>
<h1 className={styles.title}>Meu Título</h1>
<p style={cssInline}>Meu parágrafo</p>
</>
  )
}

export default MyCSSComponent