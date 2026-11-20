type ConfigRequest = {
    endpoint: string,
    options?: RequestInit
};

export type ConfigCategories = {
    id: number,
    name: string
};

export type ConfigProjects = {
    id: number | string,
    name_project: string,
    budget_project: number,
    category_project: string
}

const baseURL = "http://localhost:5000";

const request = async <T>({ endpoint, options = {}}: ConfigRequest): Promise<T> => {
    const response = await fetch(`${baseURL}${endpoint}`, {
        ...options,

        headers: {
            "Content-Type": "application/json",
            ...options.headers
        }
    });

    if (!response.ok) {
        throw new Error(`Erro na API: ${response.status}`, {
            cause: response.status
        });
    };

    return await response.json();
};

export const getErrorApi = (error: unknown) => {
    let messageError;

    switch (error) {
        case 400:
            messageError = "Dados incompletos/Incorretos!";
            break;
        case 404:
            messageError = "Recurso não encontrado no Servidor!";
            break
        case 500:
            messageError = "Falha interna no Servidor!";
            break
        case 503:
            messageError = "Servidor indisponível no momento!";
            break
        default:
            messageError = `Ocorreu um erro inesperado: ${error}`
            break;
    };

    return messageError;
};

// GET
export const getCategories = () => {
    return request<ConfigCategories[]>({ endpoint: "/categories" });
};

// POST
export const createProjects = (data: Omit<ConfigProjects, "id">) => {
    return request<ConfigProjects[]>({
        endpoint: "/projects",
        options: {
            method: "POST",
            body: JSON.stringify(data)
        }
    });
};