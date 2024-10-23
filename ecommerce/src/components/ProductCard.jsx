import './productCard.css';

const ProductCard = ({image, description, name, price, priceDiscount, children}) => {
    return ( 
        <div className="card-border">
            <div className="image-border">
                {children}
                <img src={image} width="292" height="321" alt="" /> 
            </div>
            <div className="caption">
                <p className='description'>{description}</p>
                <h1>{name}</h1>
                <ul>
                    <li className='price'>{price}</li>
                    <li className='priceDiscount'>{priceDiscount}</li>
                </ul>
            </div>
        </div>
     );
}
 
export default ProductCard;