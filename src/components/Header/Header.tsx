import { useState } from "react";
// import hooks;

import { Link } from "react-router";
// import router;

import styleHeader from "./Header.module.css";
// import css;

import { MdMenu, MdClose } from "react-icons/md";
// import icons;

import logoCosts from "../../assets/images/costs_logo.png";
import logoCostsMobile from "../../assets/images/costs_logo_pq.png";
// import imgs;

export function Header() {
    const [menuActive, setMenuActive] = useState(false);

    const toogleMenu = () => {
        setMenuActive(!menuActive);
    };

    return (
        <header
            className={styleHeader.header}
        >
            <nav
                className={styleHeader.conteiner_menu}
            >
                {
                    menuActive === false ? (
                        <MdMenu 
                            onClick={toogleMenu}
                            className={styleHeader.open_menu}
                        />
                    ) : (
                        <MdClose
                            onClick={toogleMenu}
                            className={styleHeader.close_menu}
                        />
                    )
                }

                <ul
                    className={`${styleHeader.list_menu} ${menuActive === true ? styleHeader.active : ""}`}
                    data-testid="menu"
                >
                    <li>
                        <Link 
                            to={"/"} 
                            className={styleHeader.link_pages}>Home
                        </Link>
                    </li>
                    <li>
                        <Link 
                            to={"/projects"}
                            className={styleHeader.link_pages}>Projetos
                        </Link>
                    </li>

                </ul>
            </nav>

            <picture
                className={styleHeader.conteiner_logo}
            >
                <source media="(min-width: 768px)" srcSet={logoCosts} />
                <img src={logoCostsMobile} alt="Logo Costs" data-testid="logo" />
            </picture>

        </header>
    );
};