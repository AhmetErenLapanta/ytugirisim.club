const Footer = () => {
    return (
        <footer className="footer">
            <p className="footer__title">YTU Girişimcilik Kulübü</p>
            <div className="footer__social">
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.instagram.com/ytugirisim/"
                    className="footer__icon"
                >
                    <i className="bx bxl-instagram" />
                </a>
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://twitter.com/ytugirisim"
                    className="footer__icon"
                >
                    <i className="bx bxl-twitter" />
                </a>
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.youtube.com/c/YT%C3%9CGiri%C5%9FimcilikKul%C3%BCb%C3%BC"
                    className="footer__icon"
                >
                    <i className="bx bxl-youtube" />
                </a>
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.linkedin.com/company/ytugirisim/"
                    className="footer__icon"
                >
                    <i className="bx bxl-linkedin" />
                </a>
            </div>
            <p className="footer__copy">
                Developed by&nbsp;
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.linkedin.com/in/ahmet-eren-lapanta/"
                >
                    Technical Team Leader of the Club
                </a>
                <br />
                <br />
                ©ytugirisim.club. All Rights Reserved.
            </p>
        </footer>
    );
};

export default Footer;
