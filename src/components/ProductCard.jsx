import styles from './styles/productCard.module.css';

const ProductCard = ({image, description, name, price, priceDiscount, children}) => {
    return ( 
        <div className={styles.cardBorder}>
            <div className={styles.imageBorder}>
                {children}
                <img src={image} width="292" height="321" alt="" /> 
            </div>
            <div className={styles.caption}>
                <p className={styles.description}>{description}</p>
                <h1>{name}</h1>
                <ul className='d-flex'>
                    <li className={styles.price}>
                        <span className={`${styles.price} ${priceDiscount ? styles.priceWithDiscount : ''}`}>${price}</span>
                    </li>
                    <li className={styles.priceDiscount}>{priceDiscount}</li>
                </ul>
            </div>
        </div>
     );
}
 
export default ProductCard;