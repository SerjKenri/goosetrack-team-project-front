import { Routes, Route, Navigate } from 'react-router-dom';
import { LoginForm } from './LoginForm/LoginForm';
import MainLayout from 'pages/MainLayout/MainLayout';
import LoginPage from 'pages/LoginPage/LoginPage';
import RegisterPage from 'pages/RegisterPage';
import CalendarPage from 'pages/CalendarPage/CalendarPage';
import CalendarDayPage from 'pages/CalendarDayPage/CalendarDayPage';
import CalendarMonthPage from 'pages/CalendarMonthPage/CalendarMonthPage';
import AccountPage from 'pages/AccountPage/AccountPage';

// import PublicRoute from './authRoutes/PublicRoute';
// import PrivateRoute from './authRoutes/PrivateRoute';
import { ROUTING } from 'core/utils/constantsRouting';

export const App = () => {
    return (
        // <Routes>
        //     {/* <Route path="" element={<PublicRoute />}> */}
        //     <Route path={ROUTING.LOGIN} element={<LoginPage />} />
        //     <Route path={ROUTING.REGISTER} element={<RegisterPage />} />
        //     {/* </Route> */}
        //     {/* <Route path="" element={<PrivateRoute />}> */}
        //     <Route path="/" element={<MainLayout />}>
        //         <Route index element={<Navigate to={ROUTING.ACCOUNT} />} />
        //         <Route path={ROUTING.ACCOUNT} element={<AccountPage />} />
        //         <Route path={ROUTING.CALENDAR} element={<CalendarPage />} />
        //         <Route
        //             path={ROUTING.CURRENT_DAY}
        //             element={<CalendarDayPage />}
        //         />
        //         <Route
        //             path={ROUTING.CURRENT_MONTH}
        //             element={<CalendarMonthPage />}
        //         />
        //     </Route>
        //     {/* </Route> */}
        // </Routes>
        <LoginForm/>
    );
};
