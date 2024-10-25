import React from 'react';
import './MainCollections.css';

const MainCollections = () => {
  return (
    <div className="main-collections-container">
    <h2 className="collections-title">Coleções em destaque</h2> {/* Adicionando o título */}
    <div className="main-collections">
      <img src="/collection-1.png" alt="Novo drop Supreme" />
      <img src="/collection-2.png" alt="Coleção Adidas" />
      <img src="/collection-3.png" alt="Novo Beats Bass" />
    </div>
  </div>
  );
};

export default MainCollections;
