import './CopyToClipBoard.scss';

import { useEffect, useState } from 'react';

export const CopyToClipboard: React.FC<{ copyText: string }> = ({
    copyText,
}) => {
    const [isCopied, setIsCopied] = useState(false);

    useEffect(() => {
        setIsCopied(false);
    }, [copyText]);

    function handleCopy(text: string) {
        if (navigator) {
            navigator.clipboard.writeText(text);
        } else {
            // support IE 11
            window.clipboardData.setData('Text', text);
        }
        setIsCopied(true);
    }

    return (
        <div className="CopyToClipBoard__Container">
            <input type="text" value={copyText} readOnly className="Input" />
            <button className="Button" onClick={() => handleCopy(copyText)}>
                <span>{isCopied ? 'Copied!' : 'Copy'}</span>
            </button>
        </div>
    );
};
