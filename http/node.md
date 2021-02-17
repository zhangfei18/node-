## 响应数据
例如： text/html


res.setHeader('Content-Type', 'text/html';charset=utf-8);
res.setHeader('Content-Type', `${mime.getType(filepath)};charset=utf-8`);//filepath为客户端要访问的文件的地址；mime：用来解析要返回的文件的类型，比如 text/html、img/png等等。。。
res.statusCode = 200 //状态码
res.statusMessage = 'success' // 状态信息：有默认值，不要随便修改

跨域：浏览器的同源策略
cors解决跨域的原理：
    跨域是由于浏览器的同源策略引起的，相当于浏览器检测到你的请求跨域之后就直接把当前的请求给拦截了，此时浏览器会去问一下访问的服务器是否允序跨域请求，【如果使用了cors，则服务器会返回 access-control-allow-origin: * 】, 浏览器拿到之后就会把当前拦截的请求给放过去，让其去请求后台。