import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Footer } from "./Footer";

describe("teste unitário componente Footer", () => {
    it("deve renderizar corretamente o componente Footer", () => {
        render (
            <Footer />
        );

        const componentFooter = screen.getByRole("contentinfo");
        const socialLinks = screen.getAllByRole("link");
        const elementSpan = screen.getByText("Costs");

        expect(componentFooter).toBeInTheDocument();
        expect(socialLinks[0]).toHaveAttribute("href", "https://wa.me/5562998446350");
        expect(socialLinks[1]).toHaveAttribute("href", "https://www.linkedin.com/in/kauã-da-silva-lourenço-1b7a58345?utm_source=share_via&utm_content=profile&utm_medium=member_android");
        expect(elementSpan).toBeInTheDocument();
    });
});