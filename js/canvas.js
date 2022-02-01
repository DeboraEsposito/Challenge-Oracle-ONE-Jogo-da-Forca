var tela = document.querySelector('canvas');
var pincel = tela.getContext('2d');
pincel.fillStyle = 'rgb(239, 241, 245)';
pincel.fillRect(0, 0, 600, 400);

function desenhaCirculo(x, y, raio, cor) {

  pincel.fillStyle = cor;
  pincel.beginPath();
  pincel.arc(x, y, raio, 0, 2 * 3.14);
  pincel.fill();
}

function desenhaPoste(x, y, tamanho, cor){

    pincel.fillStyle = cor;
    pincel.fillRect(x , y, tamanho, tamanho);
    pincel.fillStroke = cor;
    pincel.strokeRect(x , y, tamanho, tamanho);

  
}

desenhaPoste(50, 60, 200, 20, "black");

desenhaCirculo(200, 200, 20, "red");