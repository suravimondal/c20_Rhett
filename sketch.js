    var fixedRect, movingRect;
    
    
    function setup() {
      createCanvas(800,400);
     fixedRect= createSprite(400,200,50,80);
     fixedRect.shapeColor="orange";
     fixedRect.debug= true;

     movingRect= createSprite(600,100,80,30);
     movingRect.shapeColor="blue";
     movingRect.debug=true;
     
    }

    function draw() {
      background(0);
      movingRect.x=mouseX;
      movingRect.y=mouseY;  
     
     console.log(movingRect.x-fixedRect.x);
     
      if(movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2 &&
        fixedRect.x-movingRect.x<movingRect.width/2+fixedRect.width/2
        ){
        movingRect.shapeColor="red";
        textSize(30);
        fill("yellow");
        text("COLLIDED!!!",50,200);
      }
      else{
        movingRect.shapeColor="blue";
      }


      drawSprites();
    }







