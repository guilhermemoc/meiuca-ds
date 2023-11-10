import React from 'react';
import '../../webComponents/paragraph';
import { ParagraphProps } from './types';



function Paragraph({
    children,
    fontSize,
    lineHeight,
    fontFamily,
    fontWeight,
    color,
    marginBottom,
    style,
}: ParagraphProps) {
    const paragraphAttributes: Record<string, string | undefined> = {
        'font-size': fontSize,
        'line-height': lineHeight,
        'font-family': fontFamily,
        'font-weight': fontWeight,
        'margin-bottom': marginBottom,
        color,
    };

    const filteredAttributes = Object.fromEntries(
        Object.entries(paragraphAttributes).filter(([_, value]) => value !== undefined && value !== null)
    );

    return (
        <custom-paragraph style={style} {...filteredAttributes}>
            {children}
        </custom-paragraph>
    );
}

export default Paragraph;
