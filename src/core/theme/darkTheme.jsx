import { space } from './space'
import { font } from './fonts';
import { breakpoints } from "./breakpoints";
import { colorsDark } from './colors';
import { media } from './mediaRules';

const darkTheme = {
    media,
    breakpoints,
    space,
    font,
    color: colorsDark,
};

export { darkTheme };
