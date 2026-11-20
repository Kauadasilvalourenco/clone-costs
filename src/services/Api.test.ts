import { describe, it, expect } from "vitest";
import { mockCategories } from "../mocks/fixtures/FixtureCategories";
import { http, HttpResponse } from "msw";
import { server } from "../mocks/server";
import { getCategories, getErrorApi, createProjects } from "./Api";

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
            expect(messageError).toEqual("Recurso não encontrado no Servidor!");
        };
    });

    it("deve retornar o projeto criado", async() => {
        const newProject = {
            name_project: "Teste",
            budget_project: 5000,
            category_project: "Desenvolvimento"
        };

        const response = await createProjects(newProject);

        expect(response).toEqual({
            ...newProject,
            id: "idt001"
        });
    });

    it("deve retornar erro 400 para tentativa falha em criar um novo projeto com dados vazios e renderizar a mensagem de erro correspondente ao status", async() => {
        const newProject = {
            name_project: "",
            budget_project: 0,
            category_project: ""
        };

        server.use(
            http.post("http://localhost:5000/projects", () => {
                return HttpResponse.json(null, { status: 400 });
            })
        );

        try {
            await createProjects(newProject);
        } catch (error) {
            const messageError = getErrorApi((error as Error).cause);
            expect(messageError).toEqual("Dados incompletos/Incorretos!");
        };
    });
});