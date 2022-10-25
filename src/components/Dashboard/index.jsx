import { useSelector } from "react-redux"
import ListaDeTarefas from "../ListaDeTarefas"
import { FaClipboard, FaClipboardList, FaClipboardCheck } from "react-icons/fa";
import styles from "./Dashboard.module.scss"

const Dashboard = () => {
    const tarefasCadastradas = useSelector((state) => state.tarefas)

    return(
        <div className={styles.dashboard}>
            <ListaDeTarefas titulo="NOVAS TAREFAS" lista={tarefasCadastradas.filter((tarefa) => tarefa.estado === "novo")} icone={<FaClipboard/>}/>
            <ListaDeTarefas titulo="EM ANDAMENTO" lista={tarefasCadastradas.filter((tarefa) => tarefa.estado === "andamento")} icone={<FaClipboardList/>}/>
            <ListaDeTarefas titulo="CONCLUÍDAS" lista={tarefasCadastradas.filter((tarefa) => tarefa.estado === "concluido")} icone={<FaClipboardCheck/>}/>
        </div>
    )
}

export default Dashboard