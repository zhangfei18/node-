# Buffer
缓冲区Buffer是暂时存放输入输出数据的一段内存
JavaScript语言没有二进制类型， 因此在处理TCP和文件流（二进制）的时候就需要Buffer了

## 创建Buffer
new Buffer(size)
new Buffer(array)
new Buffer(string)

### 进制转换
任意进制转十进制
parseInt(11, 2) 二进制转十进制
parseInt(11, 8) 八进制转十进制
parseInt(11, 16) 十六进制转十进制

十进制转任意进制
(3).toString(2)
(8).toString(8)
(17).toString(16)

## StringDecoder 分段接受数据
常用于服务器接受大数据时的分段拼接

## copy

## concat