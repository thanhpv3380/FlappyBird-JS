class point{
    constructor(game){
        this.game = game;

        this.imagePoints = [];
        
        for (let i = 0; i < 10; i++) {
            let img = new Image();
            img.src = `images/n${i}.png`;
            this.imagePoints.push(img);
            //console.log(this.imagePoints); 
        }
        
    }
    update(){
        
    }
    draw(mark){ 
        let n = mark;
        let amountNumber = [];
        if (mark === 0) {
            this.game.context.drawImage(this.imagePoints[0], 132, 50);
        }
        else {
            while (n !== 0){
                amountNumber.push(n % 10);
                n = Math.floor(n / 10);
            }
            let positionDraw = Math.floor((289-(amountNumber.length * 24))/2);
            for (let i = amountNumber.length - 1; i >= 0; i--){
                this.game.context.drawImage(this.imagePoints[amountNumber[i]], positionDraw + 24*(amountNumber.length-i-1), 50); 
            }
        }
    }
}