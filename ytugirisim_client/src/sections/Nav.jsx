import { useState } from "react";

const Nav = () => {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <header className="l-header">
            <nav className="nav bd-grid">
                <a href="/">
                    <img src="/perfil.png" className="nav__logo" alt="" />
                </a>
                <div
                    className={showMenu ? "nav__menu show" : "nav__menu"}
                    id="nav-menu"
                >
                    <ul
                        className="nav__list"
                        onClick={() => setShowMenu(!showMenu)}
                    >
                        <li className="nav__item">
                            <a href="/" className="nav__link active">
                                Home
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#about" className="nav__link">
                                Hakkımızda
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="/blogs" className="nav__link">
                                Bloglar
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="/#work" className="nav__link">
                                Etkinlikler
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="/members" className="nav__link">
                                Ekip
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="/#contact" className="nav__link">
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
