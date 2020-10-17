const KoaRouter = require('koa-router');
const router = KoaRouter();
const glob = require('glob');
const path = require('path');

module.exports = (app) => {
    const htmlFiles = glob.sync('docs/dist/**/*.html');
    htmlFiles.forEach((item) => {
        const html = item.replace('docs/dist/', '');
        const url = item.replace('docs/dist/views', '/mylife').replace('.html', '.paper');
        router.get(url, async (ctx, next) => {
            await ctx.render(path.join(html));
            next();
        });
    });

    router.get('/', async (ctx, next) => {
        ctx.body = 'jjjj';
    });
    app.use(router.routes()).use(router.allowedMethods());
};