<template>
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide"
                v-for="item in imgList">
                <img :src="item" alt="">
            </div>
        </div>
        <div class="swiper-pagination"></div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            imgList: ['https://uploader.shimo.im/f/eDFI33D1TZNvuBwL.jpeg', 
                        'https://uploader.shimo.im/f/QkxAArIuA1uJXRA7.jpeg', 
                        'https://uploader.shimo.im/f/1wljVnJABhNv20vo.jpeg', 
                        'https://uploader.shimo.im/f/FVfe7BGPVJpr9rjD.jpeg']
        }
    },
    methods: {
        initSwiper() {
            new Swiper('.swiper-container', {
                effect : 'fade',
                pagination: {
                    el: '.swiper-pagination',
                },
                autoplay: {
                    delay: 3000,
                    stopOnLastSlide: false,
                    disableOnInteraction: false
                },
                loop: true,
            });
        }
    },
    mounted() {
        this.$nextTick(() => {
            this.initSwiper();
        });
    }
}
</script>

<style lang="scss" scoped>
@import '../../../common_resource/scss/function.scss';
.swiper-container{
    width: 88%;
    height: _px(600);
    overflow: hidden;
    border-radius: _px(20);
    img{
        width: 100%;
        vertical-align: bottom;
    }
}
</style>
