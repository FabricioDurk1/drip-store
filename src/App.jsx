import React from "react";
import MainCollections from './components/MainCollections';
import SecondaryCollections from './components/SecondaryCollections';
import Cabecalho from './components/Cabecalho';
import productData from "./assets/productlist.json";
import imagesData from './assets/imageslist.json';
import ProductList from './components/ProductList';
import Gallery from "./components/Gallery";
import Section from "./components/Section";
import "primeflex/primeflex.css";
import './App.css';

function App() {
  return (
    <div className="App">
      <Cabecalho/>
      <Gallery imagesList={imagesData}/>
      <MainCollections />
      <SecondaryCollections />
      <Section
        title={"Produtos em alta"}
        link={"https://redirect.link"}
      >
        <ProductList products={productData} />
      </Section>
    </div>
  );
}

export default App;


