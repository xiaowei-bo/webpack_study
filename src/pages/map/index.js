import WorldMap from './WorldMap.vue';
import ChinaMap from './ChinaMap.vue';
import Vue from 'vue';

new Vue({
    data: () => {
        return {

        }
    },
    components: {
        WorldMap,
        ChinaMap
    }
}).$mount("#app");