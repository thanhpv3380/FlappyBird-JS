class bird{
    constructor(game, pipe, point){
        this.game = game;
        this.pipe = pipe;
        this.point = point;

        this.images = [];

        this.img1Loaded = false;
        this.img2Loaded = false;
        this.img3Loaded = false;

        this.changeImage = 0;

        // set position and acceleration drop
        this.x = 70; //default position x 
        this.y = 100;
        this.speedY = 0;
        this.acceleration = 0.5;

        this.imageIndex = 2;
        this.loadImage();
    }
    loadImage(){
        var img1 = new Image();
        var img2 = new Image();
        var img3 = new Image();
       
        img1.onload = () =>{
            this.img1Loaded = true;
            this.images.push(img1);
        }
        img2.onload = () =>{         
            this.img2Loaded = true;  
            this.images.push(img2);           
        }
        img3.onload = () =>{
            this.img3Loaded = true;    
            this.images.push(img3);
        }
        img1.src = 'images/bird1.png';
        img2.src = 'images/bird2.png';
        img3.src = 'images/bird3.png'; 
    }
    flag(){
        //console.log("click");
        this.speedY -= 10;
    }
    update(){
        // auto drop 
        this.speedY += this.acceleration;
        this.y += this.speedY; 
        // animation bird
        this.changeImage++;
        if (this.changeImage % 10 == 0){
            if (this.imageIndex == 2) this.imageIndex = 0;
            else this.imageIndex ++;
        }
        if (this.y <= 0 || this.y >= 387) {
            if (this.y >= 387) this.y = 387;
            if (this.y <=0 ) this.y = 0;
            this.game.gameOver = true; 
        }
        // solve impact
        if (this.x + 34 >= this.pipe.x && this.x <= this.pipe.x + 51 && (this.y <= this.pipe.y+ 320 || this.y + 24 >= this.pipe.y + 320 + 100))
            this.game.gameOver = true; 

        
    }
    draw(){
        if (this.img1Loaded && this.img2Loaded && this.img3Loaded){
            //console.log(this.images);
            this.game.context.drawImage(this.images[this.imageIndex], this.x, this.y);
        }
    }
}