const media = {
    up: (breakpoint, vertical = false) =>
        `@media (min-${
            vertical ? 'height' : 'width'
        }: ${breakpoint})`,
    down: (breakpoint, vertical = false) =>
        `@media (max-${vertical ? 'height' : 'width'}: calc(${breakpoint} - 0.02px))`,
    between: (breakpointMin, breakpointMax, vertical = false) =>
        `@media (max-${
            vertical ? 'height' : 'width'
        }: ${breakpointMax}) and (min-${
            vertical ? 'height' : 'width'
        }: ${breakpointMin})`,
};




// const media = {
//     up: (breakpoint, vertical = false) =>
//         `@media (min-${
//             vertical ? 'height' : 'width'
//         }: calc(${breakpoint} + 0.02px))`,
//     down: (breakpoint, vertical = false) =>
//         `@media (max-${vertical ? 'height' : 'width'}: ${breakpoint})`,
//     between: (breakpointMin, breakpointMax, vertical = false) =>
//         `@media (max-${
//             vertical ? 'height' : 'width'
//         }: ${breakpointMax}) and (min-${
//             vertical ? 'height' : 'width'
//         }: calc(${breakpointMin} + 0.02px))`,
// };

export { media };
