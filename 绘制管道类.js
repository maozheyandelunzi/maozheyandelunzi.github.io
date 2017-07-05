

function Pipe(option) {
    this.ctx=option.ctx;
    this.pipeImage1=option.pipeImage1;
    this.pipeImage2=option.pipeImage2;
    this.pipeSpeed=2;
    this.pipeX=option.pipeX;
    this.pipeW=option.pipeImage1.width;
    this.pipeH=option.pipeImage1.height;
    this.pipeY1=0;
    this.pipeY2=0;
    this.randomY();
  }


Pipe.prototype={
    constructor:Pipe,
    drawPipe:function () {  
        this.pipeX-=this.pipeSpeed;
        //判断
        if(this.pipeX<3*this.pipeW-300){
            this.pipeX+=3*this.pipeW*6;
            this.randomY();
        }
        //画管道
        this.ctx.drawImage(this.pipeImage1,this.pipeX,this.pipeY1);
        this.ctx.rect(this.pipeX,this.pipeY1,this.pipeW,this.pipeH)
        this.ctx.drawImage(this.pipeImage2,this.pipeX,this.pipeY2);
        this.ctx.rect(this.pipeX,this.pipeY2,this.pipeW,this.pipeH)
    },
    randomY:function () {
        //中间缝隙留出250; 管道最少伸出50; 总高度为488; 最长伸出200 
        this.pipeY1 = Math.random()*200+50-this.pipeH;
        this.pipeY2=this.pipeY1+this.pipeH+150;
    }
}