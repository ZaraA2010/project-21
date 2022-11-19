
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;

function preload()
{
	
}

function setup() {
	createCanvas(1000,700);


	engine = Engine.create();
	world = engine.world;
	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}

	ball=Matter.Bodies.circle(250,300,20,ball_options)
	World.add(world,ball)
    
	ground=	new Ground(500,680,1000,20)
	leftSide= new Ground(700,600,20,120)
	rightSide= new Ground(900,600,20,120)
	
	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  leftSide.display();
  rightSide.display();
  ellipse(ball.position.x,ball.position.y,20,20)
  
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,ball.position,{x:60,y:-60})
	}
}


	
