import { apiSlice } from "../api/apiSlice";

export const authApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        loginAuth: builder.mutation({
            query: (body) => ({
                url: 'auth/login/',
                method: 'POST',
                body,
            }),
        }),
        registerAuth: builder.mutation({
            query: (body) => ({
                url: 'auth/register/',
                method: 'POST',
                body,
            }),
        }),
        logout: builder.mutation({
            query: () => ({
                url: 'auth/logout/',
                method: 'POST',
            }),
        }),
    }),
});

export const { useLoginAuthMutation, useRegisterAuthMutation, useLogoutMutation } = authApi;

