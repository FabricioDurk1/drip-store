import React from 'react';
import styles from "./styles/SecondaryCollections.module.css";

const SecondaryCollections = () => {
  const newCollections = [
    { "id":1 , image: '/images/camisa-1.svg', title: 'Camisetas' },
    { "id":2 , image: '/images/calca-2.svg', title: 'Calças' },
    { "id":3 , image: '/images/bone-3.svg', title: 'Bonés' },
    { "id":4 , image: '/images/fone-4.svg', title: 'Headphones' },
    { "id":5 , image: '/images/sapato-5.svg', title: 'Tênis' },
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


