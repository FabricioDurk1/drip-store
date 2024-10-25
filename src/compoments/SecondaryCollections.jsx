import React from 'react';
import "./SecondaryCollections.css";

const SecondaryCollections = () => {
  const newCollections = [
    { image: '/camisa-1.jpeg', title: 'Camisetas' },
    { image: '/calça-2.jpeg', title: 'Calças' },
    { image: '/bone-3.jpeg', title: 'Bonés' },
    { image: '/fone-4.jpeg', title: 'Headphones' },
    { image: '/sapato-5.jpeg', title: 'Tênis' },
  ];

  return (
    <section className="secondary-collections">
      <h2>Coleções em destaque</h2>
      <ul className="collection-list">
        {newCollections.map((item, index) => (
          <li key={index} className="collection-item">
            <img src={item.image} alt={item.title} />
            <p>{item.title}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default SecondaryCollections;


