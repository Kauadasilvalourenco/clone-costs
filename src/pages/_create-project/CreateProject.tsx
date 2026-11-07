import { Typography } from "../../components/typography/Typography";
import { Button } from "../../components/button/Button";
// import components;

import styleCreateProject from "./CreateProject.module.css";
// import css;

export function CreateProject() {
    function fake(e) {
        e.preventDefault();
        console.log("evento chamado!");
    }; // irá sair!

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
                <div>
                    <label htmlFor="name-project" className={styleCreateProject.label}>Nome Projeto:</label>
                    <input type="text" name="" id="name-project" placeholder="exemplo nome" className={styleCreateProject.input}/>
                </div>
                <div>
                    <label htmlFor="budget-project" className={styleCreateProject.label}>Orçamento Projeto:</label>
                    <input type="number" name="" id="budget-project" placeholder="5000" className={styleCreateProject.input}/>
                </div>
                <div>
                    <label htmlFor="categories-project" className={styleCreateProject.label}>Categoria Projeto:</label>
                    <select name="" id="categories-project" className={styleCreateProject.select}>
                        <option value="" hidden>
                            Escolha uma opção
                        </option>

                        <option value="Infraestrutura" className={styleCreateProject.options}>
                            Infraestrutura
                        </option>
                        <option value="Desenvolvimento" className={styleCreateProject.options}>
                            Desenvolvimento
                        </option>
                        <option value="Planejamento" className={styleCreateProject.options}>
                            Planejamento
                        </option>
                        <option value="Design" className={styleCreateProject.options}>
                            Design
                        </option>
                    </select>
                </div>
                <Button
                    onClick={fake}
                >
                    Criar Projeto
                </Button>
            </form>
        </div>
    );
};