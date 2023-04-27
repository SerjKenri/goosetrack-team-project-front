const media = {
    up: (breakpoint, vertical = false) =>
        `@media (min${
            vertical ? 'Height' : 'Width'
        }: calc(${breakpoint} + 0.02px))`,
    down: (breakpoint, vertical = false) =>
        `@media (max${vertical ? 'Height' : 'Width'}: ${breakpoint})`,
    between: (breakpointMin, breakpointMax, vertical = false) =>
        `@media (max${
            vertical ? 'Height' : 'Width'
        }: ${breakpointMax}) and (min${
            vertical ? 'Height' : 'Width'
        }: calc(${breakpointMin} + 0.02px))`,
};

export { media };
