import Tarefa from "../Tarefa"
import styles from "./ListaDeTarefas.module.scss"

const ListaDeTarefas = (props) => {
    return(
        <div className={styles.lista}>
            <h2>{props.titulo}</h2>
            <div>
                {props.lista.map((tarefa) => <Tarefa key={tarefa.id} id={tarefa.id} titulo={tarefa.nome} data={tarefa.data} icone={props.icone} estado={tarefa.estado}/>)}
            </div>
        </div>
    )
}

export default ListaDeTarefas