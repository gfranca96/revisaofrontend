import { useParams } from "react-router-dom"
import Section from "../components/Section"

export default function Sobre() {
    const {id} = useParams();

    return (
        <Section Titulo="Página Sobre">
            <p>Usuário {id}</p>
        </Section>
    )
}