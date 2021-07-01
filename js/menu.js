class Menu{
    constructor(){
        this.title = createElement('h2')
        this.play = createButton('Play');
        this.levelSelect = createButton('Level Select');
    }
    hide(){
        this.title.hide();
        this.play.hide();
        this.levelSelect.hide();
    }
    display(){
        this.title.html("Gem Hunter");
        this.title.position(displayWidth/4-180, -25);
        this.title.style('font-size', '80px');
        this.title.style('color', 'green');

        this.play.position(displayWidth/4, 200);
        this.play.style('font-size', '20px');
        this.play.style('color', 'yellow');
        this.play.style('background', 'linear-gradient(0deg, rgba(129,88,13,1) 20%, rgba(24,8,117,1) 80%)');

        this.levelSelect.position(displayWidth/4-35, 250);
        this.levelSelect.style('font-size', '20px');
        this.levelSelect.style('color', 'red');
        this.levelSelect.style('background','linear-gradient(90deg, rgba(173,113,67,1) 24%, rgba(129,180,50,0.9643207624846813) 49%, rgba(149,0,31,1) 89%)');

        this.play.mousePressed(()=>{
            this.play.hide();
            this.levelSelect.hide();
            this.title.hide();
            game.gameUpdate(1);
            game.levelUpdate(1);
        })
    }
}