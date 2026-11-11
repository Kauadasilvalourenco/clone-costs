import type { ElementType } from "react";
import type { configOptions } from "../components/select/Select";
// import types;

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