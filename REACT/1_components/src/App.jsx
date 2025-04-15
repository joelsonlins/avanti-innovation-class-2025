import React from 'react'
import './App.css'
import TextComponent from './components/TextComponent'
import { SecondText, ThirdText } from './components/OtherComponents'
import Events from './components/Events'
import MyCSSComponent from './components/MyCSSComponent/MyCSSComponent'

function App() {


  return (
    <>
    <h2>Meu componente CSS</h2>
    <MyCSSComponent></MyCSSComponent>

    <h2>Eventos</h2>
    <Events></Events>
    
    </>
  )
}

export default App
