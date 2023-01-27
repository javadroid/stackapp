import { createSlice } from "@reduxjs/toolkit";
import {
  setToLocalStorage,
  clearLocalStorage,
  getUserStateFromLocalStorage,
} from "../../utils/localStorage";

//initial user state
const initialState = getUserStateFromLocalStorage();

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
      state.account_type = action.payload.account_type;
      state.blood_group = action.payload.blood_group;
      state.center_name = action.payload.center_name;
      state.location = action.payload.location;
      state.phone = action.payload.phone;
      state.rc_number = action.payload.rc_number;
      state.id = action.payload.id;

      setToLocalStorage(action.payload);
    },
    logout: (state) => {
      clearLocalStorage();
      //set state to initial state
      state.email = null;
      state.username = null;
      state.loginState = false;
      state.pk = null;
      state.access_token = null;
      state.refresh_token = null;
      state.account_type = null;
      state.blood_group = null;
      state.center_name = null;
      state.location = null;
      state.phone = null;
      state.rc_number = null;
      state.id = null;
    },
    tokenRefresh: (state, action) => {
      const { access, refresh } = action.payload;
      state.access_token = access;
      state.refresh_token = refresh;
      localStorage.setItem("access_token", access);
      localStorage.setItem("refresh_token", refresh);
    },
  },
});

export const { login, logout, tokenRefresh } = userSlice.actions;

export default userSlice.reducer;
