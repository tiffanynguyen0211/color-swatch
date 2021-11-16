import './ColorSwatch.scss';

import { useEffect, useState } from 'react';

import { ColorListItem } from '../types/color';
import { colorToRBGValue } from '../utils/colorValue';
import { CopyToClipboard } from './CopytoClipboard';

const ColorPanel: React.FC<
    {
        onClick: (value: ColorListItem) => void;
    } & ColorListItem
> = ({ components, kind, onClick }) => (
    <button
        onClick={() => onClick({ kind, components })}
        className="ColorSwatch__Button"
    >
        <span>
            <div
                style={{
                    backgroundColor: colorToRBGValue({ kind, components }),
                    padding: '15px',
                }}
            />
        </span>
    </button>
);

export const ColorSwatch: React.FC<{
    colorsData?: ColorListItem[] | null;
    onReset: () => void;
}> = ({ colorsData, onReset }) => {
    const [selected, setSelected] = useState<ColorListItem | null>(null);

    useEffect(() => {
        setSelected(null);
        if (colorsData && colorsData.length > 0) setSelected(colorsData[0]);
    }, [colorsData]);

    return (
        <div className="ColorSwatch__Container">
            <div className="ColorSwatch__DisplayContainer">
                {colorsData && colorsData.length > 0 && selected ? (
                    <>
                        <div
                            className="ColorSwatch__Display"
                            style={{
                                backgroundColor: colorToRBGValue(selected),
                            }}
                        ></div>
                        <CopyToClipboard copyText={colorToRBGValue(selected)} />
                    </>
                ) : (
                    // TODO add loading skeleton
                    <div style={{ margin: 'auto' }}>Loading...</div>
                )}
            </div>

            <button
                className="Button ColorSwatch__Button--reset"
                onClick={onReset}
            >
                Reload Color
            </button>
            <div className="ColorSwatch__ColorList">
                {colorsData &&
                    colorsData.length > 0 &&
                    colorsData.map((eachData, index) => (
                        <ColorPanel
                            key={`${eachData.kind}-${index}`}
                            {...eachData}
                            onClick={(currentColor) => {
                                setSelected(currentColor);
                            }}
                        />
                    ))}
                {colorsData && colorsData.length === 0 && (
                    <p>No available colors</p>
                )}
                {/* TODO add loading skeleton */}
                {!colorsData && (
                    <div style={{ margin: 'auto' }}>Loading...</div>
                )}
            </div>
        </div>
    );
};

declare global {
    interface Window {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        clipboardData: any;
    }
}
