import { apiSlice } from "../api/apiSlice";

export const bloodRequestApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        requestBlood: builder.mutation({
            query: (body) => ({
                url: "appointments/requestblood/",
                method: "POST",
                body,
            }),
        }),
    }),
});

export const { useRequestBloodMutation } = bloodRequestApi;