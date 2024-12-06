import './BuyBox.css';
import PropTypes from 'prop-types';
import { useState } from 'react';

const BuyBox = ({ name, category, brand, reference, stars, rating, price, priceDiscount, description, sizes, colors }) => {
    // Estado para tamanho e cor selecionados
    const [selectedSize, setSelectedSize] = useState(null);
    const [selectedColor, setSelectedColor] = useState(null);

    // Handlers de seleção
    const handleSizeClick = (size) => {
        setSelectedSize(size);
    };

    const handleColorClick = (color) => {
        setSelectedColor(color);
    };

    return (
        <div className="buybox">
            {/* Nome e categoria */}
            <h2>{name}</h2>
            <p>{category} | {brand} | REF: {reference}</p>

            {/* Avaliação */}
            <div className="rating">
                <span>⭐ {stars}</span>
                <span className="rating-value">({rating} avaliações)</span>
            </div>

            {/* Preços */}
            <div className="price">
                <span className="discounted-price">R${price}</span>
                {priceDiscount && <span className="original-price">{priceDiscount}</span>}
            </div>

            {/* Descrição */}
            <div className="product-description">
                <h3>Descrição do produto</h3>
                <span className="description">{description}</span>
            </div>

            {/* Seleção de tamanhos */}
            <div className="sizes">
                <p>Tamanho</p>
                <div className="size-options">
                    {sizes.map((size, index) => (
                        <button
                            key={index}
                            className={`size-option ${selectedSize === size ? 'selected' : ''}`}
                            onClick={() => handleSizeClick(size)}
                        >
                            {size}
                        </button>
                    ))}
                </div>
            </div>

            {/* Seleção de cores */}
            <div className="colors">
                <p>Cor</p>
                <div className="color-options">
                    {colors.map((color, index) => (
                        <button
                            key={index}
                            className={`color-option ${selectedColor === color ? 'selected' : ''}`}
                            style={{ backgroundColor: color }}
                            onClick={() => handleColorClick(color)}
                        />
                    ))}
                </div>
            </div>

            {/* Botão de compra */}
            <div className="button">
                <button className="buy-button">COMPRAR</button>
            </div>
        </div>
    );
};

BuyBox.propTypes = {
    name: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    brand: PropTypes.string.isRequired,
    reference: PropTypes.string.isRequired,
    stars: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    price: PropTypes.string.isRequired,
    priceDiscount: PropTypes.string,
    description: PropTypes.string.isRequired,
    sizes: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])).isRequired,
    colors: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default BuyBox;
