import { ColorListItem, HslColor, RgbColor } from '../types/color';
import { hslRgb } from './colorConversion';

/**
 * format color item into rgb string
 * @returns rgb(r, g, b);
 */
export const colorToRBGValue = ({ kind, components }: ColorListItem) => {
    if (kind === 'hsl') {
        const { hue, saturation, lightness } = components as HslColor;
        const [r, b, g] = hslRgb(hue, saturation, lightness);

        return `rgb(${r}, ${b}, ${g})`;
    }
    const { red, blue, green } = components as RgbColor;

    return `rgb(${red}, ${blue}, ${green})`;
};
