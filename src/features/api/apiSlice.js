import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseURL = process.env.REACT_APP_API_URL;

export const apiSlice = createApi({
    reducerPath: 'api',
})