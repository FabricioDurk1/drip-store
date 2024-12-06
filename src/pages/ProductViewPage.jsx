import Gallery from "../components/Gallery";
import productImages from '../assets/productImages.json';
import { useParams } from "react-router-dom";
import Section from "../components/Section";
import ProductList from "../components/ProductList";
import productData from '../assets/productlist.json';
import BuyBox from '../components/BuyBox';
import styles from '../components/styles/productViewPage.module.css';

const ProductViewPage = () => {

    const {id} = useParams();
    const numericId = parseInt(id, 10);
    const productLink = productData.find((item) => item.id === numericId);
    return ( 
        <>
            <p className={`text-start ${styles.textUrl}`}>Home / produtos / Tênis / Nike / {productLink.name}</p>
            <div className={`${styles.productView} d-flex m-0`}>
                <div className={styles.galleryContent}>
                    <Gallery
                        width={700}
                        height={570}
                        imagesList={productImages}
                    />
                </div>
                <div className={styles.buyBoxContent}>
                    <BuyBox
                        // name="Tênis Nike Revolution 6 Next Nature Masculino"
                        name={productLink.name}
                        category="Casual"
                        brand="Nike"
                        reference="38416711"
                        stars={4.7}
                        rating={90}
                        price={productLink.price}
                        priceDiscount={productLink.priceDiscount}
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
