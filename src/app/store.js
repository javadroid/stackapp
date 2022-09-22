import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";

const store = configureStore({
    reducers: {
        user: userReducer
    }
});

export default store;
