import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { axiosBaseQuery } from '../store/axiosBaseQuery';

export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: axiosBaseQuery({
        baseUrl: 'http://localhost:5000/api/user',
    }),
    tagTypes: ['user'],
    endpoints: builder => ({
        getUser: builder.query({
            query: body => {
                return { url: '/current', method: 'get', body };
            },
            invalidatesTags: ['user'],
        }),
        logoutUser: builder.mutation({
            query: body => {
                return { url: '/logout', method: 'post', body };
            },
            invalidatesTags: ['user'],
        }),
        userInfo: builder.mutation({
            query: body => {
                return { url: '/info', method: 'patch', body };
            },
            invalidatesTags: ['user'],
        }),
    }),
});

export const { useGetUserQuery, useLogoutUserMutation, useUserInfoMutation } =
    userApi;
