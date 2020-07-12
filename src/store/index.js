import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex);

import vue_three from './modules/vue_three';//引入某个store对象

const store = new vuex.Store({
    strict: process.env.NODE_ENV !== 'production',
    modules: {
        vueThree: vue_three
    }
});
export default store;
