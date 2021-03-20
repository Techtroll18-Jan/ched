class Paper {
    constructor(x,y)
	{
		var options={
			'isStatic':false,
			'restitution':0.3,
			'friction':0.3,
			'density':1.2,		
			}
		this.x=x;
		this.y=y;
		this.paperWidth=12;
		this.paperHeight=12;
		
		this.image=loadImage("paper.png");
		this.body=Bodies.circle(this.x, this.y,this.paperWidth,this.paperHeight, options)
		World.add(world, this.paperBody);


	}
	display()
	{
			var pospaper=this.paperBody.position;
			
			

			push()
			translate(paperpos.x, paperpos.y);
			rectMode(CENTER)
			fill(255,0,255)
			imageMode(CENTER);
			image(this.image, 0,0,this.width, this.height)
			
			pop()
			
			
	}

}


