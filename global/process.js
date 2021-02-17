// argv
process.argv.forEach(function(val, index, array) {
    console.log(val, index, array);
});

process.kill(1860);

//cwd current working directory 当前工作目录
console.log(process.cwd());
console.log(__dirname);
//change directory 改变当前目录
process.chdir("..");
process.chdir("4.global");
console.log(process.cwd());
console.log(__dirname);

/**
 * nextTick
 *
 */
console.log('a客人');

setTimeout(function() {
    console.log('a扫地 setTimeout');
}, 0);
process.nextTick(function() {
    console.log('a扫地 nextTick');
    process.nextTick(function() {
        console.log('a扫地 nextTick2');
        process.nextTick(function() {
            console.log('a扫地 nextTick3');
        });
    });
});

console.log('b厨师');
console.log('c厨师');


// setImmediate
var fs = require('fs');
fs.readFile('1.txt', function(err, data) {
    console.log(data.toString());
})

setTimeout(function() {
    console.log('a扫地 setTimeout');
}, 0);

/*
process.nextTick(function(){
    console.log('a');
    process.nextTick(function(){
        console.log('b');
    })
})*/

setImmediate(function() {
    console.log('a');
    setImmediate(function() {
        console.log('b');
    })
})

// 异步优先级
// nextTick > setTimeout > setImmediate > 异步IO


/**
 * util
 *
 **/
var util = require('util');

function Parent() {
    this.name = 'Parent';
    this.age = 6;
    this.say = function() {
        console.log('hello', this.name);
    }
}
Parent.prototype.showName = function() {
    console.log(this.name);
}

function Child() {
    this.name = 'Child';
}
//不能传参 会继承私有属性
//Child.prototype = new Parent(); //Parent.prototype
//Child.prototype = Object.create(Parent.prototype);
util.inherits(Child, Parent);

var child = new Child();
//console.log();
child.showName();
// Object Parent Child
console.log(child.__proto__.__proto__.__proto__ == Object.prototype);

function Person() {
    this.name = 'zfpx';
    this.parent = {
        name: 'parent'
    }
}
Person.prototype.toString = function() {
    console.log('this is ', this.name);
}

var p = new Person();
p.toString();
/**
 * showHidden 是否显示隐藏属性
 * depth 对象的递归显示深度
 * colors 是否显示 颜色
 */
console.log(util.inspect(p, true, 1, true));

var arr1 = [1, 2];
var arr2 = [3, 4];
//console.log(arr1.concat(arr2));
Array.prototype.push.apply(arr1, arr2);
arr1.push(3);
arr1.push(4);
console.log(arr1);


console.log(util.isArray([]));
console.log(util.isDate([]));
console.log(util.isRegExp([]));