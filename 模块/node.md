# 模块查找流程：
1.从module.exports找出第一个路径
2.直接从该路径查找该文件， 存在结束， 不存在查找下一个
3.尝试添加.js .json .node后缀查找
4.尝试将requir的参数当做一个包来查找，（去找package.json文件中的main键的值）

# 缓存 require
一个模块被其它模块引入两次后，会在第一次加载完之后加入缓存

# return module.exports
在当前模块内会
function(module, exports, require, __dirname, __pathname){
    // 开始
    exports = module.exports;
    
    // 结束
    return module.exports;
}

# module属性和方法
module.id      模块的ID，也就是模块的绝对路径
module.filename   模块文件名， 也就是模块的绝对路径
module.loaded    模块是都加载完成
module.parent    父模块，即调用当前模块的模块对象
module.child     子模块， 即当前模块require的对象
module.exports   导出对象
module.paths     模块的查找路径

# require
main     主模块
resolve  实际查找结果路径
cache    模块缓存
delete cache   删除缓存