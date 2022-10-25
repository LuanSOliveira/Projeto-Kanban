import styles from "./Tarefa.module.scss"
import {TbTrashOff} from "react-icons/tb"
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa"
import { useDispatch } from "react-redux"
import { apagar, avancaEstado, retornaEstado } from "../../store/reducers/tarefas"

const Tarefa = (props) => {
    const dispatch = useDispatch()

    function Excluir(){
        dispatch(apagar(props.id))
    }

    function Retornar(){
        dispatch(retornaEstado(props.id))
    }

    function Avancar(){
        dispatch(avancaEstado(props.id))
    }
    
    return(
        <div className={styles.tarefa}>
            <div className={styles.titulo}>
                <h3>{props.titulo} </h3>
            </div>
            <div className={styles.descricao}>
                <h4>{props.icone} {props.data}</h4>
                <div className={styles.opcoes}>
                    {(props.estado === "novo") 
                        ? <button className={styles.setaBloqueada} disabled><FaArrowAltCircleLeft/></button> 
                        : <button className={styles.seta} onClick={Retornar}><FaArrowAltCircleLeft/></button>}
                    <button className={styles.excluir} onClick={Excluir}><TbTrashOff/></button>
                    {(props.estado === "concluido") 
                        ? <button className={styles.setaBloqueada} disabled><FaArrowAltCircleRight/></button> 
                        : <button className={styles.seta} onClick={Avancar}><FaArrowAltCircleRight/></button>}
                </div>
            </div>
        </div>
    )
}

export default Tarefa