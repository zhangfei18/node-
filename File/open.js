let fs = require('fs');

let fd = fs.openSync('./line.txt', 'r');

let buf = new Buffer(6);
/**
 * fd 文件描述符
 * buffer 存放数据的容器
 * offset 往buffer里写的偏移量
 * length 长度
 * position 文件的当前读取位置
 */
fs.readSync(fd, buf, 0, 3, 0)
console.log(buf.toString())
fs.readSync(fd, buf, 3, 3, 3)
console.log(buf.toString())