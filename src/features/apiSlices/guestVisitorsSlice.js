import { apiSlice } from "../api/apiSlice";

export const visitorsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createVisit: builder.mutation({
      query: (body) => ({
        url: "endpoints/visitors/anonymous/get",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useCreateVisitMutation } = visitorsApi;
