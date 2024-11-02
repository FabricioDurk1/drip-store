import React from 'react';
import Section from '../components/Section';
import 'bootstrap/dist/css/bootstrap.min.css';
import SecondaryCollections from '../components/SecondaryCollections';
import productData from "../assets/productlist.json";
import imagesData from '../assets/imageslist.json';
import ProductList from '../components/ProductList';
import Gallery from "../components/Gallery";
import SpecialOffer from '../components/SpecialOffer';
import MainCollections from '../components/MainCollections';

const HomePage = () => {
  return (
    <>
      <Gallery
        width={1440}
        height={681}
        imagesList={imagesData}/>
      <MainCollections/>
      <SecondaryCollections/>
      <Section
        title={"Produtos em alta"}
        link={"https://redirect.link"}
      >
        <ProductList products={productData} />
      </Section>
      <SpecialOffer/>
    </>
    // <div className="homepage">
    //   <Section title="Coleções em destaque" titleAlign="center">
    //     <img src="../public/collection-1.png" alt="Novo drop Supreme" />
    //     <img src="../public/collection-2.png" alt="Coleção Adidas" />
    //     <img src="../public/collection-3.png" alt="Novo Beats Bass" />
    //   </Section>
    // </div>
  );
};

export default HomePage;
