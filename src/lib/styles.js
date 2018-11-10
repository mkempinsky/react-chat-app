// COLORS
export const gray = shade => {
    const shades = {
        100: '#cccccc',
        200: '#8e8e8e',
        300: '#666666',
        default: '#ccc'
    };
    return shades[+shade] || shades.default;
};
export const gradient = shade => {
    const shades = {
        100: '#25aae1, #40e495, #30dd8a, #2bb673',
        200: '#25aae1, #4481eb, #04befe, #3f86ed',
        300: '#0ba360, #3cba92, #30dd8a, #2bb67',
        400: '#667eea, #764ba2, #6B8DD6, #8E37D7',
        500: '#eb3941, #f15e64, #e14e53, #e2373f',
        default: ''
    };
    return shades[+shade] || shades.default;
};

// BREAKPOINT
export const BREAKPOINT = '992px';
