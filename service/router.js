const KoaRouter = require('koa-router');
const router = KoaRouter();
const glob = require('glob');
const path = require('path');

module.exports = (app) => {
    const htmlFiles = glob.sync('dist/**/*.njk');
    const routerList = [];
    htmlFiles.forEach((item) => {
        const html = item.replace('.njk', '');
        const url = item.replace('dist', '').replace('.njk', '.paper');
        routerList.push(url);
        router.get(url, async (ctx, next) => {
            await ctx.render(path.join(html));
            next();
        });
    });

    router.get('/', async (ctx, next) => {
        await ctx.render(`${process.cwd()}/service/config/index`, { routerList: routerList});
        next();
    });
    router.get('/500.paper', async (ctx, next) => {
        await ctx.render(`${process.cwd()}/service/config/500`);
        next();
    });
    router.get('/404.paper', async (ctx, next) => {
        await ctx.render(`${process.cwd()}/service/config/404`);
        next();
    });
    app.use(router.routes()).use(router.allowedMethods());
};