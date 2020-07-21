/**
 * 项目公共方法
 */

import { loadingFun } from "../components/loading";

/**
 * @description 基础信息打印
 */
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
    console.info(`当前页面为${loadTypeMap[info.navigation.type]}`);
    console.info(`当前页面加载用时：${pageLoadTime}ms`)
}

/**
 * @param {Function} callback 
 * @description 监听页面返回状态 && 部分机型需搭配 reOpenScreen 使用
 */
function listenBack(callback) {
    window.addEventListener('pageshow',(e) => {
        if (e.persisted || (window.performance && window.performance.navigation.type == 2)) {
            callback && callback();
        }
    });
}

/**
 * @param {Function} callback 
 * @description 监听屏幕再次显示，移动端切后台或锁屏再次进入页面
 */
function reOpenScreen(callback) {
    window.addEventListener('visibilitychange', () => {
        if (document.visibilityState === 'visible') {
            callback && callback();
        }
    });
}

/**
 * @param {Number} designWidth 设计稿宽度
 * @description rem 自适应
 */
function remHandler(designWidth = 750) {
    const handler = () => {
        const clientWidth = document.documentElement.clientWidth;
        if(clientWidth > designWidth) {
            document.documentElement.style.fontSize = '100px';
        } else {
            document.documentElement.style.fontSize = `${100*(clientWidth/designWidth)}px`;
        }
    }
    handler();
    setTimeout(() => {
        window.addEventListener('resize', handler, false);
    },200);
}

const dog = {
    osInfo,
    loadingFun,
    listenBack,
    reOpenScreen,
    remHandler
};
$.extend(window, {
    dog: dog
})
