<template>
    <div class="rem_demo" ref="pdfDom">
        <img src="./images/logo.png" alt="">
        <p>我是第零段文章我是第零段文章我是第零段文章我是第零段文章pppp</p>
        <p class="pdf_item">我是第一段文章</p>
        <p class="pdf_item">我是第一段文章</p>
        <p class="pdf_item">我是第一段文章</p>
        <p class="pdf_item">我是第一段文章</p>
        <p class="pdf_item">我是第一段文章</p>
        <p class="pdf_item">我是第一段文章</p>
        <p class="pdf_item">我是第一段文章</p>
        <p class="pdf_item">我是第一段文章</p>
        <p class="pdf_item">我是第一段文章</p>
        <p class="pdf_item">我是第一段文章</p>
        <p class="pdf_item">我是第一段文章</p>
        <p class="pdf_item">我是第一段文章</p>
        <p class="pdf_item">我是第一段文章</p>
        <p class="pdf_item">我是第一段文章</p>
        <p class="pdf_item">我是第一段文章</p>
        <phone-input></phone-input>
        <p class="pdf_item">我是第一段文章</p>
        <p class="pdf_item">我是第一段文章</p>
        <p class="pdf_item">我是第一段文章</p>
        <p class="pdf_item">我是第一段文章</p>
        <p class="pdf_item">我是第一段文章</p>
        <p class="pdf_item">我是第一段文章</p>
        <p class="pdf_item">我是第一段文章</p>
        <p class="pdf_item">我是第一段文章</p>
        <p class="pdf_item">我是第一段文章</p>
        <p class="pdf_item">我是第一段文章</p>
        <p>我是最后一段文章</p>
        <phone-input></phone-input>
        <p class="pdf_item">我是第一段文章</p>
        <p class="pdf_item">我是第一段文章</p>
        <p class="pdf_item">我是第一段文章</p>
        <p class="pdf_item">我是第一段文章</p>
        <p class="pdf_item">我是第一段文章</p>
        <p class="pdf_item">我是第一段文章</p>
        <p class="pdf_item">我是第一段文章</p>
        <phone-input></phone-input>
        <p class="pdf_item">我是第一段文章</p>
        <p class="pdf_item">我是第一段文章</p>
        <p class="pdf_item">我是第一段文章</p>
        <p class="pdf_item">我是第一段文章</p>
        <p class="pdf_item">我是第一段文章</p>
        <p class="pdf_item">我是第一段文章</p>
        <p class="pdf_item">我是第一段文章</p>
        <p class="pdf_item">我是第一段文章</p>
        <p class="pdf_item">我是第一段文章</p>
        <p class="pdf_item">我是第一段文章</p>
        <p>我是最后一段文章</p>
        <phone-input></phone-input>
        <p class="pdf_item">我是第一段文章</p>
        <p class="pdf_item">我是第一段文章</p>
        <p class="pdf_item">我是第一段文章</p>
        <p class="pdf_item">我是第一段文章</p>
        <p class="pdf_item">我是第一段文章</p>
        <p class="pdf_item">我是第一段文章</p>
        <p class="pdf_item">我是第一段文章</p>
        <phone-input></phone-input>
        <p class="pdf_item">我是第一段文章</p>
        <p class="pdf_item">我是第一段文章</p>
        <p class="pdf_item">我是第一段文章</p>
        <p class="pdf_item">我是第一段文章</p>
        <p class="pdf_item">我是第一段文章</p>
        <p class="pdf_item">我是第一段文章</p>
        <p class="pdf_item">我是第一段文章</p>
        <p class="pdf_item">我是第一段文章</p>
        <p class="pdf_item">我是第一段文章</p>
        <p class="pdf_item">我是第一段文章</p>
        <p>我是最后一段文章</p>
        <phone-input></phone-input>
        yyyyyy
        <div class="btn" @click="downPdf">下载pdf</div>
    </div>
</template>

<script>
import PhoneInput from '../../common_resource/components/PhoneInput.vue';
export default {
    components: { PhoneInput },
    data() {
        return {
            htmlUrl: '',
            canvas: ''
        }
    },
    methods: {
        downPdf() {
            dog.dom2pdf(this.$refs.pdfDom, 'pdf_item');
        }
    },
    created() {
        console.log(ENV)
    }
}
</script>

<style lang="scss" scoped>
@import '../../common_resource/scss/function.scss';
    .rem_demo{
        padding-bottom: _px(200);
        p{
            font-size: _px(32);
            text-align: center;
        }
        .btn{
            width: _px(200);
            height: _px(80);
            line-height: _px(80);
            text-align: center;
            font-size: _px(36);
            background-color: orange;
            color: #fff;
            margin: _px(36) auto;
            border-radius: _px(80);
        }
    }
</style>
