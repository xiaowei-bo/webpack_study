const KoaRouter = require('koa-router');
const router = KoaRouter();
const glob = require('glob');
const path = require('path');

module.exports = (app) => {
    const htmlFiles = glob.sync('docs/dist/**/*.html');
    console.log(htmlFiles);
    htmlFiles.forEach((item) => {
        const html = item.replace('docs/dist/', '');
        const url = item.replace('docs/dist/views', '').replace('.html', '.paper');
        console.log(url);
        router.get(url, async (ctx, next) => {
            await ctx.render(path.join(html));
            next();
        });
    });

    router.get('/', async (ctx, next) => {
        ctx.body = `node 服务已启动${JSON.stringify(htmlFiles)}`;
        next();
    });
    app.use(router.routes()).use(router.allowedMethods());
};