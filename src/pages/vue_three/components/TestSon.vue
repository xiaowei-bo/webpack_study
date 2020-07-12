<template>
    <div>
        <p>{{`子：xxxxxx${$store.state.vueThree.show}xxxxxx`}}</p>
        <p>{{`子：xxxxxx${$store.state.vueThree.text}xxxxxx`}}</p>
        <button @click="editStore">子组件改动</button>
    </div>
</template>

<script>
    export default {
        name: "TestSon",
        setup() {
            const editStore = function () {
                this.$store.state.vueThree.show = `xxxx 改变了 xxxx`;
            };
            return {
                editStore
            }
        }
    }
</script>

<style scoped>

</style>
