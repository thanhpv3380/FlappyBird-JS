const WIDTH = 289;
const HEIGHT = 511;
const FPS = 33;
class game {
    constructor() {
        this.canvas = document.createElement('canvas');
        this.context = this.canvas.getContext('2d');
        this.canvas.width = WIDTH;
        this.canvas.height = HEIGHT;

        document.body.appendChild(this.canvas);
        

        this.gameOver = false;

        // load image game over 
        this.imageGameOverLoaded = false;
        this.imageScoreBoardLoaded = false;
        this.imgLoseLoaded();

        this.imgPointLoaded = false;
        this.mark = 0;
       
        // create pipe 
        this.pipe = new pipe(this);

        // create bird
        this.bird = new bird(this, this.pipe);

        // create bg
        this.bg = new bg(this);

        // create base 
        this.base = new base(this);

        // create point
        this.point = new point(this);
        
        // add eventListener
        this.canvas.addEventListener('click', () =>{ 
            if (this.gameOver === true){
                location.reload();
            }
            else {
                this.bird.flag();
            }
        });
        this.loop();
        
    }
    imgLoseLoaded(){
        this.imageGameOver = new Image();
        this.imageScoreBoard = new Image();
        
        this.imageGameOver.onload = () =>{
            this.imageGameOverLoaded = true;
        }
        
        this.imageScoreBoard.onload = () => {
            this.imageScoreBoardLoaded = true;
        }

        this.imageGameOver.src = 'images/finish.png';
        this.imageScoreBoard.src = 'images/scoreBoard.png';
    }
    finish(){
        if (this.imageGameOverLoaded && this.imageScoreBoardLoaded){
            this.context.drawImage(this.imageGameOver, 48, 177);
            //this.context.drawImage(this.imageScoreBoard, 32, 220);
            this.context.font = "30px Arial";
            this.context.fillText(`Your Score: ${this.mark}`, 55, 250);
            
        }
    }
    loop(){ 
        this.update();
        this.draw();
        if (!this.gameOver) {
            //console.log("1");
            setTimeout( () => this.loop(), FPS);
        }
        else {
            this.finish();
        }     
    }
    update(){
        this.bird.update();
        this.bg.update();
        this.pipe.update();
        this.base.update();
        if (this.bird.x + 24 === this.pipe.x) this.mark++;
        this.point.update();
    }
    draw(){ 
        this.bg.draw();
        this.pipe.draw();
        this.base.draw();
        this.point.draw(this.mark);
        this.bird.draw();  
    }
}
var g = new game();