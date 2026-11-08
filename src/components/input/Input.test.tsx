import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Input } from "./Input";

describe("teste unitário componente Input", () => {
    it("deve renderizar e validar as props do componente Input", () => {
        render (
            <Input 
                type="text"
                name="Input"
                id="input-test"
                placeholder="Testando Input"
            />
        );

        const elementInput = screen.getByRole("textbox");

        expect(elementInput).toBeInTheDocument();
        expect(elementInput).toHaveAttribute("type", "text");
        expect(elementInput).toHaveAttribute("name", "Input");
        expect(elementInput).toHaveAttribute("id", "input-test");
        expect(elementInput).toHaveAttribute("placeholder", "Testando Input");
    });

    it("deve renderizar corretamente dado digitado pelo usuário no input", async() => {
        const user = userEvent.setup();

        render (
            <div>
                <Input
                    type="text"
                    name="Another Input"
                    id="input-test"
                    placeholder="Testando Input"
                />

                <Input 
                    type="number"
                    name="Number Input"
                    id="input-number-test"
                    placeholder="25"
                />

            </div>
        );

        const elementInput = screen.getByRole("textbox");
        const elementInputNumber = screen.getByRole("spinbutton");

        expect(elementInput).toBeInTheDocument();
        await user.type(elementInput, "Testado!");
        expect(elementInput).toHaveValue("Testado!");

        expect(elementInputNumber).toBeInTheDocument();
        await user.type(elementInputNumber, "Outro Teste!");
        expect(elementInputNumber).not.toHaveValue("Outro Teste!");

        await user.clear(elementInputNumber);

        await user.type(elementInputNumber, "8");
        expect(elementInputNumber).toHaveValue(8);
    });
});