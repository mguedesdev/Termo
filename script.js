const wBoard = document.querySelector('.wBoard');
const kBoard = document.querySelector('.kBoard');
const test = document.querySelector('.teste');



const palavras = { furia: 'fúria', calda: 'calda', manto: 'manto', censo: 'censo', codex: 'codex', facil: 'fácil', fusao: 'fusão', nenem: 'neném', navio: 'navio', vacuo: 'vácuo', balde: 'balde', banco: 'banco', barco: 'barco', bicho: 'bicho',
}
let selectedWord = {};

const generateBoard = () => {
  for (let row = 0; row < 6; row++) {
    const rowDiv = document.createElement('div');
    rowDiv.id = row+1;
    if(row === 0) rowDiv.classList.add('rowSelected');
    for(let index = 0; index < 5; index += 1){
      const div = document.createElement('div');
      div.classList.add('letterBoard');

      if(row > 0){
        div.classList.add('wHidden');
      }else{
        div.classList.add('wShow');
      }
      rowDiv.appendChild(div);
    }
    wBoard.appendChild(rowDiv);
  }

}

generateBoard();
const letterArray = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P',
                      'A', 'S','D', 'F', 'G', 'H', 'J', 'K', 'L', '⌫',
                        'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'ENTER'];

const generateKeyboard = () => {
    for(let index = 0; index < 3; index += 1){
      const keyboardRow = document.createElement('div');
      keyboardRow.classList.add('keyboardRow');
      kBoard.appendChild(keyboardRow);
    }

    const keyboardRows = document.querySelectorAll('.keyboardRow');
    let rowCounter = 0;

    for(let letter = 0; letter < letterArray.length; letter+=1){

      if(letter === 10 || letter === 20) rowCounter += 1;

      const btn = document.createElement('button');
      btn.classList.add('letter');
      btn.innerHTML = letterArray[letter];

      if(letterArray[letter] === 'ENTER') btn.classList.add('btnEnter');
      if(letterArray[letter] === '⌫') btn.classList.add('btnBackSpace');

      keyboardRows[rowCounter].appendChild(btn);
    }
}

generateKeyboard();

//Dia 2 

const addSelectedClass = () => {
  const wordElems = document.querySelectorAll('.letterBoard');
  const firstWord = wordElems[0];
  firstWord.classList.add('selected');

  for (const word of wordElems) {
    word.addEventListener('click', (event) => {
      if(word.classList.contains('wShow')){
        const selectedWord = document.querySelector('.selected');
        selectedWord.classList.remove('selected');
        event.target.classList.add('selected');
      }
    })
  }
}

addSelectedClass();

const addLetterClickEvent = () => {
  const letterButtons = document.querySelectorAll('.letter');

  for (let index = 0; index < letterButtons.length; index += 1) {
    if(letterButtons[index].className === 'letter'){
      letterButtons[index].addEventListener('click', (event) => {
        const selectedLetter = document.querySelector('.selected');
        if(selectedLetter){
          selectedLetter.innerHTML = event.target.innerText;

          if(selectedLetter.nextElementSibling){
            selectedLetter.classList.remove('selected');
            selectedLetter.nextElementSibling.classList.add('selected');
          }
        }
      })
    }
  }
}

addLetterClickEvent();

const btnErrase = () => {
  const btnBackSpace = document.querySelector('.btnBackSpace');

  btnBackSpace.addEventListener('click', () => {
    test.style.display = 'none';
    const selected = document.querySelector('.selected');
    
      if(selected && !selected.nextSibling && selected.innerText !== ''){
        selected.innerText = '';
      }else if(selected && selected.previousSibling){
        selected.classList.remove('selected');
        selected.previousSibling.classList.add('selected');
        selected.previousSibling.innerText = '';
      }
  })
  
}
btnErrase();

const btnSubmit = () => {
  const btnEnter = document.querySelector('.btnEnter');
  btnEnter.addEventListener('click', () => {
  test.style.display = 'none';
  const word = document.querySelectorAll('.wShow');
  let typedWord = '';
    for (let index = 0; index < word.length; index += 1) {
      typedWord += word[index].innerText;
    }
    
    if(typedWord.length < 5){
      closeAlert('Somente palavras de 5 letras!');

    }else if(!Object.keys(palavras).includes(typedWord.toLowerCase())) {
      closeAlert('Essa palavra não é aceita');

    }else{
      checkWord(typedWord);
      changerow();
    }
  });
}
btnSubmit();


const startGame = () => {
  const wordKeys = Object.keys(palavras);
  const randomIndex = Math.floor(Math.random() * wordKeys.length);
  selectedWord[wordKeys[randomIndex]] = palavras[wordKeys[randomIndex]];
  console.log(selectedWord);
}
startGame();

const checkWord = (typedWord) => {
  const letters = document.querySelectorAll('.wShow');
  const selectedWordKey = Object.keys(selectedWord)[0];
  const selectedWordValue = selectedWord[selectedWordKey].toUpperCase();
  
  for (let index = 0; index < letters.length; index += 1) {
    const selectedLetterKey = selectedWordKey[index].toUpperCase();
    const correctLetterValue = selectedWordValue[index];

    if(letters[index].innerText === selectedLetterKey){
      letters[index].innerText = correctLetterValue;
      letters[index].style.backgroundColor = '#3AA394';
      letters[index].style.borderColor = '#3AA394';
    }else if(selectedWordKey.toUpperCase().includes(letters[index].innerText)){
      letters[index].style.backgroundColor = '#D3AC69';
      letters[index].style.borderColor = '#D3AC69';
    }
    else{
      letters[index].style.backgroundColor = '#312A2C';
      letters[index].style.borderColor = '#312A2C';
    }
  }
  endGame(typedWord, selectedWordKey);
}

//Função para trocar a keyboardRow toda vez que apertarmos o botão ENTER
const changerow = () => {
  const word = document.querySelectorAll('.wShow');
  const selected = document.querySelector('.selected');
  const rowSelected = document.querySelector('.rowSelected');

  for (const w of word) {
    w.classList.add('wHidden');
    w.classList.remove('wShow');
  }
  
    let id = Number(rowSelected?.id) + 1;

    if(id <= 6){
      rowSelected?.classList.remove('rowSelected');

      const newrow = document.getElementById(id);
      newrow.classList.add('rowSelected');
      const newWord = newrow.querySelectorAll('.wHidden');

      for(let index = 0; index < newWord.length; index += 1){
        newWord[index].classList.add('wShow');
        newWord[index].classList.remove('wHidden');
      }
      selected.classList.remove('selected');
      newWord[0].classList.add('selected');
    }

}

const endGame = (typedWord, selectedWord) => {
  const typedWordUpper = typedWord.toUpperCase();
  const selectedWordUpper = selectedWord.toUpperCase();
  const rowSelected = document.querySelector('.rowSelected');
  const selected = document.querySelector('.selected');
  const btnEnter = document.querySelector('.btnEnter');


  if(typedWordUpper === selectedWordUpper){
    closeAlert('Você ganhou !');
    btnEnter.disabled = true;
    rowSelected.classList.remove('rowSelected');
    selected.classList.remove('selected');
  }

  if(rowSelected.id >= 6){
    closeAlert(`Você perdeu ! A palavra é : ${selectedWordUpper}`);
    rowSelected.classList.remove('rowSelected');
    selected.classList.remove('selected');
  }
}


const closeAlert = (string) => {
  const span = document.querySelector('.txtAlert');
  const btnExitAlert = document.querySelector('.exitAlert');

  span.innerText = string;
  test.style.display = 'block';
  btnExitAlert.addEventListener('click', () => {
    test.style.display = 'none';
  })

}