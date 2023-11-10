import React from 'react';
import '../../webComponents/button-primary';
import { ButtonProps } from './types';

function ButtonPrimary({
    children,
    url,
    fontSize,
    lineHeight,
    borderRadius,
    padding,
    fontFamily,
    fontWeight,
    color,
    bgColor,
    style,
}: ButtonProps) {
    const buttonAttributes: Record<string, string | undefined> = {
        'font-size': fontSize,
        'line-height': lineHeight,
        'border-radius': borderRadius,
        padding,
        'font-family': fontFamily,
        'font-weight': fontWeight,
        color,
        'bg-color': bgColor,
    };

    const filteredAttributes = Object.fromEntries(
        Object.entries(buttonAttributes).filter(([_, value]) => value !== undefined && value !== null)
    );

    const buttonContent = url ? (
        <a href={url} target="_blank" rel="noopener noreferrer">
            <button-primary style={style} {...filteredAttributes}>
                {children}
            </button-primary>
        </a>
    ) : (
        <button-primary style={style} {...filteredAttributes}>
            {children}
        </button-primary>
    );

    return buttonContent;
}

export default ButtonPrimary;
