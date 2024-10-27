import './App.css';
import Section from "./components/Section";
import "primeflex/primeflex.css";
import productData from "./assets/productlist.json";
import ProductList from './components/ProductList';
import Cabecalho from './components/Cabecalho';

const App = () => {
  return ( 
    <>
      <Cabecalho/>
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