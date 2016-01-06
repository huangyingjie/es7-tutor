var serve = require('koa-static');
var koa = require('koa');
var app = koa();

// $ GET /package.json
app.use(serve('./pages'));

app.listen(3000);
