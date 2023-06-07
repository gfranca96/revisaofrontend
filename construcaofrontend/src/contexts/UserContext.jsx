import { async } from "@firebase/util";
import { createContext, useState } from "react";
import { Login, Logout } from '../services/AuthService';

const UserContext = createContext({
    userID: null,
    logado: false,
    handleLogin: () => { },
    handleLogout: () => { },
})

export function UserContextProvider(props) {
    const [currentUser, setCurrentUser] = useState({ userID: null, logado: false })

    async function handleLogin(email, senha) {
        try {
            const id = await Login(email, senha)
            setCurrentUser({ userID: id, logado: true })
        } catch (error) {
            throw Error(error.message)
        }
    }

    async function handleLogout() {
        await Logout()
        setCurrentUser({ userID: null, logado: false })
    }

    const contexto = {
        userID: currentUser.userID,
        logado: currentUser.logado,
        handleLogin,
        handleLogout,
    }

    return (
        <UserContext.Provider value={contexto}>
            {props.children}
        </UserContext.Provider>
    );
}

export default UserContext