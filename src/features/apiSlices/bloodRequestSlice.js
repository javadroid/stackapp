import { apiSlice } from "../api/apiSlice";
// import { useMutate } from "@tanstack/react-query";
import { headerAxios } from "../../config/instance";

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

const token = localStorage.getItem("cfb90493-c364-4ade-820d-b6848bc65f44");

export const useCreateBloodRequest = async (payload) => {
  if (token) {
    headerAxios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    try {
      const { data, status } = await headerAxios.post("appointments/", payload);
      if (status === 201) {
        data["loginState"] = !0;
        return data;
      } else {
      }
    } catch (err) {
      if (err.response.status === 0) {
        throw new Error();
      } else {
        throw { status: err.response.status, message: err.response.data };
      }
    }
  } else {
    headerAxios.defaults.headers.common["Authorization"] = ``;
    throw new Error();
  }
};
