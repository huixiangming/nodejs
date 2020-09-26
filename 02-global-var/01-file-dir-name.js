#!/usr/bin/node

console.log('file name:', __filename);
console.log('dir name:',__dirname);

var fileName = __dirname + '/views/view.html';//方案一:不好，没有考虑跨平台
console.log('method1: '+fileName);

//方案二：不好，代码复杂，平台考虑不全面
switch(process.platform) {
  case 'linux':
    fileName = __dirname + '/views/view.html';
    break;
  case 'win32':
    fileName = __dirname + '\\views\\view.html';
    break;
  default:
    fileName = 'something wrong';
}
console.log('method2: '+fileName);

//方案三：最佳
const path = require('path');
fileName = path.join(__dirname,'views','login.html');
console.log('method3:',fileName);
