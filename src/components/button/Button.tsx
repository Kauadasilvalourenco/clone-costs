import type { ReactNode } from "react";
// import types;

import styleButton from "./Button.module.css";
// import css;

type ConfigButtonClick = {
    type: "click",
    onClick: React.MouseEventHandler,
    children: ReactNode,
    style?: string
};

type ConfigButtonSubmit = {
    type: "submit",
    onClick?: React.MouseEventHandler,
    children: ReactNode,
    style?: string
};

type ButtonProps = ConfigButtonClick | ConfigButtonSubmit

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