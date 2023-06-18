//não entendi as intruções do projeto e não consegui perceber nuito bem o que fazer


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var groundObj,leftSide,rightSide;



function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}
	ball = Bodies.circle(250,100,20,ball_options);
	World.add(world,ball);

	Engine.run(engine);


}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipse(ball.position.x,ball.position.y,20)
  drawSprites();
 groundObj.display();
 groundObj = new ground(width/2,670,width,20);
 leftSide = new ground(1100,600,20,120);
rightSide = new ground(100,250,20,120);
}


function keyPressed(){
	if (keyCode === UP_ARROW){

		Matter.Body.applyForce(20,30,70);



	}
}