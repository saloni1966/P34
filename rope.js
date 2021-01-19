class Rope{
    constructor(bodyA, bodyB,offsetX){
       
        
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            pointB : {x: offsetX , y : 0},
           
           
        }
        this.chain = Constraint.create(options);
        this.offsetX = offsetX;
        World.add(world, this.chain);
    }

    display(){
        var pointA = this.chain.bodyA.position;
        var pointB = this.chain.bodyB.position;
        stroke("white");
        strokeWeight(4);
        
        line(pointA.x, pointA.y, pointB.x+this.offsetX , pointB.y);
    }
    
}