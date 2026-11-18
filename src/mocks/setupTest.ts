import "@testing-library/jest-dom/vitest";
import "@testing-library/react";
import "@testing-library/user-event";

import { beforeAll, afterEach, afterAll } from "vitest";
import { server } from "./server";

beforeAll(() => {
    server.listen();
});

afterEach(() => {
    server.resetHandlers();
});

afterAll(() => {
    server.close();
});