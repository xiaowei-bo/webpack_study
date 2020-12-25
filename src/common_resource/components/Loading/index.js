import Loading from "./index.vue";
import Vue from 'vue';

let node = null;

const loadingFun = function (type) {
    const constructor = Vue.extend(Loading);
    const parent = document.body;
    if(node) { // 节点存在时开关
        node.$mount().showLoading = type;
    } else {
        if(type) { // 节点不存在时只能开
            node = new constructor();
            node.$mount().showLoading = type;
            parent && parent.appendChild(node.$mount().$el);
        }
    }
};

export {
    loadingFun
}
