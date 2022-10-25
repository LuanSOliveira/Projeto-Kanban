import { configureStore } from "@reduxjs/toolkit";
import tarefaSlice from "./reducers/tarefas"
import tituloSlice from "./reducers/titulo"

const store = configureStore({
    reducer:{
        tarefas: tarefaSlice,
        titulo: tituloSlice
    }
})

export default store