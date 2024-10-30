import Logomarca from './Logomarca';
import './styles/header.css';

const Header = () => {
    return (
            <nav className='bg-white'>
                <div className="header-menu">
                    <a className="navbar-brand" href="#">
                        <Logomarca imagem={"./images/logo.svg"}/>
                    </a>
                    <div className="input-group">
                        <input type="search" className="form-control border-0" placeholder="Pesquisar produtos..." aria-label="Search"/>
                        <span className="input-group-text border-0">
                            <img src="./images/lupa.svg" alt="Ícone de busca" width="20px" height="20px"/>
                        </span>
                    </div>
                    <a className="cadastro" href="#">Cadastre-se</a>
                    <button className="btn" type="submit">Entrar</button>
                    <img src="./images/cart.svg" alt=""/>

                </div>
                <div className="menu">
                    <ul className="menu-options">
                        <li><a href="">Home</a></li>
                        <li><a href="">Produtos</a></li>
                        <li><a href="">Categorias</a></li>
                        <li><a href="">Meus pedidos</a></li>
                    </ul>

                </div>
            </nav>
     );
}
 
export default Header;