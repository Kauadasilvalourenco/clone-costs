import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { Footer } from "./Footer";

describe("Teste unitário Footer", () => {
    it("deve renderizar corretamente o footer", () => {
        render(
            <MemoryRouter>
                <Footer />
            </MemoryRouter>
        );

        const whatsappIcon = screen.getByTestId("whatsapp-icon");
        const linkedinIcon = screen.getByTestId("linkedin-icon");

        expect(whatsappIcon).toBeInTheDocument();
        expect(linkedinIcon).toBeInTheDocument();
    });

    it("icone do whatsapp e linkedin deve conter um link para perfil do dev", () => {

        render(
            <MemoryRouter>
                <Footer />
            </MemoryRouter>
        );

        const whatsappIcon = screen.getByTestId("whatsapp-icon");
        const linkedinIcon = screen.getByTestId("linkedin-icon");
        
        expect(whatsappIcon).toHaveAttribute("href", "https://wa.me/5562998446350");
        expect(linkedinIcon).toHaveAttribute("href", "https://www.linkedin.com/in/kauã-da-silva-lourenço-1b7a58345?utm_source=share_via&utm_content=profile&utm_medium=member_android")
    });
});