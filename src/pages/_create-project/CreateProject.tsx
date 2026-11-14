import { Typography } from "../../components/typography/Typography";
import { Form } from "../../components/form/Form";
// import components;

import { CreateProjectSchema } from "../../schemas/FormSchema";
// import schemas;

import data from "../../../db.json";
// import data;

import styleCreateProject from "./CreateProject.module.css";
// import css;

export function CreateProject() {

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
                options={data.categories}
                btnText="Criar Projeto"
            />
        </div>
    );
};