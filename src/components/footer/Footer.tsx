import { Typography } from "../typography/Typography";
// import css;

import { FaWhatsapp, FaLinkedinIn } from "react-icons/fa";
// import icons;

import styleFooter from "./Footer.module.css";
// import css;

export function Footer() {
    return (
        <footer
            className={styleFooter.Footer}
        >
            <div
                className={styleFooter.conteiner_icons}
            >
                <a 
                    href="https://wa.me/5562998446350" 
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Contato Whatsapp"
                >
                    <FaWhatsapp className={styleFooter.icons}/>
                </a>
                <a 
                    href="https://www.linkedin.com/in/kauã-da-silva-lourenço-1b7a58345?utm_source=share_via&utm_content=profile&utm_medium=member_android" 
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Contato Linkedin"
                >
                    <FaLinkedinIn className={styleFooter.icons}/>
                </a>
            </div>

            <Typography
                tag="span"
                style={styleFooter.span}
            >
                Costs
            </Typography>
        </footer>
    )
}