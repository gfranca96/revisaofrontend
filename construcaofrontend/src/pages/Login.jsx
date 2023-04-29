import { useState } from "react"
import { useNavigate} from "react-router-dom"
import Section from "../components/Section"

export default function Login(props) {
    const [email, setEmail] = useState()

    const navigate = useNavigate()

    function handleClick(event){
        props.onLogin()
        navigate("/")
    }

    function handleFocus(event) {
        console.log('Entrou no campo email')
    }

    function handleBlur(event) {
        console.log('Saiu do campo email');
    }

    function handleChange(event) {
        setEmail(event.target.value)
    }

    return (
        <Section Titulo="Login">
            <input type="email" placeholder="E-mail" onChange={handleChange}
                onFocus={handleFocus} onBlur={handleBlur}/>
            <input type="password" placeholder="Senha" />
            <button onClick={handleClick}>Entrar</button>
        </Section>
    )
}