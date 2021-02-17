let http = require("http");
let fs = require("fs");
let url = require("url");
let pathM = require("path");
var formidable = require("formidable");
let successCount = 0;
let app = http
    .createServer((req, res) => {
        let { path } = url.parse(req.url);
        if (path === "/") {
            res.end("/");
        } else if (path === "/fileUpload") {
            res.setHeader("Access-Control-Allow-Origin", "*");
            let parser = new formidable.IncomingForm();
            parser.parse(req, (err, fileds, file) => {
                let { total, index, name, size } = fileds;
                console.log(total, index, name, size)
                let src = fs.createReadStream(file.data.path);
                let target = fs.createWriteStream(name + "." + index);
                target.on("close", function() {
                    if (successCount === total - 1) {
                        // 开始生成文件
                        let files = fs.readdirSync("."); //读取本目录下所有的文件
                        files.forEach((file) => {
                            // 后来生成的文件
                            if (file.startsWith(name + ".")) {
                                console.log(file);
                                // 取.后面的数字
                                let pos = (Number(pathM.extname(file).slice(1)) - 1) * size;
                                // ①
                                fs.createReadStream(file).pipe(
                                    fs.createWriteStream(name, { start: pos, flags: "a" })
                                );
                                fs.unlinkSync(file);
                                // ②
                                // let buf = fs.readFileSync(file);
                                // fs.writeFileSync(name, buf, 0, buf.length, pos);
                                // fs.unlinkSync(file);
                            }
                        });
                    } else {
                        successCount++;
                    }
                });
                src.pipe(target);
            });
            res.end("fei");
        }
    })
    .listen(8080);