import { createApi } from '@reduxjs/toolkit/query/react';
import { axiosBaseQuery } from '../store/axiosBaseQuery';
import axios from 'axios';

const setAuthHeader = token => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: axiosBaseQuery({
        baseUrl: 'http://localhost:5000/api/auth',
    }),
    tagTypes: ['auth'],
    // ================================================
    // for token:
    // prepareHeaders: (headers, { getState }) => {
    //     const token = getState().auth.token;
    //     if (token) {
    //         headers.set('Authorization', `Bearer ${token}`);
    //     }
    //     console.log(token);
    //     return headers;
    // },
    endpoints: builder => ({
        register: builder.mutation({
            query: body => {
                console.log(body);
                return { url: '/register', method: 'post', body };
            },
            invalidatesTags: ['auth'],
        }),
        login: builder.mutation({
            query: body => {
                // const data = JSON.stringify(body);
                // console.log(data);
                return { url: '/login', method: 'post', body };
            },
            invalidatesTags: ['auth'],
            transformResponse: (response, meta, arg) => {
                return console.log(response);
            },
        }),
        verify: builder.mutation({
            query: body => {
                console.log(body);
                return { url: '/verify', method: 'post', body };
            },
            invalidatesTags: ['auth'],
        }),
    }),
});

export const {
    useLoginMutation,
    useRegisterMutation,
    useVerifyMutation,
    // prepareHeaders,
} = authApi;
