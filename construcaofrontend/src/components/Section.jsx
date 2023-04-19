export default function Section(props) {
    return (
        <section>
            <h2>{props.titulo}</h2>
            {props.children}
        </section>
    )
}