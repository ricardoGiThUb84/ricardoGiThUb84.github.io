function setup() {
 
  createCanvas(600, 400);
  trilha.loop();
  
}

function draw() {
  desenharCampo();
  
  
  fill(color(255));
  criarBola();
  
  movimentarBola();
    

  colisaoBolaParede();
  incluirPlacar();
  marcarPonto();


  movimentarRaquete();
  movimentarRaqueteJogador2();
  
 
  
  colisaoRaqueteBilioteca(raqueteJogadorX[0],raqueteJogadorY[0]);
  colisaoRaqueteBilioteca(raqueteJogadorX[1],raqueteJogadorY[1]);
  colisaoRaqueteBilioteca(raqueteJogadorX[2],raqueteJogadorY[2]);
  colisaoRaqueteBilioteca(raqueteJogadorX[3],raqueteJogadorY[3]);
    
    
 
  criarRaquete(traveX,traveY,larguraTrave,alturaTrave);
  criarRaquete(traveOponenteX,traveOponenteY,larguraTraveOponente,alturaTrave);
  
  
 for(let i = 0; i < raqueteJogadorX.length; i++){
   
      criarRaquete(raqueteJogadorX[i],raqueteJogadorY[i],comprimentoRaquete[i],alturaRaquetes[i],i);
criarRaquete(raqueteJogadorX[i],raqueteJogadorY[i],comprimentoRaquete[i],alturaRaquetes[i],i);

  
criarRaquete(raqueteJogadorX[i],raqueteJogadorY[i],comprimentoRaquete[i],alturaRaquetes[i],i);
criarRaquete(raqueteJogadorX[i],raqueteJogadorY[i],comprimentoRaquete[i],alturaRaquetes[i],i);

 }
  
 
    
    fill(color(255))
    campeao()
 
  
   
    
 
 
}