import React from 'react';
import '../styles/Temporizador.css';

const Temporizador = ({ tempoRestante }) => {
  return (
    <div className="temporizador">
      <div className="barra-tempo" style={{ width: `${tempoRestante}%` }}></div>
    </div>
  );
};

export default Temporizador;
