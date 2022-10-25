import { createSlice } from "@reduxjs/toolkit";

const initialState = ""

const tituloSlice = createSlice({
    name: "titulo",
    initialState,
    reducers: {
        digitar: (state, {payload}) => payload,
        resetTitulo: () => initialState
    }
})
export const {digitar, resetTitulo} = tituloSlice.actions
export default tituloSlice.reducer