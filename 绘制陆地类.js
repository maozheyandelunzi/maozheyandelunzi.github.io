

function Land(option) { 
    this.ctx=option.ctx;
    this.landImg=option.landImg;
    this.landW=option.landImg.width;
    this.landSpeed=2;
    this.landX=option.landX;
    this.landY=option.canvas.height-option.landImg.height;
 }

Land.prototype={
    constructor:Land,
    drawLand:function () { 

      //landX的变化
      this.landX-=this.landSpeed;
      //判断位置
      if(this.landX<-this.landW){
          this.landX+=this.landW*4;
      }   
      //画陆地
      this.ctx.drawImage(this.landImg,this.landX,this.landY);
    }
}