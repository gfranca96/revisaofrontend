import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import './Principal.css';

export default function Principal(props) {
    return (
        <>

            <Header usuarioID={props.usuarioID} onLogout={props.onLogout}/>
            <main>
                <Outlet/>
            </main>
            <Footer/>
         </>

     
    )
}