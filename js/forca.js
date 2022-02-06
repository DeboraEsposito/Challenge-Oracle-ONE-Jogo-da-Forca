//Variaáveis
var palavras = ["BANANA", "AMENDOIN", "ALURA", "CIDADE", "PREDINISOLONA", "CARRO", "FAZENDA", "AVENIDA", "UNIDADE", "SECULO"]; 
var palavraSorteada = [];
var contador = 0;
var novaPalavra;
var botao = document.querySelector('.blue');
var modal = document.querySelector(".modal");
var input = document.querySelector('.input-letras');  
var inputLetra = document.createElement('input'); 
botaoAdicionaPalavra = document.querySelector(".white")
var contador = 0;

//Teclado

// letras = [a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z]

//Jogo

botao.addEventListener('click', function (event){

  event.preventDefault();

  palavraSorteada = [];
    
    modal.classList.remove("modal");
    modal.style.zIndex = -1;
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

// letraA = document.querySelector("#button-letra0");
// letraA.addEventListener('click', function(){
//   var letraDigitada = a;

//   console.log(letraDigitada)
// })

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
      event.target.style.backgroundColor = "green"
    }
  }

  if(valida){
    event.target.style.backgroundColor = "red"
    contador++;
    desenha(contador);
  }  
  
})










  




