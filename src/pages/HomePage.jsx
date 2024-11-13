import React from 'react';
import Section from '../components/Section';
import SecondaryCollections from '../components/SecondaryCollections';
import productData from "../assets/productlist.json";
import imagesData from '../assets/imageslist.json';
import ProductList from '../components/ProductList';
import Gallery from "../components/Gallery";
import SpecialOffer from '../components/SpecialOffer';
import MainCollections from '../components/MainCollections';
import styles from '../components/styles/homePage.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const HomePage = () => {
  return (
    <>
      <div className={styles.bannerCarousel}>
        <div className="d-flex align-items-center">
          <div className={styles.textContent}>
              <h1 className={styles.titleText}>Melhores ofertas personalizadas</h1>
              <h2 className={styles.promoText}>Queima de<br/><span>stoque Nike🔥</span></h2>
              <p className={`${styles.descriptionText}`}>Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.</p>
              <button className={`${styles.seeOffer} btn`}>Ver Ofertas</button>
          </div>
        </div>
        <Gallery
          width={1440}
          height={681}
          imagesList={imagesData}/>
      </div>
      <MainCollections/>
      <SecondaryCollections/>
      <Section
        title={"Produtos em alta"}
        link={"https://redirect.link"}
      >
        <ProductList products={productData} limit={8} />
      </Section>
      <SpecialOffer/>
    </>
  );
};

export default HomePage;
