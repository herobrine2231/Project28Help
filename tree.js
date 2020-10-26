class tree{

        constructor(x,y,width,height)
        {
            var options=
            {
                isStatic:true
            }
            this.x=x;
            thix.y=y;
            this.width=width;
            this.height=height;
            this.image=loadImage("Plucking mangoes/tree.png");
            this.bodies=Bodies.rectangle(x,y, width,height,options);
            World.add(world, this.body);
        }

        display()
        {
            var pos =this.body.position;
            rectMode(CENTER);
         //   fill("brown");
            rect(pos.x, pos.y, this.width, this.height);
        }
};