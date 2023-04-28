import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer"

export default function Principal(props) {
    return (
        <>

            <Header onLogout={props.onLogout}/>
            <main>
                <Outlet/>
            </main>
            <Footer/>
         </>

     
    )
}