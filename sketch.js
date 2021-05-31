var canvas;
var block1,block2,block3,block4;
var ball, edges;
var music;

function preload(){
    // carga aquí el sonido
    music=loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    block1 = createSprite(0,580,360,30);
    block1.shapeColor = "blue";

    block2 = createSprite(295,580,200,30);
    block2.shapeColor = "orange";

    //crea dos bloques más aquí, tales como block3 y block4
    block3=createSprite(515,580,200,30);
    block3.shapeColor="pink";

    block4=createSprite(740,580,220,30);
    block4.shapeColor="yellow";

    ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor = rgb(255,255,255);
    //escribe el código para agregar velocidadX y velocidadY
    ball.velocityX=5;
    ball.velocityY=7;

}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();
    ball.bounceOff(edges);

    
    //escribe el código para rebotar la pelota del block1 
    if(block1.isTouching(ball) && ball.bounceOff(block1)){
        ball.shapeColor = "blue";
        music.play();
    }
    

    if(block2.isTouching(ball)){
        ball.shapeColor = "orange";
        //escribe el código para establecer la velocidadX y velocidadY de la pelota como 0
        ball.velocityX=0;
        ball.velocityY=0;

        //escribe el código para detener la música
        music.stop();
    }

    //escribe el código para rebotar la pelota del block3
    if(block3.isTouching(ball) && ball.bounceOff(block3)){
        ball.shapeColor = "pink";

    }
   
    //escribe el código para rebotar la pelota del block4
    if(block4.isTouching(ball) && ball.bounceOff(block4)){
        ball.shapeColor = "yellow";

    }

    drawSprites();
}
