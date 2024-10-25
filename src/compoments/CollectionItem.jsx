import React from 'react';

const CollectionItem = ({ image, title }) => {
  return (
    <li className="collection-item">
      <img src={image} alt={title} />
      <p>{title}</p>
    </li>
  );
};

export default CollectionItem;


