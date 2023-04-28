import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { selectTokenState } from 'redux/auth/auth.selectors';
import { ROUTING } from 'core/utils/constantsRouting';

const PrivateRoute = () => {
    const token = useSelector(selectTokenState);
    return token ? <Outlet /> : <Navigate to={ROUTING.LOGIN} replace />;
};
export default PrivateRoute;
