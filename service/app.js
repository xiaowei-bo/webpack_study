const path = require('path');
const Koa = require('koa');
const ENV = process.env.NODE_ENV;
const KoaViews = require('koa-views');
const app = new Koa();

const Serve = require('koa-static');
app.use(Serve(path.join(__dirname, '../dist')));
app.use(KoaViews(path.join(__dirname, '../dist')));
const router = require('./router.js');
router(app);

app.listen(8848, () => {
   console.log(`Serve is running at: http://localhost:8848`);
});