import Gallery from "../components/Gallery";
import Section from "../components/Section";
import imagesData from '../assets/imageslist.json';
import ProductList from "../components/ProductList";
import productData from '../assets/productlist.json';
import BuyBox from '../components/BuyBox';

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
                <BuyBox
                    name="Tênis Nike Revolution 6 Next Nature Masculino"
                    category="Casual"
                    brand="Nike"
                    reference="38416711"
                    stars={4.7}
                    rating={90}
                    price=" 219,00"
                    priceDiscount="300,00"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."
                    sizes={[39, 40, 41, 42, 43]}
                    colors={["#6FEEFF", "#C92071", "#5E5E5E", "#6D70B7"]}
                    />


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
