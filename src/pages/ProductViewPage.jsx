import Gallery from "../components/Gallery";
import Section from "../components/Section";
import imagesData from '../assets/imageslist.json';
import ProductList from "../components/ProductList";
import productData from "../assets/productlist.json";

const ProductViewPage = () => {
    return ( 
        <>
            <div className="d-flex">
                <div className="col">
                    <Gallery
                        width={1440}
                        height={681}
                        imagesList={imagesData}
                    />
                </div>
                <div className="col">
                    <h1>BuyBox aqui</h1>
                </div>
            </div>
            <Section
                title={"Produtos em alta"}
                link={"https://redirect.link"}
            >
                <ProductList products={productData} limit={4}/>
            </Section>
        </>
     );
}
 
export default ProductViewPage;