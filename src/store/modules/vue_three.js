export default {
    state: { // 类似 data
        show: 'vue_three_store...',
        text: '99999999999999'
    },
    getters:{ // 类似 computed
        comp_show(state){//这里的state对应着上面这个state
            return `???${state.show}???`;
        }
    },
    mutations:{ // 类似 methods
        switchShow(state) {//这里的state对应着上面这个state
            state.show = 'switchShow 改动...';
        },
        editText(state) {
            state.text = '4444444444444';
        }
    },
    actions: { // 系列操作方法执行
        editAll(context) {
            context.commit('switchShow');
            context.commit('editText');
        }
    }
}
