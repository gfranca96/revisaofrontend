import { createContext, useState } from "react";
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBVcdAD4breJr2SC2CfyJ3WTlJfKhKE_ts",
    authDomain: "back-react-a6c06.firebaseapp.com",
    projectId: "back-react-a6c06",
    storageBucket: "back-react-a6c06.appspot.com",
    messagingSenderId: "77655602484",
    appId: "1:77655602484:web:ef3dbfbb79b4de6a6aa161"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

const UserContext = createContext({
    userID: null,
    logado: false,
    login: () => { },
    logout: () => { },
})

export function UserContextProvider(props) {
    const [currentUser, setCurrentUser] = useState({ userID: null, logado: false })

    function login() {
        setCurrentUser({ userID: 100, logado: true })
    }

    function logout() {
        setCurrentUser({ userID: null, logado: false })
    }

    const contexto = {
        userID: currentUser.userID,
        logado: currentUser.logado,
        handleLogin: login,
        handleLogout: logout,
    }

    return (
        <UserContext.Provider value={contexto}>
            {props.children}
        </UserContext.Provider>
    );
}

export default UserContext