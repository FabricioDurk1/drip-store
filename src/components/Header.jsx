import { Link } from 'react-router-dom';
import Logomarca from './Logomarca';
import './styles/header.css';

const Header = () => {
    return (
            <>
            <nav className="navbar navbar-expand-lg bg-white header-menu">
                <div className="container">
                    <div className="menu-top w-100">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <a className="navbar-brand" href="#">
                                <Logomarca imagem={"./images/logo.svg"}/>
                            </a>
                            <div className="input-group">
                                <input type="search" className="form-control border-0" placeholder="Pesquisar produtos..." aria-label="Search"/>
                                <span className="input-group-text border-0">
                                    <img src="./images/lupa.svg" alt="Ícone de busca" width="20px" height="20px"/>
                                </span>
                            </div>
                            <ul className="navbar-nav align-items-center" >
                                <li className="nav-item">
                                    <a className="cadastro" href="#">Cadastre-se</a>
                                </li>
                                <li className="nav-item">
                                    <button className="btn" type="submit">Entrar</button>
                                </li>
                                <li className="nav-item">
                                    <img src="./images/cart.svg" alt=""/>
                                </li>
                            </ul>
                        </div>
                        <div className="menu-bottom">
                            <ul className="menu-options navbar-nav" id="navbarSupportedContent">
                                <li className="nav-item"><Link to={"/"}>Home</Link></li>
                                <li className="nav-item"><Link to={"/produtos"}>Produtos</Link></li>
                                <li className="nav-item"><a href="">Categorias</a></li>
                                <li className="nav-item"><a href="">Meus pedidos</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>

         </>
     );
}
 
export default Header;