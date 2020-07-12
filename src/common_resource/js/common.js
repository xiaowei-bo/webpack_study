import { loadingFun } from "../components/loading";

// 项目公共方法
function osInfo() {
    // 所用到的属性兼容性良好
    const info = window.performance;
    const nowTime = new Date().getTime();
    const pageLoadTime = nowTime - info.timing.navigationStart;
    const loadTypeMap = {
        0: 'url链接加载',
        1: '刷新加载或reload加载',
        2: '历史记录或前进后退操作加载',
        255: '其他方式加载'
    };
    /**
     * 页面加载方式
     * 0 —— 当前页面是通过链接等或者直接输入url加载
     * 1 —— 点击刷新页面按钮或者location.reload()加载
     * 2 —— 通过历史记录或者前进后退方式加载的
     * 225 —— 表示任何其他加载方式
     * */

    console.info(`当前页面为${loadTypeMap[info.navigation.type]}`);
    console.info(`当前页面加载用时：${pageLoadTime}ms`)
}

const dog = {
    osInfo,
    loadingFun
};
$.extend(window, {
    dog: dog
})
