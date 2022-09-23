import { createSlice } from "@reduxjs/toolkit";

//initial user state
const initialState = {
    username: '',
    email: '',
    loginState: localStorage.getItem('loginState') ? true : false,
    token: localStorage.getItem('token') ? JSON.parse(localStorage.getItem('token')) : '',
    pk: localStorage.getItem('pk') ? JSON.parse(localStorage.getItem('pk')) : '',
};


const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: (state, action) => {
            state.email = action.payload.emailAddress;
            state.username = action.payload.username;
            state.loginState = true;
            state.pk = action.payload.pk;
            state.token = action.payload.token;
        },
        logout: (state) => {
            localStorage.removeItem('loginState');
            localStorage.removeItem('token');
            state = initialState;
        }
    }
})

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;