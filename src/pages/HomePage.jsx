import React from 'react';
import Section from '../components/Section';
import 'bootstrap/dist/css/bootstrap.min.css';

const HomePage = () => {
  return (
    <div className="homepage">
      <Section title="Coleções em destaque" titleAlign="center">
        <img src="../public/collection-1.png" alt="Novo drop Supreme" />
        <img src="../public/collection-2.png" alt="Coleção Adidas" />
        <img src="../public/collection-3.png" alt="Novo Beats Bass" />
      </Section>
    </div>
  );
};

export default HomePage;
