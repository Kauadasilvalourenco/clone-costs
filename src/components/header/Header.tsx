import { useState } from "react";

import { Link } from "react-router-dom";
// import react-router;

import imgLogoMobile from "../../assets/images/costs_logo_pq.webp";
import imgLogoDesktop from "../../assets/images/costs_logo.webp";
// import img;

import { MdMenu, MdClose, MdHome, MdAssignment } from "react-icons/md";
// import icons;

import styleHeader from "./Header.module.css";
// import css;

export function Header() {
    const [menuActive, setMenuActive] = useState(false);

    const toogleMenu = () => {
        setMenuActive(!menuActive);
    };

    return (
        <header
            className={styleHeader.Header}
        >
            <nav
                className={styleHeader.navigation}
            >

                {
                    menuActive ? (
                        <MdClose
                            className={styleHeader.close_menu}
                            onClick={toogleMenu}
                        />
                    ) : (
                        <MdMenu
                            className={styleHeader.open_menu}
                            onClick={toogleMenu}
                        />
                    )
                }

                <ul
                    className={`${styleHeader.menu} ${menuActive ? styleHeader.active : ""}`}
                >
                    <li>
                        <Link 
                            to={"/"} 
                            className={styleHeader.nav_link}
                        > 
                            <MdHome className={styleHeader.menu_icons} /> Home
                        </Link>
                    </li>
                    <li>
                        <Link 
                            to={"/projects"} 
                            className={styleHeader.nav_link}
                        > 
                            <MdAssignment className={styleHeader.menu_icons} /> Projetos
                        </Link>
                    </li>
                </ul>
                
            </nav>

            <picture
                className={styleHeader.conteiner_img}
            >
                <source media="(min-width: 1281px)" srcSet={imgLogoDesktop} />
                <img src={imgLogoMobile} alt="logo costs" />
            </picture>
        </header>
    )
}