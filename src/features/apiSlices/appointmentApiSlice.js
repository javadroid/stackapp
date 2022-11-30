import { apiSlice } from "../api/apiSlice";

/**
 * This file injects all the endpoints for the appointment
 * I defined all the queries and mutation endpoints and exported their hooks
 * at the bottom of the file.
 */

export const appointmentApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getDonorAppointments: builder.query({
      query: (donor_id) => ({
        url: `appointments/donor/${donor_id}/`,
        method: "GET",
      }),
    }),

    AppointmentDetails: builder.query({
      query: (appointment_id) => ({
        url: `appointments/${appointment_id}/`,
        method: "GET",
      }),
    }),

    createAppointment: builder.mutation({
      query: (body) => ({
        url: "appointments/",
        method: "POST",
        body,
      }),
    }),

    updateAppointment: builder.mutation({
      query: ({ body, id }) => ({
        url: `appointments/${id}/`,
        method: "PUT",
        body,
      }),
    }),

    deleteAppointment: builder.mutation({
      query: (id) => ({
        url: `appointments/${id}/`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetDonorAppointmentsQuery,
  useAppointmentDetailsQuery,
  useCreateAppointmentMutation,
  useUpdateAppointmentMutation,
  useDeleteAppointmentMutation,
  useBloodCentersMutation,
} = appointmentApi;
