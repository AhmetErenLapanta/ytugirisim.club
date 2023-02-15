import { useState } from "react";

const Nav = () => {
    // const showMenu = (toggleId, navId) => {
    //     const toggle = document.getElementById(toggleId),
    //         nav = document.getElementById(navId);

    //     if (toggle && nav) {
    //         toggle.addEventListener("click", () => {
    //             nav.classList.toggle("show");
    //         });
    //     }
    // };
    // showMenu("nav-toggle", "nav-menu");

    const [showMenu, setShowMenu] = useState(false);

    return (
        <header className="l-header">
            <nav className="nav bd-grid">
                <img
                    src="/perfil.png"
                    href="#home"
                    className="nav__logo"
                    alt=""
                />
                <div
                    className={showMenu ? "nav__menu show" : "nav__menu"}
                    id="nav-menu"
                >
                    <ul className="nav__list">
                        <li className="nav__item">
                            <a href="#home" className="nav__link active">
                                Home
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#about" className="nav__link">
                                Hakkımızda
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#work" className="nav__link">
                                Etkinlikler
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#deps" className="nav__link">
                                Departmanlar
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#contact" className="nav__link">
                                Form
                            </a>
                        </li>
                    </ul>
                </div>
                <div
                    className="nav__toggle show"
                    id="nav-toggle"
                    onClick={() => setShowMenu(!showMenu)}
                >
                    <i className="bx bx-menu" />
                </div>
            </nav>
        </header>
    );
};
export default Nav;
