import imgHomeMobile from "../../assets/images/imagem_fundo_pq.webp";
import imgHomeTablet from "../../assets/images/imagem_fundo_md.webp";
import imgHomeDesktop from "../../assets/images/imagem_fundo.webp";
// import imgs;

import styleHome from "./Home.module.css";
// import css;

export function Home() {
    return (
        <div
            className={styleHome.Home}
        >
            <h1 className={styleHome.h1}>Bem-vindo ao Costs</h1>
            <p className={styleHome.p}>Comece a gerenciar seus projetos agora mesmo!</p>

            <div
                className="conteiner_button"
            >
                <button className={styleHome.button}>Criar Projeto</button>
            </div>
            
            <picture
                className={styleHome.conteiner_img}
            >
                <source media="(min-width: 1280px)" srcSet={imgHomeDesktop} />
                <source media="(min-width: 768px)" srcSet={imgHomeTablet} />
                <img src={imgHomeMobile} alt="imagem fundo costs" />
            </picture>
        </div>
    )
}