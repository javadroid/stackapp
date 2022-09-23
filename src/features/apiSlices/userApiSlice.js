import { apiSlice } from "../api/apiSlice";

export const authApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        loginAuth: builder.mutation({
            query: (body) => ({
                url: 'auth/login/',
                method: 'POST',
                body,
            }),
            invalidatesTags: ['User'],
        }),
        registerAuth: builder.mutation({
            query: (body) => ({
                url: 'auth/register/',
                method: 'POST',
                body,
            }),
            invalidatesTags: ['User'],
        }),
        logout: builder.mutation({
            query: () => ({
                url: 'auth/logout/',
                method: 'POST',
            }),
            invalidatesTags: ['User'],
        }),
    }),
});

export const { useLoginAuthMutation, useRegisterAuthMutation, useLogoutMutation } = authApi;

