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
        console.log(path.join(html))
        router.get(url, async (ctx, next) => {
            await ctx.render(path.join(html));
        });
    });

    console.log(path.resolve(__dirname, './config/index'))
    router.get('/', async (ctx, next) => {
        await ctx.render(path.resolve(__dirname, './config/index'), { routerList: routerList});
    });
    router.get('/500.paper', async (ctx, next) => {
        await ctx.render(path.resolve(__dirname, './config/500'));
    });
    router.get('/404.paper', async (ctx, next) => {
        await ctx.render(path.resolve(__dirname, './config/404'));
    });
    app.use(router.routes()).use(router.allowedMethods());
};