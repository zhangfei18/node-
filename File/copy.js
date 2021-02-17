let fs = require("fs");

fs.open("./line.txt", "r", (err, fd) => {
    let bufferList = [];
    let readedByte = 0;

    function read() {
        let buf = new Buffer(3);
        fs.read(fd, buf, 0, 3, readedByte, (err, bytesRead) => {
            console.log(bytesRead, "bytesRead");
            // 开始复制
            fs.open("./line2.txt", "a", (err, fd) => {
                if (bytesRead > 0) {
                    // bufferList.push(buf.slice(0, bytesRead));
                    fs.write(
                        fd,
                        buf.slice(0, bytesRead),
                        0,
                        bytesRead,
                        readedByte,
                        (err, bytesWritten) => {}
                    );
                    readedByte += bytesRead;
                    read();
                } else {
                    // var result = Buffer.concat(bufferList);
                    // console.log(result.toString());
                    fs.fsync(fd, function() {
                        fs.close(fd, () => {});
                    });
                    return;
                }
            });
        });
    }
    read();
});