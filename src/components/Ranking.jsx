import React from 'react'
import '../styles/Ranking.css'

const Ranking = ({ pontuacoes }) => {
  return (
    <div className="ranking">
      <h2>Ranking</h2>
      <ul>
        {pontuacoes.sort((a, b) => b - a).map((pontuacao, index) => (
          <li key={index}>{pontuacao + " pontos"}</li>
        ))}
      </ul>
    </div>
  )
}

export default Ranking
