import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  getToken,
  setToken,
  loginUser,
  removeToken,
  createUser,
} from "../utils/utils";

const initialState = {
  auth: { isLoggedIn: false, token: null },
};

export const fetchToken = createAsyncThunk(
  "token/fetch",
  async (userInfo, { rejectWithValue }) => {
    try {
      const data = await loginUser(userInfo);
      return data;
    } catch (error) {
      throw rejectWithValue({ message: error.message });
    }
  }
);

export const removeUser = createAsyncThunk("token/remove", async () => {
  await removeToken();
});

export const addUser = createAsyncThunk(
  "token/register",
  async (userInfo, { rejectWithValue }) => {
    try {
      // console.log(userInfo);
      const data = await createUser(userInfo);
      return data;
    } catch (error) {
      // console.log("🚀 ~ file: authSlice.js:37 ~ error", error)
      throw rejectWithValue({ message: error.message });
    }
  }
);

export const isTokenExists = createAsyncThunk(
  "token/exists",
  async (userInfo, { rejectWithValue }) => {
    try {
      const token = await getToken();
      return token;
    } catch (error) {
      throw rejectWithValue({ message: error.message });
    }
  }
);


const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setSignIn: (state, action) => {
      state.auth.isLoggedIn = action.payload.isLoggedIn;
      state.auth.token = action.payload.payload;
    },
    setSignOut: (state, action) => {
      state.auth.token = null;
      state.auth.isLoggedIn = Boolean(state.auth.token);
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchToken.fulfilled, (state, action) => {
        const token = action.payload;
        if(state.auth){
          state.auth.token = token || null;
          state.auth.isLoggedIn = true;
        }
        else{
          console.log({state})
        }
      })
      .addCase(fetchToken.rejected, (state, action) => {
        console.log(state.auth)
      })
      .addCase(removeUser.fulfilled, (state, action) => {
        alert("Successfully Logged Out!");
        state.auth.token = null;
        state.auth.isLoggedIn = state.auth.token && true;
      })
      .addCase(addUser.fulfilled, (state, action) => {
        const token = action.payload
        console.log(token);
        state.auth.token = token;
        state.auth.isLoggedIn = token && true
      })
      .addCase(addUser.rejected, (state, action) => {
        console.log("🚀 ~ file: authSlice.js:98 ~ .addCase ~ action.error", action.error)
      })
      .addCase(isTokenExists.fulfilled,(state,action)=>{
        state.auth.token = action.payload
        state.auth.isLoggedIn = action.payload && true
      })
      ;
  },
});

export const { setSignIn, setSignOut } = authSlice.actions;
export const getIsLoggedIn = (state) => state?.auth?.auth?.isLoggedIn;

export default authSlice.reducer;
