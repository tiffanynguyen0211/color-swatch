import { useEffect, useState } from 'react';

import { ColorListItem } from '../types/color';
import { ColorSwatch } from './ColorSwatch';

export const ColorSwatchContainer: React.FC = () => {
    const [data, setData] = useState<ColorListItem[] | null>(null);
    const fetchColors = async () => {
        setData(null);
        const response = await fetch(
            'https://challenge.structrs.com/rest/colors/list',
        );
        const fetchData = await response.json();
        setData(fetchData);
    };

    useEffect(() => {
        fetchColors();
    }, []);

    return <ColorSwatch colorsData={data} onReset={() => fetchColors()} />;
};
