//Variaáveis

var palavras = ["BANANA", "AMENDOIN", "ALURA", "CIDADE", "PREDINISOLONA", "CARRO", "FAZENDA", "AVENIDA", "UNIDADE", "SECULO"]; 
var palavraSorteada = [];
var contador = 0;
var novaPalavra;
var botão = document.querySelector('.blue');
var modal = document.querySelector(".modal");
var input = document.querySelector('.input-letras');  
var inputLetra = document.createElement('input'); 
  
//Jogo

botão.addEventListener('click', function (event){

  event.preventDefault();

  palavraSorteada = [];
    
    modal.classList.remove("modal");
    modal.style.zIndex = -1;
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
  
  return novaPalavra;  
}

function criaInputLetra(){

  for(i = 0; i < novaPalavra.length; i++){
    var inputLetra = document.createElement('input');
    var div = document.getElementById('teste');
    inputLetra.classList.add("input-letras");
    div.appendChild(inputLetra);
    inputLetra.style.left = 20 + "px";   

    return inputLetra;
     
  }  
} 




  









  




