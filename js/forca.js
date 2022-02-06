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

//Teclado

a = document.querySelector("#button-letra0")
a = a.textContent;
b = document.querySelector("#button-letra1")
b = b.textContent;
c = document.querySelector("#button-letra2")
c = c.textContent;
d = document.querySelector("#button-letra3")
d = d.textContent;
e = document.querySelector("#button-letra4")
e = e.textContent;
f = document.querySelector("#button-letra5")
f = f.textContent;
g = document.querySelector("#button-letra6")
g = g.textContent;
h = document.querySelector("#button-letra7")
h = h.textContent;
i = document.querySelector("#button-letra8")
i = i.textContent;
j = document.querySelector("#button-letra9")
j = j.textContent;
k = document.querySelector("#button-letra10")
k = k.textContent;
l = document.querySelector("#button-letra11")
l = l.textContent;
m = document.querySelector("#button-letra12")
m = m.textContent;
n = document.querySelector("#button-letra13")
n = n.textContent;
o = document.querySelector("#button-letra14")
o = o.textContent;
p = document.querySelector("#button-letra15")
p = p.textContent;
q = document.querySelector("#button-letra16")
q = q.textContent
r = document.querySelector("#button-letra17")
r = r.textContent
s = document.querySelector("#button-letra18")
s = s.textContent
t = document.querySelector("#button-letra19")
t = t.textContent
u = document.querySelector("#button-letra20")
u = u.textContent
v = document.querySelector("#button-letra21")
v = v.textContent
w = document.querySelector("#button-letra22")
w = w.textContent
x = document.querySelector("#button-letra23")
x = x.textContent
y = document.querySelector("#button-letra24")
y = y.textContent
z = document.querySelector("#button-letra25")
z = z.textContent


letras = [a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z]


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
  
  return novaPalavra;  
}

function criaInputLetra(){

  for(var i = 0; i < novaPalavra.length; i++){
    var inputLetra = document.createElement('input');
    var div = document.getElementById('teste');
    inputLetra.classList.add("input-letras");
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

letraA = document.querySelector("#button-letra0");
letraA.addEventListener('click', function(){
  var letraDigitada = a;

  console.log(letraDigitada)
})

letraB = document.querySelector("#button-letra1");
letraB.addEventListener('click', function(){
  var letraDigitada = b;

  console.log(letraDigitada)
})

letraC = document.querySelector("#button-letra2");
letraC.addEventListener('click', function(){
  var letraDigitada = c;

  console.log(letraDigitada)
})

letraD = document.querySelector("#button-letra3");
letraD.addEventListener('click', function(){
  var letraDigitada = d;

  console.log(letraDigitada)
})

letraE = document.querySelector("#button-letra4");
letraE.addEventListener('click', function(){
  var letraDigitada = e;

  console.log(letraDigitada)
})

letraF = document.querySelector("#button-letra5");
letraF.addEventListener('click', function(){
  var letraDigitada = f;  

  console.log(letraDigitada)
})

letraG = document.querySelector("#button-letra6");
letraG.addEventListener('click', function(){
  var letraDigitada = g;

  console.log(letraDigitada)
})

letraH = document.querySelector("#button-letra7");
letraH.addEventListener('click', function(){
  var letraDigitada = h;

  console.log(letraDigitada)
})

letraI = document.querySelector("#button-letra8");
letraI.addEventListener('click', function(){
  var letraDigitada = i;

  console.log(letraDigitada)
})

letraJ = document.querySelector("#button-letra9");
letraJ.addEventListener('click', function(){
  var letraDigitada = j;

  console.log(letraDigitada)
})

letraK = document.querySelector("#button-letra10");
letraK.addEventListener('click', function(){
  var letraDigitada = k;

  console.log(letraDigitada)
})

letraL = document.querySelector("#button-letra11");
letraL.addEventListener('click', function(){
  var letraDigitada = l;

  console.log(letraDigitada)
})

letraM = document.querySelector("#button-letra12");
letraM.addEventListener('click', function(){
  var letraDigitada = m;

  console.log(letraDigitada)
})

letraN = document.querySelector("#button-letra13");
letraN.addEventListener('click', function(){
  var letraDigitada = n;

  console.log(letraDigitada)
})

letraO = document.querySelector("#button-letra14");
letraO.addEventListener('click', function(){
  var letraDigitada = o;

  console.log(letraDigitada)
})

letraP = document.querySelector("#button-letra15");
letraP.addEventListener('click', function(){
  var letraDigitada = p;

  console.log(letraDigitada)
})

letraQ = document.querySelector("#button-letra16");
letraQ.addEventListener('click', function(){
  var letraDigitada = q;

  console.log(letraDigitada)
})

letraR = document.querySelector("#button-letra17");
letraR.addEventListener('click', function(){
  var letraDigitada = r;

  console.log(letraDigitada)
})

letraS = document.querySelector("#button-letra18");
letraS.addEventListener('click', function(){
  var letraDigitada = s;

  console.log(letraDigitada)
})

letraT = document.querySelector("#button-letra19");
letraT.addEventListener('click', function(){
  var letraDigitada = t;

  console.log(letraDigitada)
})

letraU = document.querySelector("#button-letra20");
letraU.addEventListener('click', function(){
  var letraDigitada = u;

  console.log(letraDigitada)
})

letraV = document.querySelector("#button-letra21");
letraV.addEventListener('click', function(){
  var letraDigitada = s;

  console.log(letraDigitada)
})

letraW = document.querySelector("#button-letra22");
letraW.addEventListener('click', function(){
  var letraDigitada = w;

  console.log(letraDigitada)
})

letraX = document.querySelector("#button-letra23");
letraX.addEventListener('click', function(){
  var letraDigitada = x;

  console.log(letraDigitada)
})

letraY = document.querySelector("#button-letra24");
letraY.addEventListener('click', function(){
  var letraDigitada = y;

  console.log(letraDigitada)
})

letraZ = document.querySelector("#button-letra25");
letraZ.addEventListener('click', function(){
  var letraDigitada = z;

  console.log(letraDigitada)
})








  









  




