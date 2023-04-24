import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { axiosBaseQuery } from '../store/axiosBaseQuery';

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: axiosBaseQuery({
        baseUrl: 'http://localhost:5000/api/auth',
    }),
    tagTypes: ['auth'],
    endpoints: builder => ({
        registerUser: builder.mutation({
            query: body => {
                console.log(body);
                return { url: '/register', method: 'post', body };
            },
            invalidatesTags: ['auth'],
        }),
        loginUser: builder.mutation({
            query: body => {
                console.log(body);
                return { url: '/login', method: 'post', body };
            },
            invalidatesTags: ['auth'],
        }),
        verifyUser: builder.mutation({
            query: body => {
                console.log(body);
                return { url: '/verify', method: 'post', body };
            },
            invalidatesTags: ['auth'],
        }),
    }),
});

export const {
    useLoginUserMutation,
    useRegisterUserMutation,
    useVerifyUserMutation,
} = authApi;
