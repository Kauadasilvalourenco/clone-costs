import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Form } from "./Form";
import { CreateProjectSchema } from "../../schemas/FormSchema";

describe("teste integração componente Form", () => {
    it("deve renderizar um form contendo os componentes Label, Input, Select e Button corretamente", async() => {
        const user = userEvent.setup({ delay: null });
        const mockSubmit = vi.fn();

        const mockOptions = [
            { id: 1, name: "Infra" },
            { id: 2, name: "Dev" },
            { id: 3, name: "Tests" }
        ];

        render (
            <Form 
                fieldsConfig={CreateProjectSchema}
                options={mockOptions}
                onSubmit={mockSubmit}
                btnText="Criar Projeto"
                isLoading={false}
            />
        );

        const nameInput = screen.getByLabelText("Nome Projeto:");
        const budgetInput = screen.getByLabelText("Orçamento Projeto:");
        const categorySelect = screen.getByLabelText("Categoria Projeto:");
        const submitButton = screen.getByRole("button", { name: "Criar Projeto" });

        await user.type(nameInput, "Teste");
        await user.type(budgetInput, "2600");
        await user.selectOptions(categorySelect, "Tests");

        await user.click(submitButton);

        expect(mockSubmit).toHaveBeenCalledTimes(1);
        expect(mockSubmit).toHaveBeenCalledWith({
            name_project: "Teste",
            budget_project: 2600,
            category_project: "Tests"
        }, expect.anything());
    });

    it("deve renderizar a imagem de loading para categories em caso de isLoading ser true", () => {
        const mockSubmit = vi.fn();

        render (
            <Form 
                fieldsConfig={CreateProjectSchema}
                options={[]}
                onSubmit={mockSubmit}
                btnText="Criar Projeto"
                isLoading={true}
            />
        );

        const img = screen.getByRole("img");

        expect(img).toBeInTheDocument();
    });

    it("deve verificar a validação do Zod em caso de dados inválidos", async() => {
        const user = userEvent.setup({ delay: null });

        const mockSubmit = vi.fn();

        render (
            <Form 
                fieldsConfig={CreateProjectSchema}
                options={[]}
                onSubmit={mockSubmit}
                btnText="Criar Projeto"
                isLoading={false}
            />
        );

        const submitButton = screen.getByRole("button", { name: "Criar Projeto" });

        await user.click(submitButton);

        expect(await screen.findByText("O campo deve conter no mínimo 3 caracteres!")).toBeInTheDocument();
        expect(await screen.findByText("O campo deve conter no mínimo 3 digitos!")).toBeInTheDocument();
        expect(await screen.findByText("Deve ser escolhida uma categoria!")).toBeInTheDocument();
    });
});