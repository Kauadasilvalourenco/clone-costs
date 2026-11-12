import { useNavigate } from "react-router-dom";
// import hooks;

import { Typography } from "../../components/typography/Typography";
import { Button } from "../../components/button/Button";
// import components;

import imgHomeMobile from "../../assets/images/imagem_fundo_pq.webp";
import imgHomeTablet from "../../assets/images/imagem_fundo_md.webp";
import imgHomeDesktop from "../../assets/images/imagem_fundo.webp";
// import imgs;

import styleHome from "./Home.module.css";
// import css;

export function Home() {
    const navigate = useNavigate();

    return (
        <div
            className={styleHome.Home}
        >
            <Typography
                tag="h1"
            >
                Bem-vindo ao <Typography tag="span">Costs</Typography>
            </Typography>
            
            <Typography
                tag="p"
            >
                Comece a gerenciar seus projetos agora mesmo!
            </Typography>

            <div
                className="conteiner_button"
            >
                <Button
                    type="click"
                    onClick={() => navigate("/create-project")}
                >
                    Criar Projeto
                </Button>
            </div>
            
            <picture>
                <source media="(min-width: 1280px)" srcSet={imgHomeDesktop} />
                <source media="(min-width: 768px)" srcSet={imgHomeTablet} />
                <img src={imgHomeMobile} alt="imagem fundo costs" />
            </picture>
        </div>
    );
};
