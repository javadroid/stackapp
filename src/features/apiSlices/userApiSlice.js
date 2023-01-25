import { apiSlice } from "../api/apiSlice";

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    loginAuth: builder.mutation({
      query: (body) => ({
        url: "auth/login/",
        method: "POST",
        body,
      }),
    }),
    registerAuth: builder.mutation({
      query: (body) => ({
        url: "registration/",
        method: "POST",
        body,
      }),
    }),
    getUser: builder.query({
      query: () => ({
        url: "user/",
        method: "GET",
      })
    }),
    logout: builder.mutation({
      query: () => ({
        url: "auth/logout/",
        method: "POST",
      }),
    }),
  }),
});

export const {
  useLoginAuthMutation,
  useRegisterAuthMutation,
  useLogoutMutation,
  useGetUserQuery,
} = authApi;
