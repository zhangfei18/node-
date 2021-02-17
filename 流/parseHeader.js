let fs = require("fs");
var StringDecoder = require("string_decoder").StringDecoder;
let rs = fs.createReadStream("./request.txt");

function parseHeader(callback) {
    let headers = "";
    let str = "";
    let decoder = new StringDecoder();
    rs.on("readable", readableCB);

    function readableCB(err) {
        let chunk = rs.read();
        console.log(chunk.toString())
            // while (chunk !== null) {
            //     str = decoder.write(chunk);
            //     console.log(/\r\n/.test(str))
            //     if (/\r\n\r\n/.test(str)) {
            //         rs.removeListener(readableCB);
            //         let splits = str.split(/\r\n\r\n/);
            //         console.log(splits)
            //         headers += splits.shift();
            //         let buf = new Buffer(splits.join(/\r\n\r\n/), "utf8");
            //         rs.unshift(buf);
            //     } else {
            //         headers += str;
            //     }
            // }
        callback(headers);
    }
}
parseHeader((header) => {
    console.log(header);
});