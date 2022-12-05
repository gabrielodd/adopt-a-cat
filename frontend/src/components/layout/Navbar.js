import { Link } from 'react-router-dom'

import Logo from '../../assets/img/logo.png'

function Navbar() {
  return (
    <nav>
      <div>
        <img src={Logo} alt="Adopt A Cat"></img>
        <h2>Adopt A Cat</h2>
      </div>
      <ul>
        <li>
          <Link to="/">Adotar</Link>
        </li>
        <li>
          <Link to="/login">Entrar</Link>
        </li>
        <li>
          <Link to="/register">Cadastrar</Link>
        </li>
        <li>
          <Link to="/">Adotar</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar