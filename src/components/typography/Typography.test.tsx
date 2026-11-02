import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Typography } from "./Typography";

describe("teste unitário componente Typography", () => {
    it("deve renderizar corretamente o elemento html específicado na tag do componente", () => {
        render (
            <div>
                <Typography
                    tag="h1"
                >
                    Título Teste
                </Typography>

                <Typography
                    tag="p"
                    style="teste"
                >
                    Parágrafo teste
                </Typography>
            </div>
        );

        const elementTypographyTitle = screen.getByRole("heading", { name: "Título Teste" });
        const elementTypographyParagraph = screen.getByText("Parágrafo teste");

        expect(elementTypographyTitle).toBeInTheDocument();
        expect(elementTypographyParagraph).toBeInTheDocument();
        expect(elementTypographyTitle.tagName).toEqual("H1");
        expect(elementTypographyParagraph.tagName).toEqual("P");
        expect(elementTypographyParagraph).toHaveClass("teste");
    });
});