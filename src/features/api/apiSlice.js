import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { tokenRefresh, logout } from '../user/userSlice';

const baseURL = process.env.REACT_APP_API_URL;

const baseQuery = fetchBaseQuery({
    baseUrl: baseURL,
    credentials: 'include',
    prepareHeaders: (headers, { getState }) => {
        const token = getState().user.token;
        if (token) {
            headers.set('Authorization', `Token ${token}`);
        }
        return headers;
    }
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
        if (result?.error?.originalStatus === 401) {
            const token = await baseQuery('auth/token/refresh/', api, extraOptions);
            console.log(token);//check this log
            if(token?.data) {
             api.dispatch(tokenRefresh(token.data));
             result = await baseQuery(arg, api, extraOptions);
            } else {
                api.dispatch(logout());
            }
        } 
    return result;
    };

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: baseQueryWithReAuth,
    endpoints: (builder) => ({}),

})