import React from 'react';
import '../styles/Card.css';

const Card = ({ model, plate }) => {
  return (
    <div className="card-container">
      <h2>Información del Automóvil</h2>
      <p><strong>Modelo:</strong> {model}</p>
      <p><strong>Placa:</strong> {plate}</p>
    </div>
  );
};

export default Card;
