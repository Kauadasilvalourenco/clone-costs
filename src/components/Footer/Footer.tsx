import { Typography } from "../typography/Typography";
// import components;

import { FaWhatsapp, FaLinkedinIn } from "react-icons/fa";
// import icons;

import styleFooter from "./Footer.module.css";
// import css;

export function Footer() {
    return (
        <footer
            className={styleFooter.footer}
        >
            <div
                className={styleFooter.conteiner_icons}
            >
                <a 
                    href="https://wa.me/5562998446350" 
                    target="_blank"
                >
                    <FaWhatsapp 
                        className={styleFooter.icons}
                    />
                </a>

                <a 
                    href="https://www.linkedin.com/in/kauã-da-silva-lourenço-1b7a58345?utm_source=share_via&utm_content=profile&utm_medium=member_android" 
                    target="_blank"
                >
                    <FaLinkedinIn 
                        className={styleFooter.icons}
                    />
                </a>
                
            </div>

            <Typography
                tag="h1"
                style={styleFooter.highlight}
            >
                Costs
            </Typography>
        </footer>
    );
};