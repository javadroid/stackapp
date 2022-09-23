import { apiSlice } from './apiSlice';

export const passwordApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        changePassword: builder.mutation({
            query: (body) => ({
                url: 'auth/password/change/',
                method: 'POST',
                body,
            }),
        }),
        resetPassword: builder.mutation({
            query: (body) => ({
                url: 'auth/password/reset/',
                method: 'POST',
                body,
            }),
        }),
        resetPasswordConfirm: builder.mutation({
            query: (body) => ({
                url: 'auth/password/reset/confirm/',
                method: 'POST',
                body,
            }),
        }),
    }),
});

export const { useChangePasswordMutation, useResetPasswordMutation, useResetPasswordConfirmMutation } = passwordApi;