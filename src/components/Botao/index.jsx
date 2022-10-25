import styles from "./Botao.module.scss"

const Botao = (props) => {

    return(
        <>
            <button className={styles.botao}>{props.descricao}</button>
        </>
    )
}

export default Botao