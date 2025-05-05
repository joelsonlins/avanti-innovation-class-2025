import './App.css'
import Accordion from './components/Accordion/Accordion'
import Clock from './components/Clock/Clock'
import ContactForm from './components/ContactForm/ContactForm'
import Modal from './components/Modal/Modal'

function App() {
  

  return (
    <>
    <h1>Relógio</h1>
    <Clock></Clock>
    <hr />
    <h2>Modal</h2>
    <Modal></Modal>
    <hr />
    <h2>Formulário de Contato</h2>
    <ContactForm></ContactForm>
    <hr />
    <h2>Accordion</h2>
    <Accordion></Accordion>
    </>
  )
}

export default App
