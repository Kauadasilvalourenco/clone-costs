import { http, HttpResponse } from "msw";
import { mockCategories } from "../fixtures/FixtureCategories";

http.get("http://localhost:5000/categories", () => {
    return HttpResponse.json(mockCategories);
});