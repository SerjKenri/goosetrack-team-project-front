import { createApi } from '@reduxjs/toolkit/query/react';
import { axiosBaseQuery } from '../store/axiosBaseQuery';

export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: axiosBaseQuery({
        baseUrl: 'http://localhost:5000/api/user',
    }),
    tagTypes: ['user'],
    endpoints: builder => ({
        getUser: builder.query({
            query: () => {
                return { url: '/current', method: 'get' };
            },
            invalidatesTags: ['user'],
        }),
        logoutUser: builder.mutation({
            query: () => {
                return { url: '/logout', method: 'post' };
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
