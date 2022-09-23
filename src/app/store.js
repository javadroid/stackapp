import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";
import { apiSlice } from "../features/api/apiSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  
  devTools: true
});

export default store;
