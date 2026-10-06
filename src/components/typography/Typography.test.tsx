import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { Typography } from "./Typography";

describe("teste unitário Typography", () => {
    it("deve renderizar a tag h1 com texto correto", () => {
        render(
            <MemoryRouter>
                <Typography
                    tag="h1"
                >
                    Texto Teste
                </Typography>
            </MemoryRouter>
        );

        const title = screen.getByText("Texto Teste");

        expect(title).toBeInTheDocument();
        expect(title.tagName).toEqual("H1");
        expect(title.className).toMatch(/h1/);
    });
});