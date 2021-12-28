// variaveis bola

let bolinhaX = 300, bolinhaY = 200, diametro = 15, raio = diametro / 2;

// variaveis velocidade bola
let velocidadeXbola = 5, velocidadeYbola = 5;

 function criarBola(){
    
    circle(bolinhaX, bolinhaY , diametro);
  }



function movimentarBola(){
    
    bolinhaX += velocidadeXbola;
    bolinhaY += velocidadeYbola;
    
  }