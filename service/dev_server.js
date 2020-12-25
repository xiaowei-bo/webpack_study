const path = require('path');
const Koa = require('koa');
const app = new Koa();
const koaNunjucks = require('koa-nunjucks-2'); // 模板引擎
const webpack = require('webpack');
const webpackConfig = require('../webpack.dev.js');
const compiler = webpack(webpackConfig);
const Serve = require('koa-static');
const webpackMiddleware = require('koa-webpack-dev-middleware');
const webpackHotMiddleware = require('koa-webpack-hot-middleware');

app.use(koaNunjucks({ // 为 app.context 提供一个 render 方法
   ext: 'njk',
   path: path.join(__dirname, '../'),
   nunjucksConfig: {
       trimBlocks: true // 开启转义 防Xss
   }
}));

app.use(webpackMiddleware(compiler));
app.use(webpackHotMiddleware(compiler));
app.use(Serve(path.join(__dirname, '../dist')));
const router = require('./router.js');
router(app);

app.use(async (ctx, next) => {
   try {
       if(path.extname(ctx.request.url) === '.paper') {
         //   switch (ctx.response.status) {
         //       case 404:
         //           await ctx.render('error/404');
         //           break;
         //       case 500:
         //           await ctx.render('error/500');
         //           break;
         //   }
       }
       await next();
   } catch (err) {

   }
});
// 获取本地 IP
function getIPAddress() {
   let interfaces = require('os').networkInterfaces();
   for (let devName in interfaces) {
       let iface = interfaces[devName];
       for (let i = 0; i < iface.length; i++) {
           let alias = iface[i];
           if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
               return alias.address;
           }
       }
   }
}

app.listen(8848, () => {
   console.log(`Serve is running at local: http://localhost:8848`);
   console.log(`Serve is running at network: http://${getIPAddress()}:8848`);
});