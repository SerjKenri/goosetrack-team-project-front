import styled from 'styled-components';
import { iconNames } from "assets/icons/iconNames";
import { Button } from "core/kit/Button"
import { ButtonDifference } from "core/kit/Button";


export const LogOutButton = ({size}) => {
    const handleLogout = () => {
        console.log('log out')
    }

    return <Button 
        type="button"
        differentStyles={ButtonDifference.primary}
        title="Log out"
        onClick={handleLogout}
        iconName={iconNames.logout}
        iconSize={'20px'}
    />
}
