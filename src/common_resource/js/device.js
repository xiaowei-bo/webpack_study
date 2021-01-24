
function isBili(ua) {
    return /biliapp/i.test(ua);
}

function isKwai(ua) {
    return /kwai/i.test(ua);
}

function isQQMobile (ua) {
    return ua.indexOf('qq/') !== -1;
}

function isDingTalk (ua) {
    return ua.indexOf('dingtalk') !== -1;
}

function isTiktok (ua) {
    return ua.indexOf('aweme') !== -1;
}

function isXiMaLaYa (ua) {
    return ua.indexOf('kdtunion_iting') !== -1;
}

function isJinRiTouTiao (ua) {
    return ua.indexOf('newsarticle') !== -1;
}

function isWechat(ua) {
    return ua.match(/MicroMessenger/i) == 'micromessenger';
}

const platformList = [{
    name: 'bilibili',
    validator: isBili
},{
    name: 'kuishou',
    validator: isKwai
},{
    name: 'qq',
    validator: isQQMobile
},{
    name: 'dingding',
    validator: isDingTalk
},{
    name: 'tiktok',
    validator: isTiktok
},{
    name: 'ximalaya',
    validator: isXiMaLaYa
},{
    name: 'jinritoutiao',
    validator: isJinRiTouTiao
},{
    name: 'wechat',
    validator: isWechat
}];

export function getPlatformName() {
    const ua = navigator && navigator.userAgent.toLowerCase();
    for(const { name, validator } of platformList) {
        if(validator(ua)) {
            return name;
        }
    }
}