import { space } from "./space";
import { font } from "./fonts";
import { breakpoints } from "./breakpoints";
import { colorsLight } from "./colors";
import { media } from "./mediaRules";

const lightTheme = {
    media,
    breakpoints,
    space,
    font,
    color: colorsLight,
    themeName: 'lightTheme'
};

export { lightTheme };
