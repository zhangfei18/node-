const fs = require("fs");
// 异步
fs.readFile("index.txt", "utf8", (err, data) => {
    console.log(data);
});
// 同步
let data = fs.readFileSync('./index.txt', 'utf8');
console.log(data)