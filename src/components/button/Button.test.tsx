import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Button } from "./Button";

describe("teste unitário componente Button", () => {
    it("deve renderizar corretamente o componente Button na tela", () => {
        const mockClick = vi.fn();

        render (
            <Button
                onClick={mockClick}
            >
                Test Button
            </Button>
        );

        const elementButton = screen.getByRole("button", { name: "Test Button" });

        expect(elementButton).toBeInTheDocument();
    });

    it("deve chamar a função atribuída ao evento onClick após clique do usuário", async() => {
        const mockClick = vi.fn();

        const user = userEvent.setup();

        render (
            <Button
                onClick={mockClick}
            >
                Test Click Button
            </Button>
        );

        const elementButton = screen.getByRole("button", { name: "Test Click Button" });

        expect(elementButton).toBeInTheDocument();

        await user.click(elementButton);

        expect(mockClick).toHaveBeenCalledTimes(1);
    });
});