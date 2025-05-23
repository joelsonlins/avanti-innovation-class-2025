import React from 'react'
import './App.css'
import TextComponent from './components/TextComponent'
import { SecondText, ThirdText } from './components/OtherComponents'
import Events from './components/Events'
import MyCSSComponent from './components/MyCSSComponent/MyCSSComponent'
import Counter from './components/MyCSSComponent/Counter'
import ProductQuantity from './components/MyCSSComponent/ProductQuantity'
import GithubUser from './components/MyCSSComponent/GithubUser'

function App() {


  return (
    <>

    {/* Contador */}
    <h1>Contador</h1>
    <p><Counter/></p>
    <hr />

    {/* controle de quantidade de produto */}
    <h2>Controle de quantidade do produto</h2>
    <p><ProductQuantity/></p>
    <hr />
    
    {/* Github user*/}
    <h2>Usuário do Github</h2>
    <GithubUser/>


    <h2>Meu componente CSS</h2>
    <MyCSSComponent></MyCSSComponent>

    <h2>Eventos</h2>
    <Events></Events>
    
    </>
  )
}

export default App
