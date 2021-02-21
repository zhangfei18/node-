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

title: node模块
speaker:  珠峰培训
url: http://www.zhufengpeixun.com
transition: cards
theme: blue
highlightStyle:javascript


#模块和包



##JS的不足
- js没有模块系统，不支持**封闭作用域**或**依赖管理**
- 没有**标准库**，没有文件系统和IO流API
- 没有**包**管理系统，不能自动加载和安装依赖


##commjs规范
- 以**模块**划分所有的功能，一个 node.js由大量模块组成，**每个JS文件都是一个模块**。
- 实现了require方法，npm基于**commonjs**.实现了自动加载和安装依赖


##模块和包的优点
- 提高效率
- 增加**内聚性**
- 有助分工
- 重构方便
- 提高代码质量


##模块的分类 
- *核心*模块 {:&.moveIn}
- *文件*模块
  - 后缀名为.js的文件
  - 后缀名为.json 的JSON文件
  - 后缀名为.node 的经过编译后的二进制模块文件
- *第三方*模块


##文件模块
- js模块 {:&.moveIn}
  ```javascript
     (function(exports,require,module,__filename,__dirname){
       自定义代码
       return module.exports;
     });
  ```
  - 使用exports对象导出**成员** {:&.moveIn}
  - 模块定义为**类**
  - 定义**类变量**
- json模块
  - fs读入内存，并且转化成**json**对象 
- 二进制模块
  - node编译后的二进制文件 不需要再编译，可以直接使用  


##第三方模块
<img src="http://7xjf2l.com2.z0.glb.qiniucdn.com/lookmodule.jpg" class="img-responsive">


##查找文件模块
当没有以'/'或者'./'来指向一个文件时，这个模块要么是**核心模块**，要么就是从**node_modules**文件夹加载的
<img src="http://7xjf2l.com2.z0.glb.qiniucdn.com/lookfile.jpg" class="img-responsive">
1. 从**module.paths**中取出第一个目录开始 {:&.moveIn}
2. 直接从目录中查找该文件，存在结束，不存在执行下一条
3. 尝试添加.js .json .node**后缀**查找
4. 尝试将require()的参数作为一个**包**来查找，读取package.json，找到**main**指定的文件，不存在进行 3
5. 查询查找该目录下的**index**(.js/.node)
6. 继续失败查看**下一个**目录
很像**作用域链**查找，**同步阻塞式**的查找，很慢。幸亏有**缓存**

##module属性和方法
- module.id 模块的ID,也就是模块的**绝对路径** {:&.moveIn}
- module.filename 模块文件名 模块的**绝对路径**
- module.loaded 是否**加载完成**
- module.parent **父模块**，即调用当前模块的模块对象
- module.children **子模块**对象，即当前模块require的模块对象
- module.exports **导出对象**
- module.paths 模块的**查找路径**


require
- main 主模块 {:&.moveIn}
- resolve 得到实际查找结果路径 
- cache 模块缓存
- delete cache 删除缓存


##包
在node.js中通过包来对一级具有**相互依赖**关系的模块进行统一管理。一个包就是一个**目录**。
------
- package.json 包描述文件 {:&.moveIn}
- bin 二进制
- lib 存放javascript文件
- doc 说明文档
- test 单元测试和其它测试


##package.json
-------
```json
{
"name":"包的名称，必须是唯一的，由小写英文字母、数字和下划线组成，不能包含空格。",
"description"："包的简要说明。",
"version":"符合语义化八本识别规范的版本字符串。",
"keywords"："关键字数组，通常用于搜索。",
"maintainers":"维护者数组，每个元素要包含name、email（可选）、web（可选）字段。",
"contributors"："贡献者数组，格式与maintainers相同。包的作者应该是贡献者数组的第一个元素。",
"bugs"："提交bug的地址，可以是网址或者电子邮件地址。".,
"licenses":"许可证数组，每个元素要包含type(许可证的名称)和url(链接到许可证文本的地址)字段。",
"repositories"："仓库托管地址数组。每个元素要包含type(许可证的名称)和url(链接到许可证文本的地址)字段。",
"dependencies":"包的依赖，一个关联数组，由包名称和版本组成。"
}
```


#npm包管理工具

- npm search gulp 查找包 {:&.moveIn}
- npmview gulp 查看包
- npm install gulp 安装包
- npm install -g express-generator 全局安装包
- npm root -g 查看全局安装路径
- npm config set prefix "d:\global" 修改全局路径
- npm list 显示当前目录下所有的包
- npm list -g 显示全局下所有包
- npm uninstall gulp 卸载本地的包
- npm uninstall gulp -g 卸载全局下的包
- npm update gulp 更新本地的gulp
- npm update -g gulp 更新全局下的gulp
- npm update 更新当前目录下所有的包
- npm update -g 更新全局下所有的包
