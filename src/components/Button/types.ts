import { ReactNode, CSSProperties } from "react";

export interface ButtonProps {
    children: ReactNode;
    url?: string;
    fontSize?: string;
    lineHeight?: string;
    borderRadius?: string;
    padding?: string;
    fontFamily?: string;
    fontWeight?: string;
    color?: string;
    bgColor?: string;
    style?: CSSProperties;
}