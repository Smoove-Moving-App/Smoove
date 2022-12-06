const Koa = require ('koa');
const app = new Koa();
const PORT = 3000
 
app.use (async ctx => {
  ctx.body = 'Hello World';
  });
app.listen (process.env.PORT ||PORT, () => console.log('Server listening to port', PORT));

