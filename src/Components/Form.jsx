import React, { useState } from 'react';
import Card from './Card';
import Message from './Message';

const Form = () => {

    //manejo del estado del form con useState
  const [carModel, setCarModel] = useState('');
  const [carPlate, setCarPlate] = useState('');
  const [formData, setFormData] = useState(null);
  const [error, setError] = useState('');

    //manejo del evento submit
  const handleSubmit = (e) => {
    e.preventDefault();

    const modelRegex = /^[^\s].{2,}$/; // al menos 3 caracteres sin espacio al inicio
    const plateRegex = /^.{6,}$/; // al menos 6 caracteres

    //valido datos ingresados
    if (modelRegex.test(carModel) && plateRegex.test(carPlate)) {
      setError('');
      setFormData({ model: carModel, plate: carPlate });
    } else {
      setError('Por favor, chequea los datos ingresados');

      setFormData(null); //limpio datos del form
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Modelo del Automovil:</label>
        <input
          type="text"
          value={carModel}
          onChange={(e) => setCarModel(e.target.value)}
        />
        <label>Placa del Automovil:</label>
        <input
          type="text"
          value={carPlate}
          onChange={(e) => setCarPlate(e.target.value)}
        />
        <button type="submit">Enviar</button>
      </form>

      {error && <Message message={error} />}
      {formData && <Card model={formData.model} plate={formData.plate} />}
    </div>
  );
};

export default Form;
