import {useState} from 'react'
import styles from "./ContactForm.module.css"

const ContactForm = () => {
  const [formData, setFormData] = useState({
    nome:"",
    email:"",
    mensagem:""
  })

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]:e.target.value})
    // if(e.target.name === "nome"){
    //   setFormData({ ...formData, nome: e.target.value})
    // }else if (e.target.name === "email"){
    //   setFormData({ ...formData, email: e.target.value})
    // }
  }

  const handleSubmit = (e) =>{
    e.preventDefault()
    console.log("formulário enviado", formData)
    alert("Mensagem Enviada com Sucesso")
    setFormData({nome:"", email:"", mensagem:""})
  }



  
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input 
      type="text"
      name='nome'
      placeholder='Nome'
      className={styles.input}
      value={formData.nome}
      onChange={handleChange}
      required="true"
       />
       <input 
       type="email" 
       name="email"
       placeholder='E-mail'
       className={styles.input}
       value={formData.email}
       onChange={handleChange}
       required="true"
       />

       <textarea 
       name="mensagem"
       placeholder='Mensagem'
       className={styles.textarea}
       value={formData.mensagem}
       onChange={handleChange}
       required="true"
       />
       <button type='submit' className={styles.button}>enviar</button>
    </form>
  )
}

export default ContactForm
