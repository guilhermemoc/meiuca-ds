import { ReactNode, CSSProperties } from "react";

export interface SubtitleSmallProps {
    children: ReactNode;
    fontSize?: string;
    lineHeight?: string;
    fontFamily?: string;
    fontWeight?: string;
    color?: string;
    marginBottom?: string;
    style?: CSSProperties;
}