import { useId } from "react";
import { useForm } from "react-hook-form";
// import hooks;

import z from "zod/v3";
import { zodResolver } from "@hookform/resolvers/zod";
// import zod;

import { Button } from "../button/Button";
// import components;

import { FormSchema } from "../../schemas/FormSchema";
import { CreateProjectSchemaValidation } from "../../schemas/FormSchema";
// import FormSchema;

import type { configSchema } from "../../schemas/FormSchema";
import type { ConfigCategories } from "../../services/Api";
import type { Path } from "react-hook-form";
// import types;

import styleForm from "./Form.module.css";
// import css;

type FormProps = {
    fieldsConfig: Array<configSchema>,
    options: Array<ConfigCategories>,
    btnText: string,
    style?: string
};

type formValues = z.infer<typeof CreateProjectSchemaValidation>

export function Form({ fieldsConfig, options, btnText, style }: FormProps) {
    const ID = useId();

    const fieldList = FormSchema({
        fieldsConfig: fieldsConfig,
        id: ID,
        options: options
    });

    const { register, formState: {errors},  } = useForm<formValues>({
        resolver: zodResolver(CreateProjectSchemaValidation)
    });

    return (
        <form
            className={`${styleForm.Form} ${style}`}
        >
            {
                fieldList.map((obj) => {
                    const TagLabel = obj.label.component;
                    const TagField = obj.field.component;
                    const fieldName = obj.field.props.name as Path<formValues>;

                    return (
                        <div
                            key={obj.field.props.id}
                            className={styleForm.conteiner_fields}
                        >
                            <TagLabel 
                                { ...obj.label.props }
                            />

                            <TagField 
                                { ...obj.field.props }
                                { ...register(fieldName) }
                            />
                            
                            {
                                errors[fieldName] && (
                                    <span
                                        className={styleForm.message_error}
                                    >
                                        { errors[fieldName].message }
                                    </span>
                                )
                            }

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