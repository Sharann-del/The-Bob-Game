class Ball{
    constructor(x, y, radius){
        var options={
            'restitution':0.8,
            'friction':1.0,
            'density':1.5
        }
        this.body = Bodies.circle(x, y, radius/2, options);
        this.radius = radius;
        this.body.position.x=x;
        this.body.position.y=y;
        World.add(world, this.body);
    }

    display(){
        push();
        ellipse(this.body.position.x, this.body.position.y, this.radius);
        ellipseMode(CENTER);
        pop();
        translate(this.body.position.x, this.body.position.y);
    }
}