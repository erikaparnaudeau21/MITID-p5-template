
let posX=500;
let direction=1;

let posY=400;
let directionY=1;

function setup(){
    createCanvas(900, 800);
}
function draw(){
    background(0,0,0,20);
    fill("#6fc7ea");
    circle(width/2, height/2, mouseX + sin(frameCount * 0.1) * 30);
   // stroke("#f2dc5f");
   //stroke(mouseX / 4, mouseY / 4, 255);
//lignes verticales
    for (let i=0; i<140; i++){
        stroke(i * 2, 255 - i * 2, 255);
    line(posX-1000+i*15,-20,posX-1000+i*15+mouseY-400,810);
    } 
    //lignes horizontales 
    for (let i = 0;i<130;i++){
        stroke(i * 2, 255 - i * 2, 255);
        line(-20,posY-900+i*15,920,posY-900+i*15);
    }
//mouvement gauche-droite
    if(posX<-50){
        direction=1;

    }
    else if(posX>width){
        direction=-1;
    }
    posX+=direction;

//mouvement haut-bas
    if (posY<-50){
     directionY=1;
    }
    else if (posY>height){
        directionY=-1;
    }
    posY +=directionY;
}