import z from "zod/v3";
// import zod

import type { ElementType } from "react";
import type { configOptions } from "../components/select/Select";
// import types;

import { Label } from "../components/label/Label";
import { Input } from "../components/input/Input";
import { Select } from "../components/select/Select";
// import components;

export type configSchema = {
    label: {
        component: React.ElementType,
        props: React.ComponentProps<ElementType>
    },
    field: {
        component: React.ElementType,
        props: React.ComponentProps<ElementType>
    }
};

type FormSchemaParameters = {
    fieldsConfig: Array<configSchema>,
    id: string,
    options: Array<configOptions>
};

export function FormSchema({ fieldsConfig =[], id, options }: FormSchemaParameters) {
    return fieldsConfig.map((obj) => {
        const ID = `${id}-${obj.field.props.name}`;

        return {
            label: {
                component: obj.label.component,
                props: {
                    ...obj.label.props,
                    htmlFor: ID
                }
            },
            field: {
                component: obj.field.component,
                props: {
                    ...obj.field.props,
                    id: ID,
                    options: options
                }
            }
        };
    });
};

export const CreateProjectSchema = [
    {
        label: {
            component: Label,
            props: {
                children: "Nome Projeto:"
            }
        },
        field: {
            component: Input,
            props: {
                type: "text",
                name: "name-project",
                placeholder: "Ex: Integração sistema de pagamento"
            }
        }
    },
    {
        label: {
            component: Label,
            props: {
                children: "Orçamento Projeto:"
            }
        },
        field: {
            component: Input,
            props: {
                type: "number",
                name: "budget-project",
                placeholder: "Ex: R$5000,00"
            }
        }
    },
    {
        label: {
            component: Label,
            props: {
                children: "Categoria Projeto:"
            }
        },
        field: {
            component: Select,
            props: {
                name: "categories-project"
            }
        }
    }
];

export const CreateProjectSchemaValidation = z.object({
    "name-project": z
    .string()
    .min(3, "O  campo deve conter no mínimo 3 caracteres!")
    .regex(/^(?!\d+$).+$/, "O campo deve conter letras!"),

    "budget-project": z
    .coerce.number()
    .min(3, "O campo deve conter no mínimo 3 digitos!"),

    "categories-project": z
    .string()
    .min(1, "Deve ser escolhida uma categoria!")
});