import { createSlice } from "@reduxjs/toolkit";
import { getToken, setToken } from "../utils/utils";

const initialState = {
    isLoggedIn : false,
    token : null,
}
const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{
        setSignIn : (state,action)=>{
            state.token = action.payload.token;
            state.isLoggedIn = action.payload.token && true;
        },
        setSignOut: (state,action)=>{
            state.token = false;
            state.isLoggedIn = false;
        }
    }
})

export const {setSignIn,setSignOut} = authSlice.actions;
export const getIsLoggedIn = (state)=>state.auth.isLoggedIn

export default authSlice.reducer;