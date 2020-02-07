class bg{
    constructor(game){
        this.game = game;
        this.image = null;
        this.loaded = false;
        
        this.x = 0;
        this.loadImage();
    }
    loadImage(){
        this.image = new Image();
        this.image.onload = () =>{
            this.loaded = true;
            //console.log("image loaded");
        }
        this.image.src = 'images/bg.png';
    }
    update(){
        this.x -= 1;
        if (this.x === -289) this.x = 0;
    }
    draw(){
        if (this.loaded){
            this.game.context.drawImage(this.image, this.x, 0);
            this.game.context.drawImage(this.image, this.x + 289, 0);
        }
    }
}