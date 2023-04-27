import { iconNames } from "assets/icons/iconNames";
import { Button } from "core/kit/Button"
import { ButtonDifference } from "core/kit/Button";
import { useDispatch, useSelector } from "react-redux";
import { selectTokenState } from "redux/auth/auth.selectors";
import { logoutUser } from "redux/operations";


export const LogOutButton = () => {

    const dispatch = useDispatch()

    const token = useSelector(selectTokenState)

    const handleLogout = () => {
        dispatch(logoutUser())
    }


    return <Button 
        type="button"
        differentStyles={ButtonDifference.primary}
        title="Log out"
        onClick={handleLogout}
        iconName={iconNames.logout}
        iconSize={window.innerWidth > 768 ? '20px' : '18px'}
        disabled = {token ? false : true}
    />
}
