import Input from '../../form/Input'
import { Link } from 'react-router-dom'
import { useState } from 'react'

import styles from '../../form/Form.module.css'

function Register() {
  const [user, setuser] = useState({})

  function handleChange(e) {
    setuser({...user, [e.target.name]: e.target.value})
  }

  function handleSubmit(e) {
    e.preventDefault()
    //register(user)
  }

  return (
    <section className={styles.form_container}>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
      <Input
          text="Nome"
          type="text"
          name="name"
          placeholder="Digite o seu nome"
          handleOnChange={handleChange}
        />
        <Input
          text="Telefone"
          type="text"
          name="phone"
          placeholder="Digite o seu telefone"
          handleOnChange={handleChange}
        />
        <Input
          text="E-mail"
          type="email"
          name="email"
          placeholder="Digite o seu e-mail"
          handleOnChange={handleChange}
        />
        <Input
          text="Senha"
          type="password"
          name="password"
          placeholder="Digite a sua senha"
          handleOnChange={handleChange}
        />
        <Input
          text="Confirmação de senha"
          type="password"
          name="confirmpassword"
          placeholder="Confirme a sua senha"
          handleOnChange={handleChange}
        />
      </form>
      <p>
        Já tem conta? <Link to="/login">Clique aqui.</Link>
      </p>
    </section>
  )
}

export default Register