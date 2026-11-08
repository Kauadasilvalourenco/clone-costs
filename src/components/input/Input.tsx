import styleInput from "./Input.module.css";
// import css;

type InputProps = {
    type: string,
    name: string,
    id: string,
    placeholder: string,
    style?: string
};

export function Input({ type, name, id, placeholder, style }: InputProps) {
    return (
        <input 
            type={type} 
            name={name} 
            id={id}
            placeholder={placeholder}
            className={`${styleInput.input} ${style}`}
        />
    );
};