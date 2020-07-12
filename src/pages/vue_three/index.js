import IndexMain from './IndexMain.vue';
import TestPage from './Test.vue';
import Vue from 'vue';
import store from '../../store'
import VueCompositionApi from '@vue/composition-api';

Vue.use(VueCompositionApi);

new Vue({
    store,
    data: () => {
        return {
        }
    },
    components: {
        'index-main': IndexMain,
        'test-page': TestPage
    }
}).$mount("#app");

