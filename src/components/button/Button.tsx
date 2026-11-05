import type { ReactNode } from "react";
// import types;

import styleButton from "./Button.module.css";
// import css;

type ButtonProps = {
    onClick: React.MouseEventHandler,
    children: ReactNode,
    style?: string
};

export function Button({ onClick, children, style }: ButtonProps) {
    return (
        <button
            onClick={onClick}
            className={`${styleButton.button} ${style}`}
        >
            { children }
        </button>
    );
};