/**
 * 通用页面加载文件
 */
import '../scss/base.scss';
// import VConsole from 'VConsole';
//
// if(process.env.NODE_ENV === 'dev') {
//     new VConsole();
// }
dog.remHandler();
dog.osInfo();
window.onload = function() {
    dog.pullRefresh();
};

