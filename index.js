const fs = require('fs');
const path = require('path');
const { pathToFileURL } = require('url');
// console.log(fs);
// 创建文件***
// fs.mkdir('./a', (err, data) => {
//     console.log(err, data)
//     if (!err) {
//         fs.mkdir('./a/b', (err, data) => {
//             console.log(err, data);
//             fs.writeFile('./a/b/1.txt', 'hello world', (err, data) => {
//                 console.log(err, data);
//             })
//             fs.writeFile('./a/b/1.js', "let name = 'zf'", (err, data) => {
//                 console.log(err, data);
//             })
//         });
//         fs.mkdir('./a/c', (err, data) => {
//             console.log(err, data)
//         });
//     }
// })
// 删除文件夹
// fs.rmdir('./a/b', (err, data) => {
//     console.log(err, data);
// })
// 手写删除文件的方法
function _rmdir(dir, cb) {
    fs.stat(dir, (err, data) => {
        // 判断是不是文件夹？
        if (data.isFile()) {
            fs.unlink(dir, (err, data) => {
                console.log('是文件直接删除！', err, data);
            })
        } else {
            fs.readdir(dir, (err, data) => {
                // console.log('该文件夹的子文件：', data)
                let dirs = data.map((val) => { return path.join(dir, val) });
                // 判断该文件夹是否是空文件夹
                if (dirs.length === 0) {
                    // 直接删除
                    fs.rmdir(dir, (err, data) => {
                        console.log('该文件是空文件夹，直接删除！', err, data);
                    })
                } else {
                    let dIndex = 0;
                    function done() {
                        // 判断是否删除完该文件夹子文件
                        if (++dIndex >= dirs.length) {
                            fs.rmdir(dir, (err, data) => {
                                console.log('该文件的所有子文件已删除，可以删除！', err, data);
                            })
                        }
                    }
                    // 递归
                    for (let i = 0; i < dirs.length; i++) {
                        _rmdir(dirs[i], done)
                    }
                }
            })
        }
    })
}
_rmdir('./a')