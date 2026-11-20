import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import hooks;

import { Typography } from "../../components/typography/Typography";
import { Form } from "../../components/form/Form";
// import components;

import { CreateProjectSchema } from "../../schemas/FormSchema";
// import schemas;

import { getCategories, createProjects, getErrorApi } from "../../services/Api";
// import api;

import styleCreateProject from "./CreateProject.module.css";
// import css;

export function CreateProject() {
    const queryClient = useQueryClient();
    const navigate = useNavigate();

    const {
        data: categories = [],
        isLoading,
        isError,
        error
    } = useQuery({
        queryKey: ["categories"],
        queryFn: getCategories,
        retry: 3,
        retryDelay: 1500,
        staleTime: 60 * 5 * 1000,
    });

    useEffect(() => {
        if (isError === true) {
            console.error(`Erro na requisição das categories:`, error.stack);
            getErrorApi(error.cause)
        }
    }, [isError, error]);


    const {
        mutate
    } = useMutation({
        mutationKey: ["posts"],
        mutationFn: createProjects,
        
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["projects"]
            });
            console.log("Projeto criado com sucesso!");
            navigate("/projects");
        },

        onError: (error) => {
            console.error(`Erro ao criar Projeto`, error.stack);
            getErrorApi(error.cause);
        }
    });

    return (
        <div
            className={styleCreateProject.CreateProject}
        >
            <Typography
                tag="h1"
            >
                Criar Projeto
            </Typography>

            <Typography
                tag="p"
            >
                Crie seu projeto para depois adicionar serviços!
            </Typography>

            <Form 
                fieldsConfig={CreateProjectSchema}
                options={categories}
                btnText="Criar Projeto"
                onSubmit={mutate}
                isLoading={isLoading}
            />
        </div>
    );
};