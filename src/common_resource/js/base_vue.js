import Vue from 'vue';
import InitPage from '../components/InitPage/index.vue'
export default function(options) {
    new Vue({
        data: () => {
            return Object.assign({}, options.data);
        },
        components: Object.assign({ InitPage }, options.components),
        created() {
            options.created && options.created();
        }
    }).$mount("#app");
}