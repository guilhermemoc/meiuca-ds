import React from 'react';
import '../../webComponents/subtitle-small';
import { SubtitleSmallProps } from './types';



function SubtitleSmall({
    children,
    fontSize,
    lineHeight,
    fontFamily,
    fontWeight,
    color,
    marginBottom,
    style,
}: SubtitleSmallProps) {
    const subtitleAttributes: Record<string, string | undefined> = {
        'font-size': fontSize,
        'line-height': lineHeight,
        'font-family': fontFamily,
        'font-weight': fontWeight,
        'margin-bottom': marginBottom,
        color,
    };

    const filteredAttributes = Object.fromEntries(
        Object.entries(subtitleAttributes).filter(([_, value]) => value !== undefined && value !== null)
    );

    return (
        <subtitle-small style={style} {...filteredAttributes}>
            {children}
        </subtitle-small>
    );
}

export default SubtitleSmall;
