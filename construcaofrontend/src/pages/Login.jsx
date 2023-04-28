import { useNavigate} from "react-router-dom"
import Section from "../components/Section"

export default function Login(props) {
    const navigate = useNavigate()

    function handleClick(event){
        props.onLogin()
        navigate("/")
    }
    return (
        <Section Titulo="Login">
            <button onClick={handleClick}>Entrar</button>
        </Section>
    )
}