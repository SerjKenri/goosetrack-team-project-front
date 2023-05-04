import { iconNames } from 'assets/icons/iconNames';
import { IconButton } from 'core/kit/IconButton';
import { useTheme } from 'core/theme/ThemeContext';

export const ThemeToggler = () => {
    const { theme, toggleTheme } = useTheme();

    const iconType =
        theme.themeName === 'lightTheme' ? iconNames.moon : iconNames.sun;

    return (
        <IconButton
            onClick={toggleTheme}
            iconName={iconType}
            buttonSize={window.innerWidth > 768 ? 32 : 24}
        />
    );
};
