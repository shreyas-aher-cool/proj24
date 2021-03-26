class Sand {
  constructor(x, y, radius,options) {
    var options = {
        'restitution':0.5,
        'friction':5,
        'density':1
        
    }
    this.body=Bodies.circle(x,y,radius,options);
    this.radius=radius;
    
    World.add(world,this.body);
  
  }
  display() {
    ellipseMode(RADIUS);
    fill("brown")
    circle(this.body.position.x,this.body.position.y,this.radius);

}
}
