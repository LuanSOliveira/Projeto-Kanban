import { useDispatch, useSelector } from "react-redux"
import { digitar } from "../../store/reducers/titulo"
import styles from "./CampoTexto.module.scss"

const CampoTexto = (props) => {
    const dispatch = useDispatch()
    const valor = useSelector((state) => state.titulo)

    return(
        <>
            <input className={styles.campoTexto} placeholder={props.placeholder} value={valor} onChange={(e) => (dispatch(digitar(e.target.value)))} required/>
        </>
    )
}

export default CampoTexto