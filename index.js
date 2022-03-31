var jogador, vencedor = null;
var jogadorSelecionado = document.getElementById('jogador-selecionado');
var vencedorSelecionado = document.getElementById('vencedor-selecionado');
var melhorPontuacaoX = 0;
var melhorPontuacaoO = 0;

mudarJogador('X');

function escolherQuadrado(id){
  var quadrado = document.getElementById(id);
  if(quadrado.innerHTML !== '-'){
    return;
  }
  quadrado.innerHTML = jogador;
  quadrado.style.color = "#000";
  if(jogador === 'X'){
    jogador = 'O';
  }else{
    jogador = 'X';
  }
  
  mudarJogador(jogador);
  checaVencedor();
}

function mudarJogador(valor){
  jogador = valor;
  jogadorSelecionado.innerHTML = jogador;
}

function mudarVencedor(quadrado){
  vencedor = quadrado.innerHTML;
  vencedorSelecionado.innerHTML = vencedor;
}

function checaVencedor(){
  var quadrado1 = document.getElementById(1);
  var quadrado2 = document.getElementById(2);
  var quadrado3 = document.getElementById(3);
  var quadrado4 = document.getElementById(4);
  var quadrado5 = document.getElementById(5);
  var quadrado6 = document.getElementById(6);
  var quadrado7 = document.getElementById(7);
  var quadrado8 = document.getElementById(8);
  var quadrado9 = document.getElementById(9);

  if(checaSequencia(quadrado1,quadrado2,quadrado3)){
    aumenta(quadrado1,quadrado2,quadrado3);
    mudaCorQuadrado(quadrado1,quadrado2,quadrado3);
    mudarVencedor(quadrado1);
    return setTimeout(reset, 5000);
  }
  if(checaSequencia(quadrado4,quadrado5,quadrado6)){
    aumenta(quadrado4,quadrado5,quadrado6);
    mudaCorQuadrado(quadrado4,quadrado5,quadrado6);
    mudarVencedor(quadrado4); 
    return setTimeout(reset, 5000);
  }
  if(checaSequencia(quadrado7,quadrado8,quadrado9)){
    aumenta(quadrado7,quadrado8,quadrado9);
    mudaCorQuadrado(quadrado7,quadrado8,quadrado9);
    mudarVencedor(quadrado7);
    return setTimeout(reset, 5000);
  }
  if(checaSequencia(quadrado1,quadrado4,quadrado7)){
    aumenta(quadrado1,quadrado4,quadrado7);
    mudaCorQuadrado(quadrado1,quadrado4,quadrado7);
    mudarVencedor(quadrado1);
    return setTimeout(reset, 5000);
  }
  if(checaSequencia(quadrado2,quadrado5,quadrado8)){
    aumenta(quadrado2,quadrado5,quadrado8);
    mudaCorQuadrado(quadrado2,quadrado5,quadrado8);
    mudarVencedor(quadrado2);
    return setTimeout(reset, 5000);
  }
  if(checaSequencia(quadrado3,quadrado6,quadrado9)){
    aumenta(quadrado3,quadrado6,quadrado9);
    mudaCorQuadrado(quadrado3,quadrado6,quadrado9);
    mudarVencedor(quadrado3);
    return setTimeout(reset, 5000);
  }
  if(checaSequencia(quadrado1,quadrado5,quadrado9)){
    aumenta(quadrado1,quadrado5,quadrado9);
    mudaCorQuadrado(quadrado1,quadrado5,quadrado9);
    mudarVencedor(quadrado1);
    return setTimeout(reset, 5000);
  }
  if(checaSequencia(quadrado3,quadrado5,quadrado7)){
    aumenta(quadrado3,quadrado5,quadrado7);
    mudaCorQuadrado(quadrado3,quadrado5,quadrado7);
    mudarVencedor(quadrado3);
    return setTimeout(reset, 5000);
  }
}

function mudaCorQuadrado(quadrado1, quadrado2, quadrado3){
  quadrado1.style.backgroundColor = '#00b33c';
  quadrado2.style.backgroundColor = '#00b33c';
  quadrado3.style.backgroundColor = '#00b33c';
}

function checaSequencia(quadrado1, quadrado2, quadrado3){
  var eigual = false;

  if(quadrado1.innerHTML !== '-' && quadrado1.innerHTML === quadrado2.innerHTML && quadrado2.innerHTML === quadrado3.innerHTML){
    eigual = true;
  }

  return eigual;
}

function reset(){
  vencedor = null;
  vencedorSelecionado.innerHTML = '';
  for(var i = 1; i <= 9; i++){
    var quadrado = document.getElementById(i);
    quadrado.innerHTML = '-';
    quadrado.style.backgroundColor = 'rgba(238, 238, 238, 0.4)';
  }

  mudarJogador('X');
}

function aumenta(quadrado1, quadrado2, quadrado3){
  var pontosX = document.getElementById("pontosX");
  var pontosO = document.getElementById("pontosO");

  if(quadrado1.innerHTML === 'X' && quadrado1.innerHTML === quadrado2.innerHTML && quadrado2.innerHTML === quadrado3.innerHTML){
    melhorPontuacaoX++;
    pontosX.innerHTML = `${melhorPontuacaoX}`;
    return;
  }
  if(quadrado1.innerHTML === 'O' && quadrado1.innerHTML === quadrado2.innerHTML && quadrado2.innerHTML === quadrado3.innerHTML){
    melhorPontuacaoO++;
    pontosO.innerHTML = `${melhorPontuacaoO}`;
    return;
  }
  // Falha na checagem independente da ordem 
}
