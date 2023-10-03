
import React from 'react';
import Image from './Image';

const Card = ({ id, name, patent, type, price, imageName }) => {
  const imageUrl = `/images/${imageName}`;

  return (
    <div className="card-container">
      <div className="card-content">
        <h2>{name}</h2>
        <p>ID: {id}</p>
        <p>Marca: {patent}</p>
        <p>{type}</p>
        <p>{price}</p>
      </div>
      <div>
        <Image src={imageUrl} alt={`Imagen para ${name}`} />
      </div>
    </div>
  );
};

export default Card;