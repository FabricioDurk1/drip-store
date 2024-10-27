import './styles/cabecalho.css';

const Cabecalho = () => {
    return ( 
        <nav className=" navbar-expand-lg bg-white">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="header">
                            <a className="navbar-brand" href="#"><img src="./images/logo.svg" alt="logo"/></a>
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
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <ul className="nav-menu">
                            <li><a href="">Home</a></li>
                            <li><a href="">Produtos</a></li>
                            <li><a href="">Categorias</a></li>
                            <li><a href="">Meus pedidos</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            
        </nav>
     );
}
 
export default Cabecalho;