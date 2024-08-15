import React from 'react';
import Form from './Components/Form';
import './styles/App.css';

function App() {
  return (
    <div className="app-container">
      <h2>🚗 Registro Nacional Automotor 🚗</h2>
      <p>A continuacion solicitamos los siguientes datos:</p>
      <Form />
    </div>
  );
}

export default App;
