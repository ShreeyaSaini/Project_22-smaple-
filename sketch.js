const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody, ground;
var box;

var base, side1, side2;

function preload() {
	//load image for helicopter
	helicopterIMG=loadImage("helicopter.png");

	//load image for package
	packageIMG=loadImage("package.png");
}

function setup() {
	createCanvas(800, 700);

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG);
	packageSprite.scale = 0.2;

	helicopterSprite = createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG);
	helicopterSprite.scale = 0.6;

	groundSprite = createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor = color(255);

	engine = Engine.create();
	world = engine.world;
	
	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true});
 	World.add(world, ground);

	 packageBody = Bodies.circle(width/2 , 200 , 5, {restitution: 0.5, isStatic: true});
	 World.add(world, packageBody);
	 push();
	 translate(packageBody.x, packageBody.y);
	 rotate(packageBody);
	 ellipseMode(RADIUS)
	 ellipse(packageBody.position.x, packageBody.position.y);
    pop();

	Engine.run(engine);

	base = new Box(400,655,200,20);
  	side1 = new Box(297,609,20,100);
	side2 = new Box(497,609,20,100);
}


function draw() {
  background(0);

  packageSprite.x= packageBody.position.x;
  packageSprite.y= packageBody.position.y;

  base.display();
  side1.display();
  side2.display();

  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody,false);
    
  }
}

