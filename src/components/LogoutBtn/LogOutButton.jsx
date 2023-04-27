import { iconNames } from 'assets/icons/iconNames';
import { Button } from 'core/kit/Button';
import { ButtonDifference } from 'core/kit/Button';
import { useDispatch } from 'react-redux';
import { logoutUser } from 'redux/operations';

export const LogOutButton = ({ user }) => {
    const dispatch = useDispatch();

    const handleLogout = () => {
        user = {
            avatarURL: '',
            birthDay: '',
            email: '',
            id: '',
            messenger: '',
            name: '',
            phone: '',
        };
        dispatch(logoutUser(user));
    };

    return (
        <Button
            type="button"
            differentStyles={ButtonDifference.primary}
            title="Log out"
            onClick={handleLogout}
            iconName={iconNames.logout}
            iconSize={window.innerWidth > 768 ? '20px' : '18px'}
        />
    );
};
