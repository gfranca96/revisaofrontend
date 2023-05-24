import { useNavigate} from "react-router-dom"
import LoginForm from "./LoginForm"
import LoginRHF from "./LoginRHF"

export default function Login(props) {
    const navigate = useNavigate();

    function handleClick(event){
        props.onLogin(event)
        navigate("/");
    }

    return (
        <>
            <h1>Login</h1>
            <LoginRHF onSubmit={handleClick} />
        </>
    )
}