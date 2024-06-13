
# Minigame

O Minigame é uma aplicação web interativa onde o jogador deve pressionar as teclas exibidas em uma sequência antes que o tempo se esgote. A cada tentativa bem-sucedida, a sequência avança e, se o jogador completar toda a sequência corretamente, ele ganha o jogo. Caso contrário, ele pode tentar novamente.

## Funcionalidades

- Gerar sequências aleatórias de caracteres.
- Temporizador com barra de progresso.
- Feedback sonoro e visual para acertos e erros.
- Ranking local para armazenar e exibir as melhores pontuações.
- Botão de reiniciar para começar o jogo do zero a qualquer momento.
- Animações para tornar o minigame mais intuitivo e visualmente atraente.

## Estrutura do Projeto

- `src/components`
  - `BotaoIniciar.js`: Componente para o botão de iniciar o jogo.
  - `Feedback.js`: Componente para exibir mensagens de feedback.
  - `Minigame.js`: Componente principal do minigame.
  - `Ranking.js`: Componente para exibir o ranking local.
  - `Sequencia.js`: Componente para exibir a sequência de caracteres.
  - `Temporizador.js`: Componente para o temporizador.
- `src/sounds`
  - `correto.wav`: Som para acerto.
  - `errado.mp3`: Som para erro.
- `src/styles`
  - `BotaoIniciar.css`: Estilos para o botão de iniciar.
  - `Feedback.css`: Estilos para o componente de feedback.
  - `Minigame.css`: Estilos para o componente principal.
  - `Ranking.css`: Estilos para o ranking.
  - `Sequencia.css`: Estilos para a sequência.
  - `Temporizador.css`: Estilos para o temporizador.

## Uso

  - Ao acessar a aplicação, clique no botão "Iniciar" para começar o jogo.
  - Pressione as teclas conforme a sequência exibida na tela.
  - Se completar a sequência corretamente antes que o tempo se esgote, você ganha.
  - Caso contrário, aparecerá uma mensagem informando que você errou ou que o tempo acabou, juntamente com o botão "Tentar Novamente".
  - As melhores pontuações serão armazenadas localmente e exibidas no ranking no canto superior direito.

## Contribuição

Sinta-se à vontade para contribuir com este projeto. Você pode fazer isso das seguintes formas:

  - Enviando um Pull Request com melhorias.
  - Reportando um problema ou sugerindo melhorias através das Issues.
  - Compartilhando o projeto com outras pessoas.
