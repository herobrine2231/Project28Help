class Stone{
    constructor(x,y,width,height)
    {
        var options=
        {
            isStatic: false,
            restitution:0,
            friction:1,
            density:1.2
        }
        this.width=width;
        this.height=height;
        this.image=loadImage("Plucking mangoes/stone.png");
        this.body=Bodies.rectangle(x,y,width,height,options);
        World.add(world, this.body);
    }
   
    display()
    {
        var pos = this.body.position;
        rectMode(CENTER);
        fill(255,0,255)
		imageMode(CENTER);
        image(this.image, 35,460,40,70)
    }

}