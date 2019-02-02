// COLORS
export const gray = shade => {
    const shades = {
        50: '#f2f2f2',
        75: '#e1e1e1',
        100: '#cccccc',
        200: '#8e8e8e',
        300: '#666666',
        default: '#ccc'
    };
    return shades[+shade] || shades.default;
};
export const gradient = shade => {
    const shades = {
        100: '#25aae1, #40e495, #30dd8a, #2bb673', // blue-green
        200: '#25aae1, #4481eb, #04befe, #3f86ed', // blue
        300: '#0ba360, #3cba92, #30dd8a, #2bb67a', // green
        400: '#667eea, #764ba2, #6B8DD6, #8E37D7', // purple
        500: '#eb3941, #f15e64, #e14e53, #e2373f', // red
        default: ''
    };
    return shades[+shade] || shades.default;
};

export const blue = shade => {
    const shades = {
        10: '#e9f6fc',
        50: '#92d4f0',
        100: '#25aae1',
        600: '#1d88b4',
        default: '25aae1'
    };
    return shades[+shade] || shades.default;
};

// BREAKPOINT
export const BREAKPOINT = '992px';
