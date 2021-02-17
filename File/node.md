# File

## 读取文件readFile
readFile(path, options, 回调函数)
配置项：
 * path 文件的路径
 * options
 *  encoding  文件的编码
 *  flag      权限

 ## 写文件 writeFile
 writeFile(path, options, 回调函数)
 read r write w execute
  读      写      可执行
  4       2       1

  ## base64
  将三个（8位）字节， 转换为四个（6位）字节， 然后再在六位前面补00；

  ## open 打开文件， 用于比较大的文件，分块读取
  let fd = fs.openSync(path, 权限)// 返回一个文件描述符
    * fd 文件描述符
    * buffer 存放数据的容器
    * offset 往buffer里写的偏移量
    * length 长度
    * position 文件的当前读取位置
  fs.readSync(fd, buffer, offset, length, position);

 
