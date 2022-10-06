import { createSlice } from "@reduxjs/toolkit";
import { setToLocalStorage, clearLocalStorage } from "../../utils/localStorage";

//initial user state
const initialState = {
  username: localStorage.getItem("username")? JSON.parse(localStorage.getItem("username")): "",
  email: localStorage.getItem("emailAddress")? JSON.parse(localStorage.getItem("emailAdress")): "",
  loginState: localStorage.getItem("loginState") ? true : false,
  access_token: localStorage.getItem("access_token")? JSON.parse(localStorage.getItem("access_token")): null,
  refresh_token: localStorage.getItem("refresh_token")? JSON.parse(localStorage.getItem("refresh_token")): null,
  pk: localStorage.getItem("pk")? JSON.parse(localStorage.getItem("pk")): null,
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
      state.access_token = action.payload.access_token;
      state.refresh_token = action.payload.refresh_token;
      setToLocalStorage(action.payload);
    },
    logout: (state) => {
      clearLocalStorage();
      //set state to initial state
      state.loginState = false;
      state.username = "";
      state.email = "";
      state.pk = null;
      state.access_token = null;
      state.refresh_token = null;

    },
    tokenRefresh: (state, action) => {
      const { access, refresh } = action.payload;
      localStorage.setItem("access_token", JSON.stringify(access));
      localStorage.setItem("refresh_token", JSON.stringify(refresh));
    },
  },
});

export const { login, logout, tokenRefresh } = userSlice.actions;

export default userSlice.reducer;
