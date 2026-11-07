import type { ReactNode } from "react";
// import types;

import styleLabel from "./Label.module.css";
// import css;

type LabelProps = {
    htmlFor: string,
    children: ReactNode,
    style?: string,
};

export function Label({ htmlFor, children, style }: LabelProps) {
    return (
        <label 
            htmlFor={htmlFor}
            className={`${styleLabel.label} ${style}`}
        >
            { children }
        </label>
    );
};