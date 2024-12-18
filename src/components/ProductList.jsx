import styles from './styles/productList.module.css';
import ProductCard from "./ProductCard";
import { Link } from 'react-router-dom';

const ProductList = ({products, limit}) => {
    const displayedProducts = limit ? products.slice(0, limit) : products;
    return ( 
        <div className={`${styles.gridList} grid`}>
            {displayedProducts.map((product) =>(
                <Link
                    className={styles.linkCard}
                    to={`/productDetails/${product.id}`}
                    key={product.id}
                >
                    <div className="col">
                        <div className="text-center align-items-center p-0 border-round font-bold">
                            <ProductCard
                            image={product.image}
                            description={product.description}
                            name={product.name}
                            price={product.price}
                            priceDiscount={product.priceDiscount}
                            >
                                {product.priceDiscount &&(
                                    <div className={styles.discountCard}>
                                        <h1 className={styles.discountText}>30% OFF</h1>
                                    </div>
                                )}
                            </ProductCard>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
     );
};
 
export default ProductList;