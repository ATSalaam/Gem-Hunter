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
        push();
        var player = createSprite(700,200,50,50);
        player.addImage("Henry", player_Img);
        player.scale = 0.1;
        player.velocityY = 2;
        
        if(this.level === 1){
            var platform1 = createSprite(700,260,100,20);
            platform1.addImage(platform_Img);
            platform1.scale = 0.1;
            player.collide(platform1);
        }
        if(this.level === 2){
            
        }
        if(this.level === 3){
            
        }
        if(this.level === 4){
            
        }
        pop();
    }

}

