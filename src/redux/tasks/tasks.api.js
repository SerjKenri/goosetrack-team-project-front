import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { axiosBaseQuery } from '../store/axiosBaseQuery';

export const tasksApi = createApi({
    reducerPath: 'tasksApi',
    baseQuery: axiosBaseQuery({
        baseUrl: 'http://localhost:5000`/tasks`',
    }),
    tagTypes: ['task'],
    endpoints: builder => ({
        getTasks: builder.query({
            query: body => {
                return { url: '/', method: 'get' };
            },
            invalidatesTags: ['task'],
        }),
        addTasks: builder.mutation({
            query: body => {
                return { url: '/', method: 'post', body };
            },
            invalidatesTags: ['task'],
        }),
        getTaskById: builder.mutation({
            query: id => {
                return { url: `/${id}`, method: 'patch' };
            },
            invalidatesTags: ['task'],
        }),
        deleteTaskById: builder.mutation({
            query: id => {
                return { url: `/${id}`, method: 'delete' };
            },
            invalidatesTags: ['task'],
        }),
    }),
});

export const {
    useAddTasksMutation,
    useGetTasksQuery,
    useGetTaskByIdMutation,
    useDeleteTaskByIdMutation,
} = tasksApi;
