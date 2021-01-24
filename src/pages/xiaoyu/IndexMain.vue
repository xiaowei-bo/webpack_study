<template>
	<div class="xiaoyu_index">
		<PoPo></PoPo>
		<Enter 
			v-if="curPage === 'ENTER'"
			@enterEnd="enterEnd">
		</Enter>
		<Content v-if="curPage === 'CONTENT'"></Content>
	</div>
</template>

<script>
import PoPo from '../../common_resource/components/PoPo';
import Enter from './components/Enter';
import Content from './components/Content';
export default {
	components: { PoPo, Enter, Content },
	data() {
		return {
			curPage: 'ENTER'
		}
	},
	methods: {
		enterEnd() {
			this.curPage = 'CONTENT';
		}
	},
	created() {
	}
}
</script>

<style lang="scss">
@import '../../common_resource/scss/function.scss';
body{
	width: 100%;
	height: 100%;
	overflow: hidden;
	background-color: #000 !important;
}

</style>
