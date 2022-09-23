import { createSlice } from "@reduxjs/toolkit";

//initial user state
const initialState = {
  username: "",
  email: "",
  loginState: localStorage.getItem("loginState") ? true : false,
  token: localStorage.getItem("token")
    ? JSON.parse(localStorage.getItem("token"))
    : null,
  pk: localStorage.getItem("pk")
    ? JSON.parse(localStorage.getItem("pk"))
    : null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.email = action.payload.emailAddress;
      state.username = action.payload.username;
      state.loginState = true;
      state.pk = action.payload.pk;
      state.token = action.payload.token;
      localStorage.setItem("loginState", true);
      localStorage.setItem("token", JSON.stringify(action.payload.token));
      localStorage.setItem("pk", JSON.stringify(action.payload.pk));
    },
    logout: (state) => {
      state.loginState = false;

      localStorage.removeItem("loginState");
      localStorage.removeItem("token");
      localStorage.removeItem("pk");
      state = initialState;
    },
    tokenRefresh: (state, action) => {
      state.token = action.payload;
      localStorage.setItem("token", JSON.stringify(action.payload));
    },
  },
});

export const { login, logout, tokenRefresh } = userSlice.actions;

export default userSlice.reducer;
