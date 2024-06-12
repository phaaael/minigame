import React from 'react';
import '../styles/Sequencia.css';

const Sequencia = ({ sequencia, indiceAtual }) => {
  return (
    <div className="sequencia">
      {sequencia.map((char, index) => (
        <span
          key={index}
          className={index === indiceAtual ? 'atual' : index < indiceAtual ? 'correto' : ''}
        >
          {char}
        </span>
      ))}
    </div>
  );
};

export default Sequencia;
