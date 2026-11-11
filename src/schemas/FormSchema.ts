import type { ElementType } from "react";
// import types;

type configSchema = {
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
    id: string
};

export function FormSchema({ fieldsConfig =[], id }: FormSchemaParameters) {
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
                    id: ID
                }
            }
        };
    });
};