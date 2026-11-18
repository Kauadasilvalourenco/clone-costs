import { setupServer } from "msw/node";
import { handlersCategories } from "./handlers/HandlersCategories";

export const server = setupServer(
    ...handlersCategories
);