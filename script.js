let containerPalavra = document.querySelector('.containerPalavra');
let botaoEnviar = document.querySelector('#btnEnviar');
let chancetxt = document.querySelector('h2');

let palavraCorreta = ['muito', 'sonho', 'moral', 'tempo', 'dizer', 'causa'];

let chance = 5;

let index = Math.floor(Math.random() * palavraCorreta.length );
let palavraSorteada = palavraCorreta[index].toUpperCase();

botaoEnviar.addEventListener('click', () =>{
  const arrayDeLetras = document.querySelectorAll('.celula');

  let newString = '';
  for (let index2 = 0; index2 < arrayDeLetras.length; index2++) {
    if(arrayDeLetras[index2].disabled != true){
      newString += arrayDeLetras[index2].value;
    }
  }
  compararPalavra(newString);

  let aux = 0;
  for(let index = 0; index < arrayDeLetras.length; index +=1){
    if(aux > 4) aux = 0;

    if(arrayDeLetras[index].value.toUpperCase() === palavraSorteada[aux]){
      arrayDeLetras[index].style.backgroundColor = 'rgb(3, 68, 34)';
      arrayDeLetras[index].style.color = 'white';
    }else if(palavraSorteada.includes(arrayDeLetras[index].value.toUpperCase())){
      arrayDeLetras[index].style.backgroundColor = 'rgb(211,145,0)';
      arrayDeLetras[index].style.color = 'white';
    }
    aux ++;
  }
  
})

function board(){
  const celulas = document.querySelectorAll('.celula');
  if(celulas.length != 0){
    for(let index2 = 0; index2 < celulas.length; index2 += 1){
      celulas[index2].setAttribute('disabled', 'true');
    }
  }
  const linha = document.createElement('div');
    for (let index = 0; index < 5; index++) {
      const colunas = document.createElement('input');
      colunas.maxLength = 1;
      colunas.classList.add('celula');
      linha.appendChild(colunas);
    }
    containerPalavra.appendChild(linha);
}
board();

function verificarPalavra(string){
  if(string.toUpperCase() === palavraSorteada){
    chancetxt.innerText = 'Você ganhou !';
  }else if (chance < 2){
    alert('Perdeu !!');
    chancetxt.innerText = 'A palavra é: ' + palavraSorteada;
  }else{
    board();
    chance --;
    chancetxt.innerText = 'Chances: ' + chance;
  }
}

function compararPalavra (string){
  if(!palavraCorreta.includes(string)){
    alert('Não temos essa palavra no nosso banco!');
  }
  else{
    verificarPalavra(string);
  }
}