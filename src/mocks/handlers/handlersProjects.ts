import { http, HttpResponse }  from "msw";
import type { ConfigProjects } from "../../services/Api";

export const handlersProjects = [
    http.post("http://localhost:5000/projects", async({ request }) => {
        const newProject = (await request.json()) as ConfigProjects;

        const mockResponse = {
            ...newProject,
            id: "idt001"
        }

        return HttpResponse.json(mockResponse, { status: 201 });
    })
];