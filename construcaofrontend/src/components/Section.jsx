export default function Section(props) {
    return (
        <section>
          <h2>{props.Titulo}</h2>
          {props.children}
        </section>
    )
}