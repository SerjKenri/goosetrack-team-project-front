import { iconNames } from "assets/icons/iconNames"
import { Icon } from "core/kit/Icon"
import { ThemeContext } from "core/theme/ThemeContext"
import { useContext } from "react"
import styled from "styled-components"

export const ThemeToggler = () => {

    const {theme, toggleTheme} = useContext(ThemeContext)

    const iconType = theme.themeName === 'lightTheme' ? iconNames.moon : iconNames.sun

    return (
        <ToggleButton onClick={toggleTheme}><Icon name={iconType} size={ '100%'} /></ToggleButton>
    )
}


const ToggleButton = styled.button(({ theme }) => ({
    backgroundColor: 'transparent',
    padding: '0',
    border: '0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '24px', 
    height: '24px', 
    color: theme.color.calendarDateColor,
    cursor: 'pointer',

    [theme.media.up(`${theme.breakpoints.m}px`)]: {
        width: '32px',
        height: '32px'
    },

    '&:hover': {
        backgroundColor: 'red'
    },
}))