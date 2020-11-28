const World= Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;

var bird1;
var pig1,pig2;
var engine, world;
var box1,box2,box3,box4;
var logs1,logs2,logs3,logs4;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    pig1 = new pig(810,350);
    pig2 = new pig(810,220);
    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    box5 = new Box(810,160,70,70);
    bird1 = new Bird(200,200);
    logs1 =new logs(810,260,300,PI/2);
    logs2 =new logs(810,180,300,PI/2);
    logs3 =new logs(760,120,150,PI/7);
    logs4 =new logs(870,120,150,PI/-7);
    ground = new Ground(600,height,1200,20);
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    bird1.display();
    pig1.display();
    pig2.display();
    logs1.display();
    logs2.display();
    logs3.display();
    logs4.display();
    ground.display();
}