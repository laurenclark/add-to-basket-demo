/// <reference types="styled-components/cssprop" />
import { FC } from "react";
import * as _ from "styled-components/cssprop";

const footerStyles = `
    bottom: 0;
`;

const Footer: FC = () => {
    return (
        <footer css={footerStyles}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path
                    fill="#FFD326"
                    fillOpacity="1"
                    d="M0,32L30,37.3C60,43,120,53,180,53.3C240,53,300,43,360,64C420,85,480,139,540,144C600,149,660,107,720,128C780,149,840,235,900,256C960,277,1020,235,1080,197.3C1140,160,1200,128,1260,117.3C1320,107,1380,117,1410,122.7L1440,128L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path>
            </svg>
        </footer>
    );
};

export default Footer;
