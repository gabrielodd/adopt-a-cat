import Input from '../../form/Input'

function Register() {
  function handleChange(e) {

  }

  return (
    <section>
      <h1>Register</h1>
      <form>
        <Input text="Nome" type="text" name="name" placeholder="Digite" handleOnChange={handleChange}/>
        <Input text="Nome" type="text" name="name" placeholder="Digite" handleOnChange={handleChange}/>
        <Input text="Nome" type="text" name="name" placeholder="Digite" handleOnChange={handleChange}/>
        <Input text="Nome" type="text" name="name" placeholder="Digite" handleOnChange={handleChange}/>
      </form>
    </section>
  )
}

export default Register