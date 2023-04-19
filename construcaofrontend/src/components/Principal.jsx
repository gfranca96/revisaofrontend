import Home from "../pages/Home";
import Novo from "../pages/Novo";
import Pedidos from "../pages/Pedidos";
import Sobre from "../pages/Sobre";


export default function Principal() {
    return (
        <main>
            <Home />
            <Pedidos />
            <Novo />
            <Sobre />
        </main>
    )
}