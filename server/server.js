var koa         = require ('koa');
var serveStatic = require ('koa-serve-static');
var app = koa ();

app.use (
  serveStatic ('client', {
  'index': ['index.html']
  })
);

module.exports = app;
