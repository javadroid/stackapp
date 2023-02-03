import { useQuery } from "@tanstack/react-query";
import { headerAxios } from "../../config/instance";
// import { apiSlice } from "../api/apiSlice";

// /**
//  * This file injects all the endpoints for the appointment
//  * I defined all the queries and mutation endpoints and exported their hooks
//  * at the bottom of the file.
//  */

// export const appointmentApi = apiSlice.injectEndpoints({
//   endpoints: (builder) => ({
//     getDonorAppointments: builder.query({
//       query: (donor_id) => ({
//         url: `appointments/donor/${donor_id}/`,
//         method: "GET",
//       }),
//     }),

//     AppointmentDetails: builder.query({
//       query: (appointment_id) => ({
//         url: `appointments/${appointment_id}/`,
//         method: "GET",
//       }),
//     }),

//     createAppointment: builder.mutation({
//       query: (body) => ({
//         url: "appointments/",
//         method: "POST",
//         body,
//       }),
//     }),

//     updateAppointment: builder.mutation({
//       query: ({ body, id }) => ({
//         url: `appointments/${id}/`,
//         method: "PUT",
//         body,
//       }),
//     }),

//     deleteAppointment: builder.mutation({
//       query: (id) => ({
//         url: `appointments/${id}/`,
//         method: "DELETE",
//       }),
//     }),
//   }),
// });

// export const {
//   useGetDonorAppointmentsQuery,
//   useAppointmentDetailsQuery,
//   useUpdateAppointmentMutation,
//   useDeleteAppointmentMutation,
//   useBloodCentersMutation,
// } = appointmentApi;

const token = localStorage.getItem("cfb90493-c364-4ade-820d-b6848bc65f44");

export const useCreateAppointmentsMutation = async (payload) => {
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

export const getDonorsAppointments = async ({ donor_id, account_type }) => {
  if (token) {
    headerAxios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    let data;
    let status;
    try {
      headerAxios.defaults.headers.common["Content-Type"] = "application/json";
      account_type === "donor"
        ? ({ data, status } = await headerAxios.get(
            `appointments/donor/${donor_id}/`
          ))
        : ({ data, status } = await headerAxios.get(`appointments/donors/`));
      if (status === 200) {
        return data.data;
      } else {
      }
    } catch (err) {
      throw new Error();
    }
  } else {
    headerAxios.defaults.headers.common["Authorization"] = ``;
    throw new Error();
  }
};

export const useGetDonorsAppointmentsQuery = (payload) =>
  useQuery({
    queryKey: ["getDonorsAppointments"],
    queryFn: () => getDonorsAppointments(payload),
    retry: 1,
    refetchOnMount: !1,
    refetchOnWindowFocus: !1,
    refetchOnReconnect: !1,
    retryOnMount: !1,

    // onSuccess: (data) => {
    //   data["loginState"] = !0;
    // },
  });
