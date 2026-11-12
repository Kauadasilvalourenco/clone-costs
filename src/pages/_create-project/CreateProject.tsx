import { Typography } from "../../components/typography/Typography";
import { Form } from "../../components/form/Form";
// import components;

import { CreateProjectSchema } from "../../schemas/FormSchema";
// import schemas;

import styleCreateProject from "./CreateProject.module.css";
// import css;

export function CreateProject() {
    const fakeCategories = [
        { id: 1, name: "Infraestrutura" },
        { id: 2, name: "Desenvolvimento" },
        { id: 3, name: "Planejamento" },
        { id: 4, name: "Design" },
    ];

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
                options={fakeCategories}
                btnText="Criar Projeto"
            />
        </div>
    );
};