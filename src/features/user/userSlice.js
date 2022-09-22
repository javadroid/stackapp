import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    username: '',
    email: '',
    loginState: localStorage.getItem('loginState') ? true : false,
};


const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: (state, action) => {
            state.email = action.payload.emailAddress;
            state.username = action.payload.username;
            state.loginState = true;
        },
        logout: (state) => {
            localStorage.removeItem('loginState');
            state = initialState;
        }
    }
})

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;