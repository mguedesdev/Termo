let wordBoard = document.querySelector('.wordBoard');
let btnSubmit = document.querySelector('#btnSubmit');
let chanceH2 = document.querySelector('.chances');

let correctWord = [
  'muito',
  'sonho',
  'moral',
  'tempo',
  'dizer',
  'causa',
  'amigo',
  'sobre',
  'mundo',
  'censo',
  'regra',
  'ontem',
];

let chances = 5;

//sortear palavra aleatoria do array de palavras.
let indexDrawn = Math.floor(Math.random() * correctWord.length );
let wordDrawn = correctWord[indexDrawn].toUpperCase();

console.log(wordDrawn);

function generateBoard(){
  //gerar nova linha com 5 quadros somente quando o botão é clicado
  const line = document.createElement('div');
    for (let index = 0; index < 5; index += 1) {
      const column = document.createElement('input');
      column.maxLength = 1;
      column.classList.add('cell');
      line.appendChild(column);
    }
  wordBoard.appendChild(line);
}

function disableLine(arrayCell){
  //Desativar linha anterior
  if(arrayCell.length !== 0){
    for(let count = 0; count < arrayCell.length; count += 1){
      arrayCell[count].setAttribute('disabled', 'true');
    }
  }
}

function paintCell(arrayCell){
  //aux para fazer a palavra montada voltar ao inicio já que pegamos todas as cells -
  //e o index vai acabar ultrapassando o tamanho da palavra
  let aux = 0;
  for(let index = 0; index < arrayCell.length; index +=1){

    let typedLetterValue = arrayCell[index].value.toUpperCase();

    if(aux > 4) aux = 0;
    if(typedLetterValue === wordDrawn[aux]){
      arrayCell[index].style.backgroundColor = 'rgb(3, 68, 34)';
      arrayCell[index].style.color = 'white';
    }else if(wordDrawn.includes(typedLetterValue)){
      arrayCell[index].style.backgroundColor = 'rgb(211,145,0)';
      arrayCell[index].style.color = 'white';
    }

    aux += 1;
  }
}

function checkWord(string, arrayCell){

  //verificação se ganhou perdeu ou continua o jogo
  
  if(string.toUpperCase() === wordDrawn){
    chanceH2.innerText = 'Você ganhou !';
    paintCell(arrayCell);
  }else if (chances < 2){
    alert('Você Perdeu :(');
    chanceH2.innerText = 'A palavra é: ' + wordDrawn;
  }else{
    chances -= 1;
    chanceH2.innerText = 'Chances: ' + chances;
    disableLine(arrayCell);
    paintCell(arrayCell);
    generateBoard();
  }
}


btnSubmit.addEventListener('click', () => {

  const arrayCell = document.querySelectorAll('.cell');

  //montar a palavra
  let newString = '';
  for (let count = 0; count < arrayCell.length; count += 1) {
    if(arrayCell[count].disabled != true){
      newString += arrayCell[count].value;
    }
  }
  
  //verificar se a palavra existe no array
  if(!correctWord.includes(newString)){
    alert('Não temos essa palavra no nosso banco - tente novamente');
  }
  else{
    checkWord(newString, arrayCell);
  }
  
})

generateBoard();