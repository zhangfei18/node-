let fs = require("fs");

fs.open("./line.txt", 'r', (err, fd) => {
    let bufferList = [];
    let readedByte = 0;

    function read() {
        let buf = new Buffer(3);
        fs.read(fd, buf, 0, 3, readedByte, (err, bytesRead) => {
            console.log(bytesRead, 'bytesRead')
            if (bytesRead > 0) {
                readedByte += bytesRead;
                bufferList.push(buf.slice(0, bytesRead));
                read();
            } else {
                var result = Buffer.concat(bufferList);
                console.log(result.toString());
                return;
            }
        });
    }
    read();
});
// var fs = require('fs');
// var list = [];

// fs.open('line.txt', 'r', function(err, fd) {
//     var pos = 0;

//     function read() {
//         var buffer = new Buffer(3);
//         fs.read(fd, buffer, 0, 3, pos, function(err, bytesRead) {
//             list.push(buffer.slice(0, bytesRead));
//             pos += bytesRead;
//             if (bytesRead > 0)
//                 read();
//             else {
//                 var result = Buffer.concat(list);
//                 console.log(result.toString());
//             }
//         });
//     }
//     read();
// });