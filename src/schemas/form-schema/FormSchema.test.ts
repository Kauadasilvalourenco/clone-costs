import { describe, it, expect } from "vitest";
import { Label } from "../../components/label/Label";
import { Input } from "../../components/input/Input";
import { Select } from "../../components/select/Select";
import { FormSchema } from "./FormSchema";

describe("teste unitário função FormSchema", () => {
    it("deve estruturar um formulário dinâmico com componentes anatômicos e suas props", () => {
        const ID = "r0LLh";

        const mockForm = [
            {
                label: {
                    component: Label,
                    props: {
                        children: "Teste Label"
                    }
                }, 
                field: {
                    component: Input,
                    props: {
                        type: "text",
                        name: "test-input",
                        placeholder: "Testando Input"
                    }
                }
            },
            {
                label: {
                    component: Label,
                    props: {
                        children: "Teste Label"
                    }
                }, 
                field: {
                    component: Select,
                    props: {
                        name: "test-select"
                    }
                }
            }
        ];

        const mockOptions = [
            { id: 1, name: "Infra" },
            { id: 2, name: "Dev" }
        ];

        const expectedID = `${ID}-${"test-input"}`;
        const mockSchema = FormSchema({
            fieldsConfig: mockForm,
            id: ID,
            options: mockOptions
        });

        expect(mockSchema).toHaveLength(2);
        expect(mockSchema[0].label.props.children).equal("Teste Label");
        expect(mockSchema[0].field.props.type).equal("text");
        expect(mockSchema[0].field.props.placeholder).equal("Testando Input");

        expect(mockSchema[0].field.props.id).equal(expectedID);
        expect(mockSchema[0].label.props.htmlFor).equal(mockSchema[0].field.props.id);

        expect(mockSchema[1].field.props.name).equal("test-select");
        expect(mockSchema[1].label.props.htmlFor).equal(mockSchema[1].field.props.id);
    });
});