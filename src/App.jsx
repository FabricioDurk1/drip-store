import MainCollections from './components/MainCollections';
import SecondaryCollections from './components/SecondaryCollections';
import Header from './components/Header';
import productData from "./assets/productlist.json";
import imagesData from './assets/imageslist.json';
import ProductList from './components/ProductList';
import Gallery from "./components/Gallery";
import Section from "./components/Section";
import "primeflex/primeflex.css";
import Footer from './components/Footer';
import './components/Footer.css';
import './App.css';
import SpecialOffer from './components/SpecialOffer';



const App = () =>{
  return (
    <div className="App">
      <Header/>
      <Gallery
        width={1440}
        height={681}
        imagesList={imagesData}/>
      <MainCollections />
      <SecondaryCollections />
      <Section
        title={"Produtos em alta"}
        link={"https://redirect.link"}
      >
        <ProductList products={productData} />
      </Section>
      <SpecialOffer/>
      <Footer/>
    </div>
  );
}

export default App;


