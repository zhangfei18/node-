/**
 * 使用readable 和 read方法， 好处是可以一个个读取数据，方便我们控制
 * 而不会像data那样一下读取所有的数据；
 */
// // 前缓冲区
// let fs = require("fs");
// let rs = fs.createReadStream("./request.txt");
// let bufs = [];
// rs.on("readable", () => {
//     let chunk = rs.read();
//     // 注意：一定要区分最后一个chunk为null的时候， 不要存进bufs数组内
//     if (chunk !== null) {
//         bufs.push(chunk);
//     }
// });
// rs.on("end", () => {
//     let data = Buffer.concat(bufs).toString();
//     console.log(data.toString());
// });
// ===========2
// 前缓冲区
let fs = require("fs");
let rs = fs.createReadStream("./request.txt", {
    highWaterMark: 2,
});
let bufs = [];
rs.on("readable", () => {
    // 注意：一定要区分最后一个chunk为null的时候， 不要存进bufs数组内
    while (null !== (chunk = rs.read(1))) {
        bufs.push(chunk);
    }
});
rs.on("end", () => {
    let data = Buffer.concat(bufs).toString();
    console.log(data.toString());
});