import styles from "./Formulario.module.scss"
import CampoTexto from "../CampoTexto"
import Botao from "../Botao"
import { useDispatch, useSelector } from "react-redux"
import { adicionar } from "../../store/reducers/tarefas"
import {v4 as uuid} from "uuid"
import { resetTitulo } from "../../store/reducers/titulo"


const Formulario = () => {
    const dispatch = useDispatch();
    const tituloTarefa = useSelector((state) => state.titulo)

    function DataEHora(){
        const data = new Date()
        const dia = String(data.getDate()).padStart(2, '0')
        const mes = String(data.getMonth()+1).padStart(2,'0')
        const ano = data.getFullYear()
        const hora = String(data.getHours()).padStart(2, '0')
        const minuto = String(data.getMinutes()).padStart(2, '0')
        const segundo = String(data.getSeconds()).padStart(2, '0')

        return `Criado em ${dia}/${mes}/${ano} as ${hora}:${minuto}:${segundo}`
    }

    function Submeter(e){
        e.preventDefault()
        dispatch(adicionar({id: uuid(), nome: `${tituloTarefa}`, data: DataEHora(), estado: "novo"}))
        dispatch(resetTitulo())


    }

    return(
        <div className={styles.formulario}>
            <form onSubmit={Submeter}>
                <div>
                    <h1>MINHA LISTA DE TAREFAS</h1>
                </div>
                <div>                    
                    <CampoTexto placeholder="Nome da Tarefa"/>
                    <Botao descricao="CRIAR TAREFA"/>
                </div>
            </form>
        </div>
    )
}

export default Formulario