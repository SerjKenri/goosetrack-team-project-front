import { createApi } from '@reduxjs/toolkit/query/react';
import { axiosBaseQuery } from '../store/axiosBaseQuery';

export const tasksApi = createApi({
    reducerPath: 'tasksApi',
    baseQuery: axiosBaseQuery({
        baseUrl: 'http://localhost:5000/api',
    }),
    tagTypes: ['tasks'],
    endpoints: builder => ({
        getTasks: builder.query({
            query: () => {
                return { url: '/tasks', method: 'get' };
            },
            invalidatesTags: ['task'],
        }),
        addTask: builder.mutation({
            query: body => {
                return { url: '/tasks', method: 'post', body };
            },
            invalidatesTags: ['task'],
        }),
        getTaskById: builder.mutation({
            query: id => {
                return { url: `/tasks${id}`, method: 'patch', id };
            },
            providesTags: (result, error, id) => [{ type: 'tasks', id }],

            // invalidatesTags: ['task'],
        }),
        deleteTaskById: builder.mutation({
            query: id => {
                return { url: `/tasks${id}`, method: 'delete' };
            },
            providesTags: (result, error, id) => [{ type: 'tasks', id }],
            // invalidatesTags: ['task'],
        }),
    }),
});

export const {
    useAddTaskMutation,
    useGetTasksQuery,
    useGetTaskByIdMutation,
    useDeleteTaskByIdMutation,
} = tasksApi;