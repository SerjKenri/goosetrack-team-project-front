import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { selectTokenState } from 'redux/auth/auth.selectors';
import { ROUTING } from 'core/utils/constantsRouting';

const PublicRoute = () => {
    const token = useSelector(selectTokenState);
    // const token = '432234fsadfdsf';
    return token ? <Navigate to={ROUTING.ACCOUNT} replace /> : <Outlet />;
};
export default PublicRoute;
