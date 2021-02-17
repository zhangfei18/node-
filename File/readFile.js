/**
 * readFileSync 读取文件
 */
var fs = require("fs");
/**
 * O_RDONLY 只读
 * O_SYNC 同步
 * O_RDWR 可读可写
 * O_TRUNC truncate 清空文件
 * O_CREAT 如果原来没有就创建
 * O_WRONLY 只写
 * O_EXCL excludsive 排它操作
 * O_APPEND 追加
 */
/**
 * path 文件的路径
 * options
 *  encoding  文件的编码
 *  flag
 */
const fs = require("fs");
fs.readFile("./index.txt", { encoding: "utf8", flag: "r" }, (err, data) => {
    // console.log(err);
    console.log(data);
});
// flag: 'w', 虽然是前面是readFile， 但是index.txt里面的东西会全部消失，其实是相当于写入了空的内容