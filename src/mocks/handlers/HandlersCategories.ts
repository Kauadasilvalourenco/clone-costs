import { http, HttpResponse } from "msw";
import { mockCategories } from "../fixtures/FixtureCategories";

export const handlersCategories = [
    http.get("http://localhost:5000/categories", () => {
        const mockResponse = mockCategories;

        return HttpResponse.json(mockResponse);
    })
];