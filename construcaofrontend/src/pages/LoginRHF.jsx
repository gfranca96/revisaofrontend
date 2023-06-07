import { ErrorResponse } from "@remix-run/router";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import UserContext from "../contexts/UserContext";
import { Navigate, useNavigate } from "react-router-dom";

export default function LoginRHF(props) {
    const form = useForm();
    const { register, handleSubmit, formState: { errors } } = form
    const { handleLogin } = useContext(UserContext)
    const navigate = useNavigate()
    const [errorLogin, setErrorLogin] = useState()

    const validaEmail = {
        required: {
            value: true,
            message: "Email é obrigatório"
        }
    }

    const validaSenha = {
        required: {
            value: true,
            message: "Senha é obrigatório"
        },
        minLength: {
            value: 8,
            message: "Senha deve ter no minimo 8 caracteres"
        }
    }
    async function onSubmit(data) {
        const { email, senha } = data;
        setErrorLogin("")
        try {
            await handleLogin(email, senha)
            navigate("/")
        } catch (error) {
            setErrorLogin(error.message)
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {errorLogin && <p className="erro">{errorLogin}</p>}
            <div>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" {...register("email", validaEmail)} />
                {errors.email && <p>{errors.email.message}</p>}
            </div>
            <div>
                <label htmlFor="senha">Senha</label>
                <input type="password" id="senha" {...register("senha", validaSenha)} />
                {errors.senha && <p>{errors.senha.message}</p>}
            </div>
            <button>Entrar</button>
        </form>
    );
}