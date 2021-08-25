const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground,heart,heart2,heart3;
var lance,invisground,invisleft,invisright;
var house1,tree1,hin1;
var sword;
var health = 3;


var stage =0;


function prelosd(){
 
}

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(width/2,400,900,70);

  lance = createSprite(400,200,30,50);
  lance.shapeColor = "red";

  invisground = createSprite(400,400,900,70);
  invisground.visible = false;

  invisleft = createSprite(0,200,10,500);
  invisleft.visible = false;

  invisright = createSprite(800,200,10,500);
  invisright.visible = false;

  house1 = new House(500,265,200,200);
  hin1 = createSprite(house1.body.position.x+0.5,house1.body.position.y+40,120,120);
  hin1.shapeColor = color(173,120,30);
  hin1.visible = false;

  tree1 = new Tree(200,267,160,270);

  heart = new Hearts(25,25,50,50);
  heart2 = new Hearts(75,25,50,50);
  heart3 = new Hearts(125,25,50,50);
  
  sword = new Sword(lance.x ,340,40,40);
}

function draw() {
  background(135,206,235);  
  Engine.update(engine);

  //console.log(lance.x);

  lance.collide(invisground);
  lance.velocityY =7;
  
  textSize(40);
  fill("white")
  text("Stage: "+stage,340,50);

  if(keyDown("LEFT_ARROW")) {
    lance.x = lance.x - 5;
    sword.body.position.x = lance.x - 40;
    
  }
  if(keyDown("RIGHT_ARROW")) {
    lance.x = lance.x + 5;
    sword.body.position.x = lance.x + 40;
  }
  if(lance.isTouching(invisleft)&&stage<=4){
    stage = stage + 1;
    lance.x = 780;
  }else{
    lance.collide(invisleft); 
  }
  if(lance.isTouching(invisright)&&stage>= -4){
    stage = stage - 1;
    lance.x = 20;
  }else{
    lance.collide(invisright); 
  }

  house1.display();
  tree1.display();
  sword.display();


  ground.display();
  heart.display();
  heart2.display();
  heart3.display();

  if(stage === 0){
    if(lance.x<=520&&lance.x>=475&&stage ===0){
      textSize(20);
      text("Press 'space' to enter",lance.x,lance.y-30);
      if(keyCode === 32){
        stage = "Your house";
        
      }
    } 



  }

    if(lance.x<=520&&lance.x>=475&&stage ==="Your house"){
      textSize(20);
      text("Press 'E' to exit",house1.body.position.x-60,200);
      if(keyCode === 101){
        stage = 0;
        
      }
    }
  
  if(stage ==="Your house"){
   hin1.visible = true;
   lance.depth = hin1.depth+1;
   lance.x = 505;
   sword.y = 1000;
   
  }else{
    hin1.visible =false;
  }



if(health === 3){
  heart3.body.position.y = 25;
  heart2.body.position.y = 25;
  heart.body.position.y = 25;
}
if(health === 2){
 heart3.body.position.y = 2000;
 heart2.body.position.y = 25;
 heart.body.position.y = 25;
}
if(health === 1){
  heart3.body.position.y = 2000;
  heart2.body.position.y = 2000;
  heart.body.position.y = 25;
 }
 if(health === 0){
  heart3.body.position.y = 2000;
  heart2.body.position.y = 2000;
  heart.body.position.y = 2000;
 }
if(keyDown("DOWN_ARROW")&&health>0){
  health = health-1
}
if(keyDown("UP_ARROW")&&health<4){
  health = health+1
}


sword.body.position.y =lance.y;

  sta(0,house1,500);
  sta(0,tree1,200,);
 // sta(1,sword,100);
  drawSprites();
}

function sta(v1,v2,num1){
  if(stage < v1||stage>v1){
    v2.body.position.x = 1000;
  }else if(stage === v1){
    v2.body.position.x = num1;
  }
}
