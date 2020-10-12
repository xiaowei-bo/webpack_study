/**
 * @param {Function}pullCallback
 * 下拉回调，不传默认为 reload();
 * 有效下拉：指页面被下拉至文档顶部离开视口顶部
 * 暂不支持 微信等 q系浏览器
 * @使用方法
 *     const pullObj = Tools.pullRefresh(() => {
 *         // 刷数据接口
 *         // 刷新完成之后调用 pullObj.finish(); 顶部刷新区归位
 *     });
 *     pullObj.init(); 初始化
 */

export function pullRefresh(pullCallback) {
    const body = document.body;
    const app = document.getElementById('app');
    const app_style_cache = app.style;
    const pullTextEl = document.createElement('p');

    pullTextEl.style = "width: 100%; text-align: center; position: fixed; z-index: -1; left: 0; top: 0; font-size: 12px; line-height: 40px; color: #999; display: none;";
    const loadImg = document.createElement('i');
    loadImg.style = "display: inline-block; width: 15px; height: 15px; margin-right: 5px; background: url('https://static.17xueba.com/test/mozi/image/2020/09/20200927200903394356.png'); background-size: 100% 100%; vertical-align: middle; animation: looprotate 2s linear infinite;";
    const loadText = document.createElement('span');
    loadImg.style.opacity = 0;
    // 是否执行有效下拉回调标志位
    let refreshStatus = false;
    const isQBrowser = () => { // qq系浏览器
        const ua = navigator.userAgent.toLowerCase();
        return !!ua.match(/mqqbrowser|qzone|qqbrowser/i);
    };
    const finish = () => {
        if(isQBrowser() || Tools.isWechatBrowser()) return;
        loadImg.style.opacity = 0;
        loadText.innerText = '刷新成功';
        setTimeout(() => {
            app.style['transition'] = 'transform 0.2s';
            app.style['transform'] = 'translate(0, 0)';
            setTimeout(() => {
                pullTextEl.style['display'] = 'none';
                app.style = app_style_cache;
            }, 400);
        }, 500);
    };
    const init = () => {
        if(isQBrowser() || Tools.isWechatBrowser()) return;
        body.appendChild(pullTextEl);
        pullTextEl.appendChild(loadImg);
        pullTextEl.appendChild(loadText);
        let startP, moveLen;
        // 默认有效下拉回调
        const _pullCallback = () => {
            window.location.reload();
        };
        // 下拉处理
        const _pullHandler = (moveLen) => {
            // 下拉元素距离视口顶部距离
            const top_distance = app.getBoundingClientRect().top;
            // 有效下拉才做处理
            if(top_distance >= 0) {
                if(pullTextEl.style['display'] === 'none') {
                    // 有效下拉时才展示提示文案
                    pullTextEl.style['display'] = 'block';
                }
                // 下拉效果
                if(moveLen > 0 && moveLen < 50){
                    app.style['transform'] = 'translate(0, ' + moveLen + 'px)';
                } else if(moveLen >= 50 && moveLen < 100) { // 到刷新标志，下拉阻尼增大
                    const _moveLen = 50 + (moveLen - 50) * 0.6;
                    app.style['transform'] = 'translate(0, ' + _moveLen + 'px)';
                } else if(moveLen >= 100) { // 下拉超过 100，下拉阻尼再次增大
                    const _moveLen = 80 + (moveLen - 100) * 0.2;
                    app.style['transform'] = 'translate(0, ' + _moveLen + 'px)';
                }
                // 下拉触发
                if(top_distance < 50) {
                    loadText.innerText = '下拉即可刷新...';
                    refreshStatus = false;
                } else {
                    loadText.innerText = '松开立即刷新...';
                    refreshStatus = true;
                }
            }
        };
        app.addEventListener('touchstart', (e) => {
            startP = e.touches[0].pageY;
            app.style['transition'] = 'transform 0s';
        });
        app.addEventListener('touchmove', (e) => {
            moveLen = e.touches[0].pageY - startP;
            _pullHandler(moveLen);
        });
        app.addEventListener('touchend', (e) => {
            // 下拉元素距离视口顶部距离
            const top_distance = app.getBoundingClientRect().top;
            if(top_distance > 0) { // 当有效下拉发生后动画归位，重置样式
                if(refreshStatus) {
                    loadImg.style.opacity = 1;
                    loadText.innerText = '数据加载中...';
                    pullCallback ? pullCallback() : _pullCallback();
                    app.style['transition'] = 'transform 0.4s';
                    app.style['transform'] = 'translate(0, 40px)';
                } else {
                    app.style['transition'] = 'transform 0.4s';
                    app.style['transform'] = 'translate(0, 0)';
                    setTimeout(() => {
                        pullTextEl.style['display'] = 'none';
                        app.style = app_style_cache;
                    }, 400);
                }
            } else { // 未发生有效下拉的直接重置样式
                pullTextEl.style['display'] = 'none';
                app.style = app_style_cache;
            }
        })
    };
    return {
        init,
        finish
    }
}
