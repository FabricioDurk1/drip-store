import { Link, useLocation } from 'react-router-dom';
import React, { useState } from 'react';
import Logomarca from './Logomarca';
import styles from './styles/header.module.css';

const Header = () => {
    const location = useLocation();
    const [isActive, setIsActive] = useState(false);

    const handleToggleMenu = () => {
        setIsActive(!isActive);
    };

    return (
        <>
        <nav className={`${styles.headerMenu} ${styles.navBar}`} >
            <div className={`${styles.menuTop}`}>
                <div className={`${styles.mobileMenu} ${isActive ? styles.active : ''}`} onClick={handleToggleMenu}>
                        <div className={styles.line1}></div>
                        <div className={styles.line2}></div>
                        <div className={styles.line3}></div>
                </div>
                <a className="navbar-brand" href="#">
                    <Logomarca imagem={"/images/logo.svg"} />
                </a>
                <div className={`input-group ${styles.searchGroup}`}>
                    <input
                        type="search"
                        className={`form-control border-0 ${styles.searchInput}`}
                        placeholder="Pesquisar produtos..."
                        aria-label="Search"
                    />
                    <span className="input-group-text border-0">
                        <button className='btn m-0 p-0'>
                                <img src="/images/lupa.svg" alt="Ícone de busca" width="20px" height="20px" />
                        </button>
                    </span>
                </div>
                <ul className={styles.menuTopLinks}>
                    <li className="nav-item">
                        <a className={styles.cadastro} href="#">Cadastre-se</a>
                    </li>
                    <li className="nav-item">
                        <button className={`btn ${styles.btnSubmit}`} type="submit">Entrar</button>
                    </li>
                    <li className="nav-item">
                        <img src="/images/cart.svg" alt="" />
                    </li>
                </ul>
            </div>
            <div className={`${styles.menuBottom}`}>
                <ul className={`${styles.navList} ${isActive ? styles.active : ''}`}>
                    <li className={`${location.pathname === "/" ? styles.active : ""}`}>
                        <Link to={"/"} className={styles.navLink}>Home</Link>
                    </li>
                    <li className={`${location.pathname === "/produtos" ? styles.active : ""}`}>
                        <Link to={"/produtos"} className={styles.navLink}>Produtos</Link>
                    </li>
                    <li className={`${location.pathname === "/categorias" ? styles.active : ""}`}>
                        <Link to={"/"} className={styles.navLink}>Categorias</Link>
                    </li>
                    <li className={`${location.pathname === "/pedidos" ? styles.active : ""}`}>
                        <Link to={"/"} className={styles.navLink}>Meus pedidos</Link>
                    </li>
                </ul>
            </div>
        </nav>
        </>
    );
}
 
export default Header;