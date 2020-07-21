<template>
    <div class="rem_demo">
        <div class="d1"></div>
        <div class="d2"></div>
        <phone-input></phone-input>
    </div>
</template>

<script>
import PhoneInput from '../../common_resource/components/PhoneInput.vue'
export default {
    components: { PhoneInput },
    data() {
        return {
            
        }
    },
    methods: {
        
    },
    created() {
        
    }
}
</script>

<style lang="scss" scoped>
@import '../../common_resource/scss/function.scss';
    .d1{
        width: _px(750);
        height: _px(200);
        margin: 0 auto;
        background-color: rgb(36, 95, 92);
    }
    .d2{
        width: 100%;
        height: _px(200);
        margin: _px(60) auto;
        background-color: rgb(67, 67, 104);
    }
</style>
