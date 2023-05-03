import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

axios.defaults.baseURL = 'http://localhost:4000/api';

const setAuthHeader = token => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
    axios.defaults.headers.common.Authorization = '';
};

// ===============================================================
// AUTH
// ===============================================================

export const signUpUser = createAsyncThunk(
    'auth/register',
    async (userRegData, thunkAPI) => {
        try {
            const resp = await axios.post(`/auth/register`, userRegData);
            setAuthHeader(resp.data.user.token);

            // navigate('/calendar/month', { replace: true });
            toast.success('You are successfully registered');
            return resp.data;
        } catch (e) {
            toast.warning('User have been registered already');
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);

export const verifyUser = createAsyncThunk(
    'auth/verify',
    async (verificationToken, thunkAPI) => {
        try {
            const resp = await axios.get(`/auth/verify/${verificationToken}`);
            return resp;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const sendMailForVerify = createAsyncThunk(
    'auth/resend-verify',
    async (userMailData, thunkAPI) => {
        try {
            const resp = await axios.post('/auth/verify', userMailData);

            // const resp = await axios.post(
            //     'http://localhost:4000/api/auth/verify',
            //     userMailData
            // );

            toast.success('Email is successfully send');
            return resp.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const loginUser = createAsyncThunk(
    'auth/login',
    async (userRegData, thunkAPI) => {
        try {
            const resp = await axios.post('/auth/login', userRegData);
            setAuthHeader(resp.data.user.token);
            // console.log(resp);
            return resp.data;
        } catch (error) {
            toast.error('Email is not verified');
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const refreshUser = createAsyncThunk(
    'auth/refresh',
    async (_, thunkAPI) => {
        const state = thunkAPI.getState().auth;

        console.log(state.user.token);
        if (!state.user.token) {
            return thunkAPI.rejectWithValue('no valid message');
        }
        // clearAuthHeader();
        setAuthHeader(state.user.token);
        try {
            const resp = await axios.get('/auth/login');
            // console.log(resp);
            return resp.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);

// ===============================================================
// USER
// ===============================================================

export const logoutUser = createAsyncThunk(
    'user/logout',
    async (_, { getState, rejectWithValue }) => {
        try {
            const { auth } = getState();
            setAuthHeader(auth.token);
            await axios.post('/user/logout');
            clearAuthHeader();
        } catch (e) {
            return rejectWithValue(e.message);
        }
    }
);
export const currentUser = createAsyncThunk(
    'user/current',
    async (_, { getState, rejectWithValue }) => {
        try {
            const { auth } = getState();
            setAuthHeader(auth.token);
            const response = await axios.get('/user/current');
            // console.log(response.data);
            return response.data;
        } catch (e) {
            return rejectWithValue(e.message);
        }
    }
);

export const updateUser = createAsyncThunk(
    'user/updUser',
    async (values, { getState, rejectWithValue }) => {
        try {
            const { auth } = getState();
            setAuthHeader(auth.token);

            const response = await axios.patch(`/user/info`, values);

            return response.data;
        } catch (e) {
            return rejectWithValue(e.message);
        }
    }
);

export const changePass = createAsyncThunk(
    'user/updPass',
    async (userPassData, thunkAPI) => {
        try {
            const resp = await axios.patch('/user/update-pass', userPassData);
            setAuthHeader(resp.data.user.token);
            toast.success('Password is successfully updated');
            // console.log('pass resnonse resp.data', resp.data);
            return resp.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const sendMailForPass = createAsyncThunk(
    'user/restorePass',
    async (userMailData, thunkAPI) => {
        try {
            // const resp = await axios.post(
            //     'http://localhost:4000/api/auth/restore-pass',
            //     userMailData
            // );
            const resp = await axios.post('/auth/restore-pass', userMailData);
            toast.success('Email is successfully send');
            return resp.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);
export const resetNewPass = createAsyncThunk(
    'user/reset-pass',
    async (userMailData, thunkAPI) => {
        try {
            const { newPassword, passToken } = userMailData;

            // const resp = await axios.patch(
            //     `http://localhost:4000/api/auth/reset-pass/${passToken}`,
            //     { newPassword: newPassword }
            // );
            const resp = await axios.patch(`/auth/reset-pass/${passToken}`, {
                newPassword: newPassword,
            });
            toast.success('Password is successfully updated');
            return resp.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);
/// ===============================================================
// TASKS
// ===============================================================

export const fetchTasks = createAsyncThunk(
    'tasks/fetchAll',
    async (getParams, thunkAPI) => {
        // console.log('getParams=>', getParams);
        try {
            const response = await axios.get('/tasks', { params: getParams });

            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);

export const addTask = createAsyncThunk(
    'tasks/addTask',
    async (body, thunkAPI) => {
        // console.log(body);
        try {
            const response = await axios.post('/tasks', body);
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);

export const updateTask = createAsyncThunk(
    'tasks/updTask',
    async (task, thunkAPI) => {
        const { _id, ...update } = task;

        try {
            const response = await axios.patch(`/tasks/${_id}`, update);
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);

export const delTask = createAsyncThunk(
    'tasks/delTask',
    async (taskId, thunkAPI) => {
        try {
            await axios.delete(`/tasks/${taskId}`);
            return taskId;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);

export const fetchColumns = createAsyncThunk(
    'columns/fetchColumns',
    async (_, thunkAPI) => {
        try {
            const { auth } = thunkAPI.getState();
            setAuthHeader(auth.token);
            const response = await axios.get(`/columns`);

            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);

export const updateColumns = createAsyncThunk(
    'columns/updateColumns',
    async (body, thunkAPI) => {
        // console.log('body', body);
        try {
            const { auth } = thunkAPI.getState();
            setAuthHeader(auth.token);
            const response = await axios.patch(
                `/columns/${body.source.id}`,
                body
            );
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);

// import {
//     createAsyncThunk,
//     createSlice,
// } from '@reduxjs/toolkit';

// axios.defaults.baseURL = 'http://localhost:4000/api';

// const setAuthHeader = token => {
//     axios.defaults.headers.common.Authorization = `Bearer ${token}`;
// };

// const clearAuthHeader = () => {
//     axios.defaults.headers.common.Authorization = '';
// };

// // ===============================================================
// // AUTH
// // ===============================================================

// export const signUpUser = createAsyncThunk(
//     'auth/register',
//     async (userRegData, thunkAPI) => {
//         try {
//             const resp = await axios.post(`/auth/register`, userRegData);
//             setAuthHeader(resp.data.user.token);

//             // navigate('/calendar/month', { replace: true });
//             alert('You are successfully registered ');
//             return resp.data;
//         } catch (e) {
//             alert(e.message);
//             return thunkAPI.rejectWithValue(e.message);
//         }
//     }
// );

// export const loginUser = createAsyncThunk(
//     'auth/login',
//     async (userRegData, thunkAPI) => {
//         try {
//             const resp = await axios.post('/auth/login', userRegData);
//             setAuthHeader(resp.data.user.token);
//             console.log(resp);
//             return resp.data;
//         } catch (error) {
//             return thunkAPI.rejectWithValue(error.message);
//         }
//     }
// );

// export const refreshUser = createAsyncThunk(
//     'auth/refresh',
//     async (_, thunkAPI) => {
//         const state = thunkAPI.getState().auth;

//         console.log(state.user.token);
//         if (!state.user.token) {
//             return thunkAPI.rejectWithValue('no valid message');
//         }
//         // clearAuthHeader();
//         setAuthHeader(state.user.token);
//         try {
//             const resp = await axios.get('/auth/login');
//             console.log(resp);
//             return resp.data;
//         } catch (e) {
//             return thunkAPI.rejectWithValue(e.message);
//         }
//     }
// );

// // ===============================================================
// // USER
// // ===============================================================

// export const logoutUser = createAsyncThunk(
//     'user/logout',
//     async (_, { getState, rejectWithValue }) => {
//         try {
//             const { auth } = getState();
//             setAuthHeader(auth.token);
//             await axios.post('/user/logout');
//             clearAuthHeader();
//         } catch (e) {
//             return rejectWithValue(e.message);
//         }
//     }
// );
// export const currentUser = createAsyncThunk(
//     'user/current',
//     async (_, { getState, rejectWithValue }) => {
//         try {
//             const { auth } = getState();
//             setAuthHeader(auth.token);
//             const response = await axios.get('/user/current');
//             console.log(response.data);
//             return response.data;
//         } catch (e) {
//             return rejectWithValue(e.message);
//         }
//     }
// );

// export const updateUser = createAsyncThunk(
//     'user/updUser',
//     async (values, { getState, rejectWithValue }) => {
//         try {
//             const { auth } = getState();
//             setAuthHeader(auth.token);

//             const response = await axios.patch(`/user/info`, values);

//             return response.data;
//         } catch (e) {
//             return rejectWithValue(e.message);
//         }
//     }
// );

// // ===============================================================
// // TASKS
// // ===============================================================

// export const fetchTasks = createAsyncThunk(
//     'tasks/fetchAll',
//     async (_, thunkAPI) => {
//         try {
//             const response = await axios.get('/tasks');
//             return response.data;
//         } catch (e) {
//             return thunkAPI.rejectWithValue(e.message);
//         }
//     }
// );

// export const addTask = createAsyncThunk(
//     'tasks/addTask',
//     async (text, thunkAPI) => {
//         try {
//             const response = await axios.post('/tasks', text);
//             return response.data;
//         } catch (e) {
//             return thunkAPI.rejectWithValue(e.message);
//         }
//     }
// );

// export const updateTask = createAsyncThunk(
//     'tasks/updTask',
//     async (taskId, thunkAPI) => {
//         try {
//             const response = await axios.patch(`/tasks/${taskId}`);
//             return response.data;
//         } catch (e) {
//             return thunkAPI.rejectWithValue(e.message);
//         }
//     }
// );

// export const delTask = createAsyncThunk(
//     'tasks/delTask',
//     async (taskId, thunkAPI) => {
//         try {
//             const response = await axios.delete(`/tasks/${taskId}`);
//             return response.data;
//         } catch (e) {
//             return thunkAPI.rejectWithValue(e.message);
//         }
//     }
// );
