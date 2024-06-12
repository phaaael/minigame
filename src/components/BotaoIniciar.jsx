import React from 'react'
import '../styles/BotaoIniciar.css'

const BotaoIniciar = ({ onClick, texto = 'Iniciar' }) => {
  return (
    <button className="botao-iniciar" onClick={onClick}>
      {texto}
    </button>
  )
}

export default BotaoIniciar
