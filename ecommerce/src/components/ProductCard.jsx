const ProductCard = ({image, name, price, priceDiscount}) => {
    return ( 
        <>
            <img src={image} alt="" />
            <h1>{name}</h1>
            <ul>
                <li>{price}</li>
                <li>{priceDiscount}</li>
            </ul>
        </>

     );
}
 
export default ProductCard;