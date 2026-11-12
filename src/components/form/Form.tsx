import { useId } from "react";
// import hooks;

import { Button } from "../button/Button";
// import components;

import { FormSchema } from "../../schemas/FormSchema";
// import FormSchema;

import type { configSchema } from "../../schemas/FormSchema";
import type { configOptions } from "../select/Select";
// import types;

import styleForm from "./Form.module.css";
// import css;

type FormProps = {
    fieldsConfig: Array<configSchema>,
    options: Array<configOptions>,
    btnText: string,
    style?: string
};

export function Form({ fieldsConfig, options, btnText, style }: FormProps) {
    const ID = useId();

    const fieldList = FormSchema({
        fieldsConfig: fieldsConfig,
        id: ID,
        options: options
    });

    return (
        <form
            className={`${styleForm.Form} ${style}`}
        >
            {
                fieldList.map((field) => {
                    const TagLabel = field.label.component;
                    const TagField = field.field.component;

                    return (
                        <div
                            key={field.field.props.id}
                            className={styleForm.conteiner_fields}
                        >
                            <TagLabel 
                                { ...field.label.props }
                            />

                            <TagField 
                                { ...field.field.props }
                            />
                        </div>
                    );
                })
            }

            <div>
                <Button
                    type="submit"
                >
                    { btnText }
                </Button>
            </div>

        </form>
    );
};