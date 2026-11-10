import type { MouseEvent } from "react";
// import types;

import { Typography } from "../../components/typography/Typography";
import { Label } from "../../components/label/Label";
import { Input } from "../../components/input/Input";
import { Select } from "../../components/select/Select";
import { Button } from "../../components/button/Button";
// import components;

import styleCreateProject from "./CreateProject.module.css";
// import css;

export function CreateProject() {
    function fakeSubmit(e: MouseEvent<HTMLButtonElement>) {
        e.preventDefault();
        console.log("evento chamado!");
    }; // irá sair!

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

            <form
                className={styleCreateProject.form}
            >
                <div className={styleCreateProject.conteiner_fields}>
                    <Label
                        htmlFor="name-project"
                    >
                        Nome Projeto:
                    </Label>
                    <Input 
                        type="text"
                        name="name-project"
                        id="name-project"
                        placeholder="Exemplo: Criar Frontend"
                    />
                </div>
                <div className={styleCreateProject.conteiner_fields}>
                    <Label
                        htmlFor="budget-project"
                    >
                        Orçamento Projeto:
                    </Label>
                    <Input 
                        type="number"
                        name="budget-project"
                        id="budget-project"
                        placeholder="Exemplo: R$5000,00"
                    />
                </div>
                <div className={styleCreateProject.conteiner_fields}>
                    <Label
                        htmlFor="categories-project"
                    >
                        Categoria Projeto:
                    </Label>
                    <Select 
                        name="categories-project"
                        id="categories-project"
                        options={fakeCategories}
                    />
                </div>
                <Button
                    onClick={fakeSubmit}
                >
                    Criar Projeto
                </Button>
            </form>
        </div>
    );
};