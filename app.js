const http = require('http');
const template = require('art-template');
const path = require('path');
const serveStatic = require('serve-static');
const dateFormat = require('dateformat');
template.defaults.imports.dateFormat = dateFormat;
require('./connect.js');
const router = require('./router/index.js');
//实现静态资源访问目录
const serve = serveStatic(path.join(__dirname, 'public'));
template.defaults.root = path.join(__dirname, 'views');
template.defaults.extname = '.html';
const app = http.createServer();
app.on('request', (req, res) => {
    //启用静态资源访问功能
    serve(req, res, () => {
    });
    router(req, res, () => {
    });
});
app.listen(3000);
console.log('服务器启动成功！！');
