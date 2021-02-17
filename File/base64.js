// 三个8位字节 -> 四个6位字节

let buf = Buffer.from("飞");
// buf e9 a3 9e
// 转成十进制
console.log(parseInt("e9", 16)); //233
console.log(parseInt("a3", 16)); //163
console.log(parseInt("9e", 16)); //158
// 转成二进制
console.log((233).toString(2)) //11101001
console.log((163).toString(2)) //10100011
console.log((158).toString(2)) //10011110
    // 3 8 -> 4 6 补00
console.log(parseInt("00111010", 2)) //58
console.log(parseInt("00011010", 2)) //26
console.log(parseInt("00001110", 2)) //14
console.log(parseInt("00011110", 2)) //30

// base64对照表
let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
console.log(str[58] + str[26] + str[14] + str[30]);