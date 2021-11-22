import { createSlice } from '@reduxjs/toolkit'


export const Switch = createSlice({
    name: 'value',
    initialState: {
        estado: false
    }, reducers: {
        datos: (state, action) => {
            state.estado = action.payload
        }
    }
})
export const getDatos = (state: { value: { estado: any; }; }) => state.value.estado
export const { datos } = Switch.actions;
export default Switch.reducer;