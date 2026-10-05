import type { ReactNode } from "react";

import styleButton from "./Button.module.css";
// import css;

type propsButton = {
    onClick: React.MouseEventHandler,
    children: ReactNode,
    style?: string
}

export function Button({ onClick, children, style }: propsButton) {
    return (
        <button
            onClick={onClick}
            className={`${styleButton.button} ${style}`}
        >
            {children}
        </button>
    );
};