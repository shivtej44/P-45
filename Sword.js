class Sword {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
      this.image = loadImage("sword.png");
      this.image2 = loadImage("sword2.png");
    }
    display(){
      var pos =this.body.position;
         push();
        imageMode(CENTER);
        
        if(keyDown("LEFT_ARROW")&&stage !="Your house") {
            image(this.image,pos.x,pos.y,this.width,this.height);
          }
          if(keyDown("RIGHT_ARROW")&&stage !="Your house") {
            image(this.image2,pos.x,pos.y,this.width,this.height);
          }
        pop();
    }
  };
