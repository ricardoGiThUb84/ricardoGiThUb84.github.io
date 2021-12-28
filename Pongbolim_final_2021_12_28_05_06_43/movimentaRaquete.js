function movimentarRaquete(){
   
  
 
      
       if(keyIsDown(UP_ARROW)){
        
  if(raqueteJogadorY[0] > 5){
    
     raqueteJogadorY[0] -= 10;
        raqueteJogadorY[1] -= 10;
  }
       
        
    }
  
    
      if(keyIsDown(DOWN_ARROW)){
        
       if(raqueteJogadorY[0] + alturaRaquetes[0] < 400){
         
          raqueteJogadorY[0] += 10;
          raqueteJogadorY[1] += 10;
       }
        
      
    
    }
      
       
      
      
    
    
}
  
  
 



  
function movimentarRaqueteJogador2(){
    
  
      if(keyIsDown(87)){
        
        if(raqueteJogadorY[2] > 5){
    
           raqueteJogadorY[2] -= 10;
          raqueteJogadorY[3] -= 10;
  }
          
        
      }
    
      if(keyIsDown(83)){
        
         if(raqueteJogadorY[2] + alturaRaquetes[2] < 400){
         
           raqueteJogadorY[2] += 10;
          raqueteJogadorY[3] += 10;
       }
         
        
      }
    
      
  }

// function movimentarRaqueteOponente(){
    
//    velocidadeRaqueteY = bolinhaY - raqueteJogadorY[2] - (alturaRaquetes[0] / 2 - diminuirVelocidadeOponente) ;
      
//       raqueteJogadorY[2] += velocidadeRaqueteY;
//       raqueteJogadorY[3] += velocidadeRaqueteY
    
//   }