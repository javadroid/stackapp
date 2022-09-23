import { apiSlice } from './apiSlice';

export const registrationApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({

        register: builder.mutation({
            query: (body) => ({
                url: 'registration/',
                method: 'POST',
                body,
            }),
        }),
        resendEmail: builder.mutation({
            query: (body) => ({
                url: 'registration/resend-email/',
                method: 'POST',
                body,
            }),
        }),
        verifyEmail: builder.mutation({
            query: (body) => ({
                url: 'registration/verify-email/',
                method: 'POST',
                body,
            }),
        }),

    })
});

export const { useRegisterMutation, useResendEmailMutation, useVerifyEmailMutation } = registrationApi;
