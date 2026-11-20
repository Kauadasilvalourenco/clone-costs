import { setupServer } from "msw/node";
import { handlersCategories } from "./handlers/HandlersCategories";
import { handlersProjects } from "./handlers/handlersProjects";

export const server = setupServer(
    ...handlersCategories,
    ...handlersProjects
);