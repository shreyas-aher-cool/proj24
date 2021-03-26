class Rubber{
  constructor(x,y,radius,options){
      var options={
     " restitutions":0.3,
      "density":1,
      "friction":5
      }
  this.body=Bodies.circle(x,y,radius,options);
  this.radius=radius;
  
  World.add(world,this.body);
  
  
  }
  
  display() {
      ellipseMode(RADIUS);
      fill("blue");
  
      circle(this.body.position.x,this.body.position.y,this.radius);
  
  }
  }
  
  