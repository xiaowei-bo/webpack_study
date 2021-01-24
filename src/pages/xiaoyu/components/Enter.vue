<template>
    <div class="enter">
        <canvas id="gycanvas" width="300" height="300" ></canvas> 
        <div class="text_box">
            <div class="text">
                解锁我们的浪漫回忆
                <div class="move"></div>
            </div>
        </div>
        <div class="finger_box">
            <img v-if="!flag" class="finger finger_gif" :src="fingerGif" alt="">
            <div 
                @touchstart="countDown"
                @touchend="endPress"
                class="mask"></div>
            <img v-if="flag" class="finger finger_png" :src="fingerPng" alt="">
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            fingerGif: 'https://uploader.shimo.im/f/SpVlP6JgS7TEu0Al.gif',
            fingerPng: 'https://uploader.shimo.im/f/j5oYG1aM5uGN1aI8.png',
            flag: false,
            timer: null,
            showText: true
        }
    },
    methods: {
        countDown() {
            this.timer = setTimeout(() => {
                this.flag = true;
                clearTimeout(this.timer);
                this.timer = null;
                this.successFun();
            }, 3000);
        },
        endPress() {
            if(this.timer) {
                clearTimeout(this.timer);
                this.timer = null;
            }
        },
        successFun() {
            this.draw(() => {
                this.$emit('enterEnd');
            });
        },
        draw(callback) {
			var width = document.documentElement.clientWidth;  
    		var height = document.documentElement.clientHeight;  
    		document.getElementById("gycanvas").setAttribute("width",width);  
    		document.getElementById("gycanvas").setAttribute("height",height);  
  
    		//初始化    
    		var x0 = width/2;  
    		var y0 = height/2;  
    		var context = document.getElementById("gycanvas").getContext("2d");  
    		context.fillStyle = "white";  
    		var x,y;
 
			//存储要画的点的位置和数量 
    		var px=new Array(6000);
			var py=new Array(6000);
			//左边的点存3000 右边的点从3001开始存
			var i=0;
    		var j=3001;
 
    		//将  心  的坐标存入数组中
    		for(var t=-3; t<=3; t=t+0.001)  
    		{
				//坐标系的 x,y
    		    x=16*Math.pow(Math.sin(t),3);  
    		    y=13*Math.cos(t)-5*Math.cos(t*2)-2*Math.cos(t*3)-Math.cos(t*4);  
    		    //增大心  
    		    x=x*16;
    		    y=y*16;
				//算出对于计算机的坐标 计算机左上角是0,0
				x=x0+x;
				y=y0-y;
				//存入数组
				if(x<x0)
				{
					px[i]=x;
					py[i]=y;
					i=i+1;
				}
				if(x>x0)
				{
    		        px[j]=x;
					py[j]=y;
					j=j+1;
				}
				//x等于0的点就无视了 不影响大局
    		}
			//画点
			var stop;
			var xin=0;
    		function drawxin() {
				context.fillRect(px[xin],py[xin],10,10);
				xin=xin+10;
				if(xin==6000){
					//停止画心 
					clearInterval(stop);
					callback && callback();
				}
			}
			//每十毫秒画一次  
    		stop=setInterval(drawxin,1);
		}
    },
    mounted() {
        anime({
            targets: '.text',
            left: ['-50%','0'],
            duration: 3000
        });
    }
}
</script>

<style lang="scss">
@import '../../../common_resource/scss/function.scss';

.enter{
    .finger_box{
        background: rgba(33,33,33, .6);
        width: _px(500);
        height: _px(400);
        border-radius: _px(20);
        text-align: center;
        position: fixed;
        left: 50%;
        top: 70%;
        margin-left: _px(-250);
        margin-top: _px(-200);
        .mask{
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            z-index: 1;
        }
        .finger{
            width: _px(200);
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
        }
        .finger_png{
            width: _px(150);
        }
    }
    .text_box{
        text-align: center;
        padding-top: _px(300);
    }
    .text{
        width: _px(800);
        display: inline-block;
        font-size: _px(48);
        color: #fff;
        margin: 0 auto;
        position: relative;
        font-weight: bold;
        font-style: italic;
        letter-spacing: _px(10);
        &::before{
            content: '解锁我们的浪漫回忆';
            font-size: _px(72);
            position: absolute;
            font-style: italic;
            opacity: .6;
            left: _px(30);
            bottom: 0;
            font-weight: 900;
        }
    }
}
#gycanvas{    
	// width: _px(300);
	// height: _px(500);
    position: fixed;
    left: 0;
	top: _px(-300);
	display: block;
    background: transparent;//画布背景色    
} 
</style>
