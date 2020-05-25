import React from 'react';

const Footer = () => {
    const linkedin = "https://www.linkedin.com/in/benjaminchua95/";
    const github = "https://github.com/BenjaminChua";
    const mail = "mailto:benjaminchua95@hotmail.com";

    return (
        <div className="footer pt-5 pb-3">
            <div className="footer-brand"> BEN </div>
            <hr className="footer-divider"/>
            <div className="pt-1 pb-5">
                <a className="ui icon contact pr-2" href={linkedin}>
                    <i className="linkedin big middle aligned icon" aria-hidden/>
                </a>
                <a className="ui icon contact px-2" href={github}>
                    <i className="github big middle aligned icon" aria-hidden/>
                </a>
                <a className="ui icon contact pl-2" href={mail}>
                    <i className="mail big middle aligned icon" aria-hidden/>
                </a>
            </div>
            <div> Benjamin Chua © 2020 </div>
        </div>
    );
};

export default Footer;