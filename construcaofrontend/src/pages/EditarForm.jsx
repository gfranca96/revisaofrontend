import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
import TaskContext from '../contexts/TaskContext'

export default function EditarForm() {
    const navigate = useNavigate()
    const { key } = useParams()
    const { tarefas, modificaTarefa } = useContext(TaskContext)
    const tarefa = tarefas.find((item) => item.key == key)
    const { register, handleSubmit } = useForm()

    async function onSubmit(data) {
        try {
            // Chamar a TaskService
            await modificaTarefa(data)
            // Navegar para home
            navigate("/listatarefas")
        } catch (error) {
            console.log(error.message)
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="hidden" {...register("key")} value={key} />
                <div>
                    <label>Nome da tarefa</label>
                    <input type="text" {...register("nome")} defaultValue={tarefa.nome} />
                </div>
                <div>
                    <label>Prioridade</label>
                    <select {...register("prioridade")} defaultValue={tarefa.prioridade} >
                        <option value="1">Urgente</option>
                        <option value="2">Importante</option>
                        <option value="3">Normal</option>
                    </select>
                </div>
                <button>Salvar</button>
            </form>
        </>
    )
}