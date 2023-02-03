import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";
import { apiSlice } from "../features/api/apiSlice";
import { QueryClient } from "@tanstack/react-query";

const store = "hello";
// reducer: {
//   user: userReducer,
//   [apiSlice.reducerPath]: apiSlice.reducer,
// },
// middleware: (getDefaultMiddleware) =>
//   getDefaultMiddleware().concat(apiSlice.middleware),

// devTools: true

export default store;

export const queryClient = new QueryClient();
