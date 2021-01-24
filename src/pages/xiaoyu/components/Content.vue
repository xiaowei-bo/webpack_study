<template>
	<div class="ai_voice">
		<Swiper></Swiper>
		<div class="box">
			<img class="icon" src="https://uploader.shimo.im/f/ZIhzM6CbrBVISRX8.gif" alt="">
			<button class="common_btn" @click="playAudio">你快听</button>
		</div>
		<div class="time">
			<p>我们在一起已经</p>
			<p>{{time}}天啦</p>
		</div>
		<div class="time cur">
			<p>{{moment(curTime).format('YYYY.MM.DD HH:mm:ss')}}</p>
			<p>时间走过的每一秒，我想你的每一秒</p>
		</div>
	</div>
</template>

<script>
import Swiper from './Swiper';
import moment from 'moment';
export default {
	components: { Swiper },
	data() {
		return {
			message: '',
			index: 0,
			curTime: 0,
			moment: moment,
			messageList: ['小玉同学，我愿做你的小尾巴，你走到哪我就随到哪，与你共赏长河落日，与你漫步江南烟雨，生命一世，我都要跟着你，跟你走遍天涯。', 
							'小可爱呀，一辈子很长，恰到好处的喜欢最舒服。你不用多好，我喜欢就好；我没有很好，你不嫌弃就好。',
							'亲爱的，咱们要做的，就是拉着彼此的手走到最后，其他的，交给命运。',
							'小仙女啊，阳光很好的时候，我就会想到你。毕竟没有谁能像你一样，给我比太阳还温暖的直觉。',
							'小祖宗，平凡的你给了我一份平凡的爱情，看在眼里，捧在手心，记在脑中，留在心头。只因你让我懂得了什么是真正的爱情。真的谢谢你。',
							'我想要在茅亭里看雨、假山边看蚂蚁，看蝴蝶恋爱，看蜘蛛结网，看水，看船，看云，看瀑布，看你甜甜地睡觉。',
							'小美女呀，爱你实在是一件满心欢喜的事情，忍不住偷偷地回应你。在千千万万温柔的小事情里，我的心里确认过了千千万万次：嗯，就是你了。',
							'我希望那人可以陪你看尽这细水长流，我希望那人可以温柔了你的岁月，我希望那人可以让你一直是天真的模样，我希望，那人是我。',
							'一直忘了告诉你，我有多幸运，遇见的是你。想有一天牵着你的手，去敬各位来宾的酒。'],
			PoPoConf: {
                mode: "down",
                icon: "star",
                count: 30,
                size: 6,
                colors: ["rgba(134,217,226,1)", "rgba(18,27,58,1)", "rgba(62,27,187,1)"],
			},
			time: 0
		}
	},
	methods: {
		count() {
			setTimeout(() => {
				this.curTime = new Date();
				this.count();
			}, 1000);
		},
		playAudio() {
			if(this.index >= 9) {
				this.index = 0;
			} else {
				this.index = this.index + 1;
			}
			this.message = this.messageList[this.index];
			console.log(this.message)
			console.log(this.index);
			dog.bdAudio(this.message)
		},
		compTime() {
			this.time = Math.floor((new Date().getTime() - 1416412800000)/1000/60/60/24);
		}
	},
	created() {
		this.curTime = new Date();
		this.compTime();
		this.count();
	},
	mounted() {
        anime({
            targets: '.ai_voice',
            opacity: ['0','1'],
            duration: 12000
        });
    }
}
</script>

<style lang="scss">
@import '../../../common_resource/scss/function.scss';
body{
	background-color: #000 !important;
}
.ai_voice{
	padding-top: _px(32);
	box-sizing: border-box;
	opacity: 0;
	.common_btn{
		width: _px(300);
		height: _px(100);
		display: inline-block;
		font-size: _px(30);
		margin: auto;
		background-color: #fff;
		position: relative;
		top: _px(-120);
	}
	.box{
		text-align: center;
	}
	.icon{
		margin: _px(24);
	}
	.time{
		width: _px(500);
		height: _px(300);
		line-height: _px(150);
		font-size: _px(60);
		text-align: center;
		background-color: #fff;
		border-radius: _px(20);
		margin: _px(32) auto;
		&.cur{
			margin-top: _px(68);
			width: _px(600);
			height: _px(160);
			line-height: _px(80);
			font-size: _px(30);
		}
	}
}
</style>
