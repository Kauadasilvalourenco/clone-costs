import styleSelect from "./Select.module.css";
// import css;

export type configOptions = {
    id: number,
    name: string
};

type SelectProps = {
    name: string,
    id: string,
    options: Array<configOptions>
    style?: string
};

export function Select({ name, id, options, style }: SelectProps) {
    return (
        <div>
            <select 
                name={name} 
                id={id}
                className={`${styleSelect.select} ${style}`}
            >

            <option 
                value="placeholder-select" 
                hidden
            >
                Escolha uma opção
            </option>

            {
                options.map((option) => (
                    <option
                        value={option.name}
                        key={option.id}
                        className={`${styleSelect.options} ${style}`}
                    >
                        { option.name }
                    </option>
                ))
            }

            </select>
        </div>
    );
};