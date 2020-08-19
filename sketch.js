const Engine = Matter.Engine; 
const World = Matter.World; 
const Bodies = Matter.Bodies; 
const Constraint = Matter.Constraint;

var ball;
var engine;
var ground;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ball = new Ball(400,200,40);
  ground = new Ground(400,389,800,20);
}

function draw() {
  background("gold"); 
  strokeWeight(3);
  stroke("black");
  fill("turquoise");
  ground.display();
  keyPressed();
  fill("red");
  ball.display();
  drawSprites();
}

function keyPressed(){
  if(keyCode === UP_ARROW){
    //Matter.Body.applyForce(ball.body, ball.body.position, {x:0, y:-6});
    ball.body.position.y = ball.body.position.y-8;
    //ball.body.position.x=0;
  }
  //if(ball.body.position.y<=280){
   // keyCode = DOWN_ARROW;
  //}
  if(keyCode === LEFT_ARROW){
    Matter.Body.applyForce(ball.body, ball.body.position, {x:-1.5,y:0});
  }
  if(keyCode === RIGHT_ARROW){
    Matter.Body.applyForce(ball.body, ball.body.position, {x:1.5,y:0});
  }
}
