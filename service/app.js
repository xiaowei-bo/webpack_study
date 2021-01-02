const path = require('path');
const Koa = require('koa');
const app = new Koa();
const nunjucks = require('koa-nunjucks-2'); // 模板引擎
const logger = require('koa-logger'); // log 日志
const moment = require('moment');

console.log('app')
console.log(path.join(__dirname, '../../runtime'))
app.use(nunjucks({ // 为 app.context 提供一个 render 方法
   ext: 'njk',
   path: path.join(__dirname, '../../runtime'),
   nunjucksConfig: {
       trimBlocks: true // 开启转义 防Xss
   }
}));

const Serve = require('koa-static');
app.use(Serve(path.join(__dirname, '../dist')));
const router = require('./router.js');
router(app);
app.use(logger((str) => {
   console.log(`${moment().format('YYYY-MM-DD hh:mm:ss')}${str}`);
}));

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

app.listen(8848, () => {
   console.log(`Serve is running at: http://localhost:8848`);
});