import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_URL } from "../../config";
import { tokenRefresh, logout } from "../user/userSlice";

const log = console.log;
const baseURL = API_URL;

const baseQuery = fetchBaseQuery({
  baseUrl: baseURL,

  prepareHeaders: (headers, { getState }) => {
    const token = getState().user.access_token;

    if (token) {
      headers.set("Content-Type", "application/json");

      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

//Base query with automatic token refresh wrapper
const baseQueryWithReAuth = async (arg, api, extraOptions) => {
  /**
   * First, we run the baseQuery with the provided arguments.
   * If it fails with a 401 Unauthorized, we try to refresh the token.
   * If that succeeds, we run the baseQuery again with the same arguments.
   * If that fails, we log the user out.
   * If the first baseQuery succeeds, we return the result.
   */
  let result = await baseQuery(arg, api, extraOptions);
  log("1 -> ", result);
  if (result?.error?.status === 401) {
    const token = await baseQuery.post(
      "auth/token/refresh/",
      api,
      extraOptions
    );
    log("2 -> ", token);
    if (token?.data) {
      api.dispatch(tokenRefresh(token.data));
      result = await baseQuery(arg, api, extraOptions);
      log("3 -> ", result);
    } else {
      api.dispatch(logout());
    }
  }
  return result;
};

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: baseQueryWithReAuth,
  endpoints: (builder) => ({}),
});
