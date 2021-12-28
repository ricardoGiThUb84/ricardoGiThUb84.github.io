let campeaoTexto = "É Campeão!!!!";
let mensagem = "";
let maximoGols = 2;
let ganhador = '';
let quantidadeGols1 = null;
let quantidadeGols2 = null;


function campeao(){
  
    
 
     
      if(pontosJogador > pontosOponente && pontosJogador == maximoGols){
        
       textSize(50);
       text(campeaoTexto, 300, 200);
        mensagem = "\n"+"Jogador1 - "+ pontosJogador+ " X " + pontosOponente+" Jogador2";
        textSize(30);
        text(mensagem, 300, 200);
        return true;
        
       
        
        
}else if(pontosJogador < pontosOponente && pontosOponente == maximoGols ){
        
        textSize(50);
       text(campeaoTexto, 300, 200);
        mensagem = "\n"+"Jogador2 - "+ pontosOponente+ " X " + pontosJogador+" Jogador1";
        textSize(30);
        text(mensagem, 300, 200);
        
        ganhador = 'jogador2';
        quantidadeGols1 = pontosJogador;
        return true;
          
               
  }else if((pontosJogador >= 2 || pontosOponente >= maximoGols)){
    
       pontosJogador = 0;
       pontosOponente = 0;
    
  }  
   
 

  
}