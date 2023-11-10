import React from 'react';
import '../../webComponents/shape';
import { ShapeProps } from './types';



function Shape({
    children,
    borderRadius,
    padding,
    borderWidth,
    borderColor,
    backgroundColor,
    style,
}: ShapeProps) {
    const shapeAttributes: Record<string, string | undefined> = {
        'border-radius': borderRadius,
        padding,
        'border-width': borderWidth,
        'border-color': borderColor,
        'background-color': backgroundColor,
    };

    const filteredAttributes = Object.fromEntries(
        Object.entries(shapeAttributes).filter(([_, value]) => value !== undefined && value !== null)
    );

    return (
        <custom-shape style={style} {...filteredAttributes}>
            {children}
        </custom-shape>
    );
}

export default Shape;
