import { apiSlice } from "../api/apiSlice";

/**
 * This file injects all the endpoints for the blood centers
 * I defined all the queries and mutation endpoints and exported their hooks
 * at the bottom of the file.
 */

export const bloodCentersApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    centersList: builder.mutation({
      query: () => ({
        url: "users/blood-centers/",
        method: "GET",
      }),
    }),
  }),
});

export const { useCentersListMutation } = bloodCentersApi;
