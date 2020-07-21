import IndexMain from "./IndexMain.vue";
import EditFood from "./EditFood.vue";
import Vue from 'vue';

new Vue({
    data: () => {
        return {

        }
    },
    components: {
        IndexMain,
        EditFood
    }
}).$mount("#app");
