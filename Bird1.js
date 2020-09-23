class Bird1{

constructor(x,y){
   var options={
       restitution: 0.3,
       friction: 1,
       density: 1
   }
   this.body = Bodies.rectangle(x,y,100,100,options);
   this.width = 100;
   this.height = 100;

   World.add(world, this.body); 
}

display(){
 var pos = this.body.position;
 var angle = this.body.angle;

 push();
 translate(pos.x, pos.y);
 rotate(angle);
 rectMode(CENTER);
 strokeWeight(4);
 stroke("white")
 fill("red");
 rect(0,0,this.width, this.height);
 pop();

}

}