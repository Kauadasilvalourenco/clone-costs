import { useNavigate } from "react-router";

import { Typography } from "../../components/typography/Typography";
import { Button } from "../../components/button/Button";
// import components;

import styleHome from "./Home.module.css";
// import css;

import backgroundImageHome from "../../assets/images/imagem_fundo.png";
import backgroundImageHomeTablet from "../../assets/images/imagem_fundo_md.png";
import backgroundImageHomeMobile from "../../assets/images/imagem_fundo_pq.png";
// import imgs;

export function Home() {
    const navigate = useNavigate();

    return (
        <div
            className={styleHome.conteiner_home}
        >
            <Typography
                tag="h1"
            >
                Bem-vindo ao Costs
            </Typography>

            <Typography
                tag="p"
            >
                Comece a gerenciar os seus projetos agora mesmo!
            </Typography>

            <div>
                <Button
                    onClick={() => navigate("/create-project")}
                >
                    Criar Projeto
                </Button>
            </div>

            <picture
                className={styleHome.conteiner_img}
            >
                <source media="(min-width: 1281px)" srcSet={backgroundImageHome} />
                <source media="(min-width: 769px)" srcSet={backgroundImageHomeTablet} />
                <img src={backgroundImageHomeMobile} alt="imagem-fundo-tela-home" />
            </picture>
        </div>
    )
}