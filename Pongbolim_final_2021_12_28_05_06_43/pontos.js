// pontos

let pontosJogador = 0;

let pontosOponente = 0;

// texto



function marcarPonto(){
  
    if(bolinhaX - raio < 5 && bolinhaY - raio > 200-60 && bolinhaY + raio < 200+60 ){
      
            pontosOponente += 1;
            gol.play();
            bolinhaX = 300;
            bolinhaY = 200;
            return true;
    }
  
      if(bolinhaX + raio > 595 && bolinhaY - raio > 200-60 && bolinhaY + raio < 200+60 ){
      
            pontosJogador += 1;
            gol.play();
            bolinhaX = 300;
            bolinhaY = 200;
            return true;
    }
    

  }


function incluirPlacar(){
    
    textAlign(CENTER);
    stroke(255);
    textSize(18);
    fill(color(130,140,50));
    rect(150,10,40,20);
    fill(color(130,140,50));
    rect(450,10,40,20);
    fill(255);
    text(pontosJogador, 170 , 26);
    text(pontosOponente, 470 , 26);
    
  }


        
    
