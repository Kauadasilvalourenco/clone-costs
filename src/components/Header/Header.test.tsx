import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from "react-router";
import { Header } from "./Header";

describe("Teste Unitário Header", () => {
    it("deve renderizar o Header com sucesso", () => {
        render(
            <MemoryRouter>
                <Header />
            </MemoryRouter>
        );

        const logo = screen.getByTestId("logo");
        const menu = screen.getByTestId("menu");

        expect(logo).toBeDefined();
        expect(menu).toBeDefined();
    });

    it("deve aparecer os links para páginas após clique no menu", async() => {
        const user = userEvent.setup();

        render(
            <MemoryRouter>
                <Header />
            </MemoryRouter>
        );

        const menu = screen.getByTestId("menu");

        await user.click(menu);

        expect(screen.getByText("Home")).toBeInTheDocument();
        expect(screen.getByText("Projetos")).toBeInTheDocument();
    });
});