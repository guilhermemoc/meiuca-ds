import { ReactNode, CSSProperties } from "react";

export interface ShapeProps {
    children: ReactNode;
    borderRadius?: string;
    padding?: string;
    borderWidth?: string;
    borderColor?: string;
    backgroundColor?: string;
    style?: CSSProperties;
}