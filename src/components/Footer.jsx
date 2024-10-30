import './Footer.css';
import Logomarca from './Logomarca'; // Importa o componente Logomarca
import FacebookIcon from '../assets/facebook.svg';
import InstagramIcon from '../assets/instagram.svg';
import TwitterIcon from '../assets/twitter.svg';

export const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  const informationLinks = [
    { title: "Sobre Drip Store", url: "/about" },
    { title: "Segurança", url: "/security" },
    { title: "Wishlist", url: "/wishlist" },
    { title: "Blog", url: "/blog" },
    { title: "Trabalhe conosco", url: "/careers" },
    { title: "Meus Pedidos", url: "/orders" }
  ];

  const categoryLinks = [
    { title: "Camisetas", url: "/category/camisetas" },
    { title: "Calças", url: "/category/calcas" },
    { title: "Bonés", url: "/category/bones" },
    { title: "Headphones", url: "/category/headphones" },
    { title: "Tênis", url: "/category/tenis" }
  ];

  const contactInfo = [
    { title: "Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE", url: "#" },
    { title: "(85) 3051-3411", url: "#" }
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-main">
          <Logomarca />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore.</p>
          <div className="social-icons">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <img src={FacebookIcon} alt="Facebook" />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <img src={InstagramIcon} alt="Instagram" />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <img src={TwitterIcon} alt="Twitter" />
            </a>
          </div>
        </div>

        <div className="footer-links">
          <div className="links-section">
            <h4>Informações</h4>
            <ul>
              {informationLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.url}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="links-section">
            <h4>Categorias</h4>
            <ul>
              {categoryLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.url}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="links-section">
            <h4>Contato</h4>
            <ul>
              {contactInfo.map((info, index) => (
                <li key={index}>
                  <a href={info.url}>{info.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <hr />

      <p>© {year} Digital Store</p>
    </footer>
  );
};

export default Footer;
