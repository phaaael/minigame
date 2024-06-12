import React, { useState, useEffect, useCallback } from 'react'
import BotaoIniciar from './BotaoIniciar'
import Temporizador from './Temporizador'
import Sequencia from './Sequencia'
import Feedback from './Feedback'
import Ranking from './Ranking'
import useSound from 'use-sound'
import correctSound from '../sounds/correto.wav'
import errorSound from '../sounds/errado.mp3'
import '../styles/Minigame.css'

const Minigame = () => {
  const [sequencia, setSequencia] = useState([])
  const [indiceAtual, setIndiceAtual] = useState(0)
  const [jogoIniciado, setJogoIniciado] = useState(false)
  const [jogoTerminado, setJogoTerminado] = useState(false)
  const [jogoErro, setJogoErro] = useState(false)
  const [feedback, setFeedback] = useState('')
  const [tempoRestante, setTempoRestante] = useState(100)
  const [pontuacoes, setPontuacoes] = useState(() => {
    const pontuacoesSalvas = localStorage.getItem('pontuacoes')
    return pontuacoesSalvas ? JSON.parse(pontuacoesSalvas) : []
  })

  const [playCorrect] = useSound(correctSound)
  const [playError] = useSound(errorSound)

  const gerarSequenciaAleatoria = (tamanho) => {
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
    let resultado = ''
    for (let i = 0; i < tamanho; i++) {
      resultado += caracteres.charAt(Math.floor(Math.random() * caracteres.length))
    }
    return resultado.split('')
  }

  const iniciarJogo = () => {
    const novaSequencia = gerarSequenciaAleatoria(6)
    setSequencia(novaSequencia)
    setIndiceAtual(0)
    setJogoIniciado(true)
    setJogoTerminado(false)
    setJogoErro(false)
    setFeedback('')
    setTempoRestante(100)
  }

  const handleKeyPress = useCallback(
    (event) => {
      if (jogoTerminado || !jogoIniciado) return

      if (event.key.toUpperCase() === sequencia[indiceAtual]) {
        setIndiceAtual(indiceAtual + 1)
        if (indiceAtual + 1 === sequencia.length) {
          playCorrect()
          setJogoTerminado(true)
          const novasPontuacoes = [...pontuacoes, tempoRestante]
          setPontuacoes(novasPontuacoes)
          localStorage.setItem('pontuacoes', JSON.stringify(novasPontuacoes))
        }
      } else {
        setFeedback('Errado!')
        setJogoErro(true)
        setJogoTerminado(true)
        playError()
      }
    },
    [indiceAtual, jogoTerminado, jogoIniciado, sequencia, tempoRestante, pontuacoes, playCorrect, playError]
  )

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress)
    return () => {
      window.removeEventListener('keydown', handleKeyPress)
    }
  }, [handleKeyPress])

  useEffect(() => {
    if (jogoIniciado && !jogoTerminado) {
      const timer = setInterval(() => {
        setTempoRestante((prev) => {
          if (prev > 0) {
            return prev - 1
          } else {
            clearInterval(timer)
            setJogoErro(true)
            setJogoTerminado(true)
            return 0
          }
        })
      }, 100)
      return () => clearInterval(timer)
    }
  }, [jogoIniciado, jogoTerminado])

  return (
    <div className="minigame-container">
      <h1>MINI-GAME</h1>
      {!jogoIniciado && !jogoTerminado && (
        <BotaoIniciar onClick={iniciarJogo} />
      )}
      {jogoIniciado && !jogoTerminado && (
        <div>
          <div className="sequencia-informacao">Pressione as teclas conforme a sequência</div>
          <Sequencia sequencia={sequencia} indiceAtual={indiceAtual} />
          <Temporizador tempoRestante={tempoRestante} />
          <Feedback feedback={feedback} />
        </div>
      )}
      {jogoTerminado && (
        <div>
          {jogoErro ? (
            <div>
              <h2>{tempoRestante === 0 ? 'O tempo acabou!' : 'Você Falhou'}</h2>
              <BotaoIniciar onClick={iniciarJogo} texto="Tentar Novamente" />
            </div>
          ) : (
            <div>
              <h2>Você Ganhou</h2>
              <BotaoIniciar onClick={iniciarJogo} texto="Tentar Novamente" />
            </div>
          )}
        </div>
      )}
      <Ranking pontuacoes={pontuacoes} />
    </div>
  )
}

export default Minigame
