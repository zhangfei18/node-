const fs = require("fs");

fs.writeFile("./index.txt", Buffer.from("你说的太对了"), { encoding: 'utf8', flag: 'w' }, (err) => {
    console.log(err, "err");
});
// 追加
fs.appendFile("./index.txt", Buffer.from('很赞同'), (err) => {
    console.log(err)
})