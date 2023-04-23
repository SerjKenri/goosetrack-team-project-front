import { RegisterPage } from 'pages/RegisterPage';
import { Routes, Route } from 'react-router-dom';
export const App = () => {
    return (
        <Routes>
            <Route path="/register" element={<RegisterPage />} />
        </Routes>
    );
};
