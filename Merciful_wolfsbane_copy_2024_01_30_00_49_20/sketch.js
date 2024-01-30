let roll; //let para criar variável
let rolling = true

function setup() {   //configuração inicial
  createCanvas(400, 400);  // desenhar o quadro de fora
}
function draw() {    // desenhar algo nesta tela que estou criando
  background(40, 170, 140); // cor de fundo 
  rect(100, 100, 200, 200, 30)

  if(rolling){  // inicia rodando
    roll = int(random(1,7))
  }
  
  if(roll == 1){
    //meio
    ellipse(200,200, 40) //desloc x, deslocy, arredondamento   
     }
  
  else if(roll == 2){
    //topo esquerdo
  ellipse(150, 150, 40)
    //baixo direito
  ellipse(250, 250, 40)
  }
   
  else if(roll == 3){
    //topo esquerdo
  ellipse(150, 150, 40) 
  ellipse(250, 250, 40)
  ellipse(200,200, 40)  
  }
  
  else if(roll == 4){
    //baixo direito
  ellipse(250, 250, 40)
  //baixo esquerdo
  ellipse(150, 250, 40)
  //topo direito
  ellipse(250, 150, 40)
    //topo esquerdo
  ellipse(150, 150, 40)     
  }
  
  else if(roll == 5){
    //baixo direito
  ellipse(250, 250, 40)
  //baixo esquerdo
  ellipse(150, 250, 40)
  //topo direito
  ellipse(250, 150, 40)
    //topo esquerdo
  ellipse(150, 150, 40) 
  //meio
  ellipse(200,200, 40) //desloc x, deslocy, arredondamento    
  }
  
  else {//6
     //baixo direito
  ellipse(250, 250, 40)
  //baixo esquerdo
  ellipse(150, 250, 40)
  //topo direito
  ellipse(250, 150, 40)
    //topo esquerdo
  ellipse(150, 150, 40) 
    //meio esquerdo
  ellipse(150, 200, 40)
  //meio direito
  ellipse(250, 200, 40) 
  }
}

  
  function mousePressed() {
    rolling = true
  }
  
  function mouseReleased() {
    rolling = false    
  }

