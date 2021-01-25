class Mango{
    constructor(x,y){
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
            
        }
        this.width = 10;
        this.height = 10;
        this.scale = 0.2;
        this.image = loadImage("pics/mango.png");
        World.add(world, this.body);
    }
    display(){
        Push();
        translate(this.body.position.x, this.body.position.y);
        image(this.image, 0, 0, this.width, this.height);
        pop();
    	
    }

}