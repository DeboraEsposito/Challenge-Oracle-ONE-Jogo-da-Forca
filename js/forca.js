//Variaáveis
var palavras = ["BANANA", "AMENDOIN", "ALURA", "CIDADE", "PREDINISOLONA", "CARRO", "FAZENDA", "AVENIDA", "UNIDADE", "SECULO"]; 
var palavraSorteada = [];
var contador = 0;
var novaPalavra;
var botaoIniciarJogo = document.querySelector('.blue');
var modal = document.querySelector(".modal");
var input = document.querySelector('.input-letras');  
var inputLetra = document.createElement('input'); 
var botaoAdicionaPalavra = document.querySelector(".white")
var erros = 0;
var acertos = 0;
var botaoNovoJogo = document.querySelector("#start")
var exibeGameOver = document.querySelector("#over")
var exibeWin = document.querySelector("#win")
var botaoWin = document.querySelector("#winB")

//Teclado

// letras = [a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z]

//Jogo


  botaoIniciarJogo.addEventListener('click', function startGame(event){

    event.preventDefault();
  
    palavraSorteada = [];
      
      modal.classList.remove("modal");
      modal.style.zIndex = -3;
      box.style.zIndex = -3
      sorteiaPalavra();
      dividePalavra();
      criaInputLetra();
  
  }, false);


//Functions
 
function sorteiaPalavra(){
  while(palavraSorteada.length < 1){
    var i = Math.floor(Math.random()*palavras.length);
    if(palavraSorteada.indexOf(palavras[i]) < 0){
     palavraSorteada.push(palavras[i])
    }    
  }
  return palavraSorteada;
}

function dividePalavra(){  
  
  novaPalavra = palavraSorteada[0].split("");
   
}

function criaInputLetra(){

  for(var i = 0; i < novaPalavra.length; i++){
    var inputLetra = document.createElement('input');
    var div = document.getElementById('msg');
    inputLetra.classList.add("input-palavra");
    div.appendChild(inputLetra);
     
  }  
}

botaoAdicionaPalavra.addEventListener("click", function adcionarPalavra(event){

  event.preventDefault();
 
  var inputPalavra = document.querySelector("#palavra-digitada");
  var palavraDigitada = inputPalavra.value;  
  palavraDigitada = palavraDigitada.toUpperCase();
  palavras.push(palavraDigitada)
  document.querySelector('#palavra-digitada').value = palavraDigitada;   
  
  inputPalavra.value = "";
    
})

function gameOver(){
  exibeGameOver.style.zIndex = 3;
  botaoNovoJogo.addEventListener('click', function(){
    document.location.reload(true);

  }, false)
}

function gameWin(){
  exibeWin.style.zIndex = 3;
  botaoWin.addEventListener('click', function(){
  document.location.reload(true);
  }, false)
}


var letraClicada = document.querySelectorAll('.button-letra')
var divs = document.querySelector('#butons-letras') 

divs.addEventListener('click',(event)=>{

  if(event.target.textContent.length > 1) return;

  letra = event.target.textContent;

  var inputAll = document.querySelectorAll(".input-palavra");

  var valida = true;

  
  for(i = 0; i < novaPalavra.length; i++){
    if(letra === novaPalavra[i]){
      valida = false;
      inputAll[i].value = letra;
      event.target.style.backgroundColor = "rgba(14, 238, 6, 0.89)"
      acertos++;
      
      if(acertos === novaPalavra.length){
        gameWin();

      }

    }
  }
  
  if(valida){
    event.target.style.backgroundColor = "rgba(255, 0, 0, 0.89)"
    erros++;
    desenha(erros);   
    if(erros === 6){
      gameOver();
    }
  }
  
}, false);











  




