import Section from "./components/Section";
import "primeflex/primeflex.css";
import Cabecalho from './components/Cabecalho';
import productData from "./assets/productlist.json";
import ProductList from './components/ProductList';
import './App.css';

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