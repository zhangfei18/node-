## 模块化与path
comman.js

//这样导出不可以覆盖

exports.a = 1

exports.b = 2;

exports.c = 3;

//可以覆盖

module.exports = {

    a,

    b,

    c

}



【require、exports 、module 、__dirname  __filename】是每一个文件模块单独的变量

其实就相当于：

//node执行文件的时候，就是把文件的内容放到一个函数中包起来执行！

(function(require、exports 、module、__dirname  __filename){

})()





包：内置的（fs、 path、 url、 http...）、

三方包（node_modules）、自己写的文件





path  :

.resolve()

.join() 就是拼

##Buffer
Global

    process === navigator

        env

        argv



Buffer---是一个容器（缓冲器），一般用来存储数据流

    Buffer.alloc(12)//声明固定大小的buffer

    Buffer.from() 

     Buffer.copy()  拷贝

     Buffer.concat() 拼接

     Buffer.slice() 截取

    一个汉字是三个字节，一个字节是有8 位二级制数字组成


## 文件读写

fs模块：

fs的所有方法 都有同步和异步之分

fs.readFile(path, {配置项}, callback)

配置项: eccoding: 编码方式 默认是nul 读出来的就是buffer

           flag: 权限

文件夹的操作
fs

fs.mkdir(path, {}, callback) //创建文件夹

fs.readdir(path, callback) //读文件夹信息

fs.stat() //查看文件信息

fs.rmdir()