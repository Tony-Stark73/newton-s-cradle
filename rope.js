class rope{
    constructor(bodyA,bodyB,offsetX,offsetY){
 this.offsetX=offsetX;
 this.offsetY=offsetY;

        var options={
        bodyA:bodyA,
        bodyB:bodyB,
    
        pointB:{x:this.offsetX,y:this.offsetY },
        
    }
   this.rope= Constraint.create(options);
    World.add(world,this.rope);
}

display(){
  var pointA=this.rope.bodyA.position;
  var pointB=this.rope.bodyB.position;
var a1=pointA.x
var a2=pointA.y
var a3=pointB.x+this.offsetX
var a4=pointB.y+this.offsetY

    strokeWeight(4)
    line (a1,a2,a3,a4)
}


}