import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getToken, setToken , loginUser ,removeToken} from "../utils/utils";

const initialState = {
  auth: { isLoggedIn: false, token: null },
};

export const fetchToken = createAsyncThunk("token/fetch",async(userInfo,{rejectWithValue})=>{
  try {
    const data = await loginUser(userInfo)
    return data
  } catch (error) {
    throw rejectWithValue({message:error.message})
  }
})

export const removeUser = createAsyncThunk("token/remove",async()=>{
  await removeToken()
})

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setSignIn: (state, action) => {
      state.auth.isLoggedIn = action.payload.isLoggedIn
      state.auth.token = action.payload.payload
    },
    setSignOut: (state, action) => {
      state.auth.token = null
      state.auth.isLoggedIn=Boolean(state.auth.token)
    },
  },
  extraReducers(builder){
    builder.addCase(fetchToken.fulfilled,(state,action)=>{
      console.log("🚀 ~ file: authSlice.js:33 ~ builder.addCase ~ action fulfilled", action.payload)
      const token = action.payload
      state.auth.token = token
      state.auth.isLoggedIn = true
    })
    .addCase(fetchToken.rejected,(state,action)=>{
      // console.log("🚀 ~ file: authSlice.js:35 ~ .addCase ~ action rejected", action.payload.message)
      return action.payload
    })
    .addCase(removeUser.fulfilled,(state,action)=>{
      alert("Successfully Logged Out!")
      state.auth.token = null
      state.auth.isLoggedIn = state.auth.token && true
    })
  }
});

export const { setSignIn, setSignOut } = authSlice.actions;
export const getIsLoggedIn = (state) => state.auth.auth.isLoggedIn

export default authSlice.reducer;
