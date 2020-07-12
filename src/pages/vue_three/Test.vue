<template>
    <div>
        <p>{{`父：>>>>>>>>>>>>>>>>>>>>>${show}<<<<<<<<<<<<<<<<<<<<<`}}</p>
        <p>{{`父：>>>>>>>>>>>>>>>>>>>>>${text}<<<<<<<<<<<<<<<<<<<<<`}}</p>
        <p>{{`父：>>>>>>>>>>>>>>>>>>>>>${comp_show}<<<<<<<<<<<<<<<<<<<<<`}}</p>
        <button @click="editStore">改变store的值</button>
        <br/>
        <test-son></test-son>
        <hr>
        <button @click="switchShow">store改动</button>
        <hr>
        <button @click="$store.dispatch('editAll')">store Actions 改动</button>
    </div>
</template>

<script>
    import TestSon from "./components/TestSon";
    import { mapState, mapGetters, mapMutations } from 'vuex'
    export default {
        name: "Test",
        components: { TestSon },
        computed: {
            ...mapState({
                show: state => state.vueThree.show,
                text: state => state.vueThree.text
            }),
            ...mapGetters({
                comp_show: 'comp_show'
            })
        },
        setup() {
            const editStore = function () {
                this.$store.state.vueThree.show = `{{{{改变了}}}}`
            };
            return {
                editStore
            }
        },
        methods: {
            ...mapMutations({
                switchShow: 'switchShow'
            })
        },
        created() {
            console.log(this);
            console.log(`>>>>>>>>>>>>>>>>>>>>>${this.$store.state.vueThree.show}<<<<<<<<<<<<<<<<<<<<<`);
        }
    }
</script>

<style scoped>
</style>
