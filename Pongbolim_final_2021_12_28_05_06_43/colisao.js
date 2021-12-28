
let colidiu = false;



// colisao paredes

function colisaoBolaParede(){
    
 if((bolinhaX + raio) > width-5 || (bolinhaX - raio) < 5){
      
        velocidadeXbola *= -1;
    }
  
    if((bolinhaY + raio) > height-5 || (bolinhaY - raio) < 5){
      
        velocidadeYbola *= -1;
        
    }
    
  }

//colisao raquete

 function colisaoRaqueteBilioteca(x,y){
    
    colidiu = collideRectCircle(x, y, comprimentoRaquete[0], alturaRaquetes[0], bolinhaX, bolinhaY , raio);                
    
  
    if(colidiu){
      
       velocidadeXbola *= -1;
      
      
       chute.play();
      
    }

 
  }