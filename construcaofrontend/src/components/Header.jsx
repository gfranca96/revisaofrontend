import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import './Header.css';
import UserContext from "../contexts/UserContext";

export default function Header(props) {
  const { userID, handleLogout } = useContext(UserContext)
  const navigate = useNavigate()
  const perfil = `perfil/${userID}`
  
  function handleClick(event){
    handleLogout()
    navigate("/Login")

  }
    return (
        <header>
        <h1>Controle Social</h1>
        <nav>
          <ul>
            <li><NavLink to="/">Inicio</NavLink></li>
            <li><NavLink to={perfil}>Perfil</NavLink></li>
            <li><NavLink to="/representante">Representante</NavLink></li>
            <li><NavLink to="/parceiro">Parceiro</NavLink></li>
            <li><NavLink to={`/acaosocial/${props.usuarioID}`}>Ações</NavLink></li>
            <li><button onClick={handleClick}>Sair</button></li>
          </ul>
        </nav>
      </header>
    )
}