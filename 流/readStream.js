let fs = require("fs");

let rs = fs.createReadStream("./request.txt");
rs.setEncoding("utf8");
rs.on('open', (err) => {
        console.log('文件打开')
    })
    // readable 是非流动模式， 数据会等待我们使用readd方法读取
rs.on('readable', () => {
        console.log('readable-', rs.read());
    })
    // data 是流动模式， 数据会一股脑的全部流出
rs.on("data", (data) => {
    console.log('data-', data);
});
rs.on('end', () => {
    console.log('读取完成')
})
rs.on('close', (err) => {
    console.log('文件关闭')
})