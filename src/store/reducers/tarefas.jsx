import { createSlice, current } from "@reduxjs/toolkit";

const initialState = []

const tarefaSlice = createSlice({
    name: "tarefa",
    initialState,
    reducers: {
        adicionar: (state, {payload}) => {
            return [...state, payload]
        },
        apagar: (state, {payload}) => {
            return state = state.filter((tarefa) => tarefa.id !== payload) 
        },
        avancaEstado: (state, {payload}) => {
            const tarefa = state.find((tarefa) => tarefa.id === payload) //O valor encontrado é retornado como Proxy, então pode ser alterado
            //console.log(current(tarefa)) //imprime o valor recebido como um Objeto e não como uma Proxy
            if(tarefa.estado === "novo"){
                tarefa.estado = "andamento"
            }
            else if(tarefa.estado === "andamento"){
                tarefa.estado = "concluido"
            }
        },
        retornaEstado: (state, {payload}) => {
            const tarefa = state.find((tarefa) => tarefa.id === payload) //O valor encontrado é retornado como Proxy, então pode ser alterado
            //console.log(current(tarefa)) //imprime o valor recebido como um Objeto e não como uma Proxy
            if(tarefa.estado === "concluido"){
                tarefa.estado = "andamento"
            }
            else if(tarefa.estado === "andamento"){
                tarefa.estado = "novo"
            }

        },
    }
})
export const {adicionar, apagar, avancaEstado, retornaEstado} = tarefaSlice.actions
export default tarefaSlice.reducer