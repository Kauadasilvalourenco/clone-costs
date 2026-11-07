import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Label } from "./Label";

describe("teste unitário componente Label", () => {
    it("deve renderizar corretamente o componente Label", () => {
        render (
            <div>
                <Label
                    htmlFor="Test"
                >
                    Test Label
                </Label>
            </div>
        );

        const elementLabel = screen.getByText("Test Label");

        expect(elementLabel).toBeInTheDocument();
        expect(elementLabel).toHaveAttribute("for", "Test");
    });

    it("deve passar o foco para o input correspondente ao htmlFor do componente Label ao ser clicado pelo usuário", async() => {
        const user = userEvent.setup();

        render (
            <div>
                <Label
                    htmlFor="Test"
                >
                    Test Label
                </Label>

                <input type="text" id="Test" placeholder="Test Input"/>
            </div>
        );

        const elementLabel = screen.getByText("Test Label");
        const elementInput = screen.getByPlaceholderText("Test Input");

        expect(elementLabel).toBeInTheDocument();
        expect(elementInput).toBeInTheDocument();

        await user.click(elementLabel);

        expect(elementInput).toHaveFocus();
    });
});