# Jogo Termo

Este código implementa um jogo de adivinhação de palavras com interface simples e teclado virtual. O jogador deve digitar uma palavra de 5 letras e verificar se ela corresponde à palavra escolhida aleatoriamente pelo programa.

## Como o jogo funciona

O jogo consiste em adivinhar uma palavra de 5 letras escolhida aleatoriamente pelo programa. O jogador tem 5 tentativas para adivinhar a palavra correta. O quadro de exibição mostra as tentativas do jogador e a palavra correta.

O jogador pode selecionar a posição no quadro e usar o teclado virtual para inserir letras. Após preencher a palavra, o jogador deve pressionar "ENTER" para verificar se a palavra inserida corresponde à palavra correta. O jogo fornecerá dicas visuais para ajudar o jogador:

- Se a letra inserida estiver na posição correta, o quadrado ficará verde.
- Se a letra inserida estiver na palavra, mas na posição errada, o quadrado ficará amarelo.
- Se a letra inserida não estiver na palavra, o quadrado ficará cinza.

O jogador pode apagar a última letra inserida usando o botão "⌫" (apagar) do teclado virtual.

O jogo termina quando o jogador adivinha a palavra correta (ganha) ou esgota todas as 5 tentativas (perde). Um alerta será exibido informando o resultado e o quadro será limpo para iniciar um novo jogo.


## Funções

1. `generateBoard()`: Cria o quadro de exibição das palavras. Cria 6 linhas (5 para as tentativas do jogador e 1 para a resposta correta) com 5 colunas cada (1 para cada letra da palavra).

2. `generateKeyboard()`: Cria o teclado virtual com as letras do alfabeto e os botões "ENTER" e "⌫" (apagar).

3. `addSelectedClass()`: Adiciona a classe "selected" ao primeiro elemento do quadro. Além disso, adiciona um evento de clique a todos os elementos do quadro, permitindo ao jogador selecionar a posição a ser preenchida.

4. `addLetterClickEvent()`: Adiciona um evento de clique aos botões de letra do teclado virtual, permitindo que o jogador insira a letra selecionada na posição selecionada no quadro.

5. `btnErrase()`: Adiciona um evento de clique ao botão "⌫" (apagar) do teclado virtual, permitindo que o jogador apague a última letra inserida.

6. `btnSubmit()`: Adiciona um evento de clique ao botão "ENTER" do teclado virtual, permitindo que o jogador envie a palavra atual e verifique se ela corresponde à palavra correta.

7. `startGame()`: Inicializa o jogo, selecionando aleatoriamente uma palavra do objeto `palavras`.

8. `checkWord(typedWord)`: Verifica se a palavra inserida pelo jogador é igual à palavra correta. Se a letra estiver na posição correta, o quadrado ficará verde; se a letra estiver na palavra, mas na posição errada, o quadrado ficará amarelo; se a letra não estiver na palavra, o quadrado ficará cinza.

9. `changerow()`: Muda a linha atual do quadro após cada tentativa do jogador.

10. `endGame(typedWord, selectedWord)`: Verifica se o jogador ganhou (adivinhou a palavra correta) ou perdeu (esgotou todas as tentativas). Exibe um alerta com o resultado e remove a classe "selected" e "rowSelected" do quadro.

