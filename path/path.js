const path = require('path');

const res = path.resolve('/foo/bar', 'tmp/file/'); //
// const res = path.join(__dirname, 'a.js'); // 拼接多个参数为一个路径
console.log(res);
