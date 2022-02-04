var palavraSorteada = [];
var palavras = ["BANANA", "AMENDOIN", "ALURA", "CIDADE", "PREDINISOLONA", "CARRO", "FAZENDA", "AVENIDA", "UNIDADE", "SECULO"]; 
var contador = 0;
var novaPalavra;



botaoJogar.addEventListener("click", function startGame(event){
  event.preventDefault();
  botão = document.querySelector('.blue');

 modal = document.querySelector(".modal")

 

  sorteiaPalavra();
  dividePalavra();
  criaInputLetra();


    
})


 
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
  sorteiaPalavra(); 
  
  novaPalavra = palavraSorteada[0].split("");
  
  return novaPalavra;  
}

function criaInputLetra(){
  
    var inputLetra = document.createElement('input');
    var div = document.getElementById('teste')
    inputLetra.classList.add("input-letras");
    div.appendChild(inputLetra);    
  }   

  









  




