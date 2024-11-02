import ProductList from '../components/ProductList';
import productData from "../assets/productlist.json";

const ProductListingPage = () => {
    return ( 
        <>
            <div className="container">
                <div className="row">
                    <div className="col-3">
                        <h1>O filtro aqui</h1>
                    </div>
                    <div className="col-9">
                    <ProductList products={productData} />
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default ProductListingPage;