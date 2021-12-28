//pequena area

let pequenaAreaX = [5,545];
let pequenaAreaY = [200,200];
let pequenaAreaComprimento = [50,50];
let pequenaAreaAltura = [130,130];

//grande area

let grandeAreaX = [5,495];
let grandeAreaY = [200,200];
let grandeAreaComprimento = [100,100];
let grandeAreaAltura = [230,230];

//arco grande area

let arcoX =        [105,495,5,5,595,595];
let arcoY =        [200,200,5,395,5,395];
let larguraArco =  [60,60,30,30,30,30];
let alturaArco =   [80,80,30,30,30,30];
let anguloComeco = [-1.57,1.57,0,-1.57,1.57,3.14];
let anguloFim =    [3.14/2,-3.14/2,3.14/2,2 * 3.14,3.14,1.5*3.14];

// marcacaoBola

let marcacaoBolaX = [75,525,300];
let marcacaoBolaY = [200,200,200];
let marcacaoBolaDiametro = [5,5,5];


// circulo central
let circuloCentralX = 300;
let circuloCentralY = 200;
let circuloCentralDiametro = 100;

// linhaCentral 

let x1Linha = 300; 
let y1Linha = 5; 
let x2Linha = 300; 
let y2Linha = 395;



function desenharCampo(){
  
  
  
   fill(color(26,152,29));
    rect(0,0,600,400);

  for(let i = 0; i < marcacaoBolaX.length; i++){
  
  fill(color(255))
  circle(marcacaoBolaX[i],marcacaoBolaY[i],marcacaoBolaDiametro[i]);
  
}
  
  
 
  
 
   for(let i = 0; i < arcoX.length; i++){ 
     
     noFill();
     arc(arcoX[i], arcoY[i], larguraArco[i], alturaArco[i],   anguloComeco[i],anguloFim[i]);
  

}

  for(let i = 0; i < grandeAreaX.length; i++){
  
         noFill();
    rect(grandeAreaX[i],grandeAreaY[i]-grandeAreaAltura[i]/2, grandeAreaComprimento[i],grandeAreaAltura[i]);
  
  rect(grandeAreaX[i],grandeAreaY[i]-grandeAreaAltura[i]/2, grandeAreaComprimento[i],grandeAreaAltura[i]);
}

   for(let i = 0; i < pequenaAreaX.length; i++){
  
      rect(pequenaAreaX[i],pequenaAreaY[i]-pequenaAreaAltura[i]/2, pequenaAreaComprimento[i],pequenaAreaAltura[i]);
  
     
      rect(pequenaAreaX[i],pequenaAreaY[i]-pequenaAreaAltura[i]/2, pequenaAreaComprimento[i],pequenaAreaAltura[i]);
 }
   
    rect(0,0,600,400);
    line(x1Linha,y1Linha,x2Linha,y2Linha);
   
    stroke(255);
    noFill();
    circle(circuloCentralX,circuloCentralY,circuloCentralDiametro);
    
  
  // marcacao saida de bola
   rect(5,5,590,390);

   
}

 