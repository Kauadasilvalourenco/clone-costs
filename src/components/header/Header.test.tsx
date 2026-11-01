import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import { Header } from "./Header";

describe("teste unitário componente Header", () => {
    it("deve renderizar corretamente o componente Header", () => {
        render (
            <MemoryRouter>
                <Header />
            </MemoryRouter>
        );

        const componentHeader = screen.getByRole("banner");
        const logo = screen.getByRole("img", { name: "logo costs" });
        const openMenu = screen.getByLabelText("abrir menu");

        expect(componentHeader).toBeInTheDocument();
        expect(logo).toBeInTheDocument();
        expect(openMenu).toBeInTheDocument();
    });

    it("deve renderizar os menus de paginação após clique no usuário", async() => {
        const user = userEvent.setup();

        render (
            <MemoryRouter>
                <Header />
            </MemoryRouter>
        );

        const openMenu = screen.getByLabelText("abrir menu");
        const homeNavLink = screen.getByRole("link", { name: "Home" });
        const projectsNavLink = screen.getByRole("link", { name: "Projetos" });

        expect(openMenu).toBeInTheDocument();

        await user.click(openMenu);

        const closeMenu = screen.getByLabelText("fechar menu");

        expect(closeMenu).toBeInTheDocument();
        expect(homeNavLink).toBeInTheDocument();
        expect(projectsNavLink).toBeInTheDocument();
    });
});