import { describe, it, expect } from "vitest";
import { mockCategories } from "../mocks/fixtures/FixtureCategories";
import { http, HttpResponse } from "msw";
import { server } from "../mocks/server";
import { getCategories, getErrorApi } from "./Api";

describe("teste integração Api.ts", () => {
    it("deve retornar a lista de categorias mockadas com sucesso", async() => {
        const response = await getCategories();

        expect(response).toEqual(mockCategories);
        expect(response).toHaveLength(4);
    });

    it("deve retornar erro padrão para categories não encontradas (404)", async() => {
        server.use(
            http.get("http://localhost:5000/categories", () => {
                return HttpResponse.json(null, { status: 404 });
            })
        );

        try {
            await getCategories();
        } catch (error) {
            const messageError = getErrorApi((error as Error).cause);
            expect(messageError).toBe("Recurso não encontrado no Servidor!");
        };
    });
});