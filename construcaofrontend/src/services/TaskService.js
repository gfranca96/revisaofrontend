import { async } from "@firebase/util"
import { urlApi } from "./FirebaseConfig"

export async function listaTarefas() {
    await fetch(urlApi)
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((error) => { throw Error("Deu ruim") })
}

export function insereTarefa(tarefa) {
    fetch(urlApi, {
        method: 'POST',
        body: JSON.stringify(tarefa),
        headers: {
            'Content-type': 'application/json'
        }
    })
        .catch((error) => { throw Error("Deu ruim") })
}