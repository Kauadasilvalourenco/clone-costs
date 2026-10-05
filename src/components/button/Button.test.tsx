import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router";
import { Button } from "./Button";

describe("teste unitário Button", () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    const mockFunctionClick = vi.fn();

    it("deve renderizar o button corretamente", () => {
        render(
            <MemoryRouter>
                <Button
                    onClick={mockFunctionClick}
                >
                    Teste
                </Button>
            </MemoryRouter>
        );

        const button = screen.getByRole("button", {name: /teste/i});

        expect(button).toBeInTheDocument();
    });

    it("deve chamar a função correspondente ao ser clicado", async() => {
        const user = userEvent.setup();

        render(
            <MemoryRouter>
                <Button
                    onClick={mockFunctionClick}
                >
                    Teste
                </Button>
            </MemoryRouter>
        );

        const button = screen.getByRole("button", {name: /teste/i});

        await user.click(button);

        expect(mockFunctionClick).toHaveBeenCalledTimes(1);
    });
});