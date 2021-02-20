var myworld,myengine,body,ball,a,p
function preload(){
}
function setup(){
    createCanvas(400,400)
    myengine = Matter.Engine.create()
    myworld = myengine.world;
    bob1 = new Bob(110, 250)
    bob2 = new Bob(150, 250)

    bob3 = new Bob(190, 250)
    bob4 = new Bob(230, 250)
    bob5 = new Bob(270, 250)
    roof = new Roof(width/2, 50, 250, 20)


    thread = Matter.Constraint.create({bodyA: bob5.body, pointB: {x: 270,y: 50}, stiffness: 1, length:250});
    thread1 = Matter.Constraint.create({bodyA: bob1.body, pointB: {x: 110, y: 50}, stiffness: 1, length: 250});
    thread2 = Matter.Constraint.create({bodyA: bob2.body, pointB:{x: 150, y: 50}, stiffness: 1,length: 250});
    thread3 = Matter.Constraint.create({bodyA: bob3.body, pointB:{x: 190, y: 50}, stiffness: 1, length: 250});
    thread4 = Matter.Constraint.create({bodyA: bob4.body, pointB:{x: 230, y: 50}, stiffness: 1, length: 250});   
    Matter.World.add(myworld, [thread1, thread2, thread, thread3, thread4]);
}
    
function draw(){
    background("red");
    Matter.Engine.update(myengine);
    line(bob1.body.position.x, bob1.body.position.y, thread1.pointB.x, thread1.pointB.y);
    line(bob3.body.position.x, bob3.body.position.y, thread3.pointB.x, thread3.pointB.y);
    line(bob4.body.position.x, bob4.body.position.y, thread4.pointB.x, thread4.pointB.y);
    line(bob5.body.position.x, bob5.body.position.y, thread.pointB.x, thread.pointB.y);
    line(bob2.body.position.x, bob2.body.position.y, thread2.pointB.x, thread2.pointB.y);

    bob1.display();
    roof.display();
    bob2.display();
    bob3.display();
    bob4.display();
    bob5.display();

    if(keyDown("left")){
        Matter.Body.applyForce(bob1.body, bob1.body.position, {x: -5, y: 20});
    }


}
