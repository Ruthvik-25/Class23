const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
var engine,world,object
function setup() {
  createCanvas(400,400);
  engine=Engine.create()
  world=engine.world
  
  box1=new Box(100,200,50,50)
  box2=new Box(150,300,60,90)
  ground=new Ground(200,390,width,20)


}

function draw() {
  background("blue"); 
  Engine.update(engine) 
  box1.display()
  box2.display()
  ground.display()
}