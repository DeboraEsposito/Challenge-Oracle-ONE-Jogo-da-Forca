var palavraSorteada = [];
var palavras = ["BANANA", "AMENDOIN", "ALURA", "CIDADE", "PREDINISOLONA", "CARRO", "FAZENDA", "AVENIDA", "UNIDADE", "SECULO"]; 

 
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

  for(i = 0; i < novaPalavra.length; i++){
    var inputLetra = document.createElement('input');
    inputLetra.classList.add("input-letra");
    
    return inputLetra;

  } 

}







  




