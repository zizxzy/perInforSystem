const getRouter = require('router');
const router = getRouter();
const template = require('art-template');
const qs = require('querystring');
const Student = require('./../user');
router.get('/add', (req, res) => {
    let index = template('index.html', {});
    //返回增加页面
    res.end(index)
});
router.get('/list', async (req, res) => {
    let student =  await Student.find();
    console.log(student);
    let list = template('list.html', {
        student:student
    });
    //返回列表页面
    res.end(list)
});
router.post('/add', (req, res) => {
    let formDare = [];
    req.on('data', (data) => {
        formDare.push(data);
    });
    req.on('end', async () => {
        let buffer = Buffer.concat(formDare);
        let data = qs.parse(buffer.toString());
        await Student.create(data)
        //301代表重定向
        res.writeHead(301, {
            Location: '/list'
        });
        res.end();
    })
});
module.exports = router;
