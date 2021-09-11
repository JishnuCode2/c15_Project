

var bow , arrow,  scene, balloon;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;
var arrowGroup, blueB, redB, pinkB, greenB;
var score=0;

var ammo = 1;
var PLAY = 1;
var END = 0;
var playState = PLAY ;



function preload(){
       // loading the images.
             backgroundImage = loadImage("background0.png");

             arrowImage = loadImage("arrow0.png");

             bowImage = loadImage("bow0.png");

             red_balloonImage = loadImage("red_balloon0.png");

             green_balloonImage = loadImage("green_balloon0.png");
 
             pink_balloonImage = loadImage("pink_balloon0.png");

             blue_balloonImage = loadImage("blue_balloon0.png");
                  
}






function setup() {
            //creating the canvas
                  createCanvas(550, 400);
              
                  

            //creating background
                  scene = createSprite(0,0,400,400);
                  scene.addImage(backgroundImage);
                  scene.scale = 2.5;
              
                  

            // creating bow to shoot arrow
                  bow = createSprite(530,220,20,50);
                  bow.addImage(bowImage); 
                  bow.scale = 1;
              
                  

            //assigning the groups
                  blueB = new Group();
                  redB = new Group();
                  greenB = new Group();
                  pinkB = new Group();
                  arrowGroup = new Group();
            
}





function draw() {
   //drawing the background
             createCanvas(550,400);


   // moving ground
                   scene.velocityX = -3 

                    if (scene.x < 50){
                              scene.x = 500;
                       }
                  
                  

   //moving bow
                   bow.y = World.mouseY
                  


   // release arrow when space key is pressed
             if(keyDown("space") && ammo === 1){
                           createArrow();
                           ammo = 0;
                 } 
                  


                   createBalloons();


 

   // increasing the score when an arrow touches a balloon.
                  if(arrowGroup.isTouching(blueB)){
                        blueB.destroyEach();
                        arrowGroup.destroyEach();
                        score = score+3;
                  }
                  if(arrowGroup.isTouching(redB)){
                        redB.destroyEach();
                        arrowGroup.destroyEach();
                        score = score+1;
                  }
                  if(arrowGroup.isTouching(greenB)){
                        greenB.destroyEach();
                        arrowGroup.destroyEach();
                        score = score+1;
                  }
                  if(arrowGroup.isTouching(pinkB)){
                        pinkB.destroyEach();
                        arrowGroup.destroyEach();
                        score = score+1;
                  }


   // displaying the sprites on the screen
                   drawSprites();


   // displaying the score
                   textSize(20);
                   fill("black");
                   text("Score:  "+ score, 430,20);



   // showing whether you can fire the arows.     
                  if(frameCount%70 === 0 && ammo === 0){
                              ammo = 1;
                  }
                  else if(ammo === 1){
                              text("Loaded",450, 370);      
                  }
                  else if(frameCount%100 > 0  && ammo === 0) {
                              textSize(20);
                              text("Reloading",450, 370);    
                  }




}









// Creating  arrows for bow
function createArrow() {
      var arrow= createSprite(100, 100, 60, 10);
      arrow.addImage(arrowImage);
      arrow.x = 530;
      arrow.y=bow.y;
      arrow.velocityX = -10;
      arrow.lifetime = 100;
      arrow.scale = 0.3;
      arrowGroup.add(arrow);
}


function createBalloons() {
//creating the balloons
   balloon = createSprite(0,Math.round(random(20, 370)), 10, 10);
      balloon.velocityX = 3;
      balloon.lifetime = 250;
      balloon.scale = 0.1;
      

//creating continous balloons
      var rand = Math.round(random(1,4));

      if (World.frameCount %100 == 0) {
          switch(rand) {

            case 1 : balloon.addImage(red_balloonImage);
                     redB.add(balloon);
            break;

            case 2 : balloon.addImage(green_balloonImage);
                     greenB.add(balloon);
            break;

            case 3 : balloon.addImage(pink_balloonImage);
                     balloon.scale = 1.5;
                     pinkB.add(balloon);
            break;

            case 4 : balloon.addImage(blue_balloonImage);
                     blueB.add(balloon);
                     balloon.velocityX = 5;
            default : break ;
          }
     
     

  
     }    
}
