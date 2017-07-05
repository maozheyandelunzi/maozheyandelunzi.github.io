

function Sky(option) { 
    this.ctx=option.ctx;
    this.skyImg=option.skyImg;
    this.skyX1=0;
    this.skyX2=option.skyImg.width;

    this.skySpeed=2;
    this.skyW=option.skyImg.width;
 };

Sky.prototype={
    constructor:Sky,
    DrawSky:function () { 
        //skyX的变化
         this.skyX1-=this.skySpeed;
         this.skyX2-=this.skySpeed;
         //判断
         if(this.skyX1<-this.skyW){
            this.skyX1+=2*this.skyW;
         }
         if(this.skyX2<-this.skyW){
            this.skyX2+=2*this.skyW  
         }
        this.ctx.drawImage(this.skyImg,this.skyX1,0);
        this.ctx.drawImage(this.skyImg,this.skyX2,0);
     }
}

