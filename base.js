class base{
    constructor(game){
        this.game = game;
        this.image = null;
        this.loaded = false;

        this.x = 0;
        this.y = 511;

        this.loadImage();
    }
    loadImage(){
        this.image = new Image();
        this.image.onload = () =>{
            this.loaded = true;
            //console.log("image loaded");
        }
        this.image.src = 'images/base.png';
    }
    update(){
        this.x -= 5;
        if (this.x === -290) this.x = 0;
    }
    draw(){
        if (this.loaded){
            this.game.context.drawImage(this.image, this.x, this.y - 100 );
            this.game.context.drawImage(this.image, this.x + 289, this.y - 100);
        }
    }
}