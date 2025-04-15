import React from 'react'
import './App.css'
import TextComponent from './components/TextComponent'
import { SecondText, ThirdText } from './components/OtherComponents'

function App() {


  return (
    <>
        <TextComponent text="Meu primeiro texto." descricao="descrição do primeiro texto"/>
        <TextComponent text="Meu segundo texto." descricao="descrição do segundo texto"/>
        <TextComponent text="Meu terceiro texto." descricao="descrição do terceiro texto"/>
        <SecondText/>
        <ThirdText/>
    </>
  )
}

export default App
