import { forwardRef } from "react";
// import ref;

import styleInput from "./Input.module.css";
// import css;

type InputProps = {
    type: string,
    name: string,
    id: string,
    placeholder: string,
    style?: string
};

export const Input = forwardRef<HTMLInputElement, InputProps>(({ type, name, id, placeholder,style, ...rest }, ref) => {
    return (
        <input 
            type={type} 
            name={name} 
            id={id}
            placeholder={placeholder}
            className={`${styleInput.input} ${style}`}
            { ...rest }
            ref={ref}
        />
    );
});

Input.displayName = "Input";