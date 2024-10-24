import './styles/productList.css';
import ProductCard from "./ProductCard";

const ProductList = ({products}) => {
    return ( 
        <div className="grid">
            {products.map((product) =>(
                <div className="col" key={product.id}>
                    <div className="text-center align-items-center p-0 border-round font-bold">
                        <ProductCard
                        image={product.image}
                        description={product.description}
                        name={product.name}
                        price={product.price}
                        priceDiscount={product.priceDiscount}
                        >
                            {product.priceDiscount &&(
                                <div className="discount-card">
                                    <h1 className="discount-text">30% OFF</h1>
                                </div>
                            )}
                        </ProductCard>
                    </div>
                </div>
            ))}
        </div>
     );
};
 
export default ProductList;