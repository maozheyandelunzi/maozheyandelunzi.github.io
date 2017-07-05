

function Bird(option) { 
    this.ctx=option.ctx;
    this.birdImg=option.birdImg;
    this.birdW=option.birdImg.width/3;
    this.birdH=option.birdImg.height;
    this.birdX=0;
    this.birdY=0;
    this.canvasX=100;
    this.canvasY=100;
    this.g=0.0003;
    this.birdSpeed=0;
    this.maxSpeed=0.4;
    this.maxAngle=45;
 }


Bird.prototype={
    constructor:Bird,
    drawBird:function (offsetT) { 
       
       //素材x的变化
       this.birdX++;
       //判断
       if(this.birdX>2){
           this.birdX=0;
       }
       
       //小鸟位置的变化  vt=v0+gt s=vt*t+g*t*t/2
       this.birdSpeed=this.birdSpeed+this.g*offsetT;
       var currentS=this.birdSpeed*offsetT+this.g*offsetT*offsetT;
       this.canvasY+=currentS;

       //小鸟头部的旋转
       this.ctx.save();
       //把画布的原点移动到小鸟的中心
       this.ctx.translate(this.canvasX+this.birdW/2,this.canvasY+this.birdH/2);
       //旋转小鸟根据速度
       var currentA=this.birdSpeed/this.maxSpeed*this.maxAngle;
       //判断角度
       if(currentA>=this.maxAngle){
           currentA=this.maxAngle;
       }
       //旋转小鸟
       this.ctx.rotate(Math.PI/180*currentA);
        //画小鸟
       this.ctx.drawImage(this.birdImg,this.birdX*this.birdW,this.birdY,this.birdW,this.birdH,-this.birdW/2,-this.birdH/2,this.birdW,this.birdH,)
       this.ctx.restore();
        
      
     }
}