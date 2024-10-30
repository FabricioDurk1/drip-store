import React from 'react';
import './Footer.css';
import Logomarca from './Logomarca'; // Importa o componente Logomarca
import InformationSection from './InformationSection'; // Importa o componente InformationSection
import FacebookIcon from '../assets/facebook.svg';
import InstagramIcon from '../assets/instagram.svg';
import TwitterIcon from '../assets/twitter.svg';

const Footer = () => {
  const infoLinks = [
    { text: 'Sobre Drip Store', link: '/about' },
    { text: 'Segurança', link: '/security' },
    { text: 'Wishlist', link: '/wishlist' },
    { text: 'Blog', link: '/blog' },
    { text: 'Trabalhe conosco', link: '/careers' },
    { text: 'Meus Pedidos', link: '/orders' },
  ];

  const categoryLinks = [
    { text: 'Camisetas', link: '/category/camisetas' },
    { text: 'Calças', link: '/category/calcas' },
    { text: 'Bonés', link: '/category/bones' },
    { text: 'Headphones', link: '/category/headphones' },
    { text: 'Tênis', link: '/category/tenis' },
  ];

  const contactInfo = [
    { text: 'Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161', link: '#' },
    { text: '(85) 3051-3411', link: '#' },
  ];

  return (
    <footer className="footer">
      <div className="footer-logo-description">
        <Logomarca imagem="/images/logo-footer.svg" />
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

      <div className="footer-sections">
        <InformationSection title="Informação" informations={infoLinks} />
        <InformationSection title="Categorias" informations={categoryLinks} />
        <InformationSection title="Contato" informations={contactInfo} />
      </div>

      <hr />

      <p>© 2024 Digital Store</p>
    </footer>
  );
};

export default Footer;






