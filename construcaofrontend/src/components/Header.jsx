import { NavLink, useNavigate } from "react-router-dom";
import './Header.css';

export default function Header(props) {
  const navigate = useNavigate()
  
  function handleClick(event){
    props.onLogout()
    navigate("/Login")

  }
    return (
        <header>
        <h1>Controle Social</h1>
        <nav>
          <ul>
            <li><NavLink to="/">Inicio</NavLink></li>
            <li><NavLink to="/representante">Representante</NavLink></li>
            <li><NavLink to="/parceiro">Parceiro</NavLink></li>
            <li><NavLink to={`/acaosocial/${props.usuarioID}`}>Ações</NavLink></li>
            <li><button onClick={handleClick}>Sair</button></li>
          </ul>
        </nav>
      </header>
    )
}