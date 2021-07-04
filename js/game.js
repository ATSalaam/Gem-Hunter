class Game{
    constructor(){
        this.level = 0;
        this.gameState = 0;
    }
    start(){
        
        if(this.gameState === 0){
                menu = new Menu();
                menu.display();
        }
        
    }
    gameUpdate(state){
          this.gameState = state;
      }
    levelUpdate(state){
        this.level = state;
    }
    play(){
        
        var player = createSprite(700,200,50,50);
        player.addImage("Henry", player_Img);
        player.scale = 0.1;
        player.velocityY = 2;
        
        if(this.level === 1){
            var platform1 = createSprite(700,260,100,20);
            platform1.addImage(platform_Img);
            platform1.scale = 0.1;
            player.collide(platform1);

            var gem = createSprite(200,230,20,20);
            gem.addImage(ruby_Img);
            gem.scale = 0.08;

        }
        if(this.level === 2){
            
        }
        if(this.level === 3){
            
        }
        if(this.level === 4){
            
        }
        if(keyIsDown(LEFT_ARROW)){
            player.velocityX -= 10;
            player.x = player.x - 10;
        }else if(keyIsDown(RIGHT_ARROW)){
            player.velocityX += 10;
            player.x += 10;
        }
        drawSprites();
        console.log(player.x);
    }

}

