import React from 'react';
import './MainCollections.css';

const MainCollections = () => {
  return (
    <div className="main-collections-container">
      <h2 className="collections-title">Coleções em destaque</h2>
      <div className="main-collections">
        <div className="collection-item">
          <img src="/collection-1.png" alt="Novo drop Supreme" />
          <div className="discount-tag">30% OFF</div>
          <button className="buy-button">Comprar</button>
        </div>
        <div className="collection-item">
          <img src="/collection-2.png" alt="Coleção Adidas" />
          <div className="discount-tag">30% OFF</div>
          <button className="buy-button">Comprar</button>
        </div>
        <div className="collection-item">
          <img src="/collection-3.png" alt="Novo Beats Bass" />
          <div className="discount-tag">30% OFF</div>
          <button className="buy-button">Comprar</button>
        </div>
      </div>
    </div>
  );
};

export default MainCollections;


