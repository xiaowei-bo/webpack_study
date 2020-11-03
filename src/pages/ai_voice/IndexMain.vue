<template>
	<div class="ai_voice">
		<input type="text" class="common_input" placeholder="请输入" v-model="message">
		<p>测试github 构建部署</p>
		<p>输入文本，按下按钮</p>
		<button class="common_btn" @click="playAudio">OOp</button>
	</div>
</template>

<script>
export default {
	data() {
		return {
			message: ''
		}
	},
	methods: {
		playAudio() {
			
			dog.bdAudio(this.message)
		}
	},
	created() {
		console.log('start')
	}
}
</script>

<style lang="scss" scoped>
@import '../../common_resource/scss/function.scss';
.ai_voice{
	.common_input{
		display: block;
		margin: 0 auto;
	}
	.common_btn{
		display: block;
		margin: _px(50) auto;
	}
}
</style>
