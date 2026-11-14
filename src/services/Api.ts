type ConfigRequest = {
    endpoint: string,
    options?: RequestInit
};

export type ConfigCategories = {
    id: number,
    name: string
};

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
            messageError = "Dados incompletos!";
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

export const getCategories = () => {
    return request<ConfigCategories[]>({ endpoint: "/categories" });
};