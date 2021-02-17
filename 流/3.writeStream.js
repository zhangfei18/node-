let fs = require("fs");
const { writer } = require("repl");

let ws = fs.createWriteStream("./number.txt", {
    highWaterMark: 12,
});
writeMillion(ws, "飞", "utf8");

function writeMillion(writer, data, encoding, callback) {
    let i = 100;

    function write() {
        let ok = true;
        while (i > 0 && ok) {
            // 把缓存区中的数据写入目标文件，同时读取剩余数据到 内存 中， write 返回 false表示缓冲区没有数据了， true表示还有数据
            ok = writer.write(data, encoding);
            console.log(ok);
            i -= 1;
        }
        if (i > 0) {
            // 缓存区中的数据全部写入后触发 drain 事件
            writer.once("drain", write);
        }
    }
    write();
}