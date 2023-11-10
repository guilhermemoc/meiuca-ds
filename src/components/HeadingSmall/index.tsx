import React from 'react';
import '../../webComponents/heading-small';
import { HeadingSmallProps } from './types';


function HeadingSmall({
    children,
    fontSize,
    lineHeight,
    fontFamily,
    fontWeight,
    marginBottom,
    color,
    style,
}: HeadingSmallProps) {
    const headingAttributes: Record<string, string | undefined> = {
        'font-size': fontSize,
        'line-height': lineHeight,
        'font-family': fontFamily,
        'font-weight': fontWeight,
        'margin-bottom': marginBottom,
        color,
    };

    const filteredAttributes = Object.fromEntries(
        Object.entries(headingAttributes).filter(([_, value]) => value !== undefined && value !== null)
    );
    return (
        filteredAttributes && (
            <heading-small style={style} {...filteredAttributes}>
                {children}
            </heading-small>
        )

    );
}

export default HeadingSmall;
