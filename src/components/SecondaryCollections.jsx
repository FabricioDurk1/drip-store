import React from 'react';
import styles from "./SecondaryCollections.module.css";

const SecondaryCollections = () => {
  const newCollections = [
    { image: '/camisa-1.jpeg', title: 'Camisetas' },
    { image: '/calça-2.jpeg', title: 'Calças' },
    { image: '/bone-3.jpeg', title: 'Bonés' },
    { image: '/fone-4.jpeg', title: 'Headphones' },
    { image: '/sapato-5.jpeg', title: 'Tênis' },
  ];

  return (
    <section className={styles.secondaryCollections}>
      <h2>Coleções em destaque</h2>
      <ul className={styles.collectionList}>
        {newCollections.map((item, index) => (
          <li key={index} className={styles.collectionItem}>
            <div className={styles.borderCollectionItem}>
              <img src={item.image} alt={item.title} />
            </div>
            <p>{item.title}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default SecondaryCollections;


