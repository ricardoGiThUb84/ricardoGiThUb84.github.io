
// variaveis raquete

let raqueteJogadorX = [400,100,500,200];
let raqueteJogadorY = [155,155,155,155];
let comprimentoRaquete = [10,10,10,10];
let alturaRaquetes = [90,90,90,90];


// variaveis raquete oponente


let velocidadeRaqueteY;
let diminuirVelocidadeOponente = 60;

// variavel gol

let traveX = 0, traveY = 200-60, larguraTrave = 6, alturaTrave = 90;
let traveOponenteX = 594, traveOponenteY = 200-60, larguraTraveOponente = 6, alturaTraveOponente = 120;



function criarRaquete(x,y,larguraRaquete,alturaRaquete,contador){
    
    if(contador > 1){
      
      fill(color(255,200,10));
      rect(x, y, larguraRaquete, alturaRaquete);
    
    }else if(contador < 4){
      
      
      fill(color(200,100,50));
      rect(x, y, larguraRaquete, alturaRaquete);
    
    }else{
      
      fill(255);
      rect(x, y, larguraTraveOponente, alturaTraveOponente);
    }
     
  }
  
 

 
  
  
  
  
   


