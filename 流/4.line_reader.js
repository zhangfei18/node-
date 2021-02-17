var fs = require("fs");
var EventEmitter = require("events").EventEmitter;
var util = require("util");
///r/n 0x0d 0x0a
// http://baike.baidu.com/link?url=ZwIraTFCTerLt5dqA-DLufYtnzCnwJJVDkyWnU-6zEFq15P7YBOzX4m5Bu4LHtuT_34TPwo9lfaJwpQWuDfMK_

var RETURN = 0x0d; // ascii \r       十六进制的d就等于十进制的13  回车 return 移动光标到该行的起始位置
var NEWLINE = 0x0a; // ascii  \n   十六进制的a等于十进制的10 换行 newline 换行至下一行行首起始位置

function LineReader(path) {
    this._rs = fs.createReadStream(path);
}
util.inherits(LineReader, EventEmitter);
// newListener 事件会在其他事件监听函数执行之前执行newListener事件的监听器函数
LineReader.prototype.on("newListener", function(name, func) {
    console.log("newListener")
    var self = this;
    if (name === "newLine") {
        this._rs.on("readable", function(data) {
            var data;
            var dataArr = [];
            while (null != (data = self._rs.read(1))) {
                // console.log(data, data[0] === NEWLINE)
                if (data[0] === NEWLINE) {
                    self.emit("newLine", new Buffer(dataArr));
                    dataArr = [];
                } else {
                    dataArr.push(data[0]);
                }
            }
            //   最后执行一次清空操作
            if (dataArr.length > 0) {
                self.emit("newLine", new Buffer(dataArr));
                dataArr = [];
            }
        });
    }
    if (name === "end") {
        this._rs.on("end", function() {
            self.emit("end");
        });
    }
});

var reader = new LineReader("./read.txt");
reader.on("newLine", function(data) {
    console.log('newLine')
    console.log(data.toString());
});
reader.on("end", function() {
    console.log("end");
});