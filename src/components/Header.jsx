import Logomarca from './Logomarca';
import './styles/header.css';

const Header = () => {
    return (

                // anterior
            // <nav className='bg-white'>
            //     <div className="header-menu">
            //         <a className="navbar-brand" href="#">
            //             <Logomarca imagem={"./images/logo.svg"}/>
            //         </a>
            //         <div className="input-group">
            //             <input type="search" className="form-control border-0" placeholder="Pesquisar produtos..." aria-label="Search"/>
            //             <span className="input-group-text border-0">
            //                 <img src="./images/lupa.svg" alt="Ícone de busca" width="20px" height="20px"/>
            //             </span>
            //         </div>
            //         <a className="cadastro" href="#">Cadastre-se</a>
            //         <button className="btn" type="submit">Entrar</button>
            //         <img src="./images/cart.svg" alt=""/>
            //     </div>
            //     <div className="menu">
            //         <ul className="menu-options">
            //             <li><a href="">Home</a></li>
            //             <li><a href="">Produtos</a></li>
            //             <li><a href="">Categorias</a></li>
            //             <li><a href="">Meus pedidos</a></li>
            //         </ul>

            //     </div>
            // </nav>

            <nav className="navbar navbar-expand-lg bg-white header-menu">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <Logomarca imagem={"./images/logo.svg"}/>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <div className="input-group">
                            <input type="search" className="form-control border-0" placeholder="Pesquisar produtos..." aria-label="Search"/>
                            <span className="input-group-text border-0">
                                <img src="./images/lupa.svg" alt="Ícone de busca" width="20px" height="20px"/>
                            </span>
                        </div>
                        <ul className="navbar-nav m-0">
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
                </div>
            </nav>


     );
}
 
export default Header;