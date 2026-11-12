import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Select } from "./Select";

describe("teste unitário componente Select", () => {
    it("deve renderizar corretamente o componente Select e validar as props correspondentes", () => {
        const mockOptions = [
            { id: 1, name: "Infra" },
            { id: 2, name: "Dev" }
        ];

        render (
            <Select 
                name="Select"
                id="test-select"
                options={mockOptions}
            />
        );

        const elementSelect = screen.getByRole("combobox");

        expect(elementSelect).toBeInTheDocument();
        expect(elementSelect).toHaveAttribute("name", "Select");
        expect(elementSelect).toHaveAttribute("id", "test-select");
        expect(elementSelect).toHaveValue("placeholder-select");
        expect(elementSelect).toHaveTextContent("Escolha uma opção");
    });

    it("deve exibir as props após interação do usuário com componente e exibir a option selecionada", async() => {
        const user = userEvent.setup();

        const mockOptions = [
            { id: 1, name: "Infra" },
            { id: 2, name: "Dev" }
        ];

        render (
            <Select 
                name="Another Select"
                id="test-select"
                options={mockOptions}
            />
        );

        const elementSelect = screen.getByRole("combobox");

        expect(elementSelect).toBeInTheDocument();

        await user.selectOptions(elementSelect, "Infra");
        expect(elementSelect).toHaveValue("Infra");
        expect(elementSelect).toHaveTextContent("Infra");

        await user.selectOptions(elementSelect, "Dev");
        expect(elementSelect).toHaveValue("Dev");
        expect(elementSelect).toHaveTextContent("Dev");
    });
});