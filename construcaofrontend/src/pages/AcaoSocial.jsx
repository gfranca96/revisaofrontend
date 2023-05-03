import { useParams } from "react-router-dom"
import Section from "../components/Section"

export default function AcaoSocial() {
    const {id} = useParams();

    return (
        <Section Titulo="Controle de Ação Social">
            <p>Controlar ação social {id}</p>
        </Section>
    )
}