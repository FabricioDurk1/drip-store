import Section from "./components/Section";
import "primeflex/primeflex.css";
import './App.css';
import Cabecalho from './components/Cabecalho';
import productData from "./assets/productlist.json";
import imagesData from './assets/imageslist.json';
import ProductList from './components/ProductList';
import Gallery from "./components/Gallery";

const App = () => {
  return ( 
    <>
      <Cabecalho/>
      <Gallery imagesList={imagesData}/>
      <Section
        title={"Produtos em alta"}
        link={"https://redirect.link"}
      >
        <ProductList products={productData} />
      </Section>
    </>
   );
}
 
export default App;