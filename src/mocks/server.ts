import { setupServer } from "msw/node";
import { handlersCategories } from "./handlers/HandlersCategories";
import { handlersProjects } from "./handlers/HandlersProjects";

export const server = setupServer(
    ...handlersCategories,
    ...handlersProjects
);