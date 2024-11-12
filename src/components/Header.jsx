import { Link, useLocation } from 'react-router-dom';
import Logomarca from './Logomarca';
import styles from './styles/header.module.css';

const Header = () => {
    const location = useLocation();

    return (
            <>
            <nav className={`navbar navbar-expand-lg bg-white ${styles.headerMenu}`}>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                <div className={styles.menuTop}>
                    <div className={styles.menuTopOptions}>
                        <a className="navbar-brand" href="#">
                            <Logomarca imagem={"./images/logo.svg"}/>
                        </a>
                        <div className={`input-group ${styles.searchGroup}`}>
                            <input type="search" className={`form-control border-0 ${styles.searchInput}`} placeholder="Pesquisar produtos..." aria-label="Search"/>
                            <span className="input-group-text border-0">
                                <img src="./images/lupa.svg" alt="Ícone de busca" width="20px" height="20px"/>
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
                                <img src="./images/cart.svg" alt=""/>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={styles.menuBottom}>
                    <ul className={styles.menuBottomOptions} id="navbarSupportedContent">
                        <li className={`nav-item ${location.pathname === "/" ? "active" : ""}`}><Link to={"/"}>Home</Link></li>
                        <li className={`nav-item ${location.pathname === "/produtos" ? "active" : ""}`}><Link to={"/produtos"}>Produtos</Link></li>
                        <li className="nav-item"><a href="">Categorias</a></li>
                        <li className="nav-item"><a href="">Meus pedidos</a></li>
                    </ul>
                </div>
            </nav>

         </>
     );
}
 
export default Header;