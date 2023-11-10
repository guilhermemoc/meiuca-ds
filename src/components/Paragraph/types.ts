import { ReactNode, CSSProperties } from "react";

export interface ParagraphProps {
    children: ReactNode;
    fontSize?: string;
    lineHeight?: string;
    fontFamily?: string;
    fontWeight?: string;
    marginBottom?: string;
    color?: string;
    style?: CSSProperties;
}