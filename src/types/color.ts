export type RgbColor = {
    red: number; // [0, 255]
    green: number; // [0, 255]
    blue: number; // [0, 255]
};

export type HslColor = {
    hue: number; // [0, 360] degrees
    saturation: number; // [0, 100] percentage
    lightness: number; // [0, 100] percentage
};

export type ColorListItem = {
    kind: 'rgb' | 'hsl';
    components: RgbColor | HslColor;
};

export type ColorList = ColorListItem[];
