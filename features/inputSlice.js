import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    email:"",
    password:""
}

export const inputSlice = createSlice({
    name:"input",
    initialState,
    reducers:{
        setEmail : (state,action)=>{
            state.email = action.payload.email
        },
        setPassword : (state,action)=>{
            state.password = action.payload.password
        }
    }
})

export const {setEmail,setPassword} = inputSlice.actions

export const getInfo = (state) => state.input

export default inputSlice.reducer