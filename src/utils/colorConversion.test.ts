import { hslRgb } from './colorConversion';

test('should cover HSL to RGB correctly', () => {
    expect(hslRgb(180, 100, 50)).toStrictEqual([0, 255, 255]);
    expect(hslRgb(60, 100, 50)).toStrictEqual([255, 255, 0]);
    expect(hslRgb(300, 100, 50)).toStrictEqual([255, 0, 255]);
    expect(hslRgb(0, 0, 0)).toStrictEqual([0, 0, 0]);
    expect(hslRgb(0, 80, 10)).toStrictEqual([46, 5, 5]);
    expect(hslRgb(0, 100, 50)).toStrictEqual([255, 0, 0]);
});
