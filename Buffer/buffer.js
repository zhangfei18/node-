/** 1.copy */

let buf1 = new Buffer([1, 2, 3]);
let buf2 = new Buffer(6);
buf2[0] = 4;
buf2[1] = 5;
buf2[2] = 6;

//源Buffer.copy(目标Buffer, 目标Buffer开始扩充位置, 源Buffer开始截取位置, 源Buffer结束截取位置)
buf1.copy(buf2, 3, 0, 3);
console.log(buf2);

/** 2.concat */
let buf3 = new Buffer("飞哥");
let buf4 = new Buffer("很帅");
// Buffer的静态方法 Buffer.concat([Buffer1, BUffer2], 要获取的长度);
console.log(Buffer.concat([buf3, buf4], 12).toString());
// toString将Buffer转换为字符串

// 自己实现一个concat
function _concat(list, length) {
    if (list.length === 1) return list[0];
    if (!length) {
        length = 0;
        list.forEach((buf) => {
            length += buf.length;
        });
    }
    let buffer = new Buffer(length);
    let curIndex = 0;
    list.forEach((buf) => {
        buf.copy(buffer, curIndex);
        curIndex += buf.length;
    })
    return buffer.slice(0, length)
}
console.log(_concat([buf3, buf4], 12).toString());

/**溢出 */
var buf = new Buffer(2);
buf[0] = -250;
buf[1] = 260;

// 如果大于255，会对256取模，如果小于0，先模上256，再加上256
console.log(buf);