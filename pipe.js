class pipe{
    constructor(game){
        this.game = game;
        this.images = [];

        this.img1Loaded = false;
        this.img2Loaded = false;

        this.x = 200;
        this.y = -(Math.floor(Math.random() * 200) + 50);
        this.loadImage();
    }
    loadImage(){
        let img1 = new Image();
        let img2 = new Image();

        img1.onload = () =>{
            this.img1Loaded = true;
            this.images.push(img1);
        }
        img2.onload = () =>{
            this.img2Loaded = true;
            this.images.push(img2);
        }
        img1.src = 'images/pipe-top.png';
        img2.src = 'images/pipe-bottom.png'
    }
    update(){
        this.x -= 2;
        if (this.x === -52) {
            this.x = 290;
            this.y = -(Math.floor(Math.random() * 200) + 50);
        }
    }
    draw(){
        if (this.img1Loaded && this.img2Loaded){
            //console.log("pipe");
            this.game.context.drawImage(this.images[0], this.x, this.y);
            this.game.context.drawImage(this.images[1], this.x, this.y + 320 + 100);


            // this.game.context.drawImage(this.images[0], this.x + 289, this.y);
            // this.game.context.drawImage(this.images[1], this.x + 289, this.y + 320 + 100);
        }
    }
}
